const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mahasiswabaruSchema = new Schema({
  namalengkap: {
    type: String
  },
  nisn: {
    type: Number
  },
  asalsekolah: {
    type: String
  },
  alamatlengkap: {
    type: String
  },
  tahunlulus: {
    type: Number
  },
  fakultas: {
    type: String
  },
  programstudi: {
    type: String
  },
  namaorangtua: {
    type: String
  },
  nohandphone: {
    type: Number
  }

})
module.exports = mongoose.model('mahasiswabaru', mahasiswabaruSchema)