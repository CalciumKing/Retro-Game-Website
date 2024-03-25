$(() => {
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
});