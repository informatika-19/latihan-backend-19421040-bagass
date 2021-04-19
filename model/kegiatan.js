const mongoose = require('mongoose')
const Schema = mongoose.Schema

const kegiatanSchema = new Schema({
    namaKegiatan : {
        type : String
    },
    deskripsi : {
        type : String
    },
    waktu : {
        type : String
    }
})
module.exports = mongoose.model('kegiatan', kegiatanSchema)