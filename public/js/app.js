$(function(){
  $.get('/api/work').done(function(data){
    console.log(data);
    var workDiv = $('#work-row');
    var workDiv2 = $('#work-row-2');
    var workDiv3 = $('#work-row-3');
    data.forEach(function(obj, index){
      var title = obj.title;
      var description = obj.description;
      var image = obj.image;
      var link = obj.siteLink;
      var github = obj.codeLink;
      var workEntry = '<div class="card col-4"><figure class="card-img-top"><a href="'+link+'">' +
      '<picture><img src="'+image+'" class="work-img"></picture></figure>'+
      '<div class="card-body"><a href="'+link+'"><h5 class="card-title">'+title+'</h5></a></div>'+
      '<div class="card-text"><p>'+description+'</p><a href="'+github+'><p>github</p></a></div></div>';
      workDiv.append(workEntry);
    });
  });
});
