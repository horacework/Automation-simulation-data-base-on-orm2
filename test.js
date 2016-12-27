/**
 * Created by HoraceChan on 2016/12/12.
 */

function checkNull() {
    for (var i=0; i<24; i++) {
        //noinspection JSValidateTypes
        //i为int型，"d"为字符串，"d"+i则强转成字符型
        if (document.getElementById("d"+i) != "") {
            return false;   //返回False代表有合法输入
        }
    }
    return true;    //返回TRUE表示都为空，弹出错误提示
}
function checkNull2() {
    var divList = ["d","l","b"];
    for (var k = 0; k<3; k++) {
        for (var i = 1; i <= 8; i++) {
            if (document.getElementById(divList[k] + i).value != "") {
                return false;   //返回False代表有合法输入
            }
        }
    }
    return true;    //返回TRUE表示都为空，弹出错误提示
}