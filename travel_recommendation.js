let datas;
const url = './travel_recommendation_api.json';
fetch(url).then((res)=>res.json()).then(function(data){
    datas = data;
    console.log(datas);
}).catch((err)=> console.log(err));

let search;

function toSearch(){
    search=document.getElementById('search').value.toString().toLowerCase();

    if(search==="city" || search==="cities" || search==="ville" || search==="villes"){
        let citiesList = datas["cities"];
        citiesList.forEach(city => {
            
        });
    }else if(search==="country" || search==="countries" || search==="pays"){

    }else if(search==="beach" || search==="beaches" || search==="plage" || search==="plages" ){

    }else if(search==="temple" || search==="temples"){

    }else{

    }
}