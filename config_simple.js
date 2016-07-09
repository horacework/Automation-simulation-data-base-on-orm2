/**
 * Created by HoraceChan on 2016/7/9.
 */
'use strict';

var db = {
    host:"127.0.0.1",
    name:"random",
    username:"root",
    password:"",
    table:"traffic"
};

exports.mysql = {
    url: "mysql://"+db.username+":"+db.password+"@"+db.host+"/"+db.name,
    table:db.table
};