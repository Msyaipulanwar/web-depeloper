function Table() {
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://covid-193.p.rapidapi.com/statistics",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "6eefcc604fmshe58226163424a57p1b9ecdjsn61a98165b73c"
    }
  };

  $.ajax(settings).done(function (response) {
    $('table').find('tbody').html("")
    response.response.forEach(function (item, index) {
      $('table').find('tbody').append(`<tr>
        <td>${item.country}</td>
        <td>${(item.cases.active?item.cases.active:0).toLocaleString()}</td>
        <td>${(item.cases.recovered?item.cases.recovered:0).toLocaleString()}</td>
        <td>${(item.deaths.total?item.deaths.total:0).toLocaleString()}</td>
      </tr>`);
    })
  });
}
Table()

function dataCovid(country = "All") {
  const settingss = {
    "async": true,
    "crossDomain": true,
    "url": `https://covid-193.p.rapidapi.com/statistics?country=${country}`,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
      "x-rapidapi-key": "6eefcc604fmshe58226163424a57p1b9ecdjsn61a98165b73c"
    }
  };
  $.ajax(settingss)
    .done(function (response) {
      $('#nav-bar').text("Covid 19 Traker From " + country)
      $('#active').text("---")
      $('#newCases').text("---")
      $('#recovered').text("---")
      $('#totalCases').text("---")
      $('#test').text("---")
      $('#deaths').text("---")

      $('#active').text((response.response[0].cases.active ? response.response[0].cases.active : 0).toLocaleString())
      $('#newCases').text(parseInt(response.response[0].cases.new ? response.response[0].cases.new : 0).toLocaleString())
      $('#recovered').text((response.response[0].cases.recovered ? response.response[0].cases.recovered : 0).toLocaleString())
      $('#totalCases').text((response.response[0].cases.total ? response.response[0].cases.total : 0).toLocaleString())
      $('#test').text((response.response[0].tests.total != null ? response.response[0].tests.total : 0).toLocaleString())
      $('#deaths').text((response.response[0].deaths.total ? response.response[0].deaths.total : 0).toLocaleString())
    });
}
dataCovid()


$('button').click(function () {
  let country = document.getElementById('dataInput').value;
  dataCovid(country ? country : "All")
});