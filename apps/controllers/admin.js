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
    var password_hash = helper.hash_password(user.pw);

    user_insert = {
        userName: user.userName,
        email: user.email,
        fullName: user.fullName,
        pw: password_hash,
       
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


                var status = helper.compare_password(params.pw, user.pw);
                if (!status) {
                    res.render("signin", { data: { error: "Password is not exactly" } });
                } else {
                    req.session.user = user;
                    console.log(req.session.user);
                    res.redirect("public/imdbclone.html"); // ???
                }
            });
        }
    }
});

router.get("/movie/addMovie", function(res, req) {
    if (res.session.user) {
        res.render("admin/movie/addMovie", { data: {error: false} });
    } else {
        res.redirect("admin/signin");
    }
});
router.post("/movie/addMovie", function(req, res) {
    var params = req.body;

    if (params.name.trim().length == 0) {
        var data ={
            error: "please enter a MovieName"
        };
        res.render("admin/movie/addMovie", {data: data});
    } else {
        var movie = {
            name: params.name,
            content: params.content,
            genre: params.genre,
            productionCo: params.productionCo
        };
        console.log(params);
        var data = movie_md.addMovie(params);

        data.then(function(result) {
            res.redirect("/admin");
        }).catch(function(err){
            var data = {
                error: "Could not add new movie"
            };
            res.render("admin/movie/addMovie", {data: data});
        });

    }
});

router.get("/movie", function(res, req){
    if (req.session.user) {
        res.redirect("/admin");
    } else {
        res.redirect("/admin/signin");
    }
})

router.get("/user", function(req, res){
    if(res.session.user) {
        var data = user_md.getAllUser();
        data.then(function(users){
            var data = {
                users: users,
                error: false
            }
            res.render("admin/user", {data: data});
        }).catch(function(err){
            var data = {
                error: "Could not get user"
            }
            res.render("admin/user", {data: data});
        });
    }else {
        res.redirect("/admin/signin");
    }
});



module.exports = router;