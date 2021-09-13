

/**
 * Create a web server that does the following
 * 1. listens on port 80
 * 2. Handles request to the root of the application by serving an index.html file
 * 3.Handles request that hits the contact-is route by sending "welcome to contact us"
 */

const { createServer } = require("http") ;
const PORT = 8100 ;
const fs = require("fs")

fs.writeFile('Assignment.html',`<h1>This is my assignment page </h1>`, 
(error, data) => {
    if(error){ 
        console.log('Error occured')
    }
    console.log('creation of file successful')
})


const requestListener = (req, res) => {
    let {method , url , headers} = req

    if(url === "/" ){
        res.writeHeader(200 , {"content-Type" : "text/html"})
        res.write("<h1>This is home</h1>")
        res.end()
    }else if(url === "/about") {
            if(err) {
                res.writeHead(500 , {"content-Type" : "text/html"} )
                res.write("<h1> You are lost </h1>")
                res.end()
            }else {
                res.writeHead(500 , {"content-type" : "text/html "})
                res.write("<h1>You are in about page </h1>")
                res.end()
            }
    }else if(url === "/contact") {
            if(err) {
                res.writeHead(500 , {"content-Type" : "text/html"} )
                res.write("<h1> You are lost </h1>")
                res.end()
            }else {
                res.writeHead(500 , {"content-type" : "text/html "})
                res.write("<h1>You are in contact page </h1>")
                res.end()
            }
    }else {
        res.statusCode - 404 
        res.setHeader(500 , {"content-Type" : "text/html"} )
        res.write("<h1> You are lost </h1>")
        res.end()
    }
}
createServer(requestListener)
.listen(PORT , () => console.log(`Your server is listening... at ${PORT}`))


// Create a web server that does the following : 
// 1. Listens on port 80 
// Create a web server that does the following : 
// 1. Listens on port 802
// 2. Handles request to the root of the application by serving an index.html file 
// 3. Handles request that hits the contact-is route by sending "Welcome to contact us"
