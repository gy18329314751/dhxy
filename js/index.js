window.onload=function(){
    $(function(){
        $('.img').eq(0).show()
        var num=0;
        $('.banner-prev').click(function(){
            num--
            if(num<0){
                num=$('.img').length-1
            }
            $('.img').eq(num).show().siblings().hide()
        })
    
        $('.banner-next').click(function(){
            num++
            if(num>$('.img').length-1){
                num=0
            }
            $('.img').eq(num).show().siblings().hide()
        })
    });   
    
    

    //   var time=0
    // $(".slide-nav").find("a").mouseover(function(){
    //     $(".slide-nav").find("a").attr("class","") ;
    //     $(this).attr("class","now");
    //     //div的显示
    //     $(".slide-wrapper").find("li").css("display","none");
    //     $(".slide-wrapper").find("li").eq($(this).index()).css("display","block")
    // });







    ~function () {
        var i = 0;
         function aa() {
            if (i == 4) {
                i = 0
            }
            $(".slide-nav").find($('a')).eq(i).addClass('now').siblings().removeClass('now')
            $(".slide-wrapper").find($('li')).eq(i).show().siblings().hide()
            i++;
        }
         var timer = setInterval(aa, 1000);
        $(".slide-box").hover(function () {
                clearInterval(timer);
            },
            function () {
                timer = setInterval(aa,1000);
            });
        $(".slide-nav").find($('a')).hover(function () {
            i = $(this).index()
            $(".slide-nav").find($('a')).eq(i).addClass('now').siblings().removeClass('now')
            $(".slide-wrapper").find($('li')).eq(i).show().siblings().hide()
         })
    }()
    














    $(".ccc").find("a").mouseover(function(){
        $(".ccc").find("a").attr("class","") ;
        $(this).attr("class","mop");
        //div的显示
        $(".ddd_a").find("ul").css("display","none");
        $(".ddd_a").find("ul").eq($(this).index()).css("display","block")
    });


    
}
