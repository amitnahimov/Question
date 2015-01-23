function load()
{
	$("body").fadeOut("500");
	$("body").fadeIn("500");
}
function answer()
{
	var val = document.getElementById('text').value;
	if(val == "אופק זונה?"){ alert("yes");}
	if(val == ""){
		alert("ask a question!");
	}else{
    	x = Math.floor((Math.random() * 2) + 1);
		if(x == 1)
			{
				alert(val+": yes");
				$("#q").html("<p>"+val+": yes</p>"+$("#q").html());
			} 
		else 
			{
				alert(val+": no");
				$("#q").html("<p>"+val+": no</p>"+$("#q").html());
			}
	}
	$("#q").fadeOut("500");
	$("#q").fadeIn("500");
	document.getElementById('text').value = "";
}
