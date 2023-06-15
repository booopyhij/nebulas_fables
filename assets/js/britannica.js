var requestUrl = "https://syndication.api.eb.com/production/article/2/xml";
var requestUrl3 =
"https://syndication.api.eb.com/production/articles?articleTypeId=1&categoryId=2";
var requestOptions=  {
    method: 'GET',
    headers: {
        'x-api-key': '899b3b09-5634-4fd8-8c68-5cdc598467a3',
        accept: '*/*',
    },
}
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
     });

     