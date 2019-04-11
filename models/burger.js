var orm = require("../config/orm");

var burger = {
    all: function(cb){
        orm.selectAll("burgers", (res)=> {
            cb(res);
        });
    },
    createOne: function(cols, vals, cd){
        orm.insertOne("burgers", cols, vals, (res)=>{
            cb(res);
        });
    },
    updateOne: function(objColVals, bool, cb){
        orm.updateOne("burgers", objColVals, bool, (res)=>{
            cb(res);
        });

    }
}

module.exports = burger;