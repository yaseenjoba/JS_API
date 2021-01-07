function getName() {
    let country = document.getElementById("name").value;
    let day = document.getElementById("day").value;
    fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${country}&appid=cad86314552b94deb5b82fa8e5e1e33e`)
        .then(response => response.json()).then(data => {
            console.log(data);
            document.getElementById("city-name").innerHTML = "city name : " + data.city.name;
            document.getElementById("temp").innerHTML = "temperature : " + data.list[day].temp.day;
            document.getElementById("desc").innerHTML = "description : " + data.list[day].weather[0].description;
            document.getElementById("wind").innerHTML = "wind speed : " + data.list[day].speed;
            document.getElementById("Country-name").innerHTML = "country name : " + data.city.country;
        });
};

