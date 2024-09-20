const apiKey = '854c7f80271d986efc886f7373e8d319';
let videoContainer = document.querySelector(".video");
let cities = ['Paris', 'Londres', 'New York', 'Tokyo', 'Berlin']; // Liste des villes

// Fonction pour appeler l'API OpenWeather avec une ville en paramètre
let apiCall = function (city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector('#city').innerHTML = `${data.name}`;
            document.querySelector('#temp').innerHTML = `${data.main.temp} °C`;
            document.querySelector('#humidity').innerHTML = `${data.main.humidity} %`;
            document.querySelector('#wind').innerHTML = `${data.wind.speed} km/h`;

            // Affichage des icônes
            updateWeatherIcons(data.weather[0].main);
            musicWeather(data.weather[0].main);
            displayWeatherVideo(data.weather[0].main);
        })
        .catch(err => console.log('Erreur : ' + err));
}

// Fonction pour mettre à jour les icônes en fonction de la météo
function updateWeatherIcons(weather) {
    // Réinitialiser toutes les animations
    document.querySelector('.sun').style.display = 'none';
    document.querySelector('.rain').style.display = 'none';
    document.querySelector('.neige').style.display = 'none';
    document.querySelector('.nuage1').style.display = 'none';
    document.querySelector('#idSnowman').style.display = 'none';

    switch (weather) {
        case 'Clear':
            document.querySelector('.sun').style.display = 'block';
            break;
        case 'Clouds':
            document.querySelector('.nuage1').style.display = 'block';
            break;
        case 'Rain':
            document.querySelector('.rain').style.display = 'block';
            break;
        case 'Snow':
            document.querySelector('.neige').style.display = 'block';
            document.querySelector('#idSnowman').style.display = 'block';
            break;
        default:
            break;
    }
}

// Fonction pour afficher la playlist Spotify en fonction du temps
function musicWeather(weather) {
    let playlistUrl;
    switch (weather) {
        case 'Clear':
            playlistUrl = 'https://open.spotify.com/embed/playlist/2XPeIlaho7PjfD4E5RPMmX?utm_source=generator';
            break;
        case 'Clouds':
            playlistUrl = 'https://open.spotify.com/embed/playlist/6sBGu75pnJdRTjf3GGly5G?utm_source=generator';
            break;
        case 'Rain':
            playlistUrl = 'https://open.spotify.com/embed/playlist/6ef9YYpzldUFiiPmz9it25?utm_source=generator';
            break;
        case 'Snow':
            playlistUrl = 'https://open.spotify.com/embed/playlist/5FeKSmMIg8eXJHNKhteUQ2?utm_source=generator';
            break;
        default:
            playlistUrl = '';
    }

    // Supprimer les anciennes iframes
    let existingIframes = document.querySelectorAll('iframe');
    existingIframes.forEach(iframe => iframe.remove());

    if (playlistUrl !== '') {
        let iframe = document.createElement('iframe');
        iframe.src = playlistUrl;
        iframe.width = '300';
        iframe.height = '380';
        iframe.frameBorder = '0';
        document.body.appendChild(iframe);
    }
}

// Écouteur d'événements pour soumettre le formulaire
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;
    apiCall(ville);
});

// Remplir l'input avec les villes disponibles
let cityInput = document.querySelector('#inputCity');
cityInput.addEventListener('focus', function () {
    let datalist = document.createElement('datalist');
    datalist.id = 'cities';
    cities.forEach(city => {
        let option = document.createElement('option');
        option.value = city;
        datalist.appendChild(option);
    });
    cityInput.appendChild(datalist);
    cityInput.setAttribute('list', 'cities');
});

// Appel par défaut au chargement de la page
apiCall('Paris');
