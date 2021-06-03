$(document).ready(function(){

    $('.visual_wrap > li a:gt(0)').hide();
    var aNum=0;

    $('.visual_btn > a').on('click',function(e){
            e.preventDefault();
            var aNum=$(this).index()-1
            var onBtn=$('.visual_btn > a.on').index()-1
            
            if(aNum!=onBtn){
                $('.visual_btn > a.on').removeClass('on');
                $('.visual_btn > a:eq('+aNum+')').addClass('on');

                $('.visual_wrap >li a:eq('+aNum+')').show();
                $('.visual_wrap >li a:eq('+aNum+')').css('left','1200px');

                $('.visual_wrap >li a.on').animate({
                    'left':'-1200px'
                },1000,function(){
                    $(this).removeClass('on')
                    $(this).hide();
                })
                $('.visual_wrap >li a:eq('+aNum+')').animate({
                    'left':'0px'
                },1000,function(){
                    $(this).addClass('on');
                    $(this).show();
                    
                })
                var barBtn=aNum+1
                $('.visual_bar').css({
                width: 25 * barBtn  + '%'
                })
            }
            clearInterval(visualSid)
        })
        
        var visualSid=setInterval(visualSet, 3000)
        
        function visualSet(){
            
            aNum++
            if(aNum>3) aNum=0;
            $('.visual_btn > a.on').removeClass('on');
            $('.visual_btn > a:eq('+aNum+')').addClass('on');

            $('.visual_wrap >li a:eq('+aNum+')').show();
            $('.visual_wrap >li a:eq('+aNum+')').css('left','1200px');
            
            var barBtn=aNum+1
            $('.visual_bar').css({
                width: 25 * barBtn  + '%'
            })

            $('.visual_wrap >li a.on').animate({
                'left':'-1200px'
            },1000,function(){
                
                $(this).removeClass('on')
                $(this).hide();
                
            })
            $('.visual_wrap li a:eq('+aNum+')').animate({
                'left':'0px'
            },1000,function(){
                $(this).addClass('on');
                $(this).show();
                
               
            })

            $('.visual_wrap li').on({
                mouseover:function(){
                    clearInterval(visualSid)
                },
                mouseout:function(){
                    clearInterval(visualSid);
                    visualSid=setInterval(visualSet, 3000)
                }
            })


        }
            
                
                $('.m_box').on('click',function(e){
                    e.preventDefault();
                    $(this).parents().find('.header_zone').toggleClass('on');
                    
                })
            
                $('.search_btn').on('click',function(e){
                    e.preventDefault();
                    
                    var html='<form method="submit" class="shadow_box">'
                    html+='<input type="text" name="search" placeholder="검색어를 입력하세요." title="검색" class="shadow_text"/>'
                    html+='<i class="fas fa-search"></i>'
                    html+='</form>'
                    html+='<div class="shadow"></div>'
                    
                    $('body').append(html);
                    $('.shadow').show();
                    
                    $('.shadow').on('click',function(e){
                   e.preventDefault();
                   $(this).remove();
                   $('.shadow_box').remove()
                   
               })
        
                })
         
                
                $('.article_more').on('click',function(e){
                    e.preventDefault();
            $(this).parents().find('.article_hide').slideToggle(600);
            $(this).parents().find('.article_hide').toggleClass('on');
                    if($('.article_hide').hasClass('on')==true){
                        $(this).text('닫기');
                        $(this).append('<i class="fas fa-sort-up"></i>')
                    }else{
                        $(this).text('더보기');
                        $(this).append('<i class="fas fa-caret-down"></i>')
                    }
                    
                })

            
            $('.brand_cont a').on({
                    mouseenter:function(){
                        $(this).find('.brand_text').stop().animate({
                            bottom:20
                        },400)
                        $(this).find('.brimg').stop().animate({
                            opacity:0.5
                        },400)
                  }
                    })
               
            $('.brand_cont a').on({
                    mouseleave:function(){
                        $(this).find('.brand_text').stop().animate({
                            bottom:-90
                        },400)
                        $(this).find('.brimg').stop().animate({
                            opacity:1
                        },400)
                    }
                })
                
            
           
            
                var highWidth=1200;
                var highNum=0;
               

                $('.high_btn a').each(function(highNum){
                    $(this).on('click',function(e){
                        e.preventDefault();
                        
                        $('.high_btn a.on').removeClass('on');
                        $('.high_btn a').eq(highNum).addClass('on');
                        ani(highNum)
                    })
                
                function ani(highNum){

                    $('.highimg_wrap li').animate({
                        left: -highWidth * highNum + 'px'
                       },2000)
                    }
                })
                $('.hightouch').touchFlow({
                    axis:'x',
                    snap:true,
                    scrollbar:false
                })

                var videoWidth=1200;
                var videoNum=0;
                var videoSid=setInterval(myvideo,3000)

                function myvideo(){
                    $('.prevBtn').trigger('click')
                }


                $('.video_list li:gt(0)').hide();
                
                $('.prevBtn').on('click',function(e){
                        e.preventDefault();
                        
                        videoNum++
                        if(videoNum>=3) videoNum=0;

                       $('.video_list li:eq('+videoNum+')').show()
                       $('.video_list li:eq('+videoNum+')').css('left','1200px')

                        $('.video_list li.on').animate({
                            left: '-1200px'
                        },1000,function(){
                            $(this).removeClass('on');
                            $(this).hide()
                        });
                        
                        $('.video_list li:eq('+videoNum+')').animate({
                            left:'0px'
                        },1000,function(){
                            $(this).addClass('on')
                        })

                    })

                    $('.nextBtn').on('click',function(e){
                        e.preventDefault();

                        videoNum--
                        if(videoNum <0) videoNum=2;
                        
                        $('.video_list li:eq('+videoNum+')').show()
                        $('.video_list li:eq('+videoNum+')').css('left','-1200px')
                    
                        $('.video_list li.on').animate({
                            left: '1200px'
                            },1000,function(){
                            $(this).removeClass('on');
                            $(this).hide()
                        });

                        $('.video_list li:eq('+videoNum+')').animate({
                            left:'0px'
                        },1000,function(){
                            $(this).addClass('on')
                        })
                    })
                    
                    $('.stopBtn').on('click',function(e){
                            e.preventDefault();
                            if($(this).hasClass('pause')==true){
                                clearInterval(videoSid);
                                $('.stopBtn i').replaceWith('<i class="fas fa-play-circle"></i>');
                                $(this).removeClass('pause')
                           }else{
                                clearInterval(videoSid);
                                videoSid=setInterval(myvideo,3000);
                                $(this).addClass('pause');
                                $('.stopBtn i').replaceWith('<i class="far fa-pause-circle"></i>');
                           }

                    })
            
        
                $('.liked_cont:not(:eq(0))').hide();
                
                $('.liked_wrap li > a').on('click',function(e){
                    e.preventDefault();
                  var likeNum=$(this).parent('li').index();
                  $('.liked_wrap li .liked_cont').hide();
                  $('.liked_wrap li .liked_cont').eq(likeNum).show();
         
                })


                $().UItoTop({
                    easeingType: 'easeOutQuart',
                    scrollSpeed: 1000,
                    containerID: 'toTop',
                    containerHoverID: 'toTopHover'
                })


                
        })