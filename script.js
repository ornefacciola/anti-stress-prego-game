let minutes= 0;
let seconds= 0;
let segundos=0;
let minutos=0;
let percentage = 0;
let porcentaje = 0;
let strPorcentage= 0;
let timerImg;
let increment;
let myInterval;
let theInterval;

const screen1 = document.getElementById('firstScreen');
const screen2 = document.getElementById('secondScreen');
const screen3 = document.getElementById('thirdScreen');
const screen4 = document.getElementById('fourthScreen');
const screen5 = document.getElementById('fifthScreen');
const stScreen =  document.getElementById('stScreen');
const firstButton = document.getElementById('firstButton');
const stButton =  document.getElementById('stButton');
const ndScreen = document.getElementById('ndScreen')
const rdScreen = document.getElementById('rdScreen');
const fourthScreen = document.getElementById('fo_screen');
const switchBtn2 = document.getElementById('switch-btn2');
// add event listeners to the buttons
firstButton.addEventListener('click', () => {
	firstButton.style.backgroundColor = "#a3182f";
	firstButton.style.transform= "translateY(4px)";
	
	setTimeout(() => {
		screen1.style.display = 'none';
		screen2.style.display = 'block';
		showStart();
	}, 300);
});

stButton.addEventListener('click', () => {
	stButton.style.backgroundColor = "#a3182f";
	stButton.style.transform= "translateY(4px)";
	
	setTimeout(() => {
		stScreen.style.display = 'none';
		ndScreen.style.display = 'block';
		shStart();
	}, 300);
});

function shStart() {
	const container = document.querySelector(".imgcont");
	const mockup= document.querySelector(".changingText");

    const three= document.createElement("div");
	three.classList.add("text");
	three.innerText = "3";
	three.style.color="black";
	three.style.fontFamily="Major Mono Display, monospace"
	mockup.appendChild(three);

	setTimeout(function() {
		three.remove();
		mockup.appendChild(two);
	}, 1000);

	const two= document.createElement("div");
	two.classList.add("text");
	two.innerText = "2";
	two.style.color= 'black';
	two.style.fontFamily= "Major Mono Display, monospace";


	setTimeout(function() {
		two.remove();
		mockup.appendChild(one);
	}, 2000);

	const one= document.createElement("div");
    one.classList.add("text");
	one.innerText = "1";
	one.style.color= 'black';
	one.style.fontFamily= "Major Mono Display, monospace";

	setTimeout(function() {
		one.remove();
		mockup.appendChild(go);
	}, 3000);
	
	const go= document.createElement("div");
	go.classList.add("text");
	go.innerText = "GO!";
	go.style.position = "absolute";
	go.style.zIndex= '1';
	go.style.color= 'black';
	if ($(window).width() < 1500) {
		go.style.left="80px" 
	 }
	 else {
		go.style.left="110px" 
	 }
	go.style.fontFamily= "Major Mono Display, monospace";
	
	const text = document.querySelector(".click");
	setTimeout(function() {
		go.remove();
		container.style.display="none";
        text.style.display="none";
        ndScreen.style.display = 'none';
        loadSecondPage()
		startAct();
	}, 6000);
}


/* SHOW ZOMBIE 3...2...1*/


function showStart() {
	//ZOMBIE CONTAINER
	const container1 = document.querySelector(".imgc");

    const tres= document.createElement("div");
	tres.classList.add("text");
	tres.innerText = "3";
	tres.style.position = "absolute";
	tres.style.zIndex= '1';
	tres.style.color= 'black';
	tres.style.fontSize= "100px"
	tres.style.top= "63%"
	tres.style.left="-4%" 
	tres.style.fontFamily= "Major Mono Display, monospace";
	container1.appendChild(tres);

	
	setTimeout(function() {
		tres.remove();
		container1.appendChild(dos);
	}, 1000);
	

	const dos= document.createElement("div");
	dos.classList.add("text");
	dos.innerText = "2";
	dos.style.position = "absolute";
	dos.style.zIndex= '1';
	dos.style.color= 'black';
	dos.style.fontSize= "100px"
	dos.style.top= "63%"
	dos.style.left="-4%" 
	dos.style.fontFamily= "Major Mono Display, monospace";

	setTimeout(function() {
		dos.remove();
		container1.appendChild(uno);
	}, 2000);

	const uno= document.createElement("div");
	uno.classList.add("text");
	uno.innerText = "1";
	uno.style.position = "absolute";
	uno.style.zIndex= '1';
	uno.style.color= 'black';
	uno.style.fontSize= "100px"
	uno.style.top= "63%"
	uno.style.left="-4%" 
	uno.style.fontFamily= "Major Mono Display, monospace";


	setTimeout(function() {
		uno.remove();
		container1.appendChild(go);
	}, 3000);
	
	const go= document.createElement("div");
	go.classList.add("text");
	go.innerText = "GO!";
	go.style.position = "absolute";
	go.style.zIndex= '1';
	go.style.color= 'black';
	go.style.fontSize= "100px"
	go.style.top= "63%"
	go.style.left="-1%" 
	go.style.fontFamily= "Major Mono Display, monospace";
	
	const texto = document.querySelector(".click");
	setTimeout(function() {
		go.remove();
		container1.style.display="none";
        texto.style.display="none";
        screen2.style.display = 'none';
        screen3.style.display = "block";
		startActivated()
		
	}, 6000);


}
/* change arrow color*/


