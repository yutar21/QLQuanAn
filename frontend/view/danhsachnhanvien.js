const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

// kết nối cơ sở dữ liệu
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'quanlynhanvien'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Kết nối cơ sở dữ liệu thành công!');
});

// sử dụng body-parser để lấy dữ liệu nhập từ biểu mẫu đăng ký
app.use(bodyParser.urlencoded({ extended: false }));

// xử lý khi người dùng submit biểu mẫu đăng ký
app.post('add_nhanvien', (req, res) => {
    const { name, email, password, ngaysinh, hoten, diachi, sdt } = req.body;

    // thêm thông tin người dùng vào bảng 'users'
    const sql = `INSERT INTO users (name, email, password, ngaysinh, hoten, diachi, sdt) VALUES ('${name}', '${email}', '${password}', '${ngaysinh}', '${hoten}', '${diachi}', '${sdt}',)`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log('Thêm người dùng thành công!');
        res.send('them thanh cong!');
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
