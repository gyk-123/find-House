// 验证手机号码
var phone = document.getElementsByClassName('phone')[0];
var report = document.getElementsByClassName('report')[0];
var pwd = document.getElementsByClassName('pwd')[0];
var resend = document.getElementsByClassName('resend')[0];

resend.ontouchstar = function () {
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
var reg = document.getElementsByClassName('reg')[0];
reg.ontouchstart = function () {
    if (pwd.value.length != 0 && report.value.length != 0 && phone.value.length != 0) {
        alert('注册成功')
        location.href = ""

    } else {
        alert('内容不能为空')
    }
}