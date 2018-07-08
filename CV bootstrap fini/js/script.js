
$(document).ready(function(){
    $(".job").mouseover(function(){
        $(this).addClass('bg-primary text-white text-center p-3')
    });

    $(".job").mouseout(function(){
        $(this).removeClass('bg-primary text-white text-center p-3')
    });
});
