import knex from 'knex'
const connection = knex({  // Estabelece conexão com o banco
   client: "mysql",
   connection: {
       host: "35.226.146.116",
       port: 3306,
       user: "alves-guilherme-tocci",
       password: "BI7TGgSawcDlVOMPnST8",
       database: "alves-guilherme-tocci",
       multipleStatements: true
   }
})
export default connection