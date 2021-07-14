document.addEventListener("DOMContentLoaded", () => {
	let options = {
	  root: null,
	  rootMargin: "-200px -50px",
	  threshold: 0.05
	};
	let observer = new IntersectionObserver(beTouching, options);
	document.querySelectorAll(".container p").forEach(p => {
	  observer.observe(p);
	  console.log("watching", p.textContent);
	});
	document.querySelectorAll(".container h1").forEach(h1 => {
		observer.observe(h1);
		console.log("watching", h1.textContent);
	});
  });
	  function beTouching(entries, ob) {
        //entries all 6 paragraphs
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log("intersecting");
            console.log(entry.target);
            //console.log(entry.time, entry.intersectionRatio);
            entry.target.classList.add("active");
            //ob.unobserve(entry.target);
          } else {
            entry.target.classList.remove("active");
          }
        });
      }