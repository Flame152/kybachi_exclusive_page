(() => {
	"use strict";
	function isWebp() {
		 function testWebP(callback) {
			  let webP = new Image;
			  webP.onload = webP.onerror = function() {
					callback(webP.height == 2);
			  };
			  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
		 }
		 testWebP((function(support) {
			  let className = support === true ? "webp" : "no-webp";
			  document.documentElement.classList.add(className);
		 }));
	}
	let addWindowScrollEvent = false;
	setTimeout((() => {
		 if (addWindowScrollEvent) {
			  let windowScroll = new Event("windowScroll");
			  window.addEventListener("scroll", (function(e) {
					document.dispatchEvent(windowScroll);
			  }));
		 }
	}), 0);
	document.querySelectorAll(".accordion-faq-partners__question").forEach((el => el.addEventListener("click", (() => {
		 let questions__answer = el.nextElementSibling;
		 if (questions__answer.style.maxHeight) document.querySelectorAll(".accordion-faq-partners__answet").forEach((el => el.style.maxHeight = null)); else {
			  document.querySelectorAll(".accordion-faq-partners__answet").forEach((el => el.style.maxHeight = null));
			  questions__answer.style.maxHeight = questions__answer.scrollHeight + "px";
		 }
	}))));
	document.querySelectorAll(".accordion-faq-partners__question").forEach((item => item.addEventListener("click", (() => {
		 const parent = item.parentNode;
		 if (parent.classList.contains("accordion-faq-partners__card-active")) parent.classList.remove("accordion-faq-partners__card-active"); else {
			  document.querySelectorAll(".accordion-faq-partners__card").forEach((child => child.classList.remove("accordion-faq-partners__card-active")));
			  parent.classList.add("accordion-faq-partners__card-active");
		 }
	}))));
	document.querySelectorAll(".wrapper-video").forEach((el => el.addEventListener("click", (() => {
		 let wrapperVideo = el.firstElementChild;
		 let btnStop = el.lastElementChild;
		 if (btnStop) btnStop.classList.add("btn-play_active");
		 if (wrapperVideo) {
			  wrapperVideo.controls = "controls";
			  el.classList.add("wrapper-video-active");
		 }
		 if (/Firefox|Mac68K|MacPPC|MacIntel|Macintosh|macOS|iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) wrapperVideo.play();
	}))));
	lightGallery(document.getElementById("gellery"), {
		 licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
		 speed: 500,
		 counter: false,
		 download: false,
		 getCaptionFromTitleOrAlt: false
	});
	window["FLS"] = true;
	isWebp();
})();