/************* CAROUSEL **************/
const carouselImages = document.querySelector('.carousel-images');
const carouselButtonLeft = document.querySelector('.carousel-button-left');
const carouselButtonRight = document.querySelector('.carousel-button-right');

let imageIndex = 0;
const imagesPerSlide = 10;
const imageWidth = 25; // 5 images per slide * 20% width per image
let isClickingImage = false;
let touchStartX = 0;
let touchEndX = 0;

function moveCarousel(direction) {
  const increment = direction === 'left' ? -5 : 5;
  imageIndex += increment * imagesPerSlide;
  if (imageIndex < 0) {
    imageIndex = 0;
  } else if (imageIndex > 240 - imageWidth) {
    imageIndex = 240 - imageWidth;
  }
  carouselImages.style.transform = `translateX(-${imageIndex}%)`;
}

carouselButtonLeft.addEventListener('click', () => moveCarousel('left'), carouselButtonLeft.style.color="grey");
carouselButtonRight.addEventListener('click', () => moveCarousel('right'), carouselButtonRight.style.color="grey");

carouselImages.addEventListener('touchstart', handleTouchStart);
carouselImages.addEventListener('touchmove', handleTouchMove);
carouselImages.addEventListener('touchend', handleTouchEnd);
carouselImages.addEventListener('mousedown', handleMouseDown);
carouselImages.addEventListener('mouseup', handleMouseUp);

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
  isClickingImage = false;
}

function handleTouchMove(event) {
  if (!isClickingImage) {
    touchEndX = event.touches[0].clientX;
    const horizontalDelta = touchEndX - touchStartX;
    if (Math.abs(horizontalDelta) > 25) { // Only move carousel if horizontal movement is greater than 10 pixels
		const increment = horizontalDelta / 30;
		if (increment < 0) {
        moveCarousel('right');
      } else {
        moveCarousel('left');
      }
      touchStartX = touchEndX;
    }
  }
}

function handleTouchEnd(event) {
  touchStartX = 0;
  touchEndX = 0;
}

function handleMouseDown(event) {
  isClickingImage = true;
}

function handleMouseUp(event) {
  isClickingImage = false;
}


/******** IMAGE TRAILING ***************/
function selectImage(image) {
	const capture=document.getElementById("white")
	image.style.filter = "opacity(50%)";
	var captureHeight = capture.clientHeight;
	var captureWidth = capture.clientWidth;
	var minX = capture.offsetLeft;
	var minY = capture.offsetTop;
	var maxX= minX + captureWidth * 0.8;
	var maxY= minY + captureHeight * 0.7;
	setTimeout(function(){
		image.style.filter = "none";
	},500)

  

	capture.addEventListener('touchmove', function(event) {

		var x = event.pageX;
		var y = event.pageY;

		let img = document.createElement("img");
		img.src= image.src;

		if (y >= minY && y < maxY && x >= minX && x < maxX) {

			img.style.position = 'absolute';
			img.style.left = x  + 'px';
			img.style.top = y + 'px';
			capture.appendChild(img);
		}
	});
}

/*
capture1.addEventListener('mouseenter', function() {
	increment=setInterval(() => {
		strPorcentage++;
		document.getElementById("s-number").innerHTML="-"+strPorcentage+"%";
		strBarras(strPorcentage)
		return strPorcentage;
	},1500)
})
capture1.addEventListener('mouseleave', function() {
	clearInterval(increment)
	document.getElementById("s-number").innerHTML="-"+strPorcentage+"%";
})
 */
