const File = require('../models/File');
const Box = require('../models/Box');

class FileController{
 async store(req,res){
    console.log(req.file);
    const box = await Box.findById(req.params.id)

    const file = await File.create({title: req.file.originalname,
    path: req.file.key
  })

  box.files.push(file)

  console.log("antes do await")
  await box.save()
  console.log("depois do await")


  //req.io.sockets.in(bpx._id).emit("file",file);
  return res.json(file)

 }

}

module.exports = new FileController();