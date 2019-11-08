const File = require('../models/File');
const Box = require('../models/Box');

class FileController{
 async store(req,res){
    console.log(req.file);
    const file = File({title: req.file.originalname,
    path: req.file.key
  })
  const box = Box({title: 'Exemplo'})

  box.files.push(file)

  req.io.sockets.in(bpx._id).emit("file",file);
  return res.json(file)

 }

}

module.exports = new FileController();