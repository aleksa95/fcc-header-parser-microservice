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
            ipaddress: req.header('x-forwarded-for') || req.connection.remoteAddress,
            language: language,
            software: software
         }
     )
});

module.exports = router;
