const Modal = (() => {

	var container = document.documentElement;
	var popup = document.querySelector('.modal-popup-animate');
	var cover = document.querySelector('.modal-cover');

	container.classList.add('modal-ready');

	const onDocumentKeyUp = (event) => {
		if (event.keyCode === 27) {
			hide();
		}
	}

	const onDocumentClick = (event) => {
		if (event.target === cover) {
			hide();
		}
	}

	const hide = () => {
		document.removeEventListener('keyup', onDocumentKeyUp, false);
		document.removeEventListener('click', onDocumentClick, false);
		document.removeEventListener('touchstart', onDocumentClick, false);

		container.classList.remove('modal-active');
		popup.classList.remove('modal-popup-animate');
	}

	const show = (selector) => {
		popup = document.querySelector(`[data-id="${selector}" ]`);
		popup.classList.add('modal-popup-animate');
		
		document.addEventListener('keyup', onDocumentKeyUp, false);
		document.addEventListener('click', onDocumentClick, false);
		document.addEventListener('touchstart', onDocumentClick, false);

		popup.classList.add('no-transition');

		setTimeout(() => {
			popup.classList.remove('no-transition');
			container.classList.add('modal-active');
		}, 0);
		
		return this;
	}

	return {
		show: show,
		hide: hide
	}

})();