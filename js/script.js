$(document).ready(function(){

	var nbaAllstars = [
		{name: 'LeBron James', position: 'F', summary: 'Lebron James should be cast as Superman... or a train.', conference: 'eastern', img: 'http://l.yimg.com/bt/api/res/1.2/AtI4QjCoY5Zs1VvW9JN6ow--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/3704.png'},
		{name: 'Paul George', position: 'F', summary: 'I\'ve had the same injury as Paul George! Dangling legs.', conference: 'eastern', img: 'http://l.yimg.com/bt/api/res/1.2/8GLmOhuhR6V0NXJEibG5sQ--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4725.png'},
		{name: 'Carmelo Anthony', position: 'F', summary: 'Carmelo Anthony does not know how to pronounce Prozingis.', conference: 'eastern', img: 'http://l.yimg.com/bt/api/res/1.2/b5J6TdYHZcnvdJa2UumrBA--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/3706.png'},
		{name: 'Dwyane Wade', position: 'G', summary: 'Dwyane Wade\'s first name is a typo. Does he know?', conference: 'eastern', img: 'http://l3.yimg.com/bt/api/res/1.2/EXVaEedHkHBB0OeCuAPPHw--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/3708.png'},
		{name: 'Kyle Lowry', position: 'G', summary: 'Kyle Lowry is the hometown favorite for this year\'s Allstar Game.', conference: 'eastern', img: 'http://l2.yimg.com/bt/api/res/1.2/7obhXqjgAA1TtnUlqPecKQ--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4152.png'},
		{name: 'DeMar DeRozan', position: 'G', summary: 'DeMar DeRozan went to the same school as me. USC!', conference: 'eastern', img: 'http://l2.yimg.com/bt/api/res/1.2/XaV7cqkidJGXlSzICMpzCw--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4614.png'},
		{name: 'Paul Millsap', position: 'F', summary: 'Paul Millsap is a Forward for the Atlanta Hawks.', conference: 'eastern', img: 'http://l2.yimg.com/bt/api/res/1.2/_hB6He8BZVZm4ABrWTYkWg--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4175.png'},
		{name: 'Andre Drummond', position: 'C', summary: 'Andre Drummond thinks he can win the dunk contest. HA!', conference: 'eastern', img: 'http://l3.yimg.com/bt/api/res/1.2/uVtpLnEm.2fh4HN1U.hojg--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/5015.png'},
		{name: 'Chris Bosh', position: 'F', summary: 'Chris Bosh likes to code! He\'s in the code.org commericals!', conference: 'eastern', img: 'http://l3.yimg.com/bt/api/res/1.2/5Dv9VXD6hGQ_oNsVM3OyQQ--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/3707.png'},
		{name: 'John Wall', position: 'G', summary: 'John Wall is a Guard for the Washington Wizards.', conference: 'eastern', img: 'http://l3.yimg.com/bt/api/res/1.2/nCbeql.I9FhYNTtcROzo0Q--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4716.png'},
		{name: 'Isaiah Thomas', position: 'G', summary: 'Isaiah Thomas is a Guard for the Boston Celtics.', conference: 'eastern', img: 'http://l1.yimg.com/bt/api/res/1.2/9O3oSIJ3yxj0H.Ub5LD9_w--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4942.png'},
		{name: 'Pau Gasol', position: 'F/C', summary: 'Pau Gasol was awesome when he was on the Los Angeles Lakers.', conference: 'eastern', img: 'http://l.yimg.com/bt/api/res/1.2/zGHb.TGQsuQT.d_OvaJ7Kw--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/3513.png'},
		{name: 'Kobe Bryant', position: 'G/F', summary: 'Kobe Bryant is one of the greatest Los Angeles Laker of all time.', conference: 'western', img: 'http://l3.yimg.com/bt/api/res/1.2/OkBDQ0QU7Df_wyv18mPHRg--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/3118.png'},
		{name: 'Kevin Durant', position: 'F', summary: 'KD is a long lanky baller for the Oklahoma Thunder. He the real MVP.', conference: 'western', img: 'http://l3.yimg.com/bt/api/res/1.2/L0k.2DeHKYLHARnrsNSOPg--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4244.png'},
		{name: 'Kawhi Leonard', position: 'F', summary: 'Kawhi Leonard of the San Antonio Spurs has some big ole hands.', conference: 'western', img: 'http://l3.yimg.com/bt/api/res/1.2/JeN992vYAe1xNHs8PmXmpQ--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20141107/4896.png'},
		{name: 'Russell Westbrook', position: 'G', summary: 'Russell Westbrook has more energy than your morning espresso.', conference: 'western', img: 'http://l3.yimg.com/bt/api/res/1.2/5DVV43afF8gFfyRCbPNrOQ--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4390.png'},
		{name: 'Stephen Curry', position: 'G', summary: 'Steph Curry is the Chef Curry with the shot, boy!', conference: 'western', img: 'http://l.yimg.com/bt/api/res/1.2/cKmQKqkRP_CvqLJZSf75HA--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4612.png'},
		{name: 'Draymond Green', position: 'F', summary: 'Draymond Green is becoming a tripe double machine.', conference: 'western', img: 'http://l2.yimg.com/bt/api/res/1.2/y7d5YbMf92_mFFLSTdofPg--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/5069.png'},
		{name: 'James Harden', position: 'G', summary: 'You ever wonder how James Harden looks without his beard? Me too.', conference: 'western', img: 'http://l3.yimg.com/bt/api/res/1.2/hdD3yzgw9WMwPhoeVcpTTg--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4563.png'},
		{name: 'Chris Paul', position: 'G', summary: 'Chris Paul needs to stop doing those State Farm commercials...', conference: 'western', img: 'http://l3.yimg.com/bt/api/res/1.2/VmyQL13O4qNJGH_96flEIQ--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/3930.png'},
		{name: 'Klay Thompson', position: 'G', summary: 'Klay Thompson is just a decent shooter next to Steph, that must suck.', conference: 'western', img: 'http://l3.yimg.com/bt/api/res/1.2/pLMMQOd3Df0Vy4M9tGMn2Q--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4892.png'},
		{name: 'Anthony Davis', position: 'F/C', summary: 'Anthony Davis rocks a better brow than Frida.', conference: 'western', img: 'http://l3.yimg.com/bt/api/res/1.2/U8APp7nEvSnWWAA4sPTwbQ--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/5007.png'},
		{name: 'DeMarcus Cousins', position: 'F/C', summary: 'DeMarcus Cousins\'s first name rhymes with LaMarcus.', conference: 'western', img: 'http://l3.yimg.com/bt/api/res/1.2/VQX2DL2FlW2Oy8W1Jc.8ow--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4720.png'},
		{name: 'LaMarcus Aldridge', position: 'F', summary: 'LaMarcus Aldridge\'s first name rhymes with DeMarcus.', conference: 'western', img: 'http://l.yimg.com/bt/api/res/1.2/mnco8sXbap_7QGLtOfXzGg--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20141107/4130.png'}
	];

	var activeAllstars = [];

	//Function to append all allstars as thumbnail views

	var appendAllstars = function(allstars) {
		for (var i = 0; allstars.length > i; i++) {
			var newDivs = "<img class='thumb-image "+ allstars[i].conference +"' src="+ allstars[i].img +" id="+ i +">";
			$('.thumb-container').append(newDivs);
		}

		initClick();
	};

	//Click function to listen to which thumbnail has been clicked
	
	var initClick = function() {
		$('.thumb-image').click(function(){
			var id = this.id;
			var selectedAllstar = nbaAllstars[id];

			if (activeAllstars.length === 3) {
				activeAllstars.pop();
				activeAllstars.unshift(selectedAllstar);
			}
			else {
				activeAllstars.unshift(selectedAllstar);
			}
			renderActives(activeAllstars);
			slideImage();
			clearInterval(blink);
		});
	};

	//Function to render recently viewed allstars

	var renderActives = function(actives) {
		$('.main-container').empty();

		actives.forEach(function(active){
			var newDivs = "<div class='main-product "+active.conference+"'><img src="+active.img+"><h1 class='main-product--name'>"+active.name+"</h1><p class='main-product--description'>"+active.summary+"</p></div>";
			$('.main-container').append(newDivs);
		});
	};

	//Function to slide main image to the right

	var slideImage = function() {
		$('.main-product:nth-child(1)').animate({
			opacity: 1,
		}, 1250);

		$('.main-product:nth-child(2)').animate({
			marginLeft: 0,
			opacity: 0.6,
		}, 600);

		$('.main-product:nth-child(3)').animate({
			marginLeft: 0,
			opacity: 0.6,
		}, 600);
	};

	//Function to shuffle array

	var shuffle = function(array) {
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

	appendAllstars(shuffle(nbaAllstars));

});


