const APPID = "d11650cfd1615e9c8be9d3a41cb772a2"
const API_URL = "https://api.openweathermap.org/data/2.5/weather"

$(function () {
  $("#submit-button").click(function (e) {
    const city = $("#city").val()
    const country = $("#country").val()

    $.get(API_URL, {
      q: `${city},${country}`,
      mode: "html",
      APPID: APPID,
    }).done(function (data) {
      $("#results").removeClass("hidden")
      $("#results").html(data)
    })
  })
})
