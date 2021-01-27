// const express = require('express');
// const router = express.Router();
// const mysql = require('mysql2');

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'iasdon',
// });

// router.get('/', (req, res) => {
//   let sql = `SELECT * FROM provincia`;
//   db.query(sql, function (err, data, fields) {
//     if (err) throw err;
//     res.json({
//       status: 200,
//       data,
//       message: 'Provincia lists retrieved successfully',
//     });
//     // console.log('data=>', data);
//   });
// });

// router.post('/provincia', function (req, res) {
//   let sql = `INSERT INTO provincia(nomeProvincia) VALUES (?)`;
//   let values = [req.body.nomeProvincia];
//   db.query(sql, [values], function (err, data, fields) {
//     if (err) throw err;
//     res.json({
//       status: 200,
//       message: 'New provincia added successfully',
//     });
//   });
// });

// module.exports = router;
