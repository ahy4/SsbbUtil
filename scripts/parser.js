function tweetText(obj) { // obj: { title, schedule }
    var title = obj.title, schedule = obj.schedule;
    console.log(title);
    var parsedTitle = title.split("の")[0];
    console.log(parsedTitle);
    var msg = 
        "来週（" + parsedTitle + "）の活動予定です！\n\n" + 
        schedule + "\n\n" + 
        "理科大神楽坂キャンパスの教室です。\n" + 
        "（飯田橋駅から徒歩１分）";
    
    $(function () {
        var $tweetBox = $('#tweet-box');
        $tweetBox.text(msg);
    });
}


function makeTitles() {
    var now = new Date();
    var month = now.getMonth()+1, 
        day = now.getDate(),
        week = now.getDay();
    // var yobi = "日月火水木金土"[week];
    
    var diffFromStart = (week + 2) % 7 - 1;
    var startDay = day - diffFromStart,
        endDay = startDay + 6;
    
    var monthLength = [0,31,28,31,30,31,30,31,31,30,31,30,31]; // 引数は月
    
    
    $(function () {
        $pulldown = $('#my-form [name="title"]');
        for (var i = -1; i <= 5; i++) {
            var w = i * 7;
            var ms = month,
                me = month,
                s = startDay + w, 
                e = endDay + w;
            if (s <= 0) {
                ms = ms == 1 ? 12 : ms-1;
                s = monthLength[ms] + s;
            } else if (monthLength[ms] < s) {
                s = s - monthLength[ms];
                ms = ms == 12 ? 1 : ms+1;
            }
            if (e <= 0) {
                me = me == 1 ? 12 : me-1;
                e = monthLength[me] + e;
            } else if (monthLength[me] < e) {
                e = e - monthLength[me];
                me = me == 12 ? 1 : me+1;
            }
            
            $pulldown.append (
                '<option value="'+ms+'/'+s+'(土)〜'+me+'/'+e+'(金) の活動予定"' +
                                                                (i==0 ? 'selected>' : '>') + 
                    ms+'/'+s+'(土)〜'+me+'/'+e+'(金)' +
                '</option>'
            );        
        }
    });
    
}

function makeBackgrounds() {
    
}

makeTitles();