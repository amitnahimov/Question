function answer()
{
	var val = document.getElementById('text').value;
	if(val == ""){
		alert("ask a question!");
	}else{
    	x = Math.floor((Math.random() * 2) + 1);
		if(x == 1)
		{
		alert(val+": yes");
		document.getElementById('q').innerHTML = "<p>"+val+": yes</p>"+document.getElementById('q').innerHTML;
		} 
		else 
		{
		alert(val+": no");
		document.getElementById('q').innerHTML = "<p>"+val+": no</p>"+document.getElementById('q').innerHTML;
		}
	}
	document.getElementById('text').value = "";
}