function drawImages(image) {
	var capture1 = document.getElementById("w-board");
	var captureHeight = capture1.clientHeight;
	var captureWidth = capture1.clientWidth;
	var maxX= captureWidth * 1.09
	var maxY= captureHeight * 1.03


	capture1.addEventListener("mouseenter", startStress);
    capture1.addEventListener("mouseleave", stopStress);
	capture1.addEventListener('mousemove', function(event) {

		var x = event.pageX;
		var y = event.pageY;

		let img = document.createElement("img");
		img.src= image.src;

		if (y < maxY && x < maxX) {

			img.style.position = 'absolute';
			img.style.left = x  + 'px';
			img.style.top = y + 'px';
			
			capture1.appendChild(img);
			count++;
		}
	});
}


/******************* TIMER ****************/

function updateTimer() {
	seconds++;
	document.getElementById("t-number").innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
	if (seconds === 25){
		myStopFunction()
		seconds = 0;
		document.getElementById("t-number").innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
		if (value < 10){
			youFailed();
		} else {
			screen3.style.display="none"
			screen4.style.display="block";
			checkResults(value,percentage);
		}
	
	}
}

//sets the timer when called
function startActivated() {
	clearInterval(myInterval);
	myInterval=setInterval(updateTimer, 1000);
} 
//stops the timer
function myStopFunction() {
	clearInterval(myInterval);
}

function startTimer() {
	segundos++;
	document.getElementById("ti-number").innerHTML = minutos + ":" + (segundos < 10 ? "0" : "") + segundos;
	if (segundos === 25){
		stopFunction()
		segundos = 0;
		document.getElementById("ti-number").innerHTML = minutos + ":" + (segundos < 10 ? "0" : "") + segundos;
		if(strPorcentage < 10) {
			failed()
		} else if (strPorcentage >= 10) {
			loadSecondPage() 
			setTimeout(function(){
				const resultado_dopamina=document.querySelector(".resultado_dopamina")
				const resultado_stress=document.querySelector(".resultado_stress")
				const fourth_screen=document.getElementById("fo_screen")
				fourth_screen.style.display="block";
				const main= document.querySelector(".main")
				main.style.display="none";
				const top=document.querySelector(".top")
				top.style.display="none";
				resultado_dopamina.innerHTML=`${porcentaje}`+"%";
				resultado_stress.innerHTML="-"+`${strPorcentage}`+"%";
			},10)
		}
	}
}

//sets the timer when called
function startAct() {
	clearInterval(theInterval);
	theInterval=setInterval(startTimer, 1000);
} 
//stops the timer
function stopFunction() {
	clearInterval(theInterval);
}

/*********DOPAMINE ***********/
function increaseDopamine() {
	percentage+=5;
	document.getElementById("d-number").innerHTML=percentage + "%";
	dopamineBarras(percentage)
	return percentage;
}

function dopamineBarras(percentage) {
	if (percentage === 5) {
		document.getElementById("b1").style.backgroundColor = "white";
	} else if (percentage === 10) {
		document.getElementById("b1"&&"b2").style.backgroundColor = "white";
	} else if (percentage === 15) {
		document.getElementById("b1"&&"b2" && "b3").style.backgroundColor = "white";
	} else if (percentage === 20) {
		document.getElementById("b1"&&"b2" && "b3" && 'b4').style.backgroundColor = "white";
	} else if (percentage === 25) {
		document.getElementById("b1"&&"b2" && "b3" && 'b4' && 'b5').style.backgroundColor = "white";
	} else if (percentage === 30) {
		document.getElementById("b1"&&"b2" && "b3" && 'b4' && 'b5'&& 'b6').style.backgroundColor = "white";
	} else if (percentage < 5) {
		document.getElementById("b1"&&"b2" && "b3" && 'b4' && 'b5'&& 'b6').style.backgroundColor = "black";
	}
}

function newDopamine(){
	const bars = document.querySelectorAll(".barra");
	for (let i = 0; i < bars.length; i++) {
		bars[i].style.backgroundColor = "black";
	}
}
//desktop

