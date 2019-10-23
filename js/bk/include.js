function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}
function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

/* Main js========================================================*/
include('js/jquery-3.4.1.min.js');
include('js/jquery-ui.min.js');
include('js/swiper.min.js');
/* Boostap ========================================================*/
include('js/bootstrap/popper.min.js');
include('js/bootstrap/bootstrap.min.js');
include('js/datatables/jquery.dataTables.min.js');
//include('js/bootstrap/bootstrap.bundle.min.js');
/* Custom ========================================================*/
include('js/script.js');
//include(domain + '/js/jquery.mCustomScrollbar.js');

