

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
    
});