var express = require ("express");
var router = express.Router();
var user_md = require("../models/user");
var movie_md = require("../models/movie");
var helper = require("../helpers/helper");


router.get("/", function (req, res) {

    if (req.session.user) {
        var data = movie_md.getAllMovie();
        data.then(function (movie) {
            var data = {
                movie: movie,
                error: false
            };
            res.render("admin/home", { data: data });
        }).catch(function (err) {
            res.render("admin/home", { data: { error: "Error when get movie from db" } });
        });
    } else {
        res.redirect("/admin/signin");
    }



});
router.get("/signup", function(req, res){
    res.render("signup", {data: {} });
});
router.post("/signup", function(req, res) {
    var user = req.body;
    console.log(user.userName);
    if (user.userName.trim().length == 0){
        console.log("retype username");
        res.render("signup", {data: {error: "username is not null"} });
    }
    

    if (user.email.trim().length == 0){
        console.log("retype email");
        res.render("signup", {data: { error: "Email is not null"} });
    }



    if (user.pw.trim().length == 0){
        res.render ("signup", {data : {error: "Password is not null" } });
    }



    if (user.pw != user.repw && user.pw.trim().length != 0){
        res.render("signup", {data: { error: "Password is not same as Retype password"} });
    }

    if (user.fullName.trim().length == 0){
        console.log("retype");
        res.render ("signup", {data: {error: "fullName is not null"} });
    }
    // insert to database
    user_insert = {
        userName: user.userName,
        email: user.email,
        fullName: user.fullName,
        pw: user.pw
    };

    if (user_insert.email.length != 0 && user.pw.length != 0 && user.pw == user.repw) {

        var data = user_md.getUserByEmail (user.email);  // get by EMail or userName ??
        data.then(function(users) {
            var lengthUser = users.length;
            if (lengthUser == 0){
                var result = user_md.addUser(user_insert);
                result.then(function(data){
                    res.redirect("/admin/signin");
                }).catch(function(err) {
                    res.render("signup", {data: {error: "Could not insert User to database"} });
                });
            }else{
                res.render("signup", {data: {error: "Email is exist"} });
            }
        });
    }
});


router.get("/signin", function(req, res){
    res.render("signin", {data: {} });
});
router.post("/signin", function(req, res) {
    var params = req.body;

    if (params.email.trim().length == 0) {
        res.render("signin", { data: { error: "Email is not null" } });
    } else {
        var data = user_md.getUserByEmail(params.email);
        if (data) {
            data.then(function(users) {
                var user = users[0];
                if (users.length == 0) {
                    res.render("signin", { data: { error: "Email is not exist" } });
                }
                console.log(params.pw);
                console.log(user.pw);
                if (params.pw != user.pw) {
                    res.render("signin", { data: { error: "Password is not exactly" } });
                } else {
                    
                    req.session.user = user;
                    console.log(req.session.user);
                    res.redirect("imdbclone"); // ???
                }
            });
        }
    }
});

router.get("/imdbclone", function(req, res) {
    //if(res.session.user) {
        var data = movie_md.getAllMovie();
        data.then(function(movies){
            var data = {
                movies: movies,
                error: false
            }
            //console.log(data);
            res.render("imdbclone", {data: data, movies: movies});
        }).catch(function(err){
            var data = {
                error: "Could not get movie"
            }
            res.render("imdbclone", {data: data});
        });
    // }else {
    //     res.redirect("admin/signin");
    // }
    
});


router.get("/movieDetails/:id", function(req, res) {
    //if (req.session.user) {
        var params = req.params;
        var id = params.id;
        var data = movie_md.getMovieById(id);
        if (data) {
            data.then(function(movies) {
                var movie = movies[0];
                var data = {
                    movie: movie,
                    error: false
                };
                res.render("movieDetails", { data: data });
            }).catch(function(err) {
                var data = {
                    error: "Could not get Movie"
                };
                res.render("movieDetails", { data: data });
            });
        } else {
            var data = {
                error: "Could not get Movie"
            };
            res.render("movieDetails", { data: data });
        }
    // } else {
    //     res.redirect("/admin/signin");
    // }
});

router.get("/movie/addMovie", function(req, res) {
    //if (res.session.user) {
        res.render("admin/movie/addMovie", { data: {} });
    // } else {
    //     res.redirect("signin");
    // }
});

router.post("/movie/addMovie", function(req, res) {
    var params = req.body;
    if (params.movieName.trim().length == 0) {
        var data ={
            error: "please enter a MovieName"
        };
        res.render("admin/movie/addMovie", {data: data});
    } else {
        var movie = {
            movieName: params.movieName,
            trailer: params.trailer,
            poster: params.poster,
            content: params.content,
            genre: params.genre,
            releaseDate: params.releaseDate,
            productionCo: params.productionCo,
            rate_average: params.rate_average,
            total_review: params.total_review
        };
        // console.log(movie);
        
        var data = movie_md.addMovie(movie);
        // console.log(data);
        data.then(function(data) {
            res.redirect("/admin");
        }).catch(function(err){
            var data = {
                error: "Could not add new movie"
            };
            res.render("admin/movie/addMovie", {data: data});
        });

    }

    // so sanh cac truong trong bang
});

router.get("/movie", function(res, req){
    //if (req.session.user) {
        res.redirect("/admin");
    // } else {
    //     res.redirect("/admin/signin");
    // }
})



router.get("/movie/listMovie", function(req, res){
   //if(res.session.user) {
        var data = movie_md.getAllMovie();
        data.then(function(movies){
            var data = {
                movies: movies,
                error: false
            }
            //console.log(data);
            res.render("admin/movie/listMovie", {data: data});
        }).catch(function(err){
            var data = {
                error: "Could not get movie"
            }
            res.render("admin/movie/listMovie", {data: data});
        });
    // }else {
    //     res.redirect("admin/signin");
    // }
});

router.get("/movie/editMovie/:id", function(req, res) {
    //if (req.session.user) {
        var params = req.params;  
        var id = params.id;
        var data = movie_md.getMovieById(id);
        if (data) {
            data.then(function(movies) {
                var movie = movies[0];
                var data = {
                    movie: movie,
                    error: false
                };
                res.render("admin/movie/editMovie", { data: data });
            }).catch(function(err) {
                var data = {
                    error: "Could not get Movie"
                };
                res.render("admin/movie/editMovie", { data: data });
            });
        } else {
            var data = {
                error: "Could not get Movie"
            };
            res.render("admin/movie/editMovie", { data: data });
        }
    // } else {
    //     res.redirect("/admin/signin");
    // }

});

router.put("/movie/editMovie/:id", function(req, res) {
    console.log("Update the movie");
    var params = req.body;
    var data = movie_md.updateMovie(params);
    console.log(data);
    if (!data) {
        res.json({ status_code: 500 });
    } else {
        data.then(function(result) {
            res.json({ status_code: 200 });
        }).catch(function(err) {
            res.json({ status_code: 500 });
        });
    }
});

router.delete("/movie/delete", function(req, res) {
    var movie_id = req.body.id;

    var data = movie_md.deleteMovie(movie_id);
    if (!data) {
        res.json({ status_code: 500 });
    } else {
        data.then(function(result) {
            res.json({ status_code: 200 });
        }).catch(function(err) {
            res.json({ status_code: 500 });
        });
    }
});




module.exports = router;