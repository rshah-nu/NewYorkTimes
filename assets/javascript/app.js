
$("#submitbtn").on("click", function(event) {
  event.preventDefault();
  var searchTerm = $("#search-term").val();

  var numberOfRecord = $("#numb").val();

  var startYear = $("#start-year").val();

  var endYear = $("#end-year").val();
  apiCall(searchTerm, numberOfRecord, startYear, endYear);

});

    function apiCall(searchTerm, numOfRecs, startYear, endYear){
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
          'api-key': "3934381f25c348339a5b2b6e930d8978",
          'q': searchTerm,
          'begin_date': startYear +'0101',
          'end_date': endYear + '0101'
        });
        $.ajax({
          url: url,
          method: 'GET',
        })
        .done(function(result) {
          console.log(response.docs[1]);
          $("#container-panel").html(response.docs[1]);
        })
        .fail(function(err) {
            console.log(err);
        });
    };
