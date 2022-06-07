const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app =express();

const pool = mysql.createPool({
  host:'localhost',
  port:'3306',
  user:'root',
  database:'commentApp_db',
  password:'root'
});

pool.getConnection(function(error){
  if(error) console.log(error);
  else console.log('connected to DB');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json; charset=UTF-8');
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(cors());

app.set("view engine", "hbs");

app.listen(1348, function(error){
  if (error) console.log(error);
  else console.log('Сервер ожидает подключения...');
});

app.post('/loadMessages', async function(req, res, next){
  pool.query('SELECT * FROM messages', function(err, rows, fields){
    if (err) return console.log(err);
    else{
      console.log('MESSAGES DATA: ', rows);
      res.send(rows)
    }
  });
});

app.post('/sendMessage', async function(req, res, next){
  if (!req.body) return res.sendStatus(400);
  const user_name = req.body.user_name;
  const user_id = req.body.user_id;
  const comment_text = req.body.comment_text;
  const comment_date = req.body.comment_date;
  const message_root = req.body.message_root;
  pool.query('INSERT INTO messages (user_name, user_id, comment_text, comment_date, message_root) VALUES (?,?,?,?,?)', [user_name, user_id, comment_text, comment_date, message_root], function(err, rows, fields) {
    if(err) return console.log(err);
    else {
      console.log(rows);
      res.send(rows);
    }});
});
