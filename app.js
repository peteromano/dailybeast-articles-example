var express = require('express'),
    fs = require('fs'),
    app = express();

app.use(function(req, res, next) {
  if(!/(?:\.js|\.css)/.test(req.url)) {
    fs.readFile('build/app.html', function (err, data) {
      if (!err) {
        res.end(data);
      }
    });
  } else {
    next();
  }
});

app.use(express.static(__dirname + '/build'));

app.listen(process.env.PORT || 3000);