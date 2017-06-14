////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// jQuery
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var $ = jQuery.noConflict();

$(document).ready(function($) {

    $('#ex1_val').text( $("#main_cost span").text() );

    // header-footer
    $.get("header_page.html", function(data){
		$('#header').append(data);
		$('.selection').each(function(){
			var el = $(this);
			if (el.attr('id') == "menu-language") {
//				el.selectize({
//					sortField: 'text',
//					render: {
//						option: function(item, escape) {
//							return '<div><img src="../assets/img/flag/'+escape(item.path)+'"></div>';
//						}
//					}
//				});
			} else {
				el.selectize({
					sortField: 'text'
				});
			}
		});
      $(".selectize-input input").attr('readonly','readonly');
    });

    $.get("footer.html", function(data){
      $('#footer').append(data);
    });

	//flag
	function myFunction() {
		$("#myDropdown").classList.toggle("show_l");
	}

	$('#myDropdown').click(function(){
		$('dropdown-content').css('display', 'block');
	});
	// Close the dropdown if the user clicks outside of it
	window.onclick = function(event) {
	  if (!event.target.matches('.dropbtn')) {

		var dropdowns = $(".dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
		  var openDropdown = dropdowns[i];
		  if (openDropdown.classList.contains('show_l')) {
			openDropdown.classList.remove('show_l');
		  }
		}
	  }
	}
	//lang tabs flag
	$('.selection_lang').click(function(){
		n = $(this).index();
		$(this).removeClass('_gost').siblings('.selection_lang').addClass('_gost');
		$('.flag_lang').addClass('_gost').eq(n).removeClass('_gost');
	});
    // modal blocks
    $.get("modal_log_in.html", function(data){
      $('#login-modal-open').append(data);
    });
    $.get("modal_register.html", function(data){
      $('#register-modal-open').append(data);
    });
    $.get("modal_error_report.html", function(data){
      $('#error-modal-open').append(data);
    });
    $.get("modal_agency_message.html", function(data){
      $('#agency-modal-open').append(data);
    });
    $.get("modal_agent_message.html", function(data){
      $('#agent-modal-open').append(data);
    });
    $.get("modal_agency_xml.html", function(data){
      $('#agency-modal-xml').append(data);
    });

	$('.s_admin__box_content_tetragons._tabs .tetragon').click(function(){
		var el = $(this),
			n = el.index(),
			tab = el.parent('.s_admin__box_content_tetragons').next('.s_admin__box_content_tables').find('.s_admin__box_content_table');
		el.addClass('_current').siblings().removeClass('_current');
		tab.eq(n).addClass('_current').siblings().removeClass('_current');
	});

	$(".s_admin__box_content_tetragons._tabs a" ).click(function(e) {
  		e.preventDefault();
		var el = $(this),
			n = el.index(),
			tab = el.parent('.s_admin__box_content_tetragons').next('.s_admin__box_content_tables').find('.s_admin__box_content_table');
		el.addClass('_current').siblings().removeClass('_current');
		tab.eq(n).addClass('_current').siblings().removeClass('_current');
	});

	//click closse
	$('.s_admin__box_content_pas-use__del').click(function(){
		$(this).parents('.s_admin__box_content_pas-use_block').animate({height: 'toggle', opacity: '0'}, 170);
	});

	//map
	$('.map_input , .btn_position').click(function(){		        
        $('.map').addClass('visible');
        google.maps.event.trigger(map, "resize");
	});    

	//admin page >> agency details >> password and users hide/show select
	$('._helper_for_hide_select').click(function(){
		$(this).closest('.s_admin__box_content_tab').find('.selectize-control').hide();
	});
	$('._helper_for_show_select').click(function(){
		$(this).closest('.s_admin__box_content_tab').find('.selectize-control').show();
	});

    //Search page hidden content
    $('#toggle-link').on('click',function(e) {
        var $message = $('#hidden_content');
        if ($message.css('display') != 'block') {
            $message.show();
            var firstClick = true;
            $(document).bind('click.myEvent', function(e) {
                if (!firstClick && $(e.target).closest('#hidden_content').length == 0) {
                    $message.hide();
                    $(document).unbind('click.myEvent');
                }
                firstClick = false;
            });
        }
        e.preventDefault();
    });

    // Show rating form
    $(function showRatingForm() {
        $('#leave-reply').hide();
        $("#show-reply-form").click(function () {
            $('#leave-reply').show();
            $('#leave-reply').css('height','380');
        });
    });

    // Rating stars
    var ratingUser = $('.rating-user');
    if (ratingUser.length > 0) {
        $('.rating-user .inner').raty({
            path: 'assets/img',
            starOff : 'big-star-off.png',
            starOn  : 'big-star-on.png',
            width: 150,
            targetType : 'number',
            targetFormat : 'Rating: {score}',
        });
    }

    // Property page tabs
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
        var priceSlider = $('.jslider').detach();
//        $('.tabs ' + currentAttrValue).slideDown(400).siblings().slideUp(400);
		$('.tabs ' + currentAttrValue).addClass('_active').siblings()
			.removeClass('_active');  $(this).parent('li').addClass('active').siblings().removeClass('active');
		if($(this).closest('._map_flag_tabs').length){

		}
		if (window.matchMedia('(min-width: 767px)').matches && $('.sidebar_map').length) {
			$('html, body').stop().animate({scrollTop: 0}, 250);
			if(currentAttrValue!='#tab1'){
				$('.sidebar_map').unstick();
				$('#footer').fadeIn(300);
			}else{
				$('.sidebar_map').sticky({
					topSpacing: 156,
					zIndex: 99,
				});
				$('.sidebar_map').sticky('update');
				$('#footer').hide();
			}
		}

        priceSlider.appendTo($('.tabs ' + currentAttrValue).find('.price-range-wrapper'));
        priceSlider = null;
        e.preventDefault();
    });
