$(document).ready(function() {
  // var myCarousel = $("#myCarousel");
  var carousel_inner = $(".carousel-inner");
  var carousel_indicators = $(".carousel-indicators");

  $.ajax({
    type: "GET",
    dataType: "json",
    url: "src/js/data.json",
    success: function(result) {
      var content = "";
      var indicators = "";
      // var carousel_indicators = "<ol class='carousel-indicators'></ol>"

      for (var i in result["items"]) {
        var img = result["items"][i].img;
        var alt = result["items"][i].alt;
        var headline = result["items"][i].headline;
        var description = result["items"][i].description;
        content +=
          '<div class="item"><img src="' +
          img +
          '" alt="' +
          alt +
          '" ><div class="carousel-caption"><h1>' +
          headline +
          "</h1><p>" +
          description +
          "</p></div></div>";

        indicators +=
          '<li data-target="#myCarousel" data-slide-to="' + i + '"></li>';
      }

      carousel_indicators.html(indicators);
      // $(".carousel-indicators li")
      //   .eq(0)
      //   .addClass("active");

      carousel_inner.html(content);
      $(".carousel-inner .item:eq(0), .carousel-indicators li:eq(0)").addClass(
        "active"
      );
    }
  });
});
