const express  = require('express') ;
const mongoose = require('mongoose');
const path = require('path')
const app = express();
const cors = require('cors')
app.use(cors())
const server = require('http').Server(app)
const io = require('socket.io')(server)
io.on('connection', socket => {
  socket.on('connectRoom', box => {
    socket.join(box);
  })
  console.log("ok");
})
mongoose.connect('mongodb+srv://willianpiterh:12312300@cluster0-jwfgd.mongodb.net/test?retryWrites=true&w=majority',
{
  useNewUrlParser:true 
}, 
);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/files', express.static(path.resolve(__dirname,'..','temp')))

app.use(require('./routes'));
server.listen(process.env.PORT || 3333);

