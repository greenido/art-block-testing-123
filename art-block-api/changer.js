//
//
//
fs = require('fs')
let templateHTml = "";
// Init the template
fs.readFile('./art-block-api/base.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  templateHTml = data;
});

//
//
//
for (let j = 4; j < 100; j++) {
  let fileName = j + ".html";

  fs.readFile('./art-block-api/' + fileName, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    //console.log(data);
    // parse file and get the script out
    let inx1 = data.indexOf("<pre>")+5;
    let inx2 = data.indexOf("</pre>");
    let scriptStr = data.substring(inx1, inx2);
    //console.log(scriptStr);
    scriptStr = scriptStr.replaceAll("&lt;", "<");
    scriptStr = scriptStr.replaceAll("&gt;", ">");
    scriptStr = scriptStr.replaceAll("&quot;", '"');
    scriptStr = scriptStr.replaceAll("&amp;", "&");
    
    let newHtml = templateHTml.replace("<<HERE>>", scriptStr);
    try {
      const data = fs.writeFileSync('./art-block-api/r' + fileName, newHtml);
      console.log("file written successfully. data: "+data);
    } catch (err) {
      console.error(err)
    }
    
  });
}