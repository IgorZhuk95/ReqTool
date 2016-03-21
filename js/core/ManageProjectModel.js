function ManageProjectModel() {
    var self = this;

    self.getProjects = function(callback){
        console.log("getProjects");
        $.getJSON('json/Project.json', function(data) {
            var projects = [];
            $.each(data, function(key, val){
                projects.push(new ProjectModel(val));
            });
            callback && callback();

            localStorage.clear();
            localStorage.setItem('projectList', JSON.stringify(projects));
        }).done(function() {
                console.info( "success: getProjects()" );
            })
            .fail(function() {
                console.error( "error: getProjects()" );
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
        console.log("display Projects");
        var result = localStorage.getItem('projectList');
        var reqList = JSON.parse(result);
        reqList.forEach(function(item, i, reqList){
            $('.req-list').append(
                "<li>" + item.title + "</li>"
            );
        });
    };
}