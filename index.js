// $('document').ready(function () {
function searchWord() {
    var query = $('.searchInput').val();
    if (query != ' ') {
        var settings = {
            "url": `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`,
            "method": "GET",
            "timeout": 0,
        };

        $.ajax(settings).done(function (response) {
            console.log(response[0].phonetic);
        });
    }
}

// })