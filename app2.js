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
        place:   {type:'text'},
        type:   {type:'text'},
        type2:  {type:'text'},
        content:{type:'text'},
        status: {type:'text'},
        agent:  {type:'text'}
    });

    var i = 0;
    var dateObject = new Date();
    dateObject.setFullYear(2016,0,1);

    var placeData = ["大学城广工一路","国医东路","大学城华师一路","大学城华工北路","黄埔大道","东方三路","天河北路","华师北路与外环东路交叉口"];

    //var shebei = ["交通控制机异常","摄像机异常","交通灯异常"];
    var jiaotongliu = ["交通拥堵","交通流突变","交通流预测报警"];

    var jiaotongliuContent = ["向北方向","向南方向","向东方向","向西方向"];

    var jiaotongshijian = ["视频事件","音频事件","交通事故","人工报警","交通违法","行人闯红灯"];

    var video = ["移动遮挡","绊线入侵","区域入侵","电子围栏入侵","徘徊","物品遗留","物品搬移"];
    var radio = ["声音陡然变小","声音陡然变高"];
    var rengongbaojing = ["现场按钮","电话","微信"];
    var jiaotongweifa = ["车辆闯红灯","车辆超速","车辆违法掉头","车辆逆行","车辆压实线","车辆压双黄线"];

    var typeSelect = ["交通流异常","交通事件报警"];
    var type2Select = [jiaotongliu,jiaotongshijian];

    var person = ["张三","李四","陈胜","吴广"];


    //var logSelect = ["摄像头-向北方向出现模糊","ss"];

    // add the table to the database
    var intervalId = setInterval(function() {

        ++i;
       //var timeString =  new Date().toLocaleDateString();//当前datetime

        var dateString = fixNum(dateObject.getFullYear(),2)+"-"+fixNum(dateObject.getMonth()+1,2)+"-"+fixNum(dateObject.getDate(),2);
        //随机时间（xx:xx:xx）
        var timeString =  fixNum(Math.round(Math.random()*23),2)+":"+fixNum(Math.round(Math.random()*59),2)+":"+fixNum(Math.round(Math.random()*59),2);
        //随机地点
        var placeString = placeData[Math.round(Math.random()*7)];
        //随机事件
        var jiaotongleixing = "交通流异常";
        var shijian = "交通拥堵";
        var logContent = jiaotongliuContent[Math.round(Math.random()*3)]+"-"+shijian;

        if (Math.random()*100 > 70){
            jiaotongleixing = typeSelect[0];
            shijian = type2Select[0][Math.round(Math.random()*2)];
            logContent = jiaotongliuContent[Math.round(Math.random()*3)]+"-"+shijian;
        }else {
            jiaotongleixing = typeSelect[1];
            if (Math.random()*100 >90){
                shijian = type2Select[1][Math.round(Math.random())];
                if (Math.random() > 0.5){
                    logContent = video[Math.round(Math.random()*6)]+"-"+shijian;
                }else {
                    logContent = radio[Math.round(Math.random())]+"-"+shijian;
                }
            }else {
                var temp = Math.round(Math.random()*3+2);
                shijian = type2Select[1][temp];
                if (temp == 3){
                    logContent = rengongbaojing[Math.round(Math.random()*2)]+"-"+shijian;
                }else if (temp ==4){
                    logContent = jiaotongweifa[Math.round(Math.random()*5)]+"-"+shijian;
                }else {
                    logContent = shijian;
                }

            }

        }

       db.sync(function(err) {
           if (err) throw err;

           // add a row to the person table
           timefull.create({
               date:   dateString,
               time:   timeString,
               type:   jiaotongleixing,
               type2:  shijian,
               place:  placeString,
               content:logContent,
               status: "已修复",
               agent:  person[Math.round(Math.random()*3)]
               // tb_time:            timeString,
               // tb_cross_flow:      0,
               // tb_cross_density:   (Math.random()*100).toFixed(2),//随机0-100的保留两位小数
               // tb_man_flow:        0.99,
               // tb_waiting_time:    Math.round(Math.random()*10),// 随机0-10整数
               // tb_car_speed:       0.69
           }, function(err,result) {
               if (err) throw err;
               console.log("插入数据成功");
               console.log(dateString+" "+timeString+" "+placeString+" "+jiaotongleixing+" "+shijian +" "+logContent+" "+ "已修复" +" "+ person[Math.round(Math.random()*3)]);

               //sleep();
           });

       });

        if (i==3){
            dateObject.setDate(dateObject.getDate()+1);
            i=0;
        }
        if (dateString != "2017-01-01") {
        } else {
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