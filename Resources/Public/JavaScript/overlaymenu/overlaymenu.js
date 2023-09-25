$( document ).ready(function() {
    $('[href="#overlaymenu"]').on('click', function(e){
        e.preventDefault();
        $('#overlaymenu').toggleClass('active');
    });
});
