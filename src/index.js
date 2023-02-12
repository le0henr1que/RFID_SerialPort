const { SerialPort } = require('serialport')
const { DelimiterParser } = require('@serialport/parser-delimiter')
const express = require('express')
const path = require('path')
const { fileURLToPath } = require('url')


const port = new SerialPort({
  path: 'COM7',
  baudRate: 9600,
  autoOpen: false,
  delimiter: '\n'

})


const app = express()
app.set('port', (process.env.PORT || 5000));
var server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

const io = require('socket.io')(server)

app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, '../public'));
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')



app.get('/', (req, res) => {
    res.render('index.html')
})


// SerialPort.list().then(response => console.log(response))
port.open(function (err) {
  if (err) {
    return console.log('Error opening port: ', err.message)
  }

  
  port.write('main screen turn on')
})

io.on('connection', socket => {
  console.log(`Socket conectado: ${socket.id}`);

  port.on('data', function (data) {

    if(data == "84" || data == "8" || data == "4"){
      socket.emit('access', true)
    }else{ 
      socket.emit('access', false)
    }

  
  });

});
