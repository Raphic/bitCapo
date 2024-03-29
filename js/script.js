$(document).ready(function () {
    var swiper = new Swiper('.rateTerm', {
        slidesPerView: 3,
        spaceBetween: 80,
        breakpoints: {
            1200: {
              spaceBetween: 40,
            },
            992: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
        },
    });
    
    $('#hisOrderTable').DataTable({
        "bLengthChange": false,
        "bFilter": true,
        searching: false
    });
    
    $('#paymentHistory').DataTable({
        "bLengthChange": false,
        "bFilter": true,
        searching: false
    });
    
    $('#priceAlerts').DataTable({
        "bLengthChange": false,
        "bFilter": true,
        searching: false
    });
    
    $('#portfolioBuy').DataTable({
        "bLengthChange": false,
        "bFilter": true,
        searching: false,
        "info": false
    });
    $('#portfolioSell').DataTable({
        "bLengthChange": false,
        "bFilter": true,
        searching: false,
        "info": false
    });
    
    // Animation when click Routing Number && Account Number on link-bank.html
    $('#inputRNumber').focus(function(){
        console.log("ádsad");
        $('#routingNumber').toggleClass('bg-main bg-secon');
    }).on("focusout",function(){
        $('#routingNumber').toggleClass('bg-main bg-secon');
    });
    
    $('#inputANumber').focus(function(){
        console.log("ádsad");
        $('#accountNumber').toggleClass('bg-main bg-secon');
    }).on("focusout",function(){
        $('#accountNumber').toggleClass('bg-main bg-secon');
    });
});


