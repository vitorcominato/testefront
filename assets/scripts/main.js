

$(function() {
    $('.carousel').carousel();


    var date = new Date();
	date.setDate(date.getDate()-1);

	$('#calendar').datetimepicker({
        inline: true,
        format: 'DD/MM/YYYY',
        locale: 'pt-br',
        minDate: new Date()
    });

    var t;
	$(".sideMenu").mouseenter(function(){
		if($(".sideMenu").width() < 190 && !$(this).hasClass("open")){
			$(".itemMenu").css({
				"height": "auto",
				"float": "left",
				"width": "100%",
				"margin": "auto"
		    });
		    $(".sideMenu").clearQueue();
			$(".sideMenu").animate({width: '220px'},300, function(){
				$(".nameMenu").fadeIn();
				$(this).addClass("open");
			});
			t = true;
			setTimeout(function () {
	            t = false;
	        }, 1000);
		}
	}).mouseleave(function(){
		if($(this).hasClass("open") && !t){
			$(".nameMenu").clearQueue();
		    $(".nameMenu").fadeOut(300, function(){
		    	$(".sideMenu").animate({width: '8%'},200);
		    	$(".itemMenu").css({
					"float": "none",
				    "height": "60px",
				    "width": "30px",
				    "margin": "auto"
			    });
			    $(".sideMenu").removeClass("open");
		    });
		}
	});
	$('.profileBox').popover({
		animation: 	true,
		html: 		true,
		container: 	"body",
		placement: 	"bottom", 
		content: 	$(".popoverContent").html()
	});

	$('#example').popover();
    
});