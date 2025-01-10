const express = require('express');
const router = require('./router');
const sequelize = require('./services/db');
const session = require('express-session')
const sequelizeStorage = require('connect-session-sequelize')(session.Store)

const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));
app.use(router);

const sessionStorage = new sequelizeStorage({
    db:sequelize,
});

const sessionPassword =  process.env.SESSION_PASS ? process.env.SESSION_PASS.split(',') : 'senha_fallback_segura';

app.use(
    session({
        secret:sessionPassword,
        store:sessionStorage,
        resave: false,
        saveUninitialized:false,
        cookie:{
            maxAge: 1000 * 60 * 60 * 24,
        },
    })
);


app.set('view engine', 'ejs');
app.set('views', './src');

(async () => {
    try {
        // Tenta conectar e sincronizar o banco de dados
        await sequelize.authenticate(); // Testa a conexão com o banco
        console.log('Conexão com o banco de dados bem-sucedida!');

        // Sincroniza o banco de dados, ajustando a estrutura das tabelas
        await sequelize.sync({ alter: true });
        console.log('Banco de dados sincronizado.');

        // Após a sincronização do banco, inicia o servidor
        app.listen(port, () => {
            console.log(`Servidor em: http://localhost:${port}`);
        });
    } catch (exception) {
        console.error('Erro ao conectar ou sincronizar o banco de dados:', exception);
    } 
})();