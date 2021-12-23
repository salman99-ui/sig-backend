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


exports.update = (req , res , next) => {

    if(req.params.wilayah === "lampungBarat"){
            data.findByIdAndUpdate('61c414a8b1975514d0bcf9b7' , {
                $set : { 'data.lampungBarat' : {
                    positif : req.body.positif ,
                    sembuh : req.body.sembuh ,
                    meninggal : req.body.meninggal 
                }}
            }, 
            ( err , doc) => {
                res.status(200).json({'message' : "Data has been updated"})
            })
    }else if(req.params.wilayah === "lampungSelatan"){
        data.findByIdAndUpdate('61c414a8b1975514d0bcf9b7' , {
            $set : { 'data.lampungSelatan' : {
                positif : req.body.positif ,
                sembuh : req.body.sembuh ,
                meninggal : req.body.meninggal 
            }}
        }, 
        ( err , doc) => {
            res.status(200).json({'message' : "Data has been updated"})
        })
}else if(req.params.wilayah === "lampungUtara"){
    data.findByIdAndUpdate('61c414a8b1975514d0bcf9b7' , {
        $set : { 'data.lampungUtara' : {
            positif : req.body.positif ,
            sembuh : req.body.sembuh ,
            meninggal : req.body.meninggal 
        }}
    }, 
    ( err , doc) => {
        res.status(200).json({'message' : "Data has been updated"})
    })
}else if(req.params.wilayah === "lampungTimur"){
    data.findByIdAndUpdate('61c414a8b1975514d0bcf9b7' , {
        $set : { 'data.lampungTimur' : {
            positif : req.body.positif ,
            sembuh : req.body.sembuh ,
            meninggal : req.body.meninggal 
        }}
    }, 
    ( err , doc) => {
        res.status(200).json({'message' : "Data has been updated"})
    })
}else if(req.params.wilayah === "mesuji"){
    data.findByIdAndUpdate('61c414a8b1975514d0bcf9b7' , {
        $set : { 'data.mesuji' : {
            positif : req.body.positif ,
            sembuh : req.body.sembuh ,
            meninggal : req.body.meninggal 
        }}
    }, 
    ( err , doc) => {
        res.status(200).json({'message' : "Data has been updated"})
    })
}else if(req.params.wilayah === "bandarLampung"){
    data.findByIdAndUpdate('61c414a8b1975514d0bcf9b7' , {
        $set : { 'data.bandarLampung' : {
            positif : req.body.positif ,
            sembuh : req.body.sembuh ,
            meninggal : req.body.meninggal 
        }}
    }, 
    ( err , doc) => {
        res.status(200).json({'message' : "Data has been updated"})
    })
}else if(req.params.wilayah === "lampungTengah"){
    data.findByIdAndUpdate('61c414a8b1975514d0bcf9b7' , {
        $set : { 'data.lampungTengah' : {
            positif : req.body.positif ,
            sembuh : req.body.sembuh ,
            meninggal : req.body.meninggal 
        }}
    }, 
    ( err , doc) => {
        res.status(200).json({'message' : "Data has been updated"})
    })
}


}