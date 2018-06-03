// check specific todo items by clicking
$("ul").on("click", "li", function(){
	// toggle todo item from gray to black
	$(this).toggleClass("completed");
});

// click the icon to delete todo items
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// define input
$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		var newItem = $(this).val();
		// clean up the input textbox
		$(this).val("");
		// add new item to a new li
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + newItem + "</li>");
	}
});

$(".fa-plus-circle").on("click", function(){
	$("input[type='text']").slideToggle(150);
});
