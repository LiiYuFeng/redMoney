/*px转义为rem*/
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function() {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if (clientWidth >= 640) {
                     docEl.style.fontSize = '100px';
                } else {
                        docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
                }
            };
                if (!doc.addEventListener) return;
                win.addEventListener(resizeEvt, recalc, false);
                doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
/*wow动画*/
var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        });
wow.init();
/*进度条*/
    var bottomWidth=$('span.bottom').width();
    var myVar = setInterval(function(){spanWidth()},15);
    function spanWidth(){
        var topWidth=$('span.top').width();
        topWidth+=1;
        $('span.top').width(topWidth);
        console.log(topWidth);
        if (topWidth>=bottomWidth) {
            stopLoading();
        }
    }
    function stopLoading() {
        clearInterval(myVar);
        $('#loading').hide();
        $('#container').show();
    }
/*进度居中 */
    function setDivCenter(){   
        var top = ($(window).height() - $('#loading').height())/2;       
        $('#loading').css( { 'margin-top' : top} );  
    }  
    setDivCenter();


