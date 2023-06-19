const express = require("express");
const app = express();const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

require("dotenv").config();
const port = process.env.PORT || 3001;

var connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
})

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());


app.post("/login", (req, res) => {
      const telephone = req.body.userPhone;
      const name = req.body.userName;
      connection.query(
        "select * from user where userPhone=? and userName=?",
        [telephone,name],
        function (err, rows, fields) {
          if (err) {
            return res.status(500).json({ error: "DB 조회 실패" });
          } else {
            if (rows.length === 0) {
              console.log("데이터가 없습니다.");
              return res.status(404).json({ error: "데이터가 없습니다." });
            } else {
              console.log("DB 조회 성공");
              return res.status(200).json({ success: true, data: rows });
            }
          }
        }
      );
    });

app.post("/register", (req, res) => {
    const telephone = req.body.userPhone;
    const name = req.body.userName;
    console.log("여기까지 왔니?");
    connection.query(
        "select * from user where userPhone=? and userName=?",
        [telephone,name],
        function (err, rows, fields) {
        if (err) {
            return res.status(500).json({ error: "DB 조회 실패" });
        } else {
            if (rows.length === 0) {
                connection.query(
                    "INSERT INTO user (userPhone, userName) VALUES (?, ?)",
                    [telephone, name],
                    (err, rows) => {
                      if (err) {
                        console.error('DB 유저 생성 실패', insertError);
                        return;
                      }
            
                      console.log('DB 유저 생성 성공', rows);
                      return res.status(200).json({ success: true, data: rows });
                    }
                  );
            } else {
            console.log("DB 유저 존재");
            return res.status(500).json({ error: "DB 유저 생성 실패" });
            }
        }
        }
    );
    });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});