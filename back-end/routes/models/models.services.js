function getUserModel(req, res) {
	res.send("Site is under Construction... LOL ")
}
function invalidRequest(req,res){
  res.send("/models : Invalid Request")
}
module.exports = {
  getUserModel,
  invalidRequest  
}
