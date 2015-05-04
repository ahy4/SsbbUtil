var draw = (function () {
    var canvas = document.getElementById('mycanvas');
    if (!canvas || !canvas.getContext) { return function () {}; }
    
    function title(ttl) {
        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = "rgba(0,0,0, 0.4)";
        ctx.lineWidth = 0.5;
        ctx.strokeRect(0, 40, 500, 70);

        ctx.fillStyle = "white";
        ctx.fillRect(0, 40, 500, 70);
        
        ctx.font = "400 28px serif";
        ctx.textAlign = 'center';
        ctx.fillStyle = '#000';
        ctx.fillText(ttl, 250, 87);
    }
    
    function fillTextLine(context, text, x, y) {
        var textList = text.split('\n');
        var lineHeight = context.measureText("鬱").width * 1.5;
        textList.forEach(function(text, i) {
            context.fillText(text, x, y+lineHeight*i);
        });
    }

    
    function content(schedule) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = "rgba(255,255,255, 0.8)"
        ctx.fillRect(50, 150, 400, 300);
        
        ctx.fillStyle = "#333";
        ctx.textAlign = "left";
        ctx.font = "300 22px serif";
        ctx.fillText("日程：", 80, 200);
        ctx.font = "300 16px serif";
        fillTextLine(ctx, schedule, 110, 240);
        
        ctx.fillStyle = "#333";
        ctx.textAlign = "left";
        ctx.font = "300 22px serif";
        ctx.fillText("場所：", 80, 350);
        ctx.font = "300 16px serif";
        fillTextLine(ctx, "理科大神楽坂キャンパスの教室\n( 飯田橋駅から徒歩1分 )", 110, 390);
        
    }
    
    function background(bg, callback) {
        var ctx = canvas.getContext('2d');
        var img = new Image();
        img.src = bg;
        img.onload = function () {
            var pattern = ctx.createPattern(img, 'repeat');
            ctx.fillStyle = pattern;
            ctx.fillRect(0, 0, 500, 500);
            // ctx.drawImage(img, 10, 200);
            callback();
        };
    }
    
    return function (o) { // o: { title, background, schedule }
        background(o.background, function () {
            title(o.title);
            content(o.schedule);
        });
    };
}());

function saveImage() {
    var canvas = document.getElementById('mycanvas');
    if (!canvas || !canvas.getContext) { return function () {}; }

    var downloadImage = canvas.toDataURL();
    $(function () {
        $('#download').attr({
            'href': downloadImage,
            'download': 'ssbbtus.png'
        })
    });
}


window.onload = function () {
    draw({
        title: "タイトル",
        background: './images/img1.png',
        schedule: "予定予定予定\nよていよてい\nyotei\n予定"
    });
};

