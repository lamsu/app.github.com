

var animate = {
    init: function(){
    $('.box').height($('body').height()*$('.in_all').length);
    $('.erWei').height($('.erWei').width());
    $('.in_erWei').height($('.in_erWei').width());
    $('.in_erWei').css('marginLeft',-$('.in_erWei').height()/2);
    $('.in_erWei').css('marginTop', -$('.in_erWei').height()/2);
    $('.all_in').height($('body').height());
    $('.tiMu').height($('.tiMu').width()/2);
    $('.tiMu').css('marginLeft', -$('.tiMu').width()/2);
    $('.touXiang').css('marginLeft', -$('.touXiang').width()/2);
    $('.touXiang').height($('.touXiang').width());
    $('.music_').height($('.music_').width());
    $('.shangHua').height($('.shangHua').width()/2);
    $('.shangHua').css('lineHeight', $('.shangHua').height()+'px');
    $('.jiNeng').width($('.jiNeng').height());
    },
    CssDongHua: function(){
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
    },
    add_move: function(){
 $('.tiMu').addClass('tiMu_ad');
        $('.touXiang').addClass('touXiang_ad');
        $('.my_tx').addClass('my_tx_ad');
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
        $('.p_j b').addClass('me_ad');
        $('.pingJia p').eq(1).addClass('p_ad');
        $('.pingJia p').eq(2).addClass('p_bd');
        $('#cont_to').addClass('cont_timu');
        $('.erWei').addClass('erWei_ad');
        $('.in_erWei').addClass('in_erWei_ad');
    },
    remove_: function(){
        $('.tiMu').removeClass('tiMu_ad');
        $('.touXiang').removeClass('touXiang_ad');
        $('.my_tx').removeClass('my_tx_ad');
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
        $('.p_j b').removeClass('me_ad');
        $('.jd_num').removeClass('me_ad');
        $('.pingJia p').eq(1).removeClass('p_ad');
        $('.pingJia p').eq(2).removeClass('p_bd');
        $('#cont_tm').removeClass('cont_timu');
        $('.erWei').removeClass('erWei_ad');
        $('.in_erWei').removeClass('in_erWei_ad');
    }
}
   
 
 

