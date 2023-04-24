import pool from '../configs/connectDB'
//import con from '../configs/connectDB'

let getHomepage = async (req, res) => {
    const [rows, feilds] = await pool.execute('SELECT * FROM users');

    return res.render('frontend/view/page-login.ejs', { dataUser: rows, test: 'abc string test' })
}
let getAddnhanvien = async (req, res) => {
    let { username, email, password, fname, lname, address, phone, gender } = req.body;
    await pool.execute('insert into users(username, email, password, fname, lname, address, phone, gender) values (?, ?, ?, ?, ?, ?, ?, ?)', [username, email, password, fname, lname, address, phone, gender]);
    return res.redirect('/ql_nhanvien.html')
}
let getAddban = async (req, res) => {
    let { vitri, nguoi, trangthai } = req.body;
    await pool.execute('insert into ban(vitri, nguoi, trangthai) values (?, ?, ?)', [vitri, nguoi, trangthai]);
    return res.redirect('/ql_ban.html')
}
let getAddphieugiamgia = async (req, res) => {
    let { magg, giam, toida, daystart, dayfinish, luong } = req.body;
    await pool.execute('insert into ban(magg, giam, toida, daystart, dayfinish, luong) values (?, ?, ?)', [magg, giam, toida, daystart, dayfinish, luong]);
    return res.redirect('/ql_phieugiamgia.html')
}
module.exports = {
    getHomepage, getAddnhanvien, getAddban, getAddphieugiamgia
}