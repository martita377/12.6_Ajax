
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);


function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}


function showCountriesList(resp) {
    countriesList.empty();

    resp.forEach(function(item) {
        var smallApha3code = item.alpha3Code.toLowerCase();
        var img_url = '<img src="https://restcountries.eu/data/' + smallApha3code + '.svg" alt="Flag of: ' + item.name + '">';

        $('<li class="info">').appendTo(countriesList)
            .append($('<ul>')
                .append($('<li>').text('Country: ' + item.name))
                .append($('<li>').text('Capital: ' + item.capital))
                .append($('<li>').text('Region: ' + item.region))
                .append($('<li>').text('Aplha 3 Code: ' + item.alpha2Code))
                .append($('<li>' + img_url))
            )
        $('</li>').appendTo(countriesList)
    });

}