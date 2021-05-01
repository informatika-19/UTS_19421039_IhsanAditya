const usermodel = require('../model/User')
const bcrypt = require('bcrypt')
const user = require('../model/User')
exports.register = (data) =>
new Promise((resolve, reject) => {
 console.log(data)
// untuk mencari satu data
usermodel.findOne({
    username: data.username
}).then(adauser => {
    if (adauser) {
        resolve({
            status: false,
            pesan: 'Username Sudah Terdaftar'
        })
    }else {
       bcrypt.hash(data.password, 10, (err, hash) => {
           data.password = hash
           // untuk menginput data/ create
           usermodel.create(data)
                .then(() => {
                    // console.log('berhasil')
                    resolve({
                        status: true,
                        pesan: 'Berhasil Registrasi'
                    })
                }).catch((e) => {
                    //console.log(e)
                    // console.log('gagal insert')
                    reject({
                        status: false,
                        pesan: 'Gagal Registrasi'
                    })
                })
       })
    }
})
})

exports.login = ( data) =>
new Promise((resolve, reject) =>{
    usermodel.findOne({
        username: data.username
    }).then(user => {
        if (user) {
            if (bcrypt.compareSync(data.password, user.password)){
                resolve({
                    status: true,
                    pesan: 'Berhasil Login Akun'
                })
            }else {
                reject ({
                    status: false,
                    pesan: 'Gagal Login Akun'
                })
            }
        }else {
            reject ({
                status: false,
                pesan: 'Username Tidak Terdaftar'
            })
        }
    })

})