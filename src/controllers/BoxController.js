const Box = require('../models/Box');

class BoxController{
 async store(req,res){
   const box = await Box.create(req.body);
   return res.json(box); 
 }

 async shwo(req,res){
   const box = await Box.findById(req.params.id).populate({
     path: 'files',
     options: {sort: { creatAt: -1}}
   })
 }
}

module.exports = new BoxController();