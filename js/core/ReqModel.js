function ReqModel(req) {
    var self = this;
    self.id = req.id;
    self.title =req.title;
    self.risk = req.risk;
    self.price = req.price;
    self.end_date = req.end_date;
    self.description = req.description;
}