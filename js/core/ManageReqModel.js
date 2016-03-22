/**
 * Function managing ReqModel
 * @constructor
 */
function ManageReqModel() {
    var self = this;

    /**
     * Get JSON from Req.json
     * @param callback
     */
    self.getReqs = function(callback){
        console.log("getReqs");
        $.getJSON('json/Req.json', function(data) {
            var reqs = [];
            $.each(data, function(key, val){
                reqs.push(new ReqModel(val));
            });
            localStorage.clear();
            localStorage.setItem('reqList', JSON.stringify(reqs));
            callback && callback();
        }).done(function() {
                console.info( "success: getReqs()" );
            })
            .fail(function() {
                console.error( "error: getReqs()" );
            });
    };

    /**
     * Function displaying list of requirements on req.html
     * @param callback
     */
    self.displayReqList = function(callback){
        console.log("display displayReqList");
        var result = localStorage.getItem('reqList');
        var reqList = JSON.parse(result);
        reqList.forEach(function(item, i, reqList){
            $('.req-list').append(
                "<li><a id='" + item.id + "' class='req-li' >" + item.title + "</a></li>"
            );
        });
        callback && callback();
    };

    /**
     * Returned  attributes of requirement by click on requirement
     * @param id
     */
    self.clickReq = function(id){
        console.log("clickReq()");
        $('.req-li').click(function(){
            self.displayReqDesc($(this).attr("id"));
         });
    };

    /**
     * Function displaying attributes of requirements  on req.html
     * @param id
     */
    self.displayReqDesc = function(id){
        console.log("display displayReqDesc");
        var result = localStorage.getItem('reqList');
        var reqList = JSON.parse(result);
        var currentId = id - 1;

        console.log(reqList[currentId]);
        $('.risk-input').val();
        $('.price-input').val();
        $('.endDate-input').val();
        $('.description-input').val();

        $('.risk-input').val(reqList[currentId].risk);
        $('.price-input').val(reqList[currentId].price);
        $('.endDate-input').val(reqList[currentId].endDate);
        $('.description-input').val(reqList[currentId].description);
    };
}
