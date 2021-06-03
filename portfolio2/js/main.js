$(document).ready(function(){

    $('a[href^="#"]').on('click',function(e){
        e.preventDefault();
        var down=$($(this).attr('href'));
        if(down.length){
            $('html,body').animate({
                scrollTop:down.offset().top
            },500)
        }

    })

     $('.gnb_zone >li').on({ 
        mouseover:function(){
            var num=$(this).index();
        $(this).each(function(){
            if($(this).index()==num){
                $(this).addClass('gnb_on');
                $(this).find('.gnb_list').css({
                        display:'block'
                    })
                }  
            })

            
        },
        
        mouseout:function(){
            var num=$(this).index();
          if(num==$(this).index()){
           $(this).removeClass('gnb_on');
                $(this).find('.gnb_list').css({
                        display:'none'
                    })
          } 
        }
    }); 

    $('.slider').bxSlider({

        mode:'horizontal',
        speed:1000,
        moveSlides:3,
        minSlides:1,
        maxSlides:3,
        slideMargin:0,
        autoHover:true,
        auto: true,
        pager: true,
        slideWidth: 2000,
        controls:true,
        });

    var position=0;
    var rest=-270;
    
    $('.season_drink').on({
        mouseenter:function(event){
            position=event.pageX-$(this).offset().left;
            
        },
        mousemove:function(event){
            var drinkMove=event.pageX-$(this).offset().left;
            if(drinkMove-position>0){
                rest++;
                if(rest>0) rest=0;
                
            }else{
                rest--;
                if(rest<-540){
                    rest=-540
                };
            }
            $('.sesn_wrap').css({
                left:rest+'px'
            })
            position=drinkMove
            
        },
          
    })

    var bestNum=0;


    $('.prev_btn > a').on('click',function(e){
        e.preventDefault(); 
        bestNum++;
        if(bestNum>=6) bestNum=0;
        
        $('.bestmenu_list a').hide();
        $('.bestmenu_list a:eq('+bestNum+')').show()
    })

    $('.next_btn').on('click',function(e){
        e.preventDefault(); 
        bestNum--;
        if(bestNum<0) bestNum=5;
        
        $('.bestmenu_list a').hide();
        $('.bestmenu_list a:eq('+bestNum+')').show()
    })


    $('.bestmenu_list > a:not(:eq(0))').hide();
    $('.bestmenu_zone').on({
        mousemove:function(e){
            var page=e.pageX-$(this).offset().left;
            if(page < 800){
                $('.prev_btn').css('display','block');
                $('.next_btn').css('display','none');
            }else{
                $('.prev_btn').css('display','none');
                $('.next_btn').css('display','block');
            }
        },
        mouseleave:function(){
            $('.prev_btn').css('display','none');
            $('.next_btn').css('display','none')
        }
    })

    

var gnbOffset=$('.gnb').offset().top;
var bestCont=$('.season_drink').offset().top;
var delivery=$('.bestmenu_list a').offset().top;
var notice=$('.delivery_wrap').offset().top;

    $(window).scroll(function(){
        var scroll=$(window).scrollTop();
        
        if(scroll >= gnbOffset){
            $('.gnb').css('position','fixed')
        }else{
            $('.gnb').css('position','absolute')
        }

        if(scroll >= bestCont){
            $('.best_txt > p').css({
                transform: 'translateX(0px)',
                opacity:1,
                transitionDelay:'0s'
            });
            $('.best_txt > h3').css({
                transform: 'translateX(0px)',
                opacity:1,
                transitionDelay:'0.5s'
            });
            $('.best_txt > span').css({
                transform: 'translateX(0px)',
                opacity:1,
                transitionDelay:'0.8s'
            })
            
        }else{
            $('.best_txt > p').css({
                transform: 'translateX(-500px)',
                opacity:0,
                transitionDelay:'0s'
            })
            $('.best_txt > h3').css({
                transform: 'translateX(-500px)',
                opacity:0,
                transitionDelay:'0.5s'
            });
            $('.best_txt > span').css({
                transform: 'translateX(-600px)',
                opacity:0,
                transitionDelay:'0.7s'
            }) 
        }

        if(scroll >= delivery){
            $('.delivery_tit').css({
                transform:'translateX(0px)',
                opacity:1,
                transitionDelay:0
            })
            $('.delivery_img').css({
                transform:'translateX(0px)',
                opacity:1,
                transitionDelay:0
            })
        }else{
            $('.delivery_tit').css({
                transform:'translateX(1000px)',
                opacity:0,
                transitionDelay:0
            })
            $('.delivery_img').css({
                transform:'translateX(-1000px)',
                opacity:0,
                transitionDelay:0
            })
        }

        if(scroll >= notice){
            $('.notice_zone .on').css({
                transform:'perspective(1000px) rotateY(360deg)',
                opacity:1,
                transitionDelay:0
            })
        }else{
            $('.noti_box').css({
                transform:'perspective(600px) rotateY(0deg)',
                opacity:0,
                transitionDelay:0
            })
        }
        
    })
    
    
})