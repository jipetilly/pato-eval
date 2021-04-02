$(document).ready(function(){

    $(".wrap-gallery").isotope({
        itemSelector: '.picture-gallery',
    });

// FILTER ISOTOPE LABEL
    $(".wrap-label a").click(function(){
        $('.wrap-label a').removeClass("label-active");
        $(this).addClass("label-active");
    
        var selector = $(this).attr("data-filter");
        $(".wrap-gallery").isotope({
            filter: selector,
        });
        return false
    });
}); 