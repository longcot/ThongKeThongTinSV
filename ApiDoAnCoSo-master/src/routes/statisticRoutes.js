const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const SinhVien = mongoose.model('SinhVien');
const Khoa = mongoose.model('Khoa');
const Lop = mongoose.model('Lop');

const router = express.Router();

function checkAdult(sv) {
    return sv.gioitinh == 'Nữ';
}
function checkMaLop(sv) {
    return sv.gioitinh == 'Nữ';
}

router.get('/khoa', async (req, res) => {

    const khoa = await Khoa.find();

    khoa.unshift({_id:1,value:''})
    
   return res.send(khoa);
})

router.get('/lop', async (req, res) => {    

    req.query.makhoa == undefined ? makhoa = '' : makhoa = req.query.makhoa;

    const lop = await Lop.find({
        value: RegExp(".*" + makhoa + ".*"),
    });
    
    lop.unshift({_id:1,value:''})
    
    console.log(lop);

   return res.send(lop);
})

//http://localhost:5000/sinhvien?mssv=17101
router.get('/sinhvien', async (req, res) => {
    req.query.mssv == undefined ? mssv = '' : mssv = req.query.mssv;
    req.query.hovaten == undefined ? hovaten = '' : hovaten = req.query.hovaten;
    req.query.malop == undefined ? malop = '' : malop = req.query.malop;
    req.query.tinhtranghoc == undefined ? tinhtranghoc = '' : tinhtranghoc = req.query.tinhtranghoc;
    req.query.noisinh == undefined ? noisinh = '' : noisinh = req.query.noisinh;
    req.query.ngaysinh == undefined ? ngaysinh = '' : ngaysinh = req.query.ngaysinh;
    req.query.dantoc == undefined ? dantoc = '' : dantoc = req.query.dantoc;
    req.query.gioitinh == undefined ? gioitinh = '' : gioitinh = req.query.gioitinh;
    req.query.sdt == undefined ? sdt = '' : sdt = req.query.sdt;
    req.query.email == undefined ? email = '' : email = req.query.email;
    req.query.cmnd == undefined ? cmnd = '' : cmnd = req.query.cmnd;
    req.query.diachi == undefined ? diachi = '' : diachi = req.query.diachi;

    const sinhvien = await SinhVien.find({
         mssv: RegExp(".*" + mssv + ".*"), 
         hovaten: RegExp(".*" + hovaten + ".*"), 
         malop: RegExp(".*" + malop + ".*"), 
         tinhtranghoc: RegExp(".*" + tinhtranghoc + ".*"), 
         ngaysinh: RegExp(".*" + ngaysinh + ".*"), 
         dantoc: RegExp(".*" + dantoc + ".*"), 
         gioitinh: RegExp(".*" + gioitinh + ".*"), 
         sdt: RegExp(".*" + sdt + ".*"), 
         email: RegExp(".*" + email + ".*"), 
         cmnd: RegExp(".*" + cmnd + ".*"), 
         diachi: RegExp(".*" + diachi + ".*") });

         /*

         */
    return res.send(sinhvien);
})


module.exports = router;