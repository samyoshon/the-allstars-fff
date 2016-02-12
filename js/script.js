$(document).ready(function(){

	var nbaAllstars = [
		{name: 'LeBron James', position: 'F', summary: 'Lebron James is a Cleveland Cavalier', conference: 'eastern', img: 'http://l.yimg.com/bt/api/res/1.2/AtI4QjCoY5Zs1VvW9JN6ow--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/3704.png'},
		{name: 'Paul George', position: 'F', summary: 'Paul George is a ', conference: 'eastern', img: 'http://l.yimg.com/bt/api/res/1.2/8GLmOhuhR6V0NXJEibG5sQ--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4725.png'},
		{name: 'Carmelo Anthony', position: 'F', summary: '', conference: 'eastern', img: 'http://l.yimg.com/bt/api/res/1.2/b5J6TdYHZcnvdJa2UumrBA--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/3706.png'},
		{name: 'Dwyane Wade', position: 'G', summary: '', conference: 'eastern', img: 'http://l3.yimg.com/bt/api/res/1.2/EXVaEedHkHBB0OeCuAPPHw--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/3708.png'},
		{name: 'Kyle Lowry', position: 'G', summary: '', conference: 'eastern', img: 'http://l2.yimg.com/bt/api/res/1.2/7obhXqjgAA1TtnUlqPecKQ--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4152.png'},
		{name: 'DeMar DeRozan', position: 'G', summary: '', conference: 'eastern', img: 'http://l2.yimg.com/bt/api/res/1.2/XaV7cqkidJGXlSzICMpzCw--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4614.png'},
		{name: 'Paul Millsap', position: 'F', summary: '', conference: 'eastern', img: 'http://l2.yimg.com/bt/api/res/1.2/_hB6He8BZVZm4ABrWTYkWg--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4175.png'},
		{name: 'Andre Drummond', position: 'C', summary: '', conference: 'eastern', img: 'http://l3.yimg.com/bt/api/res/1.2/uVtpLnEm.2fh4HN1U.hojg--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/5015.png'},
		{name: 'Chris Bosh', position: 'F', summary: '', conference: 'eastern', img: 'http://l3.yimg.com/bt/api/res/1.2/5Dv9VXD6hGQ_oNsVM3OyQQ--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/3707.png'},
		{name: 'John Wall', position: 'G', summary: '', conference: 'eastern', img: 'http://l3.yimg.com/bt/api/res/1.2/nCbeql.I9FhYNTtcROzo0Q--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4716.png'},
		{name: 'Isaiah Thomas', position: 'G', summary: '', conference: 'eastern', img: 'http://l1.yimg.com/bt/api/res/1.2/9O3oSIJ3yxj0H.Ub5LD9_w--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4942.png'},
		{name: 'Pau Gasol', position: 'F/C', summary: '', conference: 'eastern', img: 'http://l.yimg.com/bt/api/res/1.2/zGHb.TGQsuQT.d_OvaJ7Kw--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/3513.png'},
		{name: 'Kobe Bryant', position: 'G/F', summary: '', conference: 'western', img: 'http://l3.yimg.com/bt/api/res/1.2/OkBDQ0QU7Df_wyv18mPHRg--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/3118.png'},
		{name: 'Kevin Durant', position: 'F', summary: '', conference: 'western', img: 'http://l3.yimg.com/bt/api/res/1.2/L0k.2DeHKYLHARnrsNSOPg--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4244.png'},
		{name: 'Kawhi Leonard', position: 'F', summary: '', conference: 'western', img: 'http://l3.yimg.com/bt/api/res/1.2/JeN992vYAe1xNHs8PmXmpQ--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20141107/4896.png'},
		{name: 'Russell Westbrook', position: 'G', summary: '', conference: 'western', img: 'http://l3.yimg.com/bt/api/res/1.2/5DVV43afF8gFfyRCbPNrOQ--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4390.png'},
		{name: 'Stephen Curry', position: 'G', summary: '', conference: 'western', img: 'http://l.yimg.com/bt/api/res/1.2/cKmQKqkRP_CvqLJZSf75HA--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4612.png'},
		{name: 'Draymond Green', position: 'F', summary: '', conference: 'western', img: 'http://l2.yimg.com/bt/api/res/1.2/y7d5YbMf92_mFFLSTdofPg--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/5069.png'},
		{name: 'James Harden', position: 'G', summary: '', conference: 'western', img: 'http://l3.yimg.com/bt/api/res/1.2/hdD3yzgw9WMwPhoeVcpTTg--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4563.png'},
		{name: 'Chris Paul', position: 'G', summary: '', conference: 'western', img: 'http://l3.yimg.com/bt/api/res/1.2/VmyQL13O4qNJGH_96flEIQ--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/3930.png'},
		{name: 'Klay Thompson', position: 'G', summary: '', conference: 'western', img: 'http://l3.yimg.com/bt/api/res/1.2/pLMMQOd3Df0Vy4M9tGMn2Q--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4892.png'},
		{name: 'Anthony Davis', position: 'F/C', summary: '', conference: 'western', img: 'http://l3.yimg.com/bt/api/res/1.2/U8APp7nEvSnWWAA4sPTwbQ--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/5007.png'},
		{name: 'DeMarcus Cousins', position: 'F/C', summary: '', conference: 'western', img: 'http://l3.yimg.com/bt/api/res/1.2/VQX2DL2FlW2Oy8W1Jc.8ow--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4720.png'},
		{name: 'LaMarcus Aldridge', position: 'F', summary: '', conference: 'western', img: 'http://l.yimg.com/bt/api/res/1.2/mnco8sXbap_7QGLtOfXzGg--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20141107/4130.png'}
	];

	var activeAllstars = [];

	//Function to append all products as thumbnail views

	var appendProducts = function(products){
		for (var i = 0; products.length > i; i++) {
			var newDivs = "<img class='thumb-image "+ products[i].conference +"' src="+ products[i].img +" id="+ i +">";
			$('.thumb-container').append(newDivs);
		}

		initClick();
	};

	//Click function to listen to which thumbnail has been clicked
	
	var initClick = function(){
		$('.thumb-image').click(function(){
			var id = this.id;
			var name = this.name;
			var position = this.position;

			if (activeAllstars.length === 3) {
				activeAllstars.pop();
				activeAllstars.unshift(id);
			}
			else {
				activeAllstars.unshift(id);
			}
			renderActives(activeAllstars, name, position);
		});
	};

	//Function to render recently viewed products

	var renderActives = function(actives, name, position){
		$('.main-container').empty();
		
		console.log("actives: " + actives);
		console.log("name: " + name);
		console.log("position: " + position);

		actives.forEach(function(active){
			var newDivs = "<div class='main-product' id='"+active+"'></div>";
			$('.main-container').append(newDivs);
		});
	};


	//Function to shuffle array

	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
	}

	appendProducts(shuffle(nbaAllstars));

});


