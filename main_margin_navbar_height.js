function reSizeMain(){
    console.log("resizemain")
    var height = $("#navbar").outerHeight()
    $("main").css('margin-top',height)
}

$(function(){
    reSizeMain()
    $(window).resize(function(){
        reSizeMain()
    })
})
