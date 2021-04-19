const kegiatanModel = require('../model/kegiatan')

exports.create = (data) =>
new Promise((resolve, reject) => {
    kegiatanModel.create(data)
    .then(()=> resolve ({
        status : true,
        pesan : 'berhasil input'
    })).catch(() => ({
        status : flase,
        pesan : 'gagal input'
    }))
})