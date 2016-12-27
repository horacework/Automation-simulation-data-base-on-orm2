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
        id:     {type:'serial' , key:true},
        date:   {type:'text'},
        time:   {type:'text'},
        type:   {type:'text'},
        details:  {type:'text'}
    });

    var i = 0;
    var dateObject = new Date(2016,0,1,0,0,0);

    var typeSelect = ["人工固定配时","智能固定配时","智能动态配时"];

    var man = ["人工单时段固定配时方案1",
        "人工单时段固定配时方案2",
        "人工单时段固定配时方案3",
        "人工多时段固定配时方案1",
        "人工多时段固定配时方案2",
        "人工多时段固定配时方案3",
        "人工多时段固定配时方案4"];
    var intellient = ["晴天智能单时段固定配时方案",
        "雨天智能单时段固定配时方案",
        "阴天智能单时段固定配时方案",
        "节日拥堵智能单时段固定配时方案",
        "晴天智能多时段固定配时方案",
        "雨天智能多时段固定配时方案",
        "阴天智能多时段固定配时方案",
        "节日拥堵智能多时段固定配时方案"];
    var dymaic = ["动态配时模型1",
        "动态配时模型2",
        "动态配时模型3",
        "动态配时模型4"];
    var typeSelectChoose = [man,intellient,dymaic];

    // add the table to the database
    var intervalId = setInterval(function() {

        ++i;
       //var timeString =  new Date().toLocaleDateString();//当前datetime

        var dateString = fixNum(dateObject.getFullYear(),4)+"-"+fixNum(dateObject.getMonth()+1,2)+"-"+fixNum(dateObject.getDate(),2);
        //随机时间（xx:xx:xx）
        var timeString =  fixNum(Math.round(Math.random()*23),2)+":"+fixNum(Math.round(Math.random()*59),2)+":"+fixNum(Math.round(Math.random()*59),2);

        var typeRandom = Math.round(Math.random()*2);

        var typeString = typeSelect[typeRandom];
        var detailsString;

        if (typeRandom == 0){
            detailsString = man[Math.round(Math.random()*6)];
        }else if (typeRandom == 1){
            detailsString = intellient[Math.round(Math.random()*7)];
        }else {
            detailsString = dymaic[Math.round(Math.random()*3)];
        }

       db.sync(function(err) {
           if (err) throw err;

           // add a row to the person table
           timefull.create({
               date:    dateString,
               time:    timeString,
               type:   typeString,
               details:   detailsString
           }, function(err,result) {
               if (err) throw err;
               console.log("插入数据成功");
               console.log(dateString+" "
                   +timeString+" "
                   +typeString+" "
                   +detailsString
               );
           });

       });


        if (i==4){
            dateObject.setDate(dateObject.getDate()+1);
            i=0;
        }


        if (dateString == "2017-01-01") {
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