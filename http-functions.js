var https = require('https');

module.exports = function getAndPrintHTML(options, callback) {

     //https.get takes a callback with one parameter - response, which is a Stream that represents the HTTP response
    https.get(options, function getHTML(response) {
    // set encoding of received data to UTF-8
        response.setEncoding('utf8');

        var sections = "";
    // console.log each chunk of data as it is received, concatenated with a newline character ('\n') to visualize each chunk
        response.on('data', function(data) {
    // sections is the buffer that appends all the data in a string
        sections += data;

            console.log('Chunk Received. Length:', data.length + '\n');

        });
    // the callback in invoked when a 'data' chunk is received

    //the callback is invoked when all of the data has been received
    // (the 'end' of the stream)
        response.on('end', function() {
            console.log('Response stream complete.');
            callback(sections);
        });

    });
}
