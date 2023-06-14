//js for project 1
//test
<<<<<<< HEAD
var requestUrl = "https://syndication.api.eb.com/production/article/1/xml";
var requestUrl2 =
  "https://images-api.nasa.gov/&appid=kSgH3akh7Qaqauv7AbKZyRc6pQjxcfVEOlObfDDl";
var requestUrl3 =
  "https://syndication.api.eb.com/production/articles?articleTypeId=31&lastUpdated=2020-10-01";
var requestOptions = {
  method: "GET",
  headers: {
    "x-api-key": "3eec413a-3631-4d4d-9dc0-1cb1ecd69be5",
    accept: "application/JSON",
  },
};
fetch(requestUrl3, requestOptions).then(function (response) {
  console.log(response);
  // return response.json();
});
// .then (function (data){
//     console.log('Fetch Response \n-------------');
//     console.log(data);
// });
=======
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
>>>>>>> b0f138037198a24d6c200f879b453174d6462eb0

// fetch(requestUrl2)
// .then(function (response){
//     return response.json();
// })
// .then (function (data){
//     console.log('Fetch Response \n-------------');
//     console.log(data);
// });

<<<<<<< HEAD
$("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
=======
    // fetch(requestUrl2)
    // .then(function (response){
    //     return response.json();
    // })
    // .then (function (data){
    //     console.log('Fetch Response \n-------------');
    //     console.log(data);
    // });





>>>>>>> b0f138037198a24d6c200f879b453174d6462eb0
