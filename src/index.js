const { SerialPort } = require('serialport')
const port = new SerialPort({
  path: 'COM7',
  baudRate: 9600,
  autoOpen: false,
  parser: '\r'
})
// SerialPort.list().then(response => console.log(response))
port.open(function (err) {
  if (err) {
    return console.log('Error opening port: ', err.message)
  }

  // Because there's no callback to write, write errors will be emitted on the port:
  port.write('main screen turn on')
})


port.on('data', function (data) {

  // console.log(data)
  if(data == "<Buffer 38 34>"){
    console.log('igual')
  }

 
});

