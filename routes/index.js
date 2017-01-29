var express = require('express');
var router = express.Router();

router.get('/get-info', function(req, res) {
    var language = req.headers["accept-language"];
    language = language.substring(0, language.indexOf(','));
    var rgx = /\(([^)]+)\)/;
    var match = req.headers['user-agent'].match(rgx);
    var software = match && match[1];

    res.json(
         {
            ipaddress: req.headers["host"],
            language: language,
            software: software,
            headers: req.header('x-forwarded-for') || req.connection.remoteAddress
         }
     )
});

module.exports = router;
