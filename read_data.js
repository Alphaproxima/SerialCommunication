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
		// let [leftsensor, rightsensor] = data.toString('utf8').split(','); // short version if you use nodejs v6.0 above
		var datum = data.toString('utf8').split(',');
		var leftsensor = datum[0]
		var rightsensor = datum[1]
		console.log(leftsensor, rightsensor);
	});
});
