$(function(){
    today = new Date().toISOString().slice(0, 10)
    console.log(today)
    $("#date").val(today)
})
