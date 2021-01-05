
        $(window).scroll(function () {
            var threshold = 200; // number of pixels before bottom of page that you want to start fading
            var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
            if (op <= 0) {
                $("#sticky-CTA").hide();
            } else {
                $("#sticky-CTA").show();
            }
            $("#sticky-CTA").css("opacity", op);
        });
        $(function () {
            $(document).ready(function () {
                var $nav = $(".fixed-top");
                $nav.toggleClass('scrolled', $(this).scrollTop() > 10);
            });
            $(document).scroll(function () {
                var $nav = $(".fixed-top");
                $nav.toggleClass('scrolled', $(this).scrollTop() > 10);
            });
        });

        $(document).ready(function () {

            $('.first-button').on('click', function () {

                $('.animated-icon1').toggleClass('open');
            });

            $(".navbar-toggler").click(function () {
                $(". ").toggleClass("navOpen");
            });

            $(".pricing-toggle").click(function () {
                $(this).toggleClass("annually");
                if($('.pricing-toggle').hasClass("annually")){
                    $(".monthly").css('display','none');
                    $(".annual").css('display','block');
                }
                else{
                    $(".monthly").css('display','block');
                    $(".annual").css('display','none');
                }
            });

        });

        $(document).ready(function () {
            $("#featuerDropdownLink").click(function () {
                $("#featureDropdown").toggleClass('d-block');
            });
        });