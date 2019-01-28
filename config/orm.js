var connection = require("./connection.js");

var orm = {

    selectAll : function(table, cb){
        var queryString = "Select * from ??";
        connection.query(queryString, table,
        function(err, result){
            if (err) {
                throw err;
            }
            cb(result)
        })
    },

    insertOne : function(table, col, val, cb){
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, col, val], 
        function(err, result){
            console.log(connection.query);
            if(err){
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function(table, condition, cb){
        var queryString = 'UPDATE ' + table + ' SET devoured=true WHERE id =' + condition + ';';
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
        

    
};

module.exports = orm;
