function welcome (){
	alert("Bem vindo");
	alert("Clique no icone curriculo acima para mais informações")
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

// teste.style.opacity = 1;

	// else if (teste.style.visibility = "visible"){
	// 	teste.style.visibility = "hidden"
	// 	}