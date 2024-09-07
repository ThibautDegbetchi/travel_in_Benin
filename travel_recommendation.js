const url = './travel_recommendation_api.json';
let data = null;

async function fetchData() {
    return await fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then((d) => {
            data = d;
            console.log(data);
            return d;
        })
        .catch((err) => console.log(err));
}

// Charger les données lors du chargement de la page
document.addEventListener('DOMContentLoaded', function () {
    fetchData();
});

function toSearch() {
    const search = document.getElementById('search').value.toString().toLowerCase();

    if (!data) {
        console.log("Data is not loaded yet.");
        return;
    }

    let citiesList = [];

    if (search === "city" || search === "cities" || search === "ville" || search === "villes") {
        data['countries'].forEach(country => {
            citiesList = citiesList.concat(country.cities);
        });

        console.log(`List city: ${JSON.stringify(citiesList)}`);
        const listAnswers = document.getElementById('search-answers');

        citiesList.forEach(city => {
            let answer = document.createElement('div');
            answer.classList.add('result');

            let image = document.createElement('img');
            image.setAttribute('src', city['imageUrl']);
            image.classList.add('answerImage');

            let detail = document.createElement('div');
            detail.classList.add('result-detail');

            let name = document.createElement('h3');
            name.textContent = city['name'];

            let description = document.createElement('p');
            description.textContent = city['description'];

            let button = document.createElement('button');
            button.textContent = "Voir";
            button.classList.add('ansbutton');
            button.setAttribute('onclick', '#');

            answer.appendChild(image);
            answer.appendChild(detail);
            detail.appendChild(name);
            detail.appendChild(description);
            answer.appendChild(button);

            listAnswers.appendChild(answer);
        });
    } else if (search === "beach" || search === "beaches" || search === "plage" || search === "plages") {
        let beaches=data['beaches'];

        console.log(`List beaches: ${JSON.stringify(beaches)}`);
        const listAnswers = document.getElementById('search-answers');

        beaches.forEach(city => {
            let answer = document.createElement('div');
            answer.classList.add('result');

            let image = document.createElement('img');
            image.setAttribute('src', city['imageUrl']);
            image.classList.add('answerImage');

            let detail = document.createElement('div');
            detail.classList.add('result-detail');

            let name = document.createElement('h3');
            name.textContent = city['name'];

            let description = document.createElement('p');
            description.textContent = city['description'];

            let button = document.createElement('button');
            button.textContent = "Voir";
            button.classList.add('ansbutton');
            button.setAttribute('onclick', '#');

            answer.appendChild(image);
            answer.appendChild(detail);
            detail.appendChild(name);
            detail.appendChild(description);
            answer.appendChild(button);

            listAnswers.appendChild(answer);
        });
    } else if (search === "temple" || search === "temples") {
        let temples=data['temples'];

        console.log(`List temples: ${JSON.stringify(temples)}`);
        const listAnswers = document.getElementById('search-answers');

        temples.forEach(city => {
            let answer = document.createElement('div');
            answer.classList.add('result');

            let image = document.createElement('img');
            image.setAttribute('src', city['imageUrl']);
            image.classList.add('answerImage');

            let detail = document.createElement('div');
            detail.classList.add('result-detail');

            let name = document.createElement('h3');
            name.textContent = city['name'];

            let description = document.createElement('p');
            description.textContent = city['description'];

            let button = document.createElement('button');
            button.textContent = "Voir";
            button.classList.add('ansbutton');
            button.setAttribute('onclick', '#');

            answer.appendChild(image);
            answer.appendChild(detail);
            detail.appendChild(name);
            detail.appendChild(description);
            answer.appendChild(button);

            listAnswers.appendChild(answer);
        });
    } else {
        // Code pour d'autres cas
    }
}