function increaseDop() {
	porcentaje+=5;
	document.getElementById("dop-number").innerHTML=porcentaje + "%";
	dopBarras(porcentaje)
	return porcentaje;
}
function dopBarras(porcentaje) {
	if (porcentaje === 5) {
		document.getElementById("l1").style.backgroundColor = "white";
	} else if (porcentaje === 10) {
		document.getElementById("l1"&&"l2").style.backgroundColor = "white";
	} else if (porcentaje === 15) {
		document.getElementById("l1"&&"l2" && "l3").style.backgroundColor = "white";
	} else if (porcentaje === 20) {
		document.getElementById("l1"&&"l2" && "l3" && 'l4').style.backgroundColor = "white";
	} else if (porcentaje === 25) {
		document.getElementById("l1"&&"l2" && "l3" && 'l4' && 'l5').style.backgroundColor = "white";
	} else if (porcentaje === 30) {
		document.getElementById("l1"&&"l2" && "l3" && 'l4' && 'l5'&& 'l6').style.backgroundColor = "white";
	}
}

function newDopamineBarras(){
	const bars = document.querySelectorAll(".linea");
	for (let i = 0; i < bars.length; i++) {
		bars[i].style.backgroundColor = "black";
	}
}

/*********** STRESSSSSSSSS *****/
const div = document.getElementById("white");
let value = 0;
let timerId;

div.addEventListener("touchstart", function(event) {
  clearInterval(timerId);
  timerId = setInterval(function() {
    value += 1;
    document.getElementById("l-number").innerHTML="-"+value+"%";
	stressBarras(value)
	return value;
  }, 1250);
});


div.addEventListener("touchend", function(event) {
  clearInterval(timerId);
});


function stressBarras(porcentaje){
	if (porcentaje === 2) {
		document.getElementById("c1").style.backgroundColor = "white";
	} else if (porcentaje === 4) {
		document.getElementById("c1"&&"c2").style.backgroundColor = "white";
	} else if (porcentaje === 6) {
		document.getElementById("c1"&&"c2" && "c3").style.backgroundColor = "white";
	} else if (porcentaje === 8) {
		document.getElementById("c1"&&"c2" && "c3" && 'c4').style.backgroundColor = "white";
	} else if (porcentaje === 9) {
		document.getElementById("c1"&&"c2" && "c3" && 'c4' && 'c5').style.backgroundColor = "white";
	} else if (porcentaje === 10) {
		document.getElementById("c1"&&"c2" && "c3" && 'c4' && 'c5'&& 'c6').style.backgroundColor = "white";
	}
}

function newStress(){
	const cuads = document.querySelectorAll(".cuadrado");
	for (let i = 0; i < cuads.length; i++) {
		cuads[i].style.backgroundColor = "black";
	}
}

function startStress() {
	increment=setInterval(() => {
		strPorcentage++;
		document.getElementById("s-number").innerHTML="-"+strPorcentage+"%";
		strBarras(strPorcentage)
		return strPorcentage;
	},1250)
}


function stopStress() {
	clearInterval(increment)
	document.getElementById("s-number").innerHTML="-"+strPorcentage+"%";
}

function strBarras(strPorcentage){
	if (strPorcentage === 2) {
		document.getElementById("s1").style.backgroundColor = "white";
	} else if (strPorcentage === 4) {
		document.getElementById("s1"&&"s2").style.backgroundColor = "white";
	} else if (strPorcentage === 6) {
		document.getElementById("s1"&&"s2" && "s3").style.backgroundColor = "white";
	} else if (strPorcentage === 8) {
		document.getElementById("s1"&&"s2" && "s3" && 's4').style.backgroundColor = "white";
	} else if (strPorcentage === 9) {
		document.getElementById("s1"&&"s2" && "s3" && 's4' && 's5').style.backgroundColor = "white";
	} else if (strPorcentage === 10) {
		document.getElementById("s1"&&"s2" && "s3" && 's4' && 's5'&& 's6').style.backgroundColor = "white";
	}
}

function newStressBarras(){
	const cuads = document.querySelectorAll(".square");
	for (let i = 0; i < cuads.length; i++) {
		cuads[i].style.backgroundColor = "black";
	}
}

function clearBoard() {
	var capture = document.getElementById("white");
	if (capture.childElementCount > 0) {
		capture.innerHTML = "";			
}}

function clear() {
	var capture = document.getElementById("w-board");
	
	if (capture.childElementCount > 0) {
		capture.innerHTML = "";			
}}

