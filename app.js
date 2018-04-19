var express = require('express');
var fs = require('fs');
var app = express();

// Read in to file
fs.readFile('testo.txt', function (err, data) {
    if (err) {
			console.log(err);
		}
    console.log("Read operation successfully");
});

// Write in to file otherwise it creates it
fs.writeFile('test.txt', 'Hello World!', function (err) {
		if (err) {
      console.log(err);
    }
		console.log('Write operation successfully');
});

// Append in to file new text
fs.appendFile('test.txt', 'Hello World!', function (err) {
    if (err) {
        console.log(err);
    }
		console.log('Append operation successfully');
});

