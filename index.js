var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send("OIA SO");
})
//... your code here ...

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});