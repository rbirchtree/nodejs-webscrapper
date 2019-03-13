const rp = require('request-promise');
const $ = require('cheerio');
const potusParse = require('./potusParse');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
  .then(function(html) {
    //success!
    const wikiUrls = [];
    for (let i = 0; i < 44; i++) {
      wikiUrls.push($('big > a', html)[i].attribs.href);
    }
    return Promise.all(
      wikiUrls.map(function(url) {
      	console.log('url',url)
        return potusParse('https://en.wikipedia.org' + url);
      })
    );
  })
  .then(function(presidents) {
    console.log('presidents',presidents);
  })
  .catch(function(err) {
    //handle error
    console.log(err);
  });

// const fs = require('fs');
// fs.writeFile("/tmp/test", "Hey there!", function(err) {
//     if(err) {
//         return console.log(err);
//     }

//     console.log("The file was saved!");
// }); 

/*Hi Robert

 It was a pleasure to speak to you, . as per our our conversation here is a coding test devised by our head Architect/ engineer.Please make a nodejs program that downloads a web page (any web page will do) and give a list of links on the page (any tags). 
Once you have accomplished this task ( you have a 5 day window) I will forward the results to Ryan ( our head engineer) and schedule an interview call with him. 
Best, 
Karl*/