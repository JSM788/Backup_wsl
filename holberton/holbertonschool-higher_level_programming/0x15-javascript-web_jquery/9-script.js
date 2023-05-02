$('document').ready(function () {
  $.getJSON('https://stefanbohacek.com/hellosalut/?lang=fr',
    function (data) {
      $('DIV#hello').text(data.hello);
  });
});
