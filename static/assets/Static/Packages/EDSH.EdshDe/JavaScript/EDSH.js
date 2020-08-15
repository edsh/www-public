jQuery(document).ready(function() {
	if (false && /* api.geonames.org not properly SSL protected? */ $('#AjaxWeather').length) {

		jQuery.ajax('https://api.geonames.org/weatherIcaoJSON?ICAO=EDDS&username=edsh', {
			cache: true,
			dataType: 'jsonp'
		}).done(function(data) {
			$('<p class="observation"></p>')
				.append(data.weatherObservation.observation)
				.appendTo($('#AjaxWeather'));
		});

		jQuery.ajax('http://api.geonames.org/timezoneJSON?lat=48.82&lng=9.45&username=edsh', {
				cache: true,
				dataType: 'jsonp'
			}).done(function(data) {
					$('<p class="sunrise-sunset"></p>')
						.append('SR <strong>' + data.sunrise.split(' ')[1] + '</strong> ? SS <strong>' + data.sunset.split(' ')[1] + '</strong>')
						.appendTo($('#AjaxWeather'));
		});
	}

});

jQuery(window).load(function() {

	if (jQuery('#contact-map').length) {
		var contactMap = new Microsoft.Maps.Map(document.getElementById('contact-map'), {
			credentials: 'AoyuWtARhKOPqD7MQDTvGk_2iDEZ3266fVdeYtejQZfRd9XdzSf3HeNvCtp2V4Es',
			center:  new Microsoft.Maps.Location(48.9217, 9.452),
			mapTypeId: Microsoft.Maps.MapTypeId.road,
			width: 940,
			height: 320,
			zoom: 14,
			showCopyright:true,
			disableKeyboardInput:true,
			disableMouseInput:false,
			disableTouchInput:false
		});
		var pushpin= new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(48.92, 9.455));
		contactMap.entities.push(pushpin);
	}

	if (jQuery('#pilot-map').length) {
		new Microsoft.Maps.Map(document.getElementById('pilot-map'), {
			credentials: 'AoyuWtARhKOPqD7MQDTvGk_2iDEZ3266fVdeYtejQZfRd9XdzSf3HeNvCtp2V4Es',
			center:  new Microsoft.Maps.Location(48.9217, 9.452),
			mapTypeId: Microsoft.Maps.MapTypeId.aerial,
			width: 940,
			height: 620,
			zoom: 16,
			showCopyright:true,
			disableKeyboardInput:true,
			disableMouseInput:false,
			disableTouchInput:false
		});

		/*
		var polygon = new Microsoft.Maps.Polygon(
			[
				new Microsoft.Maps.Location(48.9217, 9.452),
				new Microsoft.Maps.Location(48.920, 9.453),
				new Microsoft.Maps.Location(48.922, 9.451)
			],
			{
				fillColor: new Microsoft.Maps.Color(0),
				//infobox:undefined,
				strokeThickness: 5,
				strokeColor: Microsoft.Maps.Color.fromHex('#222999')
			}
		);
		pilotMap.entities.push(polygon);
		*/
	}

});
