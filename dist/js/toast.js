
/*===========================================================
===========================================================*/
Alert = {
	params:{
		current:0,/*Si une notification en coures valeur 1*/
		/*=================================================*/
		elAlert:'.alert', 
		elText:'.alert-text', 
		elIcon:'#icon-alert',
		elLink:'#lnk-alert',
		elDivLinkAlert:'.link-alert',
		elHrSepartor:"#separator-lnk-txt",
		/*==================================================*/
		isRing:false, /*Si a true joue une sonnerie lorsqu'il y a une notification*/
		song:'Ping.mp3', /*Sonnerie de la notification */
		time:4000, /*Durée de la notification*/
		TimeOutHide: "",/*Variable TimeOut*/
		type:{
			info: "alert-info",
			success: "alert-success",
			error: "alert-error",
			warning : "alert-warning"/*Type par defaut de la notification*/
		},
		typeInverted:{
			info: "alert-info-inverted",
			success: "alert-success-inverted",
			error: "alert-error-inverted",
			warning : "alert-warning-inverted"/*Type secondaire qui inverse les couleurs Si typeSelected est a inverted*/
		},
		typeSelected: "normal",/*Active L'inversion de couleurs lorsqu'il est a inverted*/
		transition:{
			show: "fadeInDown",
			hide:"fadeOutUp"/*Defini la transition a utilisé& sur la notification. utilise la librairie de animateCss*/
		},
		position: "top-center"
	}, 
	toast: ({text, type, link = ""}) => {
		Alert.params.current ++
		if (Alert.params.current === 1) {
			if (Alert.params.isRing) {
	            Alert.playSong(Alert.params.song);
		    }  	
		    setTimeout(function() {
			    	// On crée le contenu
				if (Alert.params.position === 'top-right') {
					$('body').append('<div class="alerts alerts-top-right "><div class="alert animated  faster" onmouseover="Alert.makePause()" onmouseout="Alert.continue()"><div class="icon-alert"><i id="icon-alert" class=""></i></div><div class="alert-content"><span class="alert-text"></span></div></div></div>')
				}else if(Alert.params.position=== 'top-left'){
					$('body').append('<div class="alerts alerts-top-left"><div class="alert animated  faster" onmouseover="Alert.makePause()" onmouseout="Alert.continue()"><div class="icon-alert"><i id="icon-alert" class=""></i></div><div class="alert-content"><span class="alert-text"></span></div></div></div>')
				}else if(Alert.params.position=== 'bottom-left'){
					$('body').append('<div class="alerts alerts-bottom-left"><div class="alert animated  faster" onmouseover="Alert.makePause()" onmouseout="Alert.continue()"><div class="icon-alert"><i id="icon-alert" class=""></i></div><div class="alert-content"><span class="alert-text"></span></div></div></div>')
				}else if(Alert.params.position=== 'bottom-right'){
					$('body').append('<div class="alerts alerts-bottom-right"><div class="alert animated  faster" onmouseover="Alert.makePause()" onmouseout="Alert.continue()"><div class="icon-alert"><i id="icon-alert" class=""></i></div><div class="alert-content"><span class="alert-text"></span></div></div></div>')
				}else if(Alert.params.position=== 'bottom-center'){
					$('body').append('<div class="alerts alerts-bottom-center"><div class="alert animated faster " onmouseover="Alert.makePause()" onmouseout="Alert.continue()"><div class="icon-alert"><i id="icon-alert" class=""></i></div><div class="alert-content"><span class="alert-text"></span></div></div></div>')
				}else {/*top center*/
					$('body').append('<div class="alerts alerts-top-center"><div class="alert animated faster " onmouseover="Alert.makePause()" onmouseout="Alert.continue()"><div class="icon-alert"><i id="icon-alert" class=""></i></div><div class="alert-content"><span class="alert-text"></span></div></div></div>')
				}

				if (Alert.params.typeSelected === 'inverted' ) {
					if (type === 'success') {/*Success*/
						document.querySelector(Alert.params.elAlert).classList.add(Alert.params.typeInverted.success)
						document.querySelector(Alert.params.elIcon).classList.add('far','fa-check-circle')
						document.querySelector("#icon-alert").classList.add('icon-alert-success-inverted')
						document.querySelector(".alert-content").classList.add('alert-content-success-inverted')
					} else if(type === 'error') {/*Error*/
						document.querySelector(Alert.params.elAlert).classList.add(Alert.params.typeInverted.error)
						document.querySelector(Alert.params.elIcon).classList.add('far','fa-times-circle')
						document.querySelector("#icon-alert").classList.add('icon-alert-error-inverted')
						document.querySelector(".alert-content").classList.add('alert-content-error-inverted')
					}else if(type === 'info'){
						document.querySelector(Alert.params.elAlert).classList.add(Alert.params.typeInverted.info)
						document.querySelector(Alert.params.elIcon).classList.add('fas','fa-info-circle')
						document.querySelector("#icon-alert").classList.add('icon-alert-info-inverted')
						document.querySelector(".alert-content").classList.add('alert-content-info-inverted')
					}else{/*warning*/
						document.querySelector(Alert.params.elAlert).classList.add(Alert.params.typeInverted.warning)
						document.querySelector(Alert.params.elIcon).classList.add('fas','fa-exclamation-triangle')
						document.querySelector("#icon-alert").classList.add('icon-alert-warning-inverted')
						document.querySelector(".alert-content").classList.add('alert-content-warning-inverted')
					}
				}else{
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
				}

				if (link ==="" || link === " ") {
					$(Alert.params.elLink).remove()
				}else{
					$('.alert-content').append('<div class="link-alert"><hr id="separator-lnk-txt"><a href="#" id="lnk-alert">Creer un locataire</a></div>')
					document.querySelector(Alert.params.elHrSepartor).style.display = 'block'
					document.querySelector(Alert.params.elDivLinkAlert).style.display = 'block'
					document.querySelector(Alert.params.elLink).style.display = 'block'
					if (Alert.params.typeSelected === 'inverted' ) {
						if (type === 'success') {/*Success*/
							document.querySelector('#lnk-alert').style.color = 'rgb(18, 182, 18)'
						} else if(type === 'error') {/*Error*/
							document.querySelector('#lnk-alert').style.color=  'rgb(204, 29, 29)'
						}else if(type === 'info'){
							document.querySelector('#lnk-alert').style.color = 'rgb(29, 119, 204)'
						}else{/*warning*/
							document.querySelector('#lnk-alert').style.color='#fb8c00'
						}
					}else{
							document.querySelector('#lnk-alert').style.color='#fff'

					}
					$(Alert.params.elLink).attr({href:link});
					$(Alert.params.elLink).text(link)
				}

				document.querySelector(Alert.params.elText).innerText = text
				// Effet de depart
				document.querySelector(Alert.params.elAlert).style.display = 'flex'
				document.querySelector(Alert.params.elAlert).classList.remove(Alert.params.transition.hide);
			    document.querySelector(Alert.params.elAlert).classList.add(Alert.params.transition.show);
			   
			    Alert.TimeOutHide = setTimeout(function() {
					document.querySelector(Alert.params.elAlert).classList.remove(Alert.params.transition.show);
					document.querySelector(Alert.params.elAlert).classList.add(Alert.params.transition.hide);
					setTimeout(function() {
					$('.alert').remove()
					Alert.params.current = 0

					}, 300);
			   }, Alert.params.time);
		    }, 500);		
	  }
	},
	playSong: (song) => {
		var audio = new Audio(song);
        audio.play();
	},
	pauseAlert: (time) => {
		 clearTimeout(time); 
	},
	makePause: () => {
		Alert.pauseAlert(Alert.TimeOutHide)
		// window.alert('Bien')
	},
	continue: () => {
		 Alert.TimeOutHide = setTimeout(function() {
					document.querySelector(Alert.params.elAlert).classList.remove(Alert.params.transition.hide);
					document.querySelector(Alert.params.elAlert).classList.add(Alert.params.transition.hide);
					setTimeout(function() {
					$('.alert').remove()
					Alert.params.current = 0
					}, 300);
			   }, Alert.params.time);
	},
	init:({
		isRing = false,
		song = Alert.params.song,
		time, 
		transitionShow = Alert.params.transition.show,
		transitionHide = Alert.params.transition.hide,
		typeSelected = Alert.params.typeSelected,
		position =  Alert.params.position
	})=>{
		Alert.params.song = song
		Alert.params.isRing = isRing
		Alert.params.time = time
		Alert.params.transition.show = transitionShow
		Alert.params.transition.hide = transitionHide
		Alert.params.typeSelected = typeSelected
		Alert.params.position = position
	},
	/*===========================================================
	=============================================================*/
}


