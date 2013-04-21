$(function(){

	var starterStar = $(".star").eq(0);
	for( var i = 100; i > 0; i-- ) {
		starterStar.after(starterStar.clone().css({
			left: Math.random()*100+"%",
			top: Math.random()*100+"%",
			fontSize: Math.floor(Math.random()*30+20)
		}));
	}

	$("#vector").submit(function(evt){
		var form = evt.currentTarget;

		evt.preventDefault();

		milkyWay.createPlanet(form.startX, form.startY, form.vectorX, form.vectorY);

	})
});