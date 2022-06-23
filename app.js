const express = require('express')
const morgan = require('morgan')
const main = require('./views/main')
const { db } = require('./models');

const app = express()

app.use(morgan('dev'));
app.use(express.static(__dirname+"/public"));
app.use(express.urlencoded({ extended: false }));


app.get("/", async (req, res) => {
  // const data = await client.query("SELECT...");
  // res.send(postList(data.rows));
  res.send(`${main()}`)

});

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })



  async function run(){
    await db.sync({force:true});
   }
   run();

const PORT = 3000;
app.listen(PORT, ()=>{
  console.log('App is running ......!!')
})
