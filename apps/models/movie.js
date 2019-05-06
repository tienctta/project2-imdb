var q = require("q");
var db = require("../common/database");
var conn = db.getConnection();

function getAllMovie() {
    var defer = q.defer();
    conn.query('SELECT * FROM admin_movie', function (err, movie) { //posts là gì ??
        if (err) {
            // return false;
            defer.reject(err);
        } else {
            // return result;
            defer.resolve(posts);
        }
    });
    return defer.promise;
}

function addMovie(movie) {
    if (movie) {
        var defer = q.defer();
        conn.query('INSERT INTO admin_movie SET ?', movie, function (err, result) {
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
    conn.query('SELECT * FROM admin_movie WHERE ?', {id: id}, function (err, posts) {
        if (err) {
            // return false;
            defer.reject(err);
        } else {
            // return result;
            defer.resolve(posts);
        }
    });
    return defer.promise;
}

function updateMovie(params) {
    if (params) {
        var defer = q.defer();
        conn.query('UPDATE posts SET content = ?,genre = ?,releaseDate = ?,productionCo = ?,rate_average = ?,total_review = ? WHERE id = ?',
            [params.content, params.genre, params.releaseDate, params.productionCo, params.rate_average, params.total_review, params.id], function (err, result) {
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
};