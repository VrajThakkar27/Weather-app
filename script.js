const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9d120adfb9msh0e64fd34dfddccdp13028ajsn6d9c0737183a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
function getWeather(city) {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response);
			cloud_pct.innerHTML = response.cloud_pct;
			feels_like.innerHTML = response.feels_like;
			humidity.innerHTML = response.humidity;
			max_temp.innerHTML = response.max_temp;
			min_temp.innerHTML = response.min_temp;
			sunrise.innerHTML = response.sunrise;
			sunset.innerHTML = response.sunset;
			temp.innerHTML = response.temp;
			wind_degrees.innerHTML = response.wind_degrees;
			wind_speed.innerHTML = response.wind_speed;
		})
		.catch(err => console.error(err));
}

submit.addEventListener('click', function (e) {
	e.preventDefault();
	getWeather(city.value);
})
getWeather('Ahmedabad');

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => {
		cloud_pct2.innerHTML = response.cloud_pct
		feels_like2.innerHTML = response.feels_like
		humidity2.innerHTML = response.humidity
		max_temp2.innerHTML = response.max_temp
		min_temp2.innerHTML = response.min_temp
		sunrise2.innerHTML = response.sunrise
		sunset2.innerHTML = response.sunset
		temp2.innerHTML = response.temp
		wind_degrees2.innerHTML = response.wind_degrees
		wind_speed2.innerHTML = response.wind_speed
	})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => {
		cloud_pct3.innerHTML = response.cloud_pct
		feels_like3.innerHTML = response.feels_like
		humidity3.innerHTML = response.humidity
		max_temp3.innerHTML = response.max_temp
		min_temp3.innerHTML = response.min_temp
		sunrise3.innerHTML = response.sunrise
		sunset3.innerHTML = response.sunset
		temp3.innerHTML = response.temp
		wind_degrees3.innerHTML = response.wind_degrees
		wind_speed3.innerHTML = response.wind_speed
	})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
	.then(response => response.json())
	.then(response => {
		cloud_pct4.innerHTML = response.cloud_pct
		feels_like4.innerHTML = response.feels_like
		humidity4.innerHTML = response.humidity
		max_temp4.innerHTML = response.max_temp
		min_temp4.innerHTML = response.min_temp
		sunrise4.innerHTML = response.sunrise
		sunset4.innerHTML = response.sunset
		temp4.innerHTML = response.temp
		wind_degrees4.innerHTML = response.wind_degrees
		wind_speed4.innerHTML = response.wind_speed
	})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
	.then(response => response.json())
	.then(response => {
		cloud_pct5.innerHTML = response.cloud_pct
		feels_like5.innerHTML = response.feels_like
		humidity5.innerHTML = response.humidity
		max_temp5.innerHTML = response.max_temp
		min_temp5.innerHTML = response.min_temp
		sunrise5.innerHTML = response.sunrise
		sunset5.innerHTML = response.sunset
		temp5.innerHTML = response.temp
		wind_degrees5.innerHTML = response.wind_degrees
		wind_speed5.innerHTML = response.wind_speed
	})