//	var height = $('#header').height() + $('.tab-links').height();
//	var content_height = $('#header').height() + $("#page-content-search").height();
//	var to_footer = $('body,html').height() - content_height;
//	var fot = $('.inner').height;
//	var sticky_flag = true;
	$(window).load(function(){
		if (window.matchMedia('(min-width: 767px)').matches && $('.sidebar_map').length) {
			$('.sidebar_map').sticky({
				topSpacing: 156,
				zIndex: 99,
			});
			$('#footer').hide();
		}

	});

//	//tabs
	$('.s_admin__box_content_tabe').click(function(){
		n = $(this).index();
		$(this).addClass('_current').siblings('.s_admin__box_content_tabe').removeClass('_current');
		$('.s_admin__box_content_tabcont').removeClass('_current').eq(n).addClass('_current');
	});

    //  Price slider search page
    if( $(".price-input").length > 0) {
        $(".price-input").each(function() {
            var vSLider = $(this).slider({
                from: 0,
                to: 9000000,
                smooth: true,
                round: 0,
                dimension: '€',
            });
        });
    }

    //Magnific popup init
    if ($('.image-popup').length > 0 ) {
        $('.image-popup').magnificPopup({type:'image'});
    }

    //  Pricing Tables in Submit page
    if ($('.submit-pricing').length > 0){
        $('.but-sel').click(function() {
            $('.submit-pricing .buttons td').each(function () {
                $(this).removeClass('package-selected');
            });
            $(this).parent().css('opacity','1');
            $(this).parent().addClass('package-selected');
        }
        );
    }

    //  Payment in Submit page
