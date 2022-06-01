// 普通登录
var first = document.getElementsByClassName('first')[0];
var phone = document.getElementsByClassName('phone');
var pwd = document.getElementsByClassName('pwd')[0];
// 验证码快捷登录
var second = document.getElementsByClassName('second')[0]
var report = document.getElementsByClassName('report')[0]
var resend = document.getElementsByClassName('resend')[0]
// 登录两个span块
var htop = document.getElementsByClassName('htop')[0]
// 最下面的登录按钮
var load = document.getElementsByClassName('load')[0]
var verify = document.getElementsByClassName('verify')[0]



// 点击换模块
htop.firstElementChild.ontouchstart = function () {
    first.style.display = 'block';
    second.style.display = 'none';
    this.style.borderBottomColor = '#FF8A00';
    htop.lastElementChild.style.borderBottomColor = '#D1D1D1';
    load.style.display = 'block';
    verify.style.display = 'none';


}

htop.lastElementChild.ontouchstart = function () {
    second.style.display = 'block';
    first.style.display = 'none';
    // border-bottom-color: #FF8A00;
    this.style.borderBottomColor = '#FF8A00';
    htop.firstElementChild.style.borderBottomColor = '#D1D1D1';
    verify.style.display = 'block';
    load.style.display = 'none';
}





// 验证码
resend.ontouchstart = function () {
    var str = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if (str.test(phone[1].value) == false) {
        phone[1].value = document.getElementsByClassName('phone')[1].value + ' X 手机号错误，请重新输入';
        phone[1].style.color = 'red';
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
// 密码
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

// 判断验证码
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
// 重新点击输入手机号
for (let i = 0; i < phone.length; i++) {
    phone[i].ontouchstart = function () {
        this.value = '';
        this.style.color = '#757575';
        this.value = document.getElementsByClassName('phone')[i].value;

    }
}

verify.ontouchstart = function () {
    if (phone[1].value.length == 0 && report.value.length == 0) {
        alert('内容不能为空')

    } else if (/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(phone[1].value) == false || report.value != 666666) {
        alert('请输入正确的手机号或验证码')

    }
    else {
        alert('登录成功')
        location.href = "#";

    }
}
load.ontouchstart = function () {
    if (phone[0].value.length == 0 && pwd.value.length == 0) {

        alert('内容不能为空')
    } else if (/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(phone[0].value) == false || /^\w{6,}$/.test(pwd.value) == false) {
        alert('请输入正确的手机号或密码，密码不能少于6位，只能有字母、数字和下划线组成')
    }
    else {
        alert('登录成功')
        location.href = "#";

    }
}

// 普通登录手机辨认
phone[0].onblur = function () {
    var str = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if (str.test(this.value) == false) {
        this.value = document.getElementsByClassName('phone')[0].value + ' X 手机号错误，请重新输入';
        this.style.color = 'red';
    }

}