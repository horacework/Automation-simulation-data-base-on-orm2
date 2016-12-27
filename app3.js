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
        phase1:   {type:'text'},
        phase2:   {type:'text'},
        phase3:   {type:'text'},
        phase4:   {type:'text'},
        green:   {type:'text'},
        yellow:  {type:'text'},
        red:    {type:'text'}
    });

    var i = 0;
    var dateObject = new Date(2016,0,1,0,0,0);

    var phaseSelect1 = ["222RYG/223RYG/422RYG/432RYG","421RYG/422RYG/423RYG"];
    var phaseSelect2 = ["122RYG/123RYG/322RYG/332RYG","321RYG/322RYG/323RYG"];
    var phaseSelect3 = ["221RYG/421RYG","221RYG/222RYG/223RYG"];
    var phaseSelect4 = ["121RYG/321RYG","121RYG/122RYG/123RYG"];

    var green = ["7秒/7秒/7秒/7秒","6秒/6秒/6秒/6秒","15秒/15秒/15秒/15秒","25秒/25秒/25秒/25秒"];
    var yellow = ["3秒/3秒/3秒/3秒","4秒/4秒/4秒/4秒","5秒/5秒/5秒/5秒","5秒/5秒/5秒/5秒"];
    var red = ["30秒/30秒/30秒/30秒","30秒/30秒/30秒/30秒","60秒/60秒/60秒/60秒","90秒/90秒/90秒/90秒"];

    var greenString;
    var yellowString;
    var redString;

    // add the table to the database
    var intervalId = setInterval(function() {

        ++i;
       //var timeString =  new Date().toLocaleDateString();//当前datetime

        var dateString = fixNum(dateObject.getFullYear(),4)+"-"+fixNum(dateObject.getMonth()+1,2)+"-"+fixNum(dateObject.getDate(),2);
        //随机时间（xx:xx:xx）
        var timeString = fixNum(dateObject.getHours(),2)+":"+fixNum(dateObject.getMinutes(),2)+":"+fixNum(dateObject.getSeconds(),2);

        //随机相位方案
        var phaseRandom = Math.round(Math.random());

        //随机时间方案
        if (Math.random()*100 > 80){
            var green1 = Math.round(Math.random()*30)+5;
            var green2 = Math.round(Math.random()*30)+5;
            var green3 = Math.round(Math.random()*30)+5;
            var green4 = Math.round(Math.random()*30)+5;
            var yellow1 = Math.round(Math.random()*4)+2;
            var yellow2 = Math.round(Math.random()*4)+2;
            var yellow3 = Math.round(Math.random()*4)+2;
            var yellow4 = Math.round(Math.random()*4)+2;
            var red1 = green2+green3+green4+yellow2+yellow3+yellow4;
            var red2 = green1+green3+green4+yellow1+yellow3+yellow4;
            var red3 = green1+green2+green4+yellow1+yellow2+yellow4;
            var red4 = green1+green2+green3+yellow1+yellow2+yellow3;
            greenString = green1+"秒/"+green2+"秒/"+green3+"秒/"+green4+"秒";
            yellowString = yellow1+"秒/"+yellow2+"秒/"+yellow3+"秒/"+yellow4+"秒";
            redString = red1+"秒/"+red2+"秒/"+red3+"秒/"+red4+"秒";
        }else{
            var tempRandom = Math.round(Math.random()*3);
            greenString = green[tempRandom];
            yellowString = yellow[tempRandom];
            redString = red[tempRandom];
        }

       db.sync(function(err) {
           if (err) throw err;

           // add a row to the person table
           timefull.create({
               date:    dateString,
               time:    timeString,
               phase1:   phaseSelect1[phaseRandom],
               phase2:   phaseSelect2[phaseRandom],
               phase3:   phaseSelect3[phaseRandom],
               phase4:   phaseSelect4[phaseRandom],
               green:   greenString,
               yellow:  yellowString,
               red:     redString
           }, function(err,result) {
               if (err) throw err;
               console.log("插入数据成功");
               console.log(dateString+" "
                   +timeString+" "
                   +phaseSelect1[phaseRandom]+" "
                   +phaseSelect2[phaseRandom]+" "
                   +phaseSelect3[phaseRandom]+" "
                   +phaseSelect4[phaseRandom]+" "
                   +greenString+" "
                   +yellowString+" "
                   +redString);

               //sleep();
           });

       });

        dateObject.setMinutes(dateObject.getMinutes()+1);

        if (dateString == "2016-01-08") {
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