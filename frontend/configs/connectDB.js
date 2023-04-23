import mysql from 'mysql2'
import bcrypt from 'bcrypt'
import bodyParser from 'body-parser';

// Tạo kết nối với cơ sở dữ liệu
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'taikhoan'
});

// Kết nối tới cơ sở dữ liệu
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL server');
});

// Hàm kiểm tra mật khẩu
function checkPassword(email, password) {
    // Lấy thông tin tài khoản từ cơ sở dữ liệu
    'SELECT * FROM `users` '
    connection.query(sql, (err, result) => {
        if (err) throw err;

        // Kiểm tra xem tài khoản có tồn tại trong cơ sở dữ liệu không
        if (result.length === 0) {
            console.log('Invalid email');
            return;
        }

        // So sánh mật khẩu đã nhập với mật khẩu được lưu trữ trong cơ sở dữ liệu
        bcrypt.compare(password, result[0].password, (err, res) => {
            if (err) throw err;
            if (res) {
                console.log('Password matched');
            } else {
                console.log('Incorrect password');
            }
        });
    });
}

// Sử dụng hàm kiểm tra mật khẩu
//checkPassword('admin@gmail.com', 'password123');


export default connection;