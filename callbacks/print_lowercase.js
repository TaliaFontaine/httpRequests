var getAndPrintHTML = require('../http-functions');

function print_lowercase(html){
    console.log(html.toLowerCase());
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getAndPrintHTML(requestOptions, print_lowercase);