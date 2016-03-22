/**
 * Function managing ReqModel
 * @constructor
 */
function ManageProjectModel() {
    var self = this;

    /**
     * Get JSON from Project.json
     * @param callback
     */
    self.getProjects = function(callback){
        console.log("getProjects");
        $.getJSON('json/Project.json', function(data) {
            var projects = [];
            $.each(data, function(key, val){
                projects.push(new ProjectModel(val));
            });
            console.log(projects[0].name);
            localStorage.clear();
            localStorage.setItem('projectList', JSON.stringify(projects));
            callback && callback();
        }).done(function() {
                console.info( "success: getProjects()" );
            })
            .fail(function() {
                console.error( "error: getProjects()" );
            });
    };

    /**
     * Function displaying list of projects on index.html
     */
    self.display = function(){
        console.log("display Projects");
        var result = localStorage.getItem('projectList');
        var projectList = JSON.parse(result);
        projectList.forEach(function(item, i, projectList){
            $('.project-container').append(
                    "<div class='col-md-3 col-sm-6' draggable='true' ondragstart='drag(event)' id='drag1'><a href='"+ item.reqUrl +"'>"+
                        "<div class='card card-inverse card-primary'>"+
                            "<div class='card-block' text-align='center'>"+
                                "<div class='rotate'>"+
                                    "<i class='fa fa-user fa-5x'></i>"+
                                "</div>"+
                                "<h6 class='text-uppercase'>" + item.name + "</h6>"+
                            "</div>"+
                        "</div>"+
                    "</a></div>"
            );
        });
    };
}