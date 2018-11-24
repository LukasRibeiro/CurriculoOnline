function welcome (){
	alert("Bem vindo");
	alert("Clique no icone currículo acima para mais informações")
}

 function show (){
	var show = document.getElementById("esconder");
	
	if(show.style.visibility == "visible"){
		show.style.visibility = "hidden";
		show.style.opacity = 0;
	}
	else{
		show.style.visibility = "visible";
		show.style.opacity = 1;
	}
}