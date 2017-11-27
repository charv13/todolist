//check off todos by clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");

});

//click on x to delete todo

$("ul").on("click", "span", function(event){

	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});

	event.stopPropagation();

});

$("input[type='text'").keypress(function(event){

	if(event.which === 13) {

		var todoTExt = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoTExt + "</li>");
		client.set('ticket.customField:custom_field', todoTExt).then(function(data) {
  				console.log(data); // { 'ticket.subject': 'Printer Overheating Incident' }
});
	}
});

$(".fa-plus").click(function(){

	$("input[type='text'").fadeToggle();
})

