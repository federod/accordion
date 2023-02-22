let toggles = document.getElementsByClassName("toggle");
let contentDiv = document.getElementsByClassName("content");
let arrows = document.getElementsByClassName("arrow");
let bookmark = document.getElementsByClassName("bookmark");

for (let i = 0; i < toggles.length; i++) {
	toggles[i].addEventListener("click", () => {
		if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
			contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
			toggles[i].style.color = "#557dbe";
			arrows[i].src = './images/downarrowactive.png'
			bookmark[i].style.display = 'block'
		} else {
			contentDiv[i].style.height = "0px";
			toggles[i].style.color = "#557dbe";
			bookmark[i].style.display = 'none'
			// arrows[i].src = './images/regularArrow.png'
			arrows[i].src = './images/regularArrow.png'
		}

		for (let j = 0; j < contentDiv.length; j++) {
			if (j !== i) {
				contentDiv[j].style.height = 0;
				toggles[j].style.color = "#557dbe";
				// arrows[i].src = './images/regularArrow.png'
				arrows[j].src = './images/regularArrow.png'
				bookmark[j].style.display = 'none'
			}
		}
	});
}
