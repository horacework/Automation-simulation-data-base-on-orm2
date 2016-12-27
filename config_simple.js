/**
 * Created by HoraceChan on 2016/7/9.
 */
'use strict';

//var db = {
//    host:"127.0.0.1",
//    name:"random",
//    username:"root",
//    password:"",
//    table:"traffic"
//};

var db = {
    host:"192.168.1.110",
    name:"its_server",
    username:"root",
    password:"pwd",
    table:"tb_camerainfo"
};

exports.mysql = {
    url: "mysql://"+db.username+":"+db.password+"@"+db.host+"/"+db.name,
    table:db.table
};