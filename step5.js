var getAndPrintHTML = require('./http-functions');

function printHTML (html) {
  console.log(html);
}

function printHTMLUppercase (html){
    console.log(html.toUpperCase());
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getAndPrintHTML(requestOptions, printHTML);
getAndPrintHTML(requestOptions, printHTMLUppercase);