$(document).ready(function() {

    const oldHoldingsPageHandler = setInterval(function() {
        const negatives = $('.negative');
        const neutrals = $('.neutral');

        if (negatives.length === 0 && neutrals.length === 0) {
            clearInterval(oldHoldingsPageHandler);
        }

        negatives.addClass('positive');
        negatives.removeClass('negative');

        negatives.toArray().forEach(function(negative) {
            negative.innerHTML = negative.innerHTML.replace('-', '');
        });
    }, 100);

    const newHoldingsPageHandler = setInterval(function() {
        const negatives = $('.is-negative');

        if (negatives.length === 0) {
            clearInterval(newHoldingsPageHandler);
        }

        negatives.addClass('is-positive');
        negatives.removeClass('is-negative');

        negatives.toArray().forEach(function(negative) {
            negative.innerHTML = negative.innerHTML.replace('−', '+');
            negative.innerHTML = negative.innerHTML.replace('-', '+');
        });
    }, 1000);

});
