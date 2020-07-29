$(function () {


    $('#main-header').css('background-color', 'blue');
    $('#main-header').css('color', 'white');


    mapboxgl.accessToken = mapboxKey;
    let coordinates = document.getElementById('coordinates');
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 5,
        center: [-98.4916, 29.4252]
    });

    function updateWeather(lat, lon) {
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            APPID: OPEN_WEATHER_APPID,
            lat: lat,
            lon: lon,
            units: "imperial"
        }).done(function (data) {
            console.log(data);

            for (let i = 0; i < 5; i++) {
                let cardId = '#card' + i;
                let date = new Date(data.daily[i].dt * 1000);
                let icon = data.daily[i].weather[0].icon;
                $(cardId + " #weatherDate").html(date.toDateString());
                $(cardId + " #highLowTemp").html("High " + data.daily[i].temp.max + "&deg;F / Low " + data.daily[0].temp.min + "&deg;F");
                $(cardId + " #description").html(data.daily[i].weather[0].description)
                $(cardId + " #humidity").html(data.daily[i].humidity + "% Humidity");
                $(cardId + " #icon").html(`<img src="${"http://openweathermap.org/img/wn/" + icon + "@2x.png"}">`);
                $(cardId + " #wind").html("Wind Speed: " + data.daily[i].wind_speed + " mph");
                $(cardId + " #pressure").html("Pressure: " + data.daily[i].pressure);
            }
        });
    }


    $(document).ready(function () {
        updateWeather(29.421, -98.4936)
    })


    let marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.4916, 29.4252])
        .addTo(map);

    function onDragEnd() {
        let lngLat = marker.getLngLat();
        updateWeather(lngLat.lat, lngLat.lng);

        coordinates.style.display = 'block';
        coordinates.innerHTML =
            'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    }

    marker.on('dragend', onDragEnd);


    $('#submit-button').click(function (e) {
        e.preventDefault();
        var htmlString = $('#text-box').val();
        // $( this ).text( htmlString );
        // }
        geocode(htmlString, mapboxKey).then(function (coordinates) {
            updateWeather(coordinates[1], coordinates[0]);
            marker.setLngLat([coordinates[0], coordinates[1]]);
            map.flyTo({
                center: [coordinates[0], coordinates[1]]
            });
        })


    })
})
