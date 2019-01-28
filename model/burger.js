var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res){
            callback(res);
        })
    },
    insertOne: function(col, val, callback) {
        orm.insertOne("burgers", col, val, function(res) {
            callback(res);
        })
    },
    updateOne: function(condition, callback) {
        orm.updateOne("burgers", condition, function(res) {
            callback(res);
        })
    }
}

module.exports = burger;