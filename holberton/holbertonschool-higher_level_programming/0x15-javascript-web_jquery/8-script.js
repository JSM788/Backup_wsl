$.getJSON('https://swapi-api.hbtn.io/api/films/?format=json',
  function (data) {
    $.each(data.results, (index, element) => {
      $('UL#list_movies').append('<li>' + element.title + '</li>');
    });
  });
