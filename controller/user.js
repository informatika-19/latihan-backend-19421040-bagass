const userModel = require('../model/user')
const bcrypt = require('bcrypt')
const user = require('../model/user')
exports.register = (data) =>
    new Promise ((resolve, reject) => {
        //cari data
        userModel.findOne({
            username : data.username
        }).then(user => {
           if(user) {
               resolve({
                   status : false,
                   pesan : 'sudah ada'
               })
            }else{
                bcrypt.hash(data.password, 10, (err, hash) => {
                    data.password = hash
                    console.log(data)
                    userModel.create(data)
                    .then (()=>{
                         console.log('berhasil')
                       resolve({
                           status : true,
                           pesan : 'berhasil' 
                       })
                    }).catch(() =>{
                        console.log('gagal')
                       reject({
                           status : false,
                           pesan : 'gagal'
                        })
                    })
                })
            }
        })

    })

    exports.login = (data) =>
    new Promise((resolve, reject)=>{
        userModel.findOne({
          username : data.username
        }).then(user =>{
            if(user){
                if(bcrypt.compareSync(data.password, user.password)){
                    resolve({
                        status : true,
                        pesan : 'berhasil'
                    })
                }else{
                    reject({
                        status : false,
                        pesan : 'username atau password salah'
                     })
                }
            }else{
                reject({
                    status : false,
                    pesan : 'username atau password salah'
                 }) 
            }
        })
    })