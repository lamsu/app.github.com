/*function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;//判断是移动端还是pc端...没有用到
}*/

 /*window.onload = function(){
    var aBody = document.getElementsByTagName('body')[0];
    var box = document.getElementsByClassName('box')[0];
    var aDiv = box.getElementsByClassName('.in_all');
    var h = aBody.offsetheight;
    box.style.height = aDiv.length * h + 'px';
    document.ontouchmove = function(ev){
        ev.preventDefault();
    };
    var downY = 0;
    var downLeft = 0;
    var iNow = 0;
    var downTime = 0;
    box.ontouchstart = function(ev){
        var touchs = ev.changedTouches[0];
        downY = touchs.pageY;
        downLeft = this.offsetTop;
        var bBtn = true;
        downTime = Date.now();
        box.ontouchmove = function(ev){
            var touchs = ev.changedTouches[0];
            if( this.offsetTop >= 0 ){
                if(bBtn){
                    bBtn = false;
                    downX = touchs.pageY;
                }
                this.style.top = (touchs.pageY - downY)/3 + 'px';            }
            else if( this.offsetTop <= aBody.offsetHeight - box.offsetHeight ){
                if(bBtn){
                    bBtn = false;
                    downX = touchs.pageY;
                }
                this.style.top = (touchs.pageY - downY)/3 + ( aBody.offsetHeight - box.offsetHeight ) + 'px';
            }
            else{
                this.style.top = touchs.pageY - downY + downLeft + 'px';
            }
        };
        box.ontouchend = function(ev){
            var touchs = ev.changedTouches[0];
            if( touchs.pageY < downY ){  
                if(iNow != aDiv.length-1){
                    if( downY - touchs.pageY > aDiv[0].offsetHeight/2 || (Date.now() - downTime < 300 && downY - touchs.pageY > 30 ) ){
                        iNow++;
                    }
                }
                startMove( box , { top : - iNow * h } , 400 , 'easeOut' );
                add_move();
            }
            else{  
                if(iNow != 0){
                    if( touchs.pageY - downY > aLi[0].offsetHeight/2 || (Date.now() - downTime < 300 && touchs.pageY - downY > 30 ) ){
                        iNow--;
                    }
                }
                startMove( box , { left : - iNow * h } , 400 , 'easeOut' );
                add_move();
            } 
            this.ontouchmove = null;
            this.ontouchend = null;
        }; 
    };
}*/





