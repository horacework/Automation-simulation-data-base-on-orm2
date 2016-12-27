/**
 * Created by HoraceChan on 2016/12/5.
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
        camera_id:     {type:'serial' , key:true},
        camera_name:   {type:'text'},
        camera_ip:   {type:'text'},
        camera_port:   {type:'number'},
        cross_id:  {type:'text'},
        save_dir:  {type:'text'},
        save_time:  {type:'number'}
    });

    var id = 1043;

    var nameList = ["摄像头-向东方向","摄像头-向西方向","摄像头-向南方向","摄像头-向北方向"];
    var ipList = ["192.168.1.144","192.168.1.140","192.168.1.157","192.168.1.152"];


    // add the table to the database
    var intervalId = setInterval(function() {

        ++id;

        db.sync(function(err) {
            if (err) throw err;

            // add a row to the person table
            timefull.create({
                camera_name:   nameList[3],
                camera_ip:   ipList[3],
                camera_port:   8000,
                cross_id:  id,
                save_dir:  "D:\ITS\ITS_Server\REALPLAY_DOWNLOAD_FILE",
                save_time:  7
            }, function(err,result) {
                if (err) throw err;
                console.log("插入数据成功");
                console.log(id)
            });

        });

        if (id == 1253) {
            clearInterval(intervalId);
        }



    }, 100);



    // var i = 0;
    //
    // setInterval(function() {
    //
    //     if(i<1440){
    //         var hour = parseInt(i/60);
    //         var min = i - hour*60;
    //         var timeString = hour + ":" + min + ":00";
    //
    //         db.sync(function(err) {
    //             if (err) throw err;
    //
    //             timefull.create({
    //                 time    :   timeString,
    //                 metaId  :   1
    //             },function(err,result){
    //                 if (err) throw err;
    //                 console.log(timeString);
    //                 console.log("插入成功");
    //                 i++;
    //             });
    //
    //         });
    //
    //     }
    //
    // },1000);


});

function fixNum(num, length) {
    return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
}