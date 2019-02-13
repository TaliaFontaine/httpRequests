var getAndPrintHTML = require('../http-functions');

function print_reverse(html){
    console.log(html.split(' ').reverse().join(' '));
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getAndPrintHTML(requestOptions, print_reverse);