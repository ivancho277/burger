var connection = require("./connection")

var orm = {
    selectAll : function(tableInput, cb){
        var queryString = `SELECT * FROM ${tableInput} ;`;
        connection.query(queryString, (err, result) => {
            if(err) throw err;
           cb(result);
        }); 

    },
    insertOne : function(table, col, val, cb){
        var queryString = `INSERT INTO ${table} (${col}) VALUES (${val});`;
        connection.query(queryString, (err, result) => {
            if(err) throw err;
            cb(result)
        })
    },
    updateOne : function(){

    }

}

module.exports = orm;