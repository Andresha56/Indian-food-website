
$(".fa-bars").click(()=>{
   $("ul").css({"right":"0"})
   $(".fa-bars").css("display", "none");
   $(".fa-xmark").css("display", "block");
})
$(".fa-xmark").click(()=>{
   $(".fa-bars").css("display", "block");
   $(".fa-xmark").css("display", "none");  
   $("ul").css({"right":"100%"})
})