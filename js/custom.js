/******************************************
    File Name: custom.js
    Template Name: EduPress
    Created By: PSD Convert HTML Team
    Envato Profile: http://themeforest.net/user/psdconverthtml
    Website: https://psdconverthtml.com
    Version: 1.0
    Support: support@psdconverthtml.com
/******************************************/

(function($) {
    "use strict";

    /* ==============================================
     TOOLTIP -->
     =============================================== */

    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()

    /* ==============================================
    BACK TOP
    =============================================== */

    jQuery('.dmtop').click(function() {
        jQuery('html, body').animate({
            scrollTop: '0px'
        }, 800);
        return false;
    });

    /* ==============================================
     FUN FACTS -->
     =============================================== */

    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 1; /* Where 50 is increment */
        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function() {
                count($this)
            }, 50);
        }
    }
    $(".stat-count").each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });

    /* ==============================================
     LOADER -->
     =============================================== */

    $(window).load(function() {
        $('.cssload-container').delay(300).fadeOut('slow');
        $('body').delay(300).css({
            'overflow': 'visible'
        });
    })

    /* ==============================================
     LOADER -->
     =============================================== */

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
        
})(jQuery);
