var Reader = require("./Reader")
var Processor = require("./Processor")
var Table = require("./Table")
var HtmlParser = require("./HtmlParser")
var Writer = require("./Writer")
var PDFWriter = require("./PDFWriter")

var reader = new Reader()
var writer = new Writer()
 
async function main() {
    
    var data = await reader.Read("./excel/exampleTable.csv")
    var dataProcess = Processor.Process(data)
    var users = new Table(dataProcess)
    var html = await HtmlParser.Parse(users)
    
    writer.Write(Date.now() + ".html", html)
    PDFWriter.WritePDF(Date.now() + ".PDF", html)
}

main()