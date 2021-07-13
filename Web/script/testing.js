window.onscroll = function (e) {  
	const smallScreen = document.getElementById('sticky');
	var pos =  document.documentElement.scrollTop
	console.log("pos", pos)
	if(pos < 700) {
	  goRight()
	  document.getElementById('small-screen').style.backgroundColor='green';
	}
	if(pos > 900) {
		goLeft()
		document.getElementById('small-screen').style.backgroundColor='red';

	  }  
	if(pos < 1400) {
		goRight()
		document.getElementById('small-screen').style.backgroundColor='Blue';

	  }  
	if(pos > 1265) {
		goLeft()
		document.getElementById('small-screen').style.backgroundColor='purple';
	  }
	if(pos > 2170) {
		goRight()
		document.getElementById('small-screen').style.backgroundColor='yellow';
	  }
	
	if(pos > 2600) {
	  goLeft()
	  document.getElementById('small-screen').style.backgroundColor='brown';
	}
  
  } 
  function goRight() {
	const el = document.getElementById('sticky');
	el.style.transform = "skew(-7deg, 5deg)"
	el.style.marginLeft = "60%"
  }
  function goLeft() {
	const el = document.getElementById('sticky');
	el.style.transform = "skew(7deg, -5deg)"
	el.style.marginLeft = "0%"
  }
  