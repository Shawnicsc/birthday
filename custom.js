var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "亲爱的刘丫丫",
        "在这特别的日子", 
        "在远方送上最近的祝福", 
        "生日快乐呀！", //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "愿你下雨时身旁总有伞",  // 同上...
        "愿你在这一年得偿所愿",
        "愿你每天都有那么好的心情",
        "愿你能有一个健康的身体",
        "愿你能去到你想去的地方",
        "愿你能找到你的金链子",
        "愿你做过的美梦都成真",
        "愿你永远平安喜乐",
        "在每一个时刻感到幸福",
        "纵使时光流转",
        "那份心情不会改变",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
           "亲爱的刘丫丫": "./imgs/img1.jpg",
           "愿你在这一年得偿所愿": "./imgs/img2.jpg",
           "愿你永远平安喜乐": "./imgs/img3.jpg",  
           "在每一个时刻感到幸福": "./imgs/img4.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
   desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
$(function () {
    let dom = document.createElement("span");
    config.texts.forEach(function (item) {
        let p = document.createElement("p");
        p.innerHTML = item;
        if (config.imgs && config.imgs[item]) {
            let img = document.createElement("img");
            img.src = config.imgs[item];
            img.setAttribute("class", 'text-img');
            p.appendChild(img);
        }
        dom.appendChild(p);
    });
    $("#texts-container").append(dom.innerHTML);
});

$(function () {
    for (let k in config.desc) {
        let dom = $("#" + k);
        if (dom.length > 0 && config.desc[k]) {
            dom.html(config.desc[k]);
        }
    }
});
