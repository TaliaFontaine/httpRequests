var getAndPrintHTML = require('../http-functions');

function print_uppercase(html){
    console.log(html.toUpperCase());
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

getAndPrintHTML(requestOptions, print_uppercase);