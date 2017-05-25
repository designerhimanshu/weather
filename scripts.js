var lat;
var long;

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		lat = position.coords.latitude; //gives browsers location's latitude
		long = position.coords.longitude; //gives broswers location's longitude
		// using jquery to call API. URL is dynamic using lag and long variables.
  		$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=metric&APPID=0632c8323f671fefeb33e0843ca28970", function(json){
			// taking city name from JSON object and updating the text becasue its a simple text change
			$("#city").text(json.name);
			// taking temp name from JSON object and updating it in HTML because there is span tag as well to be considered 
			$("#temperature").html(json.main.temp + " <span>&deg;C</span");
			// taking 'icon' from JSON object and updating src of image tag . You can also check this icon's website: http://websygen.github.io/owfont/#"
			$("#weatherIcon").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon +".png");

			//capturing description value from the JSON and storing in a variable
			var weatherId = json.weather[0].id;

			// convert weatherID number to a string, then extract the first digit
			var weatherIdStringFirstCharacter = String(weatherId).charAt(0);

			// convert the first digit string back to an integer
			var weatherIDFirstDigit = Number(weatherIdStringFirstCharacter);


			//running a SWITCH loop to compare description values against possible values and if found a match, update background image URL
			switch(weatherIDFirstDigit) {

				case 2:
					$("body").css("background-image", 'url("http://i.dailymail.co.uk/i/pix/2015/02/10/258AC13A00000578-2947873-Researchers_at_Tel_Aviv_University_in_Israel_have_created_a_map_-a-134_1423586635718.jpg")');
					break;	
				case 3:
					$("body").css("background-image", 'url("http://img07.deviantart.net/ea88/i/2012/198/6/b/drizzle__by_niki91-d57kcpt.jpg")');
					break;
				case 5:
					$("body").css("background-image", 'url("http://www.nationalweatherstation.com/wp-content/uploads/2014/10/beautiful-rain-pictures-45-photos-36.jpg")');
					break;					
				case 6:
					$("body").css("background-image", 'url("http://squawalpine.com/sites/default/files/styles/large/public/multiple_medias/media_snowy-chairlift.jpg?itok=DGSaK7TO")');
					break;					
				case 7:
					$("body").css("background-image", 'url("http://i2.cdn.cnn.com/cnnnext/dam/assets/151102103111-morning-mist-italy-fog-super-169.jpg")');
					break;				
				case 8:
					$("body").css("background-image", 'url("https://c1.staticflickr.com/9/8145/7158312491_f852e6f1c1_b.jpg")');
					break;					
				case 9:
					$("body").css("background-image", 'url("http://s.hswstatic.com/gif/tornado-orig.jpg")');
					break;					
				default:
					$("body").css("background-image", 'url("https://dncache-mauganscorp.netdna-ssl.com/thumbseg/496/496017-bigthumbnail.jpg")');
					break;

			}

		});
  	});
}