$(function(){
    $('.erWei').height($('.erWei').width());
    $('.in_erWei').height($('.in_erWei').width());
    $('.in_erWei').css('marginLeft',-$('.in_erWei').height()/2);
    $('.in_erWei').css('marginTop', -$('.in_erWei').height()/2);
    $('.all_in').height($('body').height());



   /* $('body').on('touchmove',function(ev){
        ev.preventDefault();
    })
*/
    var start_y=0;
    var off_top=0;
    var iDiv=0;
    var iTime=0;

    $('.box').on('touchstart',function(e){
        e.preventDefault();
        var touchs=e.originalEvent.touches[0];
        var h=$('body').height();
        var iTime=Date($.now());
        var bat=true;
        start_y=touchs.pageY;
        off_top=$(this).offset().top;
        $('.box').on('touchmove',function(e){
            var touchs=e.originalEvent.touches[0];
            if(off_top>=0){
                if(bat){
                    bat=false;
                    start_y=touchs.pageY;
                }
                var bTop=(touchs.pageY-start_y)/3;
                $(this).css('top',bTop);
            }else if(off_top<=h-$('.box').height()){
                if(bat){
                    bat=false;
                    start_y=touchs.pageY;
                }
                var oTop=(touchs.pageY-start_y)/3+$('body').height()-$('.box').height();
                $(this).css('top',oTop);
            }else{
                var iTop=touchs.pageY-start_y+off_top;
                $(this).css('top',iTop);
            }
             remove_();
        })
        $('.box').on('touchend',function(e){
           //var touchs=e.originalEvent.touches[0];
           // console.log(touchs)
            var touchs_end=touchs.pageY;
            if(touchs_end<start_y){
                if( iDiv != $('.all_in' ).length-1){
                    if(start_y-touchs_end>200 || Date($.now())-iTime<300 && start_y-touchs_end>30){
                      iDiv++;
                    }
                }
            }else{
                if(iDiv!=0){
                    if(touchs_end-start_y>200 || Date($.now())-iTime<300 && touchs_end-start_y>30){
                      iDiv--;
                    } 
                }
            }
            $('.box').stop().animate({'top':  -iDiv*h}, 400);
            $(this).on('touchmove',null);
            $(this).on('touchend',null);
            add_move();
        })
    })


/*var num=0;
var start_y=0;
var end_y=0;
var distance_y=0;
$('.box').on('touchstart',function(ev){
    remove_();
    start_y=ev.originalEvent.touches[0].clientY;
})
$('.box').on('touchmove',function(ev){
    ev.preventDefault();
    end_y=ev.originalEvent.touches[0].clientY;
   distance_y=start_y-end_y;
    var _top=$(this).offset().top;
    var body_h=$('body').height();
    var box_h=body_h-$(this).height();
    if(_top>=0){
        if(Math.abs(distance_y)<=200){
            $('.box').css('top',distance_y );
        }else{
            $('.box').css('top',200 );
        }
    }else if(_top<=box_h){
        if(Math.abs(distance_y)<=200){
            $('.box').css('top',_top -distance_y); 
        }else{
            $('.box').css('top',_top -200);  
        }
    }
    $('.box').css('top', _top-distance_y );
    console.log(distance_y)
    console.log(_top)
})
$('.box').on('touchend',function(ev){
    var _top=$(this).offset().top;
    console.log(_top)
    var body_h=$('body').height();
    console.log(body_h)
    var box_h=body_h-$(this).height();
    console.log(box_h)
   if(_top>=0){
        $(this).stop().animate({'top': 0}, 300);
   }else if(_top<=box_h){
         $(this).stop().animate({'top': box_h}, 300);
   }else{
        if(Math.abs(distance_y)>body_h/3&&end_y!=0){
            if(distance_y>0){
                num++;
            }else{
                num--;
            }
        }
        $(this).stop().animate({'top': -num*body_h}, 300);
   };
    var start_y=0;
    var end_y=0;
    var distance_y=0;
    add_move();
})*/



    CssDongHua();
    function CssDongHua(){
        $('.music_').click(function(event) {
            var audio_=$('#audio_')[0];
            if(audio_.paused){
                audio_.play();
                $(this).css('backgroundSize', 'cover');
                $('.music_b').addClass('xuanZhaun');
            }else{
                audio_.pause();
                $(this).css('backgroundSize', 0);
                $('.music_b').removeClass('xuanZhaun');
            }
        });
     }
    function add_move(){
        //if( $('.box').offset().top % $('body').height() == 0 ){
            $('.tiMu').addClass('tiMu_ad');
            $('.touXiang').addClass('touXiang_ad');
            $('.my_tx').addClass('my_tx_ad');
            $('.shangHua').addClass('shangHua_ad');
            $('.que_').addClass('que_ad');
            $('.yinWen').addClass('yinWen_ad');
            $('.zhongWen').addClass('zhongWen_ad');
            $('.xinXi p').addClass('_ad');
            $('.jd_num').addClass('jd_num_ad');
            $('.jingDu').eq(0).addClass('jingDu_ad_j');
            $('.jingDu').eq(1).addClass('jingDu_ad_h');
            $('.jingDu').eq(2).addClass('jingDu_ad_c');
            $('.jingDu').eq(3).addClass('jingDu_ad_p');
            $('.jingDu').eq(4).addClass('jingDu_ad_d');
            $('.j_d').eq(0).addClass('j_d_ad_j');
            $('.j_d').eq(1).addClass('j_d_ad_h');
            $('.j_d').eq(2).addClass('j_d_ad_c');
            $('.j_d').eq(3).addClass('j_d_ad_p');
            $('.j_d').eq(4).addClass('j_d_ad_d');
            $('.in_box p').eq(0).addClass('jl_a');
            $('.in_box p').eq(1).addClass('jl_b');
            $('.in_box p').eq(2).addClass('jl_c');
            $('.p_j').addClass('p_j_ad');
            $('.jd_num').addClass('me_ad');
            $('.pingJia p').eq(1).addClass('p_ad');
            $('.pingJia p').eq(2).addClass('p_bd');
            $('#cont_to').addClass('cont_timu');
            $('.erWei').addClass('erWei_ad');
            $('.in_erWei').addClass('in_erWei_ad');
        //}else{
            
       // }
    }
    function remove_(){
        $('.tiMu').removeClass('tiMu_ad');
        $('.touXiang').removeClass('touXiang_ad');
        $('.my_tx').removeClass('my_tx_ad');
        $('.shangHua').removeClass('shangHua_ad');
        $('.que_').removeClass('que_ad');
        $('.yinWen').removeClass('yinWen_ad');
        $('.zhongWen').removeClass('zhongWen_ad');
        $('.xinXi p').removeClass('_ad');
        $('.jd_num').removeClass('jd_num_ad');
        $('.jingDu').eq(0).removeClass('jingDu_ad_j');
        $('.jingDu').eq(1).removeClass('jingDu_ad_h');
        $('.jingDu').eq(2).removeClass('jingDu_ad_c');
        $('.jingDu').eq(3).removeClass('jingDu_ad_p');
        $('.jingDu').eq(4).removeClass('jingDu_ad_d');
        $('.j_d').eq(0).removeClass('j_d_ad_j');
        $('.j_d').eq(1).removeClass('j_d_ad_h');
        $('.j_d').eq(2).removeClass('j_d_ad_c');
        $('.j_d').eq(3).removeClass('j_d_ad_p');
        $('.j_d').eq(4).removeClass('j_d_ad_d');
        $('.in_box p').eq(0).removeClass('jl_a');
        $('.in_box p').eq(1).removeClass('jl_b');
        $('.in_box p').eq(2).removeClass('jl_c');
        $('.xinXi p').removeClass('p_j_ad');
        $('.jd_num').removeClass('me_ad');
        $('.pingJia p').eq(1).removeClass('p_ad');
        $('.pingJia p').eq(2).removeClass('p_bd');
        $('#cont_tm').removeClass('cont_timu');
        $('.erWei').removeClass('erWei_ad');
        $('.in_erWei').removeClass('in_erWei_ad');
    }
   
})
