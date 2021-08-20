$(document).ready(function () {
	var currentFloor = 2;
	var counterUp = $(".counter-up");
	var counterDown = $(".counter-down");
	var floorPath = $(".home-img path");
	var modal = $(".modal");
	var modalCloseButton = $(".modal-close-button");
	var viewFlatsButton = $(".view-flats");
	var currentFlats = 1; // переменная с текущей квартирой
  var flatsPath = $(".flats path"); // квартиры SVG
	var flatsPathItem = $(".flat-item "); // характеристики квартир

	flatsPath.on("mouseover", function () {
        currentFlats = $(this).attr("data-flats"); // записываем текущее значение в переменную с квартирами
        flatsPath.removeClass("current-flats"); // удаляем класс квартир
        flatsPathItem.removeClass("current-flats-item"); // удаляем класс характеристик квартиры
        $(`[data-flats=${currentFlats}]`).toggleClass("current-flats"); // добавляем класс квартиры
        $(`[data-item=${currentFlats}]`).toggleClass("current-flats-item"); // добавляем класс характеристик квартиры
	})

	 flatsPathItem.on("mouseover", function () {
        currentFlats = $(this).attr("data-item"); // записываем текущее значение в переменную с квартирами
        flatsPath.removeClass("current-flats"); // удаляем класс квартир
        flatsPathItem.removeClass("current-flats-item"); // удаляем класс характеристик квартиры
        $(`[data-flats=${currentFlats}]`).toggleClass("current-flats"); // добавляем класс квартиры
        $(`[data-item=${currentFlats}]`).toggleClass("current-flats-item"); // добавляем класс характеристик квартиры
    })

	//при наведении мышкой на этаж
	floorPath.on("mouseover", function () {
		currentFloor = $(this).attr("data-floor");
		floorPath.removeClass("current-floor");
		$(".counter").text(currentFloor);
	});
	viewFlatsButton.on("click", toggleModal);
		// при нажатии на этаж
		floorPath.on("click", function () {
		currentFloor = $(this).attr("data-floor");
		floorPath.removeClass("current-floor");
		$(".counter").text(currentFloor); // открываем модальное окно
		});

	floorPath.on("click", toggleModal);
	//закрываем модальное окно
	modalCloseButton.on("click", toggleModal);
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
	// функция открыть - закрыть окно
		function toggleModal () {
			modal.toggleClass("is-open");
		}
});
