$(function () {
    var $email = $("#email");
    var $code = $("#code");
    var $pitem = $(".pitem:nth-child(1)");
    var $pitem2 = $(".pitem:nth-child(2)");
    var $pitem3 = $(".pitem:nth-child(3)");
    var $pitem4 = $(".pitem:nth-child(4)");
    var $pitem5 = $(".pitem:nth-child(5)");
    var $oldpass = $("#oldpass");
    var $newpass = $("#newpass");
    var $repass = $("#repass");
    var $btn = $("#btn")
    var $btn2 = $("#btn2")
    var $btn3 = $("#btn3")
    var username =  window.localStorage.getItem('dashop_user')
    $btn.on("click", function () {
        console.log("---",$email.val())
        if ($email.val() != "") {
            //发送数据
            $.ajax({
                url: baseUrl+'/v1/users/'+username+'/password/sms',
                type: 'POST',
                data: JSON.stringify({
                    "email": $email.val()
                }),
                dataType: "json",
                success: function (d) {
                    console.log(d)
                    if (d.code == 200) {
                        $pitem2.show();
                        $btn.hide();
                        $btn2.show();
                    }else{
                      alert(d.error.message)
                    }
                }
            })
        }
    })
    $btn2.on("click", function () {
        if ($email.val() != "" && $code.val() != "") {
            //发送数据
            $.ajax({
                type: 'POST',
                data: JSON.stringify({
                    "email": $email.val(),
                    "code": $code.val()
                }),
                url: baseUrl+'/v1/users/'+username+'/password/verification',
                dataType: "json",
                success: function (d) {
                    if (d.code == 200) {
                        $pitem.hide();
                        $pitem2.hide();
                        $pitem3.show();
                        $pitem4.show();
                        $pitem5.show();
                        $btn2.hide();
                        $btn3.show();
                    }else{
                      alert(d.error.message)
                    }
                }
            })
        }
    })
    $btn3.on("click", function () {
        if ($oldpass.val() != "" && $newpass.val() != "" && $repass.val() != "") {
            //发送数据
            $.ajax({
                type: 'POST',
                data: JSON.stringify({
                    "password1": $newpass.val(),
                    "password2": $repass.val()
                }),
                url: baseUrl+'/v1/users/'+username+'/password/new',
                dataType: "json",
                success: function (d) {
                    if (d.code == 200) {
                        alert('密码修改成功')    
                        window.location.href='index.html'
                        $pitem.hide();

                        $pitem2.hide();
                        $pitem3.show();
                        $pitem4.show();
                        $pitem5.show();
                        $btn2.hide();
                        $btn3.show();
                    }else{
                      alert(d.error.message)
                    }
                }
            })
        }
    })
})
