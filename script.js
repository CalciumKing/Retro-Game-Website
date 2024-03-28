$(() => {
    $("#toTopButton").fadeOut();

    if(!document.URL.includes("home") && !document.URL.includes("contact")){
        const consoleSlide = $("#consoleSlideshow")
        const gameSlide = $("#gameSlideShow");

        const percent = $(window).innerWidth() / 3;

        $("#prevConsoleButton").click(() => {
            consoleSlide.scrollLeft(consoleSlide.scrollLeft() - percent);
        });
        $("#nextConsoleButton").click(() => {
            consoleSlide.scrollLeft(consoleSlide.scrollLeft() + percent);
        });

        $("#prevGameButton").click(() => {
            gameSlide.scrollLeft(gameSlide.scrollLeft() - percent);
        });
        $("#nextGameButton").click(() => {
            gameSlide.scrollLeft(gameSlide.scrollLeft() + percent);
        });
    }
});

$(window).on("scroll", () => {
	if ($(this).scrollTop() > $(this).height() / 5) {
		$("#toTopButton").fadeIn();
	} else {
		$("#toTopButton").fadeOut();
	}
});

function checkForm() {
    if(document.URL.includes("contact")) {
        let form = document.forms["contactForm"];
        let anyBlank = false;
        for(let i = 0; i < form.length; i++) {
            if(i == 2) {
                i += 5; // skips check boxes
            }
            if(form[i].value == "" || form[i].value == null) {
                anyBlank = true;
            }
            console.log(form[i].value); // prints all values
        }
        let boxFilledIn = false;
        for(let i = 3; i < 6; i++) {
            console.log(form[i].value) // prints all values
            if(form[i].value != "" || form[i].value != null) {
                boxFilledIn = true;
                break; // checks if at least one box is filled in
            }
        }
        if(anyBlank && !boxFilledIn) { // checks if all values are filled in and at least one box is filled in
            alert("All values must be filled in");
        }
    }
}