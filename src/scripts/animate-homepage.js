
if(!!window.IntersectionObserver){
	let observer = new IntersectionObserver((entries, observer) => { 
		entries.forEach(entry => {
		if(entry.isIntersecting){      
      setTimeout(() => {
        entry.target.classList.add("animated")
      }, 500)
			observer.unobserve(entry.target);
		}
		});
	}, {rootMargin: "0px 0px -200px 0px"});
	document.querySelectorAll('.svg-animated').forEach(vector => { observer.observe(vector) });
}
if(!!window.IntersectionObserver){
	let secondObserver = new IntersectionObserver((entries, secondObserver) => { 
		entries.forEach(entry => {
		if(entry.isIntersecting){
      
      setTimeout(() => {
        // entry.target.style.opacity = "1"
        entry.target.classList.remove('opacity-0')
      }, 500)
			secondObserver.unobserve(entry.target);
		}
		});
	}, {rootMargin: "0px 0px -100px 0px"});
	document.querySelectorAll('.homepage-txt').forEach(vector => { secondObserver.observe(vector) });
}

