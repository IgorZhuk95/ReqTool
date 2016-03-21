function ManageReqModel() {
    var self = this;

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

    self.save = function(){
        console.log("save");
        var modified = new Array();

        $.ajax({
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            url: AppBaseUrl + "json/Req.json",
            data: {stringData: stringData},
            success : function(d){
                alert('done');}
        })
    };

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

    self.clickReq = function(id){
        console.log("clickReq()");
        $('.req-li').click(function(){
            self.displayReqDesc($(this).attr("id"));
         });
    };

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
