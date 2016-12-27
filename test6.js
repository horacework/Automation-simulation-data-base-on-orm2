/**
 * Created by HoraceChan on 2016/12/26.
 */
var orm = require("orm");
var config = require('./config_simple');

orm.connect(config.mysql.url, function (err, db) {
    if (err) throw err;

    var timefull = db.define(config.mysql.table,{
        cross_id:                {type:'serial' , key:true},
        cross_name:              {type:'text'},
        lng:                     {type:'number'},
        lat:                     {type:'number'},
        ip:                      {type:'text'},
        port:                    {type:'number'},
        region_id:               {type:'text'}
    });
    // var timefull = db.define(config.mysql.table,{
    //     user_id:                {type:'serial' , key:true},
    //     user_name:              {type:'text'},
    //     user_password:          {type:'text'},
    //     is_realtime_monitor:    {type:'text'},
    //     is_manage:              {type:'number'}
    // });

    var count = 1000;
    var dataPoint = 0;
    var region_id = 19;
    var Lng = 113.228106;
    var Lat = 23.410011;


    var intervalId = setInterval(function() {

        ++count;
        ++dataPoint;

        db.sync(function(err) {
            if (err) throw err;

            // add a row to the person table
            // timefull.create({
            //     lng:                      Lng + Math.random()*0.03,
            //     lat:                      Lat + Math.random()*0.03,
            //     cross_name:              "测试路口" + count,
            //     ip:                      "192.168.1.110",
            //     port:                    8010,
            //     region_id:               region_id
            //     // user_name:              "userTest"+count,
            //     // user_password:          "userPassword",
            //     // is_realtime_monitor:    "普通用户",
            //     // is_manage:              1
            // }, function(err,result) {
            //     if (err) throw err;
            //     console.log("插入数据成功");
            //     console.log(count)
            // });
            

        });

        // if (count == 30) {
        //     clearInterval(intervalId);
        // }



        if (dataPoint > 6) {
            dataPoint = 0 ;
            region_id = region_id + 10;
            if (region_id > 40) {
                clearInterval(intervalId);
            }
        }

        // if (count > 342){
        //     clearInterval(intervalId);
        // }

    },100);




});