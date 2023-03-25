
const {Sequelize,DataTypes}=require('sequelize');
require('dotenv').config();
 
const username=process.env.USERNAMEONE
const password=process.env.USERPASSWORD
const dbHost=process.env.DATABASECONNECTION
const database=process.env.MYDB

const sequelize=new Sequelize(database,username,password,{
    host: dbHost,
    dialect: 'mysql',
    port: "3306",  
    pool: {max: 5,min: 0,idle: 10000} ,
    dialectOptions:{useUTC:false},
    timezone: '+05:30',
    logging: false

});
    sequelize.authenticate().then(() => {
        console.log("Connect Sequelize to Mysql Server");       
    })
    .catch(err => {
        console.log("Error",err)
    })

  const db={}
  db.Sequelize = Sequelize
  db.sequelize=sequelize
 
  db.Chart= require('./Model/chart')(sequelize,DataTypes);




  db.sequelize.sync()
  .then(() => {
      console.log("MyDB Connection estable:- Re-sync")
      
  })
module.exports=db
