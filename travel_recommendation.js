let data;
const url = './travel_recommendation_api.json';
fetch(url).then((res)=>res.json()).then(function(data){
    console.log(data);
}).catch((err)=> console.log(err));