const data = require('../Model/data')

exports.data = (req , res , next) => {
    const Data = new data({
        data : {
            lampungBarat : {
                positif : "2922" ,
                sembuh : "2675" ,
                meninggal : "138"
            } ,
    
            lampungTimur : {
                positif : "2922" ,
                sembuh : "2675" ,
                meninggal : "138"
            } ,
    
            lampungSelatan : {
                positif : "2922" ,
                sembuh : "2675" ,
                meninggal : "138"
            } ,
    
            lampungUtara : {
                positif : "2922" ,
                sembuh : "2675" ,
                meninggal : "138"
            } ,
    
            bandarLampung : {
                positif : "2922" ,
                sembuh : "2675" ,
                meninggal : "138"
            } ,
    
            mesuji : {
                positif : "2922" ,
                sembuh : "2675" ,
                meninggal : "138"
            } ,
    
            lampungTengah : {
                positif : "2922" ,
                sembuh : "2675" ,
                meninggal : "138"
            }
        }
    
    })


    Data.save().then( data => {
        res.status(200).json({
            data : data
        })
    })
}


exports.getData = async (req , res , next) => {
    const Data = await data.find({})

    console.log(Data[0].data)
    res.status(200).json(Data)
}


exports.wilayah = async (req , res , next) => {

    const jsonData = await data.find({})
    
    const Data = jsonData[0].data

    res.status(200).json(Data[req.params.name])
}