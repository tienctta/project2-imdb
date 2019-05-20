var q = require("q");
var db = require("../common/database");
var conn = db.getConnection();

function getAllComment() {
    var defer = q.defer();
    conn.query('SELECT* FROM comment', function(err, comments){
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