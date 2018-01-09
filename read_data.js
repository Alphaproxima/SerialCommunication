// Serial port function
var SerialPort = require("serialport");

var serialPort = new SerialPort("/dev//dev/ttyMFD1",{
	baudRate: 9600,
	// parser: serialport.parsers.readline("\n")
});

// Reading from the port
serialPort.on("open", function(){
	console.log('open');
	//listen to incoming data
	serialPort.on('data', function(data){
		console.log(data.toString('utf8'));
	});
});
