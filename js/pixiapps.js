(function() {
	
	"use strict";
	
	window.addEventListener('load', function () {
		
		var contactLink = document.getElementById("contact");
		
		contactLink.addEventListener("click", function () {
			
			var emailDomain = "pixiapps.com";
			var emailReceiver = "support";
			contactLink.setAttribute("href", "mailto:" + emailReceiver + "@" + emailDomain);
			
		}, false);
		
	}, false);
	
	window.addEventListener("scroll", function () {
		
		var sectionNav = document.getElementById("sectionNav");
		fixDiv(sectionNav, 359-64);
		
	}, false);
	
	
	function fixDiv(div, initialTopOffset) {
		
		var firstArticle = document.getElementsByClassName("article")[0];
			
		if (document.body.scrollTop > initialTopOffset) {
			div.setAttribute("style", "position:fixed; top:64px; width:100%;");
			firstArticle.setAttribute("style", "margin-top: 96px");
		}
		else {
			div.setAttribute("style", "position:relative; width:100%;");
			firstArticle.setAttribute("style", "margin-top: 32px");
		}
	}

})();