(function ($) {
    $(document).ready(function(){
		$("#creditcard").hide();
		$("#voucher").hide();
    	$("#cc").click(function(e){
			$("#voucher").hide();
        	$("#creditcard").show();
    	});
		$("#v").click(function(){
        	$("#creditcard").hide();
			$("#voucher").show();
    	});
    	$("#links a").click(function(e) {
	        e.preventDefault(); 
	        $("#links a").removeClass('font-bold'); 
	        $(this).addClass('font-bold'); 
	    });
    });
}(jQuery));
