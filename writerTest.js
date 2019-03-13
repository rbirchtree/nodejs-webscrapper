const fs = require('fs');
var steam = fs.createWriteStream("test1337.txt");
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your name?`, (name) => {
  console.log(`Hi ${name}!`)
  readline.close()
})

//native module
var stream = fs.createWriteStream("test1337.txt");
steam.once('open', function(fd){
	steam.write("my first row\n");
	steam.write("my first row\n");
	steam.end();
});
//http://databirchtree.com

kuribe@pacerconcierge.com