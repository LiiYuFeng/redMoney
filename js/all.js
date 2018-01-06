/*rem自适应*/
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
/*本地存储用户的身份证*/
sessionStorage.setItem('id_card', 320621198008206990);
var id_card = sessionStorage.getItem('id_card');
console.log(id_card);
/*页面脚本*/
$('.redLink a').click(function(){
    $('body').css('background','white');
    $('#cover').hide();
    $('#mengceng').show();
})
/*音乐*/
var audio = document.getElementById('mp3Btn');
$('.rotateClass').click(function(){
     if(audio.paused){
        console.log('暂停');
        audio.play();  //播放
        return;
    }else{//当前是播放状态
        console.log('播放');
        audio.pause();
    }
})
$.ajax({
       type: "GET",
       url: "http://jinlichen.org/shopdataphp/ajax_client.php?action=read_id_account&id_card="+id_card,
       dataType: "json", 
       success:function(data){
            console.log("成功"+JSON.stringify(data));
            var quality=data.quantity;//消费抽取数量
            var invitation=data.invitation;//邀请抽取数量
            $('.numEvery').text(quality);
            $('.numPlese').text(invitation);
            /*消费红包*/
            if (quality>0) {
                $('.btnEvery').css('background','#fe492a');
                $('.btnEvery').click(function(){
                    $('body').css('background','white');
                    $('#cover').hide();
                    $('#mengceng').show();
                })
            }
            /*邀请抽奖*/
            if (invitation>0) {
                $('.btnPlese').css('background','#fe492a');
                $('.btnPlese').click(function(){
                    $('body').css('background','white');
                    $('#cover').hide();
                    $('#mengceng').show();
                })
            };
        }
})
/*底部字体颜色*/
var colorFont=['red','yellow','white'];
var i=0;
function color(){
        i+=1;
        if (i>=3) {i=0};
            $('.redLink a').css('color',colorFont[i]);
        };
setInterval(color,1000);
/*关闭红包页面*/
$('.closePage').click(function(event){
    event.stopPropagation();
    $('.bodymeng').hide();
    $('.showCon').hide();
});
/*请求红包数据*/
$('.linkOpen').click(function() {
    var openMp = document.getElementById('open');
    openMp.play();
    $.ajax({
            type: "GET",
            url: "http://jinlichen.org/shopdataphp/ajax_client.php?action=redeem_red_packet&id_card="+id_card,
            dataType: "json",
            success:function(data){
            console.log(JSON.stringify(data));
            $('.fontMoney').text(data.amount);
            }
    });
        $('.redPack').hide(500);
        $('.redMoney').show(1000);
})
