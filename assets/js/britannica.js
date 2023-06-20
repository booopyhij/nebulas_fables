//is this needed?
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
     fetch(requestUrl3, requestOptions)
        .then(function (response){
            console.log(response);
            return response.text();
        })
         .then (function (data){
             console.log('Fetch Response \n-------------');
             console.log(data);
             return data.innerText;
         }).then(function (articleResponses) { 
        
        $('#articleSearch').empty();
        // fix the for loop
        var articleResponses = data.articles[i].title[i];
        for (let i=0; i < articleResponses.length; i++){
            //figure out why this isn't reading the object
        console.log(articleResponses);
        return data.innerText;}
        // if statement needed?   
        var userArticle = $('<p>' + articleResponses + '</p>');
        console.log(userArticle);
        // submit listener here
        // make sure the appending works properly
       divEl.append(userArticle);
})})})};
    
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
        return response.text();
    })
     .then (function (data){
         console.log('Fetch Response \n-------------');
         console.log(data);
         return data.innerText;
     });

    fetch(requestUrl, requestOptions)
     .then(function(response){
        console.log(response);
        return response.text();
     })
     .then (function (data){
        console.log('Fetch Response \n-------------');
        console.log(data);
        return data.innerText;
     });
     //.then(response => divEl.innerHTML = response);

     britannicaSearch();
     