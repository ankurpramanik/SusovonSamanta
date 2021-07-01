$(document).ready(function() {
    // scrolling action

    $(' nav #scroll').click(function(event) {
        event.preventDefault();

        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1200);
    });
    $(' .about #scroll').click(function(event) {
        event.preventDefault();

        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1200);
    });
    // typing function
    $(function() {
        $('#painting_heading').typed({
            strings: ['Painting is my Passion'],
            typeSpeed: 100
        });
    });
});
