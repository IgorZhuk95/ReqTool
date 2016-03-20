function ManageReqModel() {
    var self = this;
    self.reqs = [];

    self.getReqs = function(callback){
        console.log("getReqs");
        $.getJSON('json/Req.json', function(data) {
            var reqs = [];
            $.each(data, function(key, val){
                reqs.push(new ReqModel(val));
            });
            callback && callback();
            self.reqs = reqs;
            localStorage.clear();
            localStorage.setItem('reqList', JSON.stringify(reqs));
        }).done(function() {
                console.info( "getReqs() is success" );
            })
            .fail(function() {
                console.error( "getError error" );
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

    self.display = function(){
        console.log("display");
        var result = localStorage.getItem('reqList');
        var reqList = JSON.parse(result);
        reqList.forEach(function(item, i, reqList){
            $('.req-list').append(
                "<li>" + item.title + "</li>"
            );
        });
    };

}
