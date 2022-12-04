// $('document').ready(function () {

function searchWord() {

    var query = $('.searchInput').val();
    if (query != '') {
        var settings = {
            "url": `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`,
            "method": "GET",
            "timeout": 0,
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
            $('.mainTitle').text(response[0].word);
            $('.phonetics').text(response[0].phonetic)

            let meanings = response[0].meanings;
            var files = '<div>'
            for (let i = 0; i < meanings.length; i++) {
                files += '<div ><p class="bg-dark text-light text-end p-2">' + meanings[i].partOfSpeech + '</p>';
                var definitions = meanings[i].definitions;
                var length = definitions.length;
                for (let j = 0; j < length; j++) {
                    files += '<div><p class="shadow-sm p-2 ">'
                        + definitions[j].definition + "<br>" +
                        "<i>" + "<span>" + 'example: ' + "</span>" + definitions[j].example + " </i>" + "</p>" + '</div>'
                }
                files += '</div>'
            }
            files += '</div>'
            // console.log(files);
            $('.def').html(files);

            $('.license').html(
                `${response[0].license.name} <br> ${response[0].license.url} `
            )
        });
    } else {
        $('.mainTitle').text(' ');
        $('.phonetics').text(' ')
        $('.def').html(`<h4 class=" py-5 text-center display-4">Enter your text to search</h4>`)
    }
}





