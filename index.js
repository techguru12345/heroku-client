const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");

const db = mysql.createPool({
host: " sql6.freemysqlhosting.net",
user: "sql6517152",
password: "fTQ3AjdfLi",
database: "sql6517152",
});
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res)=>{
    const sqlSelect =
    "SELECT * FROM contactus";
   db.query(sqlSelect, (err, result)=>{
       res.send(result);
    });
})
app.post("/api/insert",(req, res) => {
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const subject = req.body.subject
    const textarea = req.body.textarea

    const sqlInsert =
     "INSERT INTO contactus (name, email, phone, subject, textarea) VALUES (?,?,?,?,?)"
    db.query(sqlInsert, [name, email, phone, subject, textarea], (err, result)=>{
        console.log(result);
    });
})
app.listen(3306, () => {
    console.log("server is runnig on port 3306");
})