function youFailed() {
	const fondo= document.createElement("div");
	fondo.style.position = 'fixed';
	fondo.style.top = '0';
	fondo.style.left = '0';
	fondo.style.width = '100vw';
	fondo.style.height = '100vh';
	fondo.style.backgroundColor = 'black';
	fondo.style.filter = "opacity(90%)"
	fondo.style.color = 'white';
	fondo.style.zIndex = '9999';
	fondo.style.display = 'flex';
	fondo.style.alignItems = 'center';
	fondo.style.justifyContent = 'center';

	document.body.appendChild(fondo);

	const dont=document.createElement("div")
	dont.classList.add("text");
	dont.innerText = "don't let";
	dont.style.position="absolute";
	dont.style.color="white"
	dont.style.fontSize="30px";
	dont.style.zIndex= '9999';
	dont.style.top= "36%"
	dont.style.left="0%" 
	dont.style.fontFamily="Major Mono Display, monospace";
	
	document.body.appendChild(dont);

	const str=document.createElement("div")
	str.classList.add("text");
	str.innerText = "STRESS";
	str.style.position="absolute";
	str.style.color="#C51C39"
	str.style.fontSize="65px";
	str.style.zIndex= '9999';
	str.style.top= "39%"
	str.style.left="0%" 
	str.style.fontFamily="Major Mono Display, monospace";

	document.body.appendChild(str);

	const kill=document.createElement("div")
	kill.classList.add("text");
	kill.innerText = "kill you";
	kill.style.position="absolute";
	kill.style.color="white"
	kill.style.fontSize="43px";
	kill.style.zIndex= '9999';
	kill.style.top= "49%"
	kill.style.left="0%" 
	kill.style.fontFamily="Major Mono Display, monospace";

	document.body.appendChild(kill);

	const button = document.createElement("button");
	button.innerHTML = "try again";
	button.style.position = "absolute";
	button.style.color = "black";
	button.style.backgroundColor = "#C51C39";
	button.style.border="none";
	button.style.borderRadius= '10px';
	button.style.zIndex= '9999';
	button.style.fontSize= "18px"
	button.style.top= "60%"
	button.style.left="30%" 
	button.style.fontFamily= "Major Mono Display, monospace";
	
	document.body.appendChild(button);

	const calavera = new Image();
	calavera.src = "calavera.png";
	calavera.style.position = "absolute";
	calavera.style.color = "black";
	calavera.style.zIndex= '9999';
	calavera.style.top= "20%"
	calavera.style.left="41%" 

	document.body.appendChild(calavera);

	const mano = new Image();
	mano.src = "zombie-hand-hi-res 13.png";
	mano.style.position = "absolute";
	mano.style.color = "black";
	mano.style.zIndex= '9999';
	mano.style.bottom= "0%"
	mano.style.left="31%" 
	mano.style.height="31%"

	document.body.appendChild(mano);
	value=0;
	percentage=0;
	button.addEventListener("click", function() {
		newStress();
		newDopamine();
		document.body.removeChild(fondo);
		document.body.removeChild(dont);
		document.body.removeChild(str);
		document.body.removeChild(kill);
		document.body.removeChild(button);
		document.body.removeChild(calavera);
		document.body.removeChild(mano);
		clearBoard()
		document.getElementById("l-number").innerHTML="-"+value+"%";
		document.getElementById("d-number").innerHTML=percentage + "%";
		setTimeout(function () {
			startActivated()
		}, 1000)
	});
	
}

function failed() {
	const fondo= document.createElement("div");
	fondo.style.position = 'fixed';
	fondo.style.top = '0';
	fondo.style.left = '0';
	fondo.style.width = '100vw';
	fondo.style.height = '100vh';
	fondo.style.backgroundColor = 'black';
	fondo.style.filter = "opacity(90%)"
	fondo.style.color = 'white';
	fondo.style.zIndex = '9000';
	fondo.style.display = 'flex';
	fondo.style.alignItems = 'center';
	fondo.style.justifyContent = 'center';

	document.body.appendChild(fondo);

	const failed_screen=document.querySelector(".failedScreen")
	failed_screen.style.display="block";
	const button=document.querySelector(".buttonT")
	strPorcentage=0;
	porcentaje=0;

	button.addEventListener('click', function() {
		document.body.removeChild(fondo);
		loadSecondPage() 
		startAct()
	})
}


