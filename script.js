$(document).ready(function(){
    ;(function($, win) {
        $.fn.inViewport = function(cb) {
           return this.each(function(i,el){
             function visPx(){
               var H = $(this).height(),
                   r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
               return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
             } visPx();
             $(win).on("resize scroll", visPx);
           });
        };
    }(jQuery, window));

    $(".teamInfo").inViewport(function(px){
        if(px) $(this).addClass("flyFromLeft") ;
    });

    $(".teamImg").inViewport(function(px){
        if(px) $(this).addClass("flyFromRight") ;
    });

    $(".problemInfo").inViewport(function(px){
        if(px) $(this).addClass("flyFromRight") ;
    });

    $(".problemImg").inViewport(function(px){
        if(px) $(this).addClass("flyFromLeft") ;
    });

    $(".ideaInfo").inViewport(function(px){
        if(px) $(this).addClass("flyFromLeft") ;
    });

    $(".ideaImg").inViewport(function(px){
        if(px) $(this).addClass("flyFromRight") ;
    });

    $(".appInfo").inViewport(function(px){
        if(px) $(this).addClass("flyFromRight") ;
    });

    $(".appImg").inViewport(function(px){
        if(px) $(this).addClass("flyFromLeft") ;
    });

    $(".appLink").inViewport(function(px){
        if(px) $(this).addClass("flyFromTop") ;
    });
 
 });