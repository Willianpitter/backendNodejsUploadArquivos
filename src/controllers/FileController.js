const File = require('../models/File');
const Box = require('../models/Box');

class FileController{
 async store(req,res){
    console.log(req.file);
    const box = Box.findById(req.params.id)

    const file = File.create({title: req.file.originalname,
    path: req.file.key
  })
  console.log("antes do await")
  await box.save()
  console.log("depois do await")

  box.files.push(file)

  req.io.sockets.in(bpx._id).emit("file",file);
  return res.json(file)

 }

}

module.exports = new FileController();