$(document).ready(function() {

    setInterval(function() {
        const negatives = $('.negative');

        negatives.addClass('positive');
        negatives.removeClass('negative');

        negatives.toArray().forEach(function(negative) {
            negative.innerHTML = negative.innerHTML.replace('-', '');
        });
    }, 100);

    setInterval(function() {
        const negatives = $('.is-negative');

        negatives.addClass('is-positive');
        negatives.removeClass('is-negative');

        negatives.toArray().forEach(function(negative) {
            negative.innerHTML = negative.innerHTML.replace('−', '+');
            negative.innerHTML = negative.innerHTML.replace('-', '+');
        });
    }, 100);

});
