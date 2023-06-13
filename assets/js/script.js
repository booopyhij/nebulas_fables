//js for project 1
//test
var requestUrl = 'https://syndication.api.eb.com/production/article/1/xml';
var requestUrl2 = 'https://images-api.nasa.gov/&appid=kSgH3akh7Qaqauv7AbKZyRc6pQjxcfVEOlObfDDl';
var requestUrl3 = 
"https://syndication.api.eb.com/production/application/metadata";
var requestOptions=  {
    method: 'GET',
    headers: {
        'x-api-key': 'ebb9022c-c9b3-47a4-af15-d9dd415282f8',
        'accept': 'application/JSON',
    },
}
fetch(requestUrl3, requestOptions)
    .then(function (response){
        console.log(response);
       // return response.json();
    })
    // .then (function (data){
    //     console.log('Fetch Response \n-------------');
    //     console.log(data);
    // });


    // fetch(requestUrl2)
    // .then(function (response){
    //     return response.json();
    // })
    // .then (function (data){
    //     console.log('Fetch Response \n-------------');
    //     console.log(data);
    // });





