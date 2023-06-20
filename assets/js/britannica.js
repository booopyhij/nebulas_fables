// $(document).ready(function () {
// $("#searchBtn").on("click", function (event) {
//     event.preventDefault();
//     
//     searchInput = $("#user-input").val().trim();
//     console.log(searchInput);
//     britannicaSearch(searchInput);
//  });
// });

function britannicaSearch(searchInput){
    $('#searchBtn').on('click', function(event){
    var searchInput = $('#user-input').val().trim();
    var requestUrl2 = 'https://syndication.api.eb.com/production/article/' + searchInput + '/xml';
    fetch(requestUrl2, requestOptions)
    .then(function(response){
        console.log(response);
        $('#articleSearch').empty();
        for (let i=0; i < articleResponses.length; i++){
        var articleResponses = response.articles[i].title[i];    
        console.log(articleResponses);}
        var userArticle = $('<p>' + articleResponses + '</p>');
     
       $("#articleSearch").append(userArticle);
    })})};
    
    var divEl = document.getElementById('articleSearch');
    
    var requestUrl = "https://syndication.api.eb.com/production/article/781/xml";
    var requestUrl3 =
    "https://syndication.api.eb.com/production/articles?articleTypeId=1&categoryId=2";
    var requestOptions=  {
        method: 'GET',
        headers: {
            'x-api-key': '899b3b09-5634-4fd8-8c68-5cdc598467a3',
            accept: '*/*',
        },
    };
    fetch(requestUrl3, requestOptions)
    .then(function (response){
        console.log(response);
        
    })
     .then (function (data){
         console.log('Fetch Response \n-------------');
         console.log(data);
     });

    fetch(requestUrl, requestOptions)
     .then(function(response){
        console.log(response);
        
     })
     .then (function (data){
        console.log('Fetch Response \n-------------');
        console.log(data);
     })
     //.then(response => divEl.innerHTML = response);

     britannicaSearch();
     