//    if($('.pay-now').length >0 ){
//        $('.bank .bank-logo').click(function() {
//            $('.bank').each(function () {
//                $(this).removeClass('active');
//            });
//            $(this).parent().addClass('active');
//        }
//        );
//    }

    // Initialize  Owl Carousel block
    $("#owl-demo").owlCarousel({
        items : 4,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1024:{
                items:3
            }
        }
    });
    $("#owl-demo-2").owlCarousel({
        items : 3,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1024:{
                items:3
            }
        },
        pagination: true,
        nav: true,
        slideSpeed: 700,
        itemsDesktop: [1024,3],
        itemsDesktop: [480,1],
        loop:true,
        navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
        ]
    });

    if ( parseInt( $('.owl-demo-3').find('.item').length ) <= 1 ) {
        t_f_3 = false;
    } else {
       t_f_3 = true;
    }
    $(".owl-demo-3").owlCarousel({
        items : 1,
        pagination:true,
        nav: t_f_3,
        autoHeight:true,
        itemsCustom: [1600, 1],
        smartSpeed: 1000,
        loop:t_f_3,
        touchDrag:t_f_3,
        mouseDrag:t_f_3,
        navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
        ]
    });

    // Initialize  Owl Carousel block Home page v_2

    if ( parseInt( $('#owl-demo-header').find('.item').length ) <= 1 ) {
        t_f_header = false;
    } else {
       t_f_header = true;
    }

    $('#owl-demo-header').owlCarousel({
        items : 1,
        pagination: true,
        nav: t_f_header,
        smartSpeed: 1200,
        loop:t_f_header,
        touchDrag:t_f_header,
        mouseDrag:t_f_header,
        navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
        ]
    });

    //  iCheck
    if ($('.switch').length > 0) {
        $('.switch input').iCheck();
    }
    if ($('.radio').length > 0) {
        $('input').iCheck();
    }
    if ($('.checkbox').length > 0) {
        $('input:not(.no-icheck)').iCheck();
    }

    //  Smooth Navigation Scrolling
    $('a[href^="#"].roll').live('click',function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);
        if ($(window).width() > 768) {
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - $('.navigation').height()
            }, 2000)
        } else {
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 2000)
        }
    });

	//main page logo show
	var btn_flag = false;
	$('.logo_show').click(function(e){
		var el = $(this),
			wrp = el.closest('.logo_container'),
			hidden = wrp.find('.logo_wrp_hidden');
		e.preventDefault();
		if(!btn_flag){
			hidden.addClass('_visible');
			el.text('hide');
			btn_flag = true;
		}else{
			hidden.removeClass('_visible');
			el.text('show all');
			btn_flag = false;
		}
	});

    // Menu Button
    $('.navbar a.drop-left, .navbar a.drop-close').live('click', function (e) {
        //pressing more first time
            if ($('.start').length > 0) {
            $('.primary.main-menu').removeClass("start");
            $('.primary.main-menu>ul').addClass("smooth");
            $('.drop-close, .secondary.main-menu>ul').addClass("hidden");
        }
        //pressing close
        if ($('.drop-left').hasClass("hidden")) {
            $('.secondary.main-menu').addClass("open");
            $('.secondary.open li').css('opacity', '1');
            $('.blog-nv .secondary>ul, .blog-mn .secondary>ul').removeClass("hidden");
            $('.secondary.main-menu>ul').removeClass("smooth");
            setTimeout(function() {
                $('.secondary.main-menu').addClass("smooth-remove");
            }, 100);
            setTimeout(function() {
                $('.secondary.main-menu').removeClass("open smooth-remove");
            }, 500);
            setTimeout(function() {
                $('.drop-left, .primary.main-menu>ul').removeClass("hidden");
                $('.drop-close, .secondary.main-menu>ul').addClass("hidden");
            }, 600);
            setTimeout(function() {
                $('.primary.main-menu>ul').addClass("smooth");
            }, 620);
        }
        //pressing more
        else {
            $('.primary.main-menu, .drop-left').addClass("smooth-remove");
            $('.secondary.open li').css('opacity', '0');
            setTimeout(function() {
                $('.drop-left, .primary.main-menu>ul').addClass("hidden");
                $('.drop-close, .secondary.main-menu>ul').removeClass("hidden");
                $('.primary.main-menu').removeClass("smooth-remove");
                $('.drop-left').removeClass("smooth-remove");
                $('.primary.main-menu>ul').removeClass("smooth");
            }, 300 );
            $('.blog-nv .secondary>ul, .blog-mn .secondary>ul').removeClass("hidden");
            setTimeout(function() {
                $('.secondary.main-menu>ul').addClass("smooth");
            }, 350 );
        }
    });
    $('.wrapper').live('click', function (e) {
        if ($('.secondary').hasClass("open")) {
            $('.drop-left, .primary.main-menu>ul').removeClass("hidden");
            $('.drop-close, .secondary.main-menu>ul').addClass("hidden");
            setTimeout(function() {
                $('.primary.main-menu>ul').addClass("smooth");
                $('.drop-close, .secondary.main-menu>ul').removeClass("smooth");
            }, 100);
        }
    });

    // Sliding submenu in mobile menu
    $( '.navigation .site-header .mob-menu li.has-child>a' ).live('touchstart click', function (e) {
      e.preventDefault();
      var $t=$(this).parent();
      if(!($t).hasClass("opened")) {
            $('.mob-menu .child-navigation').slideUp( "fast" );
            $('.mob-menu .child-navigation').parent().removeClass("opened");
            $($t).addClass("opened");
            $($t).children('.mob-menu .child-navigation').slideToggle( "fast" );
        } else {
            $('.mob-menu .child-navigation').slideUp( "fast" );
            $('.mob-menu .child-navigation').parent().removeClass("opened");
        }
    });

    $( '.navigation .container li.has-child>a' ).live('touchstart click', function (e) {
        e.preventDefault();
        var $t=$(this).parent();
        $($t).children('.child-navigation').slideDown( "fast" );
    });

    // Video Wrapping with container preserves width and height
    $( 'embed, iframe' ).wrap( "<div class='video-container'></div>" );

    // Set Bookmark button attribute
    $( ".bookmark" ).each(function(index) {
        $(this).on("click", function() {
            if ($(this).data('bookmark-state') == 'empty') {
                $(this).removeClass('bookmark-added');
            } else if ($(this).data('bookmark-state') == 'added') {
                $(this).addClass('bookmark-added');
            }
            var is_choose = 0;
            var property_id = $(this).data('propertyid');
            if ($(this).data('bookmark-state') == 'empty') {
                $(this).data('bookmark-state', 'added');
                $(this).addClass('bookmark-added');
                is_choose = 1;
            } else if ($(this).data('bookmark-state') == 'added') {
                $(this).data('bookmark-state', 'empty');
                $(this).removeClass('bookmark-added');
                is_choose = 0;
            }
            var data = { action: 'add_user_bookmark', property_id : property_id, is_choose : is_choose };
            return false;
        });
    });

    // Set Compare button attribute
    $( ".compare" ).each(function(index) {
        $(this).on("click", function(){
            if ($(this).data('compare-state') == 'empty') {
                $(this).removeClass('compare-added');
            } else if ($(this).data('compare-state') == 'added') {
                $(this).addClass('compare-added');
            }
            var is_choose = 0;
            var property_id = $(this).data('propertyid');
            if ($(this).data('compare-state') == 'empty') {
                $(this).data('compare-state', 'added');
                $(this).addClass('compare-added');
                is_choose = 1;
            } else if ($(this).data('compare-state') == 'added') {
                $(this).data('compare-state', 'empty');
                $(this).removeClass('compare-added');
                is_choose = 0;
            }
            var data = { action: 'add_user_bookmark', property_id : property_id, is_choose : is_choose };
            return false;
        });
    });

    function sliderpoint() {
        var slider_width = parseInt($(".jslider").css('width'), 10);
        var right_point = parseInt($(".jslider-pointer.jslider-pointer-to").css('left'), 10);
        var left_point = parseInt($(".firstpoint").css('left'), 10);
        left_point = 100*left_point/slider_width;
        right_point = 100*right_point/slider_width;
        if (right_point > 97) { $('.jslider-pointer.jslider-pointer-to').addClass('slide-right'); }
        if (right_point <= 97){ $('.jslider-pointer.jslider-pointer-to').removeClass('slide-right'); }
        if (left_point > 97) { $('.firstpoint').addClass('slide-right'); }
        if (left_point <= 97){ $('.firstpoint').removeClass('slide-right'); }
    }

    $('.jslider-pointer').addClass('firstpoint');
    $('.jslider-pointer.jslider-pointer-to').removeClass('firstpoint');

    $(".price-range-wrapper").mousemove(sliderpoint);

	//Calendar "bootstrap-formhelpers"
	//http://xdsoft.net/jquery-plugins/demo/bfh-datepicker/
	if($('.bfh-datepicker-toggle').length){
		$('.bfh-datepicker-toggle').bfhdatepicker('toggle');
	}

	//table
	//http://w3pro.ru/article/plagin-jquery-dlya-sortirovki-html-tablits
	if($('*').is('#myTable')){
		$(document).ready(function(){
			$("#myTable").tablesorter({sortList: [[0,0], [1,0]]});
		});
	}
	//
	$('.input-additional').click(function(){
		$('<div class="form-group added col-xs-12 col-sm-6 col-md-2"><label>&nbsp;</label><input type="numb" class="form-control" required></div>').prependTo('.addition');
	});
	//my agency click agency details    
    $(".prop_itm2 .agency_click" ).click(function(e) {
  		e.preventDefault();
		$("#agency_click").trigger("click");
		$(this).closest('.prop_itm2').addClass('active').siblings().removeClass('active');
        return false;
	});
    
     $("#my_prop .properties_click" ).click(function(e) {
  		e.preventDefault();
		$("#prop_details_click").trigger("click");
        return false;
	});

	//graph
	var barChartData = {
		labels: ["Q1-15", "Q2-15", "Q3-15", "Q4-15", "Q1-16", "Q2-16", "Q3-16", "Q4-16"],
		datasets: [{
			label: "Cyprus Property Sales per Q",
			type: 'line',
			data: [90, 78, 76, 70, 69, 78, 80],
			fill: false,
			borderWidth: 5,
			pointBorderWidth: 11,
			pointHoverBorderWidth: 15,
			borderColor: '#1e88e5',
			backgroundColor: '#1e88e5',
			pointBorderColor: '#1e88e5',
			pointBackgroundColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: '#1e88e5',
			yAxisID: 'y-axis-2',
			titleFontSize: 12
		}, {
			label: "Cyprus Property Price Index per Q",
			type: 'bar',
			data: [700, 1400, 1000, 1621, 2050, 1400, 995, 1500],
			fill: false,
			backgroundColor: '#ef5350',
			borderColor: '#ef5350',
			hoverBackgroundColor: '#c92525',
			hoverBorderColor: '#fff',
			yAxisID: 'y-axis-1'
		}]
	};
	var barChartData2 = {
		labels: ["", "", "", "", "", "", "", "", "", ""],
		datasets: [{
			label: "Cyprus Property Sales per Q",
			type: 'line',
			data: [70, 71, 72, 73, 74, 78, 69, 72, 75, 77],
			fill: false,
			borderWidth: 5,
			pointBorderWidth: 11,
			pointHoverBorderWidth: 15,
			borderColor: '#1e88e5',
			backgroundColor: '#1e88e5',
			pointBorderColor: '#1e88e5',
			pointBackgroundColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: '#1e88e5',
			yAxisID: 'y-axis-3',
			titleFontSize: 12
		}, {
			label: "Cyprus Property Sales per Q",
			type: 'line',
			data: [60, 61, 62, 63, 70, 68, 65, 62, 65, 61],
			fill: false,
			borderWidth: 5,
			pointBorderWidth: 11,
			pointHoverBorderWidth: 15,
			borderColor: '#ef5350',
			backgroundColor: '#ef5350',
			pointBorderColor: '#ef5350',
			pointBackgroundColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: '#ef5350',
			yAxisID: 'y-axis-3',
			titleFontSize: 12
		}, {
			label: "Cyprus Property Sales per Q",
			type: 'line',
			data: [50, 51, 59, 49, 50, 58, 55, 52, 55, 61],
			fill: false,
			borderWidth: 5,
			pointBorderWidth: 11,
			pointHoverBorderWidth: 15,
			borderColor: '#fdd835',
			backgroundColor: '#fdd835',
			pointBorderColor: '#fdd835',
			pointBackgroundColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: '#fdd835',
			yAxisID: 'y-axis-3',
			titleFontSize: 12
		}, {
			label: "Cyprus Property Sales per Q",
			type: 'line',
			data: [40, 39, 38, 41, 40, 36, 44, 42, 35, 30],
			fill: false,
			borderWidth: 5,
			pointBorderWidth: 11,
			pointHoverBorderWidth: 15,
			borderColor: '#a9a9aa',
			backgroundColor: '#a9a9aa',
			pointBorderColor: '#a9a9aa',
			pointBackgroundColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: '#a9a9aa',
			yAxisID: 'y-axis-3',
			titleFontSize: 12
		}]
	};

	window.onload = function () {
		if($('#canvas').length){
			var ctx = document.getElementById("canvas").getContext("2d");
			ctx.canvas.height = 130;
			window.myBar = new Chart(ctx, {
				type: 'bar',
				data: barChartData,
				options: {
					responsive: true,
					tooltips: {
						mode: 'label'
					},
					elements: {
						line: {
							fill: false
						}
					},
					scales: {
						xAxes: [{
							barThickness : 42,
							display: true,
							gridLines: {
								display: false
							},
							labels: {
								show: true,
							}
						}],
						yAxes: [{
							type: "linear",
							display: true,
							position: "left",
							id: "y-axis-1",
							gridLines: {
								display: false
							},
							labels: {
								show: true,

							}
						}, {
							type: "linear",
							display: true,
							position: "right",
							id: "y-axis-2",
							gridLines: {
								display: false
							},
							labels: {
								show: true,

							}
						}]
					}
				}
			});
		}
		if($('#myChart').length){
			var ctx2 = document.getElementById("myChart").getContext("2d");
			ctx2.canvas.height = 300;
			window.myBar2 = new Chart(ctx2, {
				type: 'bar',
				data: barChartData2,
				options: {
					responsive: true,
					tooltips: {
						mode: 'label'
					},
					elements: {
						line: {
							fill: false
						}
					},
					scales: {
						xAxes: [{
							barThickness : 42,
							display: true,
							gridLines: {
								display: false
							},
							labels: {
								show: true,
							}
						}],
						yAxes: [{
							type: "linear",
							display: true,
							position: "left",
							id: "y-axis-1",
							gridLines: {
								display: false
							},
							labels: {
								show: true,

							}
						}, {
							type: "linear",
							display: true,
							position: "right",
							id: "y-axis-3",
							gridLines: {
								display: false
							},
							labels: {
								show: true,

							}
						}]
					}
				}
			});
		}
	};



});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// On RESIZE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(window).on('resize', function(){
    equalHeight('.equal-height');
    // Set Owl Carousel width on resize window
    $('.carousel-full-width').css('width', $(window).width());
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// On LOAD
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(window).load(function(){

    //  Show counter after appear
    var $number = $('.number');
    var $grid;

    if ($number.length > 0 ) {
        $number.waypoint(function() {
            initCounter();
        }, { offset: '100%' });
    }

    //Masonry grid init
    function triggerMasonry() {
        if ( !$grid ) { return; }
        $grid.masonry({
            itemSelector: '.grid-item'
        });
    }

    $grid = $('.grid');
    triggerMasonry();

    // Owl Carousel
    // Disable click when dragging
    function disableClick(){
        $('.owl-carousel .property').css('pointer-events', 'none');
    }
    // Enable click after dragging
    function enableClick(){
        $('.owl-carousel .property').css('pointer-events', 'auto');
    }

    if ($('.owl-carousel').length > 0) {
        if ($('.carousel-full-width').length > 0) {
            setCarouselWidth();
        }
        if ( parseInt( $('.testimonials-carousel').find('.item').length ) <= 1 ) {
            t_f_test = false;
        } else {
            t_f_test = true;
        }
        $(".testimonials-carousel").owlCarousel({
            items: 1,
            responsiveBaseWidth: ".testimonial",
            pagination: true,
            nav:t_f_test,
            slideSpeed : 700,
            loop:t_f_test,
            touchDrag:t_f_test,
            mouseDrag:t_f_test,
            navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
            ],
        });
    }
    function sliderLoaded(){
        $('#slider').removeClass('loading');
        document.getElementById("loading-icon").remove();
        centerSlider();
    }
    function animateDescription(){
        var $description = $(".slide .overlay .info");
        $description.addClass('animate-description-out');
        $description.removeClass('animate-description-in');
        setTimeout(function() {
            $description.addClass('animate-description-in');
        }, 400);
    }

    //Preloader
    var $preloader = $('#page-preloader');
    $preloader.fadeOut('slow');
    $spinner = $preloader.find('.gps_ring');
    $spinner2 = $preloader.find('.gps_ring2');
    $spinner.fadeOut();
    $spinner2.fadeOut();        

});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if ($('body').is('#search_field')) {
    var autocomplete = new google.maps.places.Autocomplete(document.getElementById('search_field'), {
        componentRestrictions: {country: 'cy'}
    });
}
// function initialize() {

//     var options = {
//       // types: ['(cities)'],
//       componentRestrictions: {country: "us"}
//     };

//     var input = document.getElementById('search_field');
//     var autocomplete = new google.maps.places.Autocomplete(input, options);
// }

//  Equal heights
function equalHeight(container) {
    var currentTallest = 0,
    currentRowStart = 0,
    rowDivs = new Array(),
    $el,
    topPosition = 0;
    $(container).each(function() {

        $el = $(this);
        $($el).height('auto');
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

//funny numbers counter
function initCounter(){
    $('.number').countTo({
        speed: 3000,
        refreshInterval: 50,
        onComplete: function (value) {
            window.initCounter=function(){return false;};
        }
    });
}

// Set Owl Carousel width
function setCarouselWidth(){
    $('.carousel-full-width').css('width', $(window).width());
}