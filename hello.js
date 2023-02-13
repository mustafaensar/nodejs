var http = require('http');
var currentDate = require('./mymodule');
var upper = require('upper-case'); // ya da --> import upper from "upper-case";


console.log(currentDate.curDate());
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write(upper.upperCase(req.url));
    /**
     * Date i büyük harflerle yazdirmak icin ic ice kullanabiliriz.
     */
    res.write('Current Date is: ' + upper.upperCase(currentDate.curDate()));
    res.end();
}).listen(8080)