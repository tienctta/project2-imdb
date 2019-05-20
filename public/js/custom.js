$(document).ready(function(){
    $('#add-comment').click(function(){
        var commentValue = $("#comment-value").val();
        var idMovie = $("#movie").attr('data-id-movie');
        alert(commentValue + idMovie);

    });
});

