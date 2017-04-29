var settings = require("../settings");

exports.show500 = function(req, res, err){
    if(settings.httsMsgsFormat === "HTML"){
        res.writeHead(500, "Internal Error occurred", { "Content-Type": "text/html" });
        res.write("<html><head><title>500</title></head><body>500: Internal Error. Details:"+ err +"</body></html>");
    }else{
        res.writeHead(500, "Internal Error occurred", { "Content-Type": "application/json" });
        res.write(JSON.stringify({ data: "ERROR occured:" + err}));
    }
    res.end();
};

exports.sendJson = function (req, res, data){
    res.writeHead(200, {"Content-Type": "application/json"});
    if(data){
        res.write(JSON.stringify(data));
    }
    res.end();
};

exports.show405 = function(req, res){
    if(settings.httsMsgsFormat === "HTML"){
        res.writeHead(405, "Methd not supported", { "Content-Type": "text/html" });
        res.write("<html><head><title>405</title></head><body>405: Method not supported</body></html>" + err);
    }else{
        res.writeHead(405, "Method not supported", { "Content-Type": "application/json" });
        res.write(JSON.stringify({ data: "Method not supported"}));
    }
    res.end();
};

exports.show404 = function(req, res){
    if(settings.httsMsgsFormat === "HTML"){
        res.writeHead(404, "Resource not found", { "Content-Type": "text/html" });
        res.write("<html><head><title>404</title></head><body>404: Resource not found</body></html>" + err);
    }else{
        res.writeHead(404, "Resource not found", { "Content-Type": "application/json" });
        res.write(JSON.stringify({ data: "Resource not found"}));
    }
    res.end();
};

exports.show413 = function(req, res){
    if(settings.httsMsgsFormat === "HTML"){
        res.writeHead(413, "Request Entity Too Large", { "Content-Type": "text/html" });
        res.write("<html><head><title>413</title></head><body>413: Request Entity Too Large</body></html>" + err);
    }else{
        res.writeHead(413, "Request Entity Too Large", { "Content-Type": "application/json" });
        res.write(JSON.stringify({ data: "Request Entity Too Large"}));
    }
    res.end();
};

exports.send200 = function(req, res ){
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end();
}; 

exports.showHome = function (req, res){
    if(settings.httsMsgsFormat === "HTML"){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<html><head><title>Home</title></head><body>Valid endpoints: <br> http://localhost:9000/employees -GET - To List all Employees <br> /employees/<empno> - GET - To search for an Employee with <empno></body></html>");
    }else{
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify([
            { url: "/employees", operation: "GET", description: "To List all Employees"},
            { url: "/employees/<empno>", operation: "GET", description: "To search for an Employee"},
        ]));
    }
    res.end();
};