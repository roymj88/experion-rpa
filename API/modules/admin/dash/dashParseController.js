var dashParseService = require('./dashParseService');


function GetParsedDetails(req, res, next){
	dashParseService.getParsedDetails(req, res, function(err,response){
		if (err) return res.json(err);
		return res.json(response);

	});
}


module.exports = {
	GetParsedDetails
}