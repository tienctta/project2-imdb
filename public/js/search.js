$(document).ready(function(){
	$("#results").hide();
	$("#poster").hide();
	$("#movieName").hide();
	$("#rate_average").hide();
	$("#heart").hide();
	$("#id").hide();
	$("#search").change(function (e){


		var params = {
			movieName: $(this).val(),
            
		}
		// var base_url = location.protocol +"//"+ document.domain +":"+ location.port;
		$.ajax({
			url: "/admin/ajax",
			type: "POST",
			data: params,
			success: function (results) {
				$("#movies").hide();
				$("#results").show();
				$("#poster").show();
				$("#movieName").show();
				$("#rate_average").show();
				$("#heart").show();
				$("#id").show();
				console.log(results);
				if (results.length !== 0) {
					var id = results[0].id;
					var poster = results[0].poster;
					var movieName = results[0].movieName;
					var genre = results[0].genre;
					var rate_average = results[0].rate_average;

					$("#poster").attr("src", poster);
					$("#movieName").text(movieName);
					$("#genre").text(genre);
					$("#rate_average").text(rate_average);
					$("#id").attr("href","/admin/movieDetails/"+id);
				}
			}
		});
	});
});