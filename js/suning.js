{
    let imgs = document.querySelectorAll(".content2 li");
    let pagers = document.querySelectorAll(".banner_yuan span");
    let banner = document.querySelector(".content2");
    let next = document.querySelector(".jiantou_right");
    let prev = document.querySelector(".jiantou_left");
    pagers.forEach(function (ele, index) {
        ele.onclick = function () {
            for (var i = 0; i < pagers.length; i++) {
                imgs[i].classList.remove("content2_top");
                pagers[i].classList.remove("yuan");
            }
            this.classList.add("yuan");
            imgs[index].classList.add("content2_top");

        }
    });

    var n = 0;
    let t = setInterval(move, 3000);

    function move() {
        n++;
        // n=n%5;
        if (n < 0) {
            n = imgs.length - 1;
        }
        if (n === imgs.length) {
            n = 0;
        }
        for (var i = 0; i < pagers.length; i++) {
            imgs[i].classList.remove("content2_top");
            pagers[i].classList.remove("yuan");
        }
        imgs[n].classList.add("content2_top");
        pagers[n].classList.add("yuan");
    }

    banner.onmouseenter = function () {
        clearInterval(t);
    }
    banner.onmouseleave = function () {
        t = setInterval(move, 3000);
    }
    next.onclick = function () {
        move();
    };
    prev.onclick = function () {
        n -= 2;
        move();
    }

}
//超过一屏弹出全部商分类
{
    let topBar = document.querySelector(".first_tan");
    let leftBar = document.querySelector(".second_tan");
    window.onscroll = function () {
        let st = document.documentElement.scrollTop;


        if (st > 660) {
            topBar.style.display = "block";
        } else {
            topBar.style.display = "none";
        }
        if (st > 1800) {
            leftBar.style.display = "block";
        } else {
            leftBar.style.display = "none";
        }


    }
}
{
    let totop = document.querySelector(".third_tan_di");
    totop.onclick = function () {
        let st = document.documentElement.scrollTop;
        let t = setInterval(function () {
            st -= 200;
            if (st < 0) {
                st = 0;
                clearInterval(t);
            }
            document.documentElement.scrollTop = st;
        }, 25)
    }
}
{
    let tips = document.querySelectorAll(".second_tan_list");
    let containers = document.querySelectorAll(".container");
    let flag = true;
// console.log(tips)
    // console.log(containers)
    tips.forEach(function (ele, index) {

        ele.onclick = function () {
            flag = false;
            let ot = containers[index].offsetTop - 55;
            let now = document.documentElement.scrollTop;
            let speed = (ot - now) / 8;
            let time = 0;
            let t = setInterval(function () {
                time += 25;
                now += speed;
                if (time === 200) {
                    clearInterval(t);
                    flag = true;
                }
                document.documentElement.scrollTop = now;
            }, 25)
        }
    });
    window.addEventListener("scroll", function () {
        if (flag) {
            let st = document.documentElement.scrollTop;
            for (let i = 0; i < containers.length; i++) {
                if (st > containers[i].offsetTop - 150) {
                    for (let i = 0; i < tips.length; i++) {
                        tips[i].classList.remove("active");
                    }
                    tips[i].classList.add("active");
                }
            }
        }

    })

}
{
    {
        let labels = document.querySelectorAll(".content li");
        let menus = document.querySelectorAll(".content_tan");
        let obj = menus[0];
        labels.forEach(function (ele, index) {
            ele.onmouseenter = function () {

                obj.style.display = "none";
                menus[index].style.display = "block";
                obj = menus[index];
            }
            ele.onmouseleave = function () {
                menus[index].style.display = "none";
            }
        })

    }
}
{
    let ldian = document.querySelector(".dajuhui_bottom_left_zuodian")
    let rdian = document.querySelector(".dajuhui_bottom_left_youdian")
    let fuhao = document.querySelector(".dajuhui_bottom_left")
    let dong = document.querySelector(".dajuhui_bottom_left_big")
    fuhao.onmouseenter = function () {
        ldian.style.display = "block"
        rdian.style.display = "block"
    }
    let n = 1;
    let flag = true;
    rdian.onclick = function () {
        if (flag) {
            flag = false
            n++;
            dong.style.transition = "all 1s"
            dong.style.marginLeft = -1000 * n + "px";

        }

    }
    ldian.onclick = function () {
        if (flag) {
            flag = false;
            n--
            dong.style.transition = "all 1s"
            dong.style.marginLeft = -1000 * n + "px";
        }
    }

    dong.addEventListener("transitionend", function () {
        flag = true;
        if (n === 4) {
            dong.style.marginLeft = -1000 + "px";
            dong.style.transition = "none";
            n = 1;
        }
        if (n === 0) {
            dong.style.marginLeft = -3000 + "px";
            dong.style.transition = "none";
            n = 3;
        }
    })

}

