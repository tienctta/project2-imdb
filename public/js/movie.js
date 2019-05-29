function movie() {
	function bindEvent() {
		$(".movie_edit").click(function (e) {
			var params = {
				id: $(".id").val(),
                movieName: $(".movieName").val(),
                trailer: $(".trailer").val(),
                poster: $(".poster").val(),
                content: tinymce.get("content").getContent(),
                genre: $(".genre").val(),
                releaseDate: $(".releaseDate").val(),
                productionCo: $(".productionCo").val(),
                rate_average: $(".rate_average").val(),
				total_review: $(".total_review").val(),
			};
			var base_url = location.protocol +"//"+ document.domain +":"+ location.port;
			$.ajax({
				url: base_url + "/admin/movie/editMovie/:id",
				type: "PUT",
				data: params,
				dataType: "json",
                success: function (res) {
                	if (res && res.status_code == 200) {
                		location.reload();
                	}
                }
			});

		});

		$(".movie_delete").click(function (e) {
			var movie_id = $(this).attr("movie_id");
            var base_url = location.protocol +"//"+ document.domain +":"+ location.port;
			$.ajax({
				url: base_url + "/admin/movie/delete",
				type: "DELETE",
				data: {id: movie_id},
				dataType: "json",
                success: function (res) {
                	if (res && res.status_code == 200) {
                		location.reload();
                	}
                }
			});
		});

		
	}
	bindEvent();
}



// $(document).ready(function(){
// 	// new movie();
// 	$("#search").change(function (e){
// 		console.log("dsgdhsg");
// 		var params = {
// 			id: $(".id").val(),
// 			movieName: $(this).val(),
// 			trailer: $(".trailer").val(),
// 			poster: $(".poster").val(),
// 			content: tinymce.get("content").getContent(),
// 			genre: $(".genre").val(),
// 			releaseDate: $(".releaseDate").val(),
// 			productionCo: $(".productionCo").val(),
// 			rate_average: $(".rate_average").val(),
// 			total_review: $(".total_review").val(),
// 		};
// 		var base_url = location.protocol +"//"+ document.domain +":"+ location.port;
// 		$.ajax({
// 			url: base_url + "/ajax",
// 			type: "POST",
// 			data: params,
// 			success: function (results) {
// 				if (results.length !== 0) {
					
// 				}
// 			}
// 		});
// 	});
// });
