window.onscroll = function (e) {  
	const smallScreen = document.getElementById('sticky');
	var pos =  document.documentElement.scrollTop
	console.log("pos", pos)
	if(pos < 606) {
	  goRight()
	  smallScreen.style.backgroundColor = "blue"
	}
	if(pos > 700) {
		goLeft()
		smallScreen.style.backgroundColor = "purple"
	  }  
	if(pos > 1158) {
		goRight()
		smallScreen.style.backgroundColor = "purple"
	  }  
	if(pos > 1265) {
		goLeft()
		smallScreen.style.backgroundColor = "pink"
	  }
	if(pos > 2170) {
		goRight()
		smallScreen.style.backgroundColor = "purple"
	  }
	
	if(pos > 2600) {
	  goLeft()
	  smallScreen.style.backgroundColor = "purple"
	}
  
  } 
  function goRight() {
	const el = document.getElementById('sticky');
	el.style.transform = "skew(-7deg, 5deg)"
	el.style.marginLeft = "50%"
  }
  function goLeft() {
	const el = document.getElementById('sticky');
	el.style.transform = "skew(7deg, -5deg)"
	el.style.marginLeft = "0%"
  }
  