const rp = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
let file = fs.createWriteStream(`WebpageLinks${String(Date.now())}.txt`);
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("What url do you want to query?",(url) =>{
  let linksOnSite = [];
  rp(url, function(err,resp,body){
    let $ = cheerio.load(body);
    let links = $('a');
    
    $(links).each(function(i,link){
 
      linksOnSite.push($(link).attr('href'));
    });
    
    file.on('error', function(err) { console.log('There was an err.',err) });
      linksOnSite.forEach(function(link,index) { file.write( String(index) +" : " + String(link)+ '\n'); });
    file.end();
  });
  console.log(`Check most recent WebpageLinks file.`);
});


