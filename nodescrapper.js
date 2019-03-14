const rp = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
let stream = fs.createWriteStream("WebpageLinks.txt");
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
    console.log('linksOnSite',linksOnSite)
  });
});

