const data = require('../Model/data')

exports.data = (req , res , next) => {
    const Data = new data({
        data : {
            lampungBarat : {
                positif : "122" ,
                sembuh : "25" ,
                meninggal : "8"
            } ,
    
            lampungTimur : {
                positif : "22" ,
                sembuh : "265" ,
                meninggal : "38"
            } ,
    
            lampungSelatan : {
                positif : "22" ,
                sembuh : "25" ,
                meninggal : "11"
            } ,
    
            lampungUtara : {
                positif : "22" ,
                sembuh : "75" ,
                meninggal : "28"
            } ,
    
            bandarLampung : {
                positif : "2122" ,
                sembuh : "1129" ,
                meninggal : "13"
            } ,
    
            mesuji : {
                positif : "122" ,
                sembuh : "245" ,
                meninggal : "138"
            } ,
    
            lampungTengah : {
                positif : "92" ,
                sembuh : "25" ,
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