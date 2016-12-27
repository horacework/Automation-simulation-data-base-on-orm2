/**
 * Created by HoraceChan on 2016/7/7.
 */
var orm = require("orm");
var config = require('./config_simple');

orm.connect(config.mysql.url, function (err, db) {
    if (err) throw err;

    //var traffic = db.define(config.mysql.table, {
    //    tb_id               : {type:'serial' , key:true},
    //    tb_time             : {type: "date", time:true},
    //    tb_cross_flow       : {type: "integer", unique: false },
    //    tb_cross_density    : Number,
    //    tb_man_flow         : Number,
    //    tb_waiting_time     : Number, //[ "Europe", "America", "Asia", "Africa", "Australia", "Antartica" ], // ENUM type
    //    tb_car_speed        : Number // BLOB/BINARY
    //    //data      : Object // JSON encoded
    //}, {
    //    //methods: {
    //    //    fullName: function () {
    //    //        return this.name + ' ' + this.surname;
    //    //    }
    //    //},
    //    //validations: {
    //    //    age: orm.enforce.ranges.number(18, undefined, "under-age")
    //    //}
    //});

    var timefull = db.define(config.mysql.table,{
        id:     {type:'serial' , key:true},
        time:   {type:'text'},
        metaId: {type:'integer'}
    });

    // add the table to the database
    //setInterval(function() {
    //
    //    var timeString =  new Date().toLocaleString();//当前datetime
    //
    //
    //    db.sync(function(err) {
    //        if (err) throw err;
    //
    //        // add a row to the person table
    //        traffic.create({
    //            tb_time:            timeString,
    //            tb_cross_flow:      0,
    //            tb_cross_density:   (Math.random()*100).toFixed(2),//随机0-100的保留两位小数
    //            tb_man_flow:        0.99,
    //            tb_waiting_time:    Math.round(Math.random()*10),// 随机0-10整数
    //            tb_car_speed:       0.69
    //        }, function(err,result) {
    //            if (err) throw err;
    //            console.log(result.tb_time);
    //            //console.log("插入数据成功");
    //            //sleep();
    //        });
    //    });
    //
    //}, 10000);



    var i = 0;

    setInterval(function() {

        if(i<1440){
            var hour = parseInt(i/60);
            var min = i - hour*60;
            var timeString = hour + ":" + min + ":00";

            db.sync(function(err) {
                if (err) throw err;

                timefull.create({
                    time    :   timeString,
                    metaId  :   1
                },function(err,result){
                    if (err) throw err;
                    console.log(timeString);
                    console.log("插入成功");
                    i++;
                });

            });

        }

    },1000);




});