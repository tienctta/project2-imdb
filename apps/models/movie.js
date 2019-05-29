var q = require("q");
var db = require("../common/database");
var conn = db.getConnection();

function getAllMovie() {
    var defer = q.defer();
    conn.query('SELECT * FROM movie', function (err, movies) { 
        if (err) {
            // return false;
            defer.reject(err);
        } else {
            // return result;
            defer.resolve(movies);
        }
    });
    return defer.promise;
}

function addMovie(movie) {
    if (movie) {
        var defer = q.defer();
        conn.query('INSERT INTO movie SET ?', movie, function (err, result) {
            if (err) {
                // return false;
                defer.reject(err);
            } else {
                // return result;
                defer.resolve(result);
            }
        });
        return defer.promise;
    }

    return false;
}

function getMovieById(id) {
    var defer = q.defer();
    conn.query('SELECT * FROM movie WHERE id = ?', [id], function (err, movie) {
        if (err) {
            // return false;
            defer.reject(err);
        } else {
            // return result;
            defer.resolve(movie);
        }
    });
    return defer.promise;
}

function getMovieByMovieName(movieName) {
    var defer = q.defer();
    conn.query('SELECT * FROM movie WHERE movieName = ?', [movieName], function(err, movie){
        if (err){
            defer.reject(err);
        } else {
            defer.resolve(movie);
        }
    });
    return defer.promise;
}



function updateMovie(params) {
    console.log(params);
    if (params) {
        var defer = q.defer();
        conn.query('UPDATE movie SET movieName = ?, trailer = ?, poster = ?, content = ?, genre = ?, releaseDate = ?, productionCo = ?, rate_average = ?, total_review = ? WHERE id = ?',
            [params.movieName, params.trailer, params.poster, params.content, params.genre, params.releaseDate, params.productionCo, params.rate_average, params.total_review, params.id], function (err, result) {
                if (err) {
                    // return false;
                    defer.reject(err);
                } else {
                    // return result;
                    defer.resolve(result);
                }
            });
        return defer.promise;
    }

    return false;
}

function deleteMovie(id) {
    if (id) {
        var defer = q.defer();
        conn.query('DELETE FROM movie WHERE id = ?', [id], function (err, result) {
            if (err) {
                // return false;
                defer.reject(err);
            } else {
                // return result;
                defer.resolve(result);
            }
        });
        return defer.promise;
    }

    return false;
}


module.exports = {
    getAllMovie: getAllMovie,
    addMovie: addMovie,
    getMovieById: getMovieById,
    updateMovie: updateMovie,
    deleteMovie: deleteMovie,
    getMovieByMovieName: getMovieByMovieName,
};