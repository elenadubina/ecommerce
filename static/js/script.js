// This thing opens and hides footer's divs when click
$(document).ready(function(){
    $('.blocktitle').click(function(event){
        $(this).toggleClass('active').next().slideToggle(300);
    });
});
