var updateObserver = (function () {
    function generateAndParseTweet() {
        var paramsAry;
        $(function () {
            paramsAry = $('#my-form').serializeArray();
        });
        
        var paramsObj = { };
        paramsAry.forEach(function (o) {
            paramsObj[o.name] = o.value;
        });
        
        
        console.log(paramsObj);
        
        draw(paramsObj);
        saveImage();
        
        tweetText(paramsObj);
        
    }
    
    return function () {    
        $(function () {
            var $background = $('#my-form [name="background"]');
            var $title = $('#my-form [name="title"]');
            var $schedule = $('#my-form [name="schedule"]');
            
            [$title, $background].forEach(function($jqo) {
                $jqo.change(function () {
                    generateAndParseTweet();
                });
            });
            
            $schedule.keyup(function () {
                generateAndParseTweet();
            });
        });
        
        setTimeout(function () {
            generateAndParseTweet();    
        }, 1000);
    };
}());


updateObserver();