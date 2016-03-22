/**
 * Requirement class
 * @param req
 * @constructor
 */
function ReqModel(req) {
    var self = this;
    self.id = req.id;
    self.title =req.title;
    self.risk = req.risk;
    self.price = req.price;
    self.endDate = req.endDate;
    self.description = req.description;
}