const mahasiswabaruModel = require('../model/Mahasiswabaru')
const objectId = require('mongoose').Types.ObjectId

//meng create data baru (create)
exports.create= (data) =>
  new Promise((resolve, reject)=> {
    mahasiswabaruModel.create(data)
      .then(()=> resolve({
        status : true,
        pesan : 'Berhasil Input Data Mahasiswa Baru'
      })).catch(()=> ({
        status : false,
        pesan : 'Gagal Input Data Mahasiswa Baru'
      }))
  })
//menampilkan data seluruh mahasiswa (read)
  exports.showAllData = () =>
    new Promise((resolve, reject) => {
        mahasiswabaruModel.find()
        .then(result => {
          resolve({
            status: true,
            pesan: 'Berhasil Menampilkan Data Mahasiswa',
            data: result
          })
        }).catch(() => reject({
            status: false,
            pesan: 'Gagal Menapilkan Data Mahasiswa',
            data: []
        }))
    })
// menampilkan data mahasiswa dengan object id (read)
exports.showDataById = (id) =>
    new Promise((resolve, reject) => {
        mahasiswabaruModel.findOne({
        _id: objectId(id)
    }).then(result => {
      resolve({
        status: true,
        pesan: 'Berhasil Menampilkan Data Mahasiswa',
        data: result
      })
    }).catch(() => reject({
      status: false,
      pesan: 'Gagal Menapilkan Data Mahasiswa',
      data: null
  }))
})
// update data mahasiswa dengan object id (update)
exports.update = (id, data) => 
  new Promise ((resolve, reject) => {
    mahasiswabaruModel.updateOne({
      _id: objectId(id)
    }, data).then(() => resolve({
        status: true,
        pesan: 'Berhasil Mengubah Data Mahasiswa'
    })).catch(() => reject({
        status: false,
        pesan: 'Gagal Mengubah Data Mahasiwa'
    }))
})
//menghapus data mahasiswa dengan object id (delete)
exports.delete = (id) =>
  new Promise((resolve, reject) => {
    mahasiswabaruModel.deleteOne({
      _id: objectId(id)
    }).then(() => resolve ({
      status: true,
      pesan : 'Berhasil Menghapus Data Mahasiswa'
    })).catch(() => reject({
      status: false,
      pesan: 'Gagal Menghapus Data Mahasiswa'
  }))
})
