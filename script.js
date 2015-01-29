/*jslint white: true */
/*jslint browser: true, plusplus:true, vars: true*/
/*global $, jQuery, alert*/
$(document).ready(function() {
    "use strict";
    $( '.linkstyle' ).hover(
        function(){
            $(this).children('.submenu').slideDown(150);
        },
        function(){
            $(this).children('.submenu').slideUp(150);
        }
    );
}); // end ready