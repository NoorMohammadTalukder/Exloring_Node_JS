var http = require("http");
var URL = require("url");
var fs = require("fs");
//------first node server code
/*
var server = http.createServer(function (req, res) {
  res.end("Hello World!");
});

server.listen(5050);
console.log("Server run succesfully");
*/

//------Request Respond Model
/*
var server = http.createServer(function (req, res) {
    if (req.url == "/") {
        res.writeHead(200, {
            "Content-Type": "text-html",
        });
        res.write("<h1>This is home page </h1>");
        res.end();
    } else if (req.url == "/about") {
        res.writeHead(200, {
            "Content-Type": "text-html",
        });
        res.write("<h1>This is about page</h1>");
        res.end();
    } else if (req.url == "/contact") {
        res.writeHead(200, {
            "Content-Type": "text-html",
        });
        res.write("<h1>this is contact page </h1>");
        res.end();
    }
});

server.listen(5050);
console.log("Server run succesfully");
*/

//------URL module

/*
var server = http.createServer(function (req, res) {
    var url = "http://demo.com/index.html?year=2023&monyh=April";
    var urlObj = URL.parse(url, true);

    var hostName = urlObj.host;
    var pathName = urlObj.pathname;
    var search = urlObj.search;

    res.writeHead(200, {
        "Content-Type": "text/html",
    });

    res.write("URL:" + url +"</br>")
    res.write("Host:" + hostName+"</br>");
    res.write("path:" + pathName+"</br>");
    res.write("search" + search+"</br>");

    res.end();

});
/*

server.listen(5000);
console.log("server run successfully");


//------File read Asynchronous

/*
var server=http.createServer(function(req,res){
    if (req.url=="/"){
        fs.readFile("Home.html",function(err,data){
            res.writeHead(200,{
                "Content-Type": "text/html",
            });
            res.write(data);
            res.end();
        });
    }
})

server.listen(5000);
console.log("Server run successfully")
*/

/*
//------File read Synchronous
var server=http.createServer(function(req,res){
    if (req.url=="/"){

        var data=fs.readFile("Home.html")
        res.writeHead(200,{
            "Content-Type": "text/html",
        });
        res.write(data);
        res.end();
    }
})

server.listen(5000);
console.log("Server run successfully")
*/

//------File rename Asynchronous
/*
var server=http.createServer(function(req,res){
    if (req.url=="/"){
        fs.rename("demo.txt","demoNew.txt",function(err){
            if(err){
                res.writeHead(200,{
                    "Content-Type": "text/html",
                });
                res.write("file rename failed");
                res.end();
            }else{
                res.writeHead(200,{
                    "Content-Type": "text/html",
                });
                res.write("file rename success");
                res.end();

            }
        })
    }
})

server.listen(5000);
console.log("Server run successfully")
*/

//------File rename Sync

/*
var server = http.createServer(function (req, res) {
    if (req.url == "/") {
        var result = fs.renameSync("demo.txt", "demoNew.txt");
        if (result) {
            res.writeHead(200, {
                "Content-Type": "text/html",
            });
            res.write("file rename success");
            res.end();
        } else {
            res.writeHead(200, {
                "Content-Type": "text/html",
            });
            res.write("file rename failed");
            res.end();
        }
    }
});

server.listen(5000);
console.log("Server run successfully");
*/

//------File delete Asynchronous
/*
var server = http.createServer(function (req, res) {
    if (req.url == "/") {
        fs.unlink("demoNew.txt", function (err) {
            if (err) {
                res.writeHead(200, {
                    "Content-Type": "text/html",
                });
                res.write("file delete failed");
                res.end();
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html",
                });
                res.write("file delete success");
                res.end();

            }
        })
    }
})

server.listen(5000);
console.log("Server run successfully");

*/

//------File delete Sync
/*
var server = http.createServer(function (req, res) {
    if (req.url == "/") {
        var error = fs.unlinkSync("demo.txt")
        if (error) {
            res.writeHead(200, {
                "Content-Type": "text/html",
            });
            res.write("file delete failed");
            res.end();
        } else {
            res.writeHead(200, {
                "Content-Type": "text/html",
            });
            res.write("file delete done");
            res.end();



        }
    }
})

server.listen(5000);
console.log("Server run successfully");

*/
/*
//------File exist Sync

var server = http.createServer(function (req, res) {
    if (req.url == "/") {
        var result = fs.existsSync("demo1.txt")
        if (result) {
            res.writeHead(200, {
                "Content-Type": "text/html",
            });
            res.write("file found");
            res.end();
        } else {
            res.writeHead(200, {
                "Content-Type": "text/html",
            });
            res.write("file not found");
            res.end();



        }
    }
})
*/
//------File exist Async

var server = http.createServer(function (req, res) {
    if (req.url == "/") {
        fs.exists("demo.txt", function (result) {
            if (result) {
                res.writeHead(200, {
                    "Content-Type": "text/html",
                });
                res.write("file found");
                res.end();
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html",
                });
                res.write("file not found");
                res.end();

            }
        })
    }
    
})

server.listen(5000);
console.log("Server run successfully");



