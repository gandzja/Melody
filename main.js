$(document).ready(function () {
	var currentFloor = 2;
	var counterUp = $(".counter-up");
	var counterDown = $(".counter-down");
	var floorPath = $(".home-img path")
	//при наведении мышкой на этаж
	floorPath.on("mouseover", function () {
		currentFloor = $(this).attr("data-floor");
		floorPath.removeClass("current-floor");
		$(".counter").text(currentFloor);
	});
		// при нажатии на этаж
		floorPath.on("click", function () {
		currentFloor = $(this).attr("data-floor");
		floorPath.removeClass("current-floor");
		$(".counter").text(currentFloor);
	});
	// при нажатии кнопки вверх
	counterUp.on("click", function () {
		if (currentFloor < 18) {
			currentFloor++;
			usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
			$(".counter").text(usCurrentFloor);
			floorPath.removeClass("current-floor");
			$(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
		}
	});
	//при нажатии кнопки вниз
		counterDown.on("click", function () {
		if (currentFloor > 2) {
			currentFloor--;
			usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
			$(".counter").text(usCurrentFloor);
			floorPath.removeClass("current-floor");
			$(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
		}
	});
});
