$( document ).ready(function() {
    $('a[href="#prevent-link"]').on("click", function(e){
        e.preventDefault();
    });
});