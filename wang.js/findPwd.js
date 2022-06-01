// 验证手机号码
var phone = document.getElementsByClassName('phone')[0];
var report = document.getElementsByClassName('report')[0];
var pwd = document.getElementsByClassName('pwd')[0];
var repwd = document.getElementsByClassName('repwd')[0];
var resend = document.getElementsByClassName('resend')[0];

resend.ontouchstart = function () {
    var str = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if (str.test(phone.value) == false) {
        phone.value = document.getElementsByClassName('phone')[0].value + ' X 手机号错误，请重新输入';
        phone.style.color = 'red';
    }
    else {
        var num = 60;
        var timer = setInterval(function () {
            // clearInterval(timer)
            num--;
            resend.innerHTML = num + ' s';
            if (num < 55) {
                alert('66666')
                resend.innerHTML = '重新获取验证码'
                clearInterval(timer)
            }

        }, 1000)

    }
}
report.onblur = function () {
    if (report.value != 666666) {
        report.value = document.getElementsByClassName('report')[0].value + ' X 验证码错误，请重新输入';
        report.style.color = 'red';
    }
}
report.ontouchstart = function () {
    report.value = '';
    report.style.color = '#757575';
    report.value = document.getElementsByClassName('report')[0].value;

}
phone.ontouchstart = function () {
    phone.value = '';
    phone.style.color = '#757575';
    phone.value = document.getElementsByClassName('phone')[0].value;

}
pwd.onblur = function () {
    var str1 = /^\w{6,}$/
    if (str1.test(pwd.value) == false) {
        pwd.type = 'text'
        pwd.value = ' X 密码错误，至少6位且只能由数字和字母组成';
        pwd.style.color = 'red';
    }
}
pwd.ontouchstart = function () {
    pwd.value = '';
    pwd.type = 'password'
    pwd.style.color = '#757575';
    pwd.value = document.getElementsByClassName('pwd')[0].value;

}

repwd.onblur = function () {
    if (repwd.value != pwd.value) {
        repwd.type = 'text'
        repwd.value = ' 密码与新密码不同';
        repwd.style.color = 'red';
    }
}
repwd.ontouchstart = function () {
    repwd.value = '';
    repwd.type = 'password'
    repwd.style.color = '#757575';
    repwd.value = document.getElementsByClassName('repwd')[0].value;

}


var reg = document.getElementsByClassName('reg')[0];
reg.ontouchstart = function () {
    if (pwd.value.length != 0 && report.value.length != 0 && phone.value.length != 0) {

        alert('内容不能为空')
    } else if (/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(phone.value) == false || /^\w{6,}$/.test(pwd.value) == false || report.value != 666666 || repwd.value != pwd.value) {
        alert('请输入正确的手机号、验证码,密码或密码不同，密码不能少于6位，只能有字母、数字和下划线组成')

    }
    else {
        alert('提交成功')
        location.href = "http://127.0.0.1:5500/wang/loadind.html"

    }
}