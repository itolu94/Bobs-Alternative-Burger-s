$(document).ready(function() {
    $(document).on('click', 'button.menuOrder', function() {
        var order = $(this).text();
        console.log(order);
        $.ajax({
        	type: "POST",
        	url: order
        }).done(function(data){
        })
    });
});