function checkResults(value,percentage) {
	const dresults=document.getElementById("dnumber")
	const sresults=document.getElementById("snumber")

	const nbutton= document.getElementById("nextbutton");

	const dr= document.createElement("div");
	dr.classList.add("text");
	dr.style.fontFamily="Major Mono Display, monospace";
	dr.style.fontSize="2em";
	dr.style.justifyContent="flex";
	dr.style.alignItems="right"

	dr.style.color="black"
	dr.style.marginLeft="52%"
	dr.style.marginTop="5px"
	dr.innerText =`${percentage}`+"%";
	dresults.appendChild(dr);

	const sr= document.createElement("div");
	sr.classList.add("text");
	sr.style.fontFamily="Major Mono Display, monospace";
	sr.style.fontSize="2em";
	sr.style.justifyContent="flex";
	sr.style.alignItems="right"
	sr.style.marginLeft="48%"
	sr.style.color="black"
	sr.style.marginTop="5px"
	sr.innerText ="-"+`${value}`+"%";
	sresults.appendChild(sr);

	nbutton.addEventListener("click", function(){
		nbutton.style.backgroundColor = "#a3182f";
		nbutton.style.transform= "translateY(4px)";
		
		dresults.remove(dr);
		sresults.remove(sr);

		screen4.style.display="none";
		screen5.style.display="block";

		setTimeout(() => {
			animatePhoneHand();
		}, 1000);

		setTimeout(() => {
			resetPhoneHand();
		}, 3000);
		setTimeout(() => {
			showFries()
		}, 4500);
	})
}


/* RELOADS THE WHOLE GAME */
function showFries(){
	const pagain=document.getElementById('againbutton')
	
	pagain.addEventListener("click", function () {
		pagain.style.backgroundColor = "#a3182f";
		pagain.style.transform= "translateY(4px)";

		setTimeout(() => {
			document.location.reload(true)
		}, 500);
	})
}


/* MOBILE HANDFRY ANIMATION */
const hand = document.querySelector('.z_hand');
const fries = document.querySelector('.fries');
const star = document.querySelector(".star");

function animatePhoneHand() {
	hand.style.transform="translateX(-50%) translateY(-50%)";
	hand.style.transition= "all 1.2s ease-in";
	fries.style.transform="translateX(-50%) translateY(-90%)";
	fries.style.transition= "all 1.2s ease-in";
	star.style.transform="translateX(-50%) translateY(-100%)";
	star.style.transition= "all 1.2s ease-in";
}

function resetPhoneHand() {
	hand.style.transform = 'translateX(-50%) translateY(150%)';
	hand.style.transition= "all 2s ease-out";
	hand.style.bottom= "-250px";
}

function playAgain(button){
	button.style.backgroundColor = "#a3182f";
	button.style.transform= "translateY(4px)";

	setTimeout(() => {
		document.location.reload(true)
	}, 500);
}

function showPrize() {
	const fifth=document.querySelector(".fithScreen")
	const fourth_screen=document.getElementById("fo_screen")
	fourth_screen.style.display="none";
	fifth.style.display="block";
	showAnimation();
}


/* ********** desktop handfry animation *******/ 
function showAnimation() {
	const handie=document.querySelector(".z_hand")
	const fries=document.querySelector(".fries")
	
	if ($(window).width() < 1500) {
		setTimeout(function () {
			handie.style.transform="translateX(-50%) translateY(20%)";
			handie.style.transition= "all 0.8s ease-in";
			fries.style.transform="translateX(-50%) translateY(10%)";
			fries.style.transition= "all 0.8s ease-in";
		})
		setTimeout(function () {
			handie.style.transform = 'translateX(-50%) translateY(150%)';
			handie.style.transition= "all 2s ease-out";
			handie.style.bottom= "-250px";
		},2000)
	 }
	 else {
		setTimeout(function () {
			handie.style.transform="translateX(-50%) translateY(10%)";
			handie.style.transition= "all 1s ease-in";
			fries.style.transform="translateX(-50%) translateY(-30%)";
			fries.style.transition= "all 0.9s ease-in";
		})
		setTimeout(function () {
			handie.style.transform = 'translateX(-50%) translateY(150%)';
			handie.style.transition= "all 2s ease-out";
			handie.style.bottom= "-250px";
		},2000)
	 }
	 
	 
	 
	 
	}
/*loading old HTML*/	
function loadSecondPage() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		document.getElementById("dsktop").innerHTML = this.responseText;
		}
	};
	xhr.open("GET", "mainPage.html", true);
	xhr.send();
}

function loadThirdPage() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		document.getElementById("rdScreen").innerHTML = this.responseText;
		}
	};
	xhr.open("GET", "resultsPage.html", true);
	xhr.send();
}

function showFifth() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		document.getElementById("fo_screen").innerHTML = this.responseText;
		}
	};
	xhr.open("GET", "friesPage.html", true);
	xhr.send();
}