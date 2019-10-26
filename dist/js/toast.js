Alert = {
	params:{
		current:0,
		elAlert:'.alert', 
		elText:'.alert-text', 
		elIcon:'#icon-alert',
		elLink:'#lnk-alert',
		elDivLinkAlert:'.link-alert',
		elHrSepartor:"#separator-lnk-txt",
		isRing:true, /* par defaut a true , False possible*/
		song:'Ping.mp3',
		time:4000,
		type:{
			info: "alert-info",
			success: "alert-success",
			error: "alert-error",
			warning : "alert-warning"
		},
		TimeOutHide: ""
		
	}, 
	toast: ({text, type, link = ""})=>{
		Alert.params.current ++
		if (Alert.params.current === 1) {
			if (Alert.params.isRing) {
	            Alert.playSong(Alert.params.song);
		    }  	

		    setTimeout(function() {
			    	// On crée le contenu

				$('body').append('<div class="alerts"><div class="alert animated faster" onmouseover="Alert.makePause()" onmouseout="Alert.continue()"><div class="icon-alert"><i id="icon-alert" class=""></i></div><div class="alert-content"><span class="alert-text"></span></div></div></div>')
				if (type === 'success') {/*Success*/
					document.querySelector(Alert.params.elAlert).classList.add(Alert.params.type.success)
					document.querySelector(Alert.params.elIcon).classList.add('far','fa-check-circle')
				} else if(type === 'error') {/*Error*/
					document.querySelector(Alert.params.elAlert).classList.add(Alert.params.type.error)
					document.querySelector(Alert.params.elIcon).classList.add('far','fa-times-circle')
				}else if(type === 'info'){
					document.querySelector(Alert.params.elAlert).classList.add(Alert.params.type.info)
					document.querySelector(Alert.params.elIcon).classList.add('fas','fa-info-circle')
				}else{/*Info*/
					document.querySelector(Alert.params.elAlert).classList.add(Alert.params.type.warning)
					document.querySelector(Alert.params.elIcon).classList.add('fas','fa-exclamation-triangle')
				}

				if (link ==="" || link === " ") {
					$(Alert.params.elLink).remove()
				}else{
					$('.alert-content').append('<div class="link-alert"><hr id="separator-lnk-txt"><a href="#" id="lnk-alert">Creer un locataire</a></div>')
					document.querySelector(Alert.params.elHrSepartor).style.display = 'block'
					document.querySelector(Alert.params.elDivLinkAlert).style.display = 'block'
					document.querySelector(Alert.params.elLink).style.display = 'block'
					$(Alert.params.elLink).attr({href:link});
					$(Alert.params.elLink).text(link)

				}
				document.querySelector(Alert.params.elText).innerText = text
				
				document.querySelector(Alert.params.elAlert).style.display = 'flex'
				document.querySelector(Alert.params.elAlert).classList.remove("fadeOutUp");
			    document.querySelector(Alert.params.elAlert).classList.add("fadeInDown");
			   
			    Alert.TimeOutHide = setTimeout(function() {
					document.querySelector(Alert.params.elAlert).classList.remove("fadeInDown");

					document.querySelector(Alert.params.elAlert).classList.add("fadeOutUp");
					setTimeout(function() {
					$('.alert').remove()
					Alert.params.current = 0

					}, 300);

			   }, Alert.params.time);
		    }, 500);
			
	  }
	},
	playSong:(song)=>{
		var audio = new Audio(song);
        audio.play();
	},
	pauseAlert(time){
		 clearTimeout(time); 
	},
	makePause:()=>{
		Alert.pauseAlert(Alert.TimeOutHide)
		// window.alert('Bien')
	},
	continue:()=>{
		 Alert.TimeOutHide = setTimeout(function() {
					document.querySelector(Alert.params.elAlert).classList.remove("fadeInDown");

					document.querySelector(Alert.params.elAlert).classList.add("fadeOutUp");
					setTimeout(function() {
					$('.alert').remove()
					Alert.params.current = 0

					}, 300);

			   }, Alert.params.time);
	},
	init:({isRing = true, song = Alert.params.song , time})=>{
		
		Alert.params.song = song
		Alert.params.isRing = isRing
		Alert.params.time = time
	}
}




 