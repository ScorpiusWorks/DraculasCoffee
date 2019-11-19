// you can use document ready function for activing your plugin .

(function($) {
  "use strict";
    /* ==========================================================================
   window laod function
   ========================================================================== */
    $(window).load(function (){
        // preloader active
        /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            /* Intro Height  */
            /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

            function preHeight() {
                var wh = $(window).height();
                $('#boss-preloader').css({height: wh});
            }

            preHeight();
            $(window).bind('resize',function () {
                //Update slider height on resize
                preHeight();
            });


            // preloader function
            $('#boss-preloader').fadeOut(); // will first fade out the loading animation
            $('body').delay(350).css({'overflow':'visible'});
            // active owl carousel
            $(".boss-owl").owlCarousel({
                pagination: false,
                autoPlay : true,
                stopOnHover : true,
                responsiveClass: true,
                items: 3,
                itemsDesktop: 3,
                itemsDesktopSmall: 3,
                itemsTablet: 1,
                autoHeight : true
            });
    });

    /* ==========================================================================
    Document ready function
   ========================================================================== */

    $( document ).ready(function() {
    // your plugin activation here

     // backstretch active here
     $(".boss-home-area").backstretch([
            "../images/Cup-Coffee-Beans-vignette-extreme.jpg"
          ]);

     // countdown
      // To change date, simply edit: var endDate = "May 26, 2015 20:39:00";
      var endDate = "May 19, 2015 20:39:00";
        $('.boss-countdown').countdown({
          date: endDate,
          render: function(data) {
            $(this.el).html('<div><div><span>' + this.leadingZeros(data.days, 2) + '</span><span>days</span></div><div><span>' + this.leadingZeros(data.hours, 2) + '</span><span>hours</span></div></div><div class="boss-countdown"><div><span>' + this.leadingZeros(data.min, 2) + '</span><span>minutes</span></div><div><span>' + this.leadingZeros(data.sec, 2) + '</span><span>seconds</span></div></div>');
          }
        });


     // nicescroll active here
     $("html").niceScroll({
        cursorcolor: '#fff',// it's use for dark version
        cursorborder: '1px solid #fff', // it's use for dark verstion
        //cursorcolor: '#323232',// it's use for light version
        //cursorborder: '1px solid #323232', // it's use for light verstion
        mousescrollstep: 50,
        autohidemode: false
     });

     // scroll up active
     $(function () {
        $.scrollUp({
          scrollImg: true,
          scrollSpeed: 650,
          topDistance: '1500'
        });
    });
     // JQUERY.MB.YTPLAYER

        $(function(){
          $(".player").mb_YTPlayer({
            showControls: false,
            stopMovieOnBlur: false
          });
        });

    });

    // Google map API
    $(function() {

        //set your google maps parameters
        var latitude = 34.6640902,
            longitude = -118.12669,
            map_zoom = 16;

        //google map custom marker icon - .png fallback for IE11
        var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
        var marker_url = (is_internetExplorer11) ? '../images/cd-icon-location.png' : '../images/cd-icon-location.svg';

        //define the basic color of your map, plus a value for saturation and brightness
        var main_color = '#2d313f',
            saturation_value = -90,
            brightness_value = 2;

        //we define here the style of the map
        var style = [{
                //set saturation for the labels on the map
                elementType: "labels",
                stylers: [{
                    saturation: saturation_value
                }]
            }, { //poi stands for point of interest - don't show these lables on the map
                featureType: "poi",
                elementType: "labels",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                //don't show highways lables on the map
                featureType: 'road.highway',
                elementType: 'labels',
                stylers: [{
                    visibility: "off"
                }]
            }, {
                //don't show local road lables on the map
                featureType: "road.local",
                elementType: "labels.icon",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                //don't show arterial road lables on the map
                featureType: "road.arterial",
                elementType: "labels.icon",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                //don't show road lables on the map
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{
                    visibility: "off"
                }]
            },
            //style different elements on the map
            {
                featureType: "transit",
                elementType: "geometry.fill",
                stylers: [{
                    hue: main_color
                }, {
                    visibility: "on"
                }, {
                    lightness: brightness_value
                }, {
                    saturation: saturation_value
                }]
            }, {
                featureType: "poi",
                elementType: "geometry.fill",
                stylers: [{
                    hue: main_color
                }, {
                    visibility: "on"
                }, {
                    lightness: brightness_value
                }, {
                    saturation: saturation_value
                }]
            }, {
                featureType: "poi.government",
                elementType: "geometry.fill",
                stylers: [{
                    hue: main_color
                }, {
                    visibility: "on"
                }, {
                    lightness: brightness_value
                }, {
                    saturation: saturation_value
                }]
            }, {
                featureType: "poi.sport_complex",
                elementType: "geometry.fill",
                stylers: [{
                    hue: main_color
                }, {
                    visibility: "on"
                }, {
                    lightness: brightness_value
                }, {
                    saturation: saturation_value
                }]
            }, {
                featureType: "poi.attraction",
                elementType: "geometry.fill",
                stylers: [{
                    hue: main_color
                }, {
                    visibility: "on"
                }, {
                    lightness: brightness_value
                }, {
                    saturation: saturation_value
                }]
            }, {
                featureType: "poi.business",
                elementType: "geometry.fill",
                stylers: [{
                    hue: main_color
                }, {
                    visibility: "on"
                }, {
                    lightness: brightness_value
                }, {
                    saturation: saturation_value
                }]
            }, {
                featureType: "transit",
                elementType: "geometry.fill",
                stylers: [{
                    hue: main_color
                }, {
                    visibility: "on"
                }, {
                    lightness: brightness_value
                }, {
                    saturation: saturation_value
                }]
            }, {
                featureType: "transit.station",
                elementType: "geometry.fill",
                stylers: [{
                    hue: main_color
                }, {
                    visibility: "on"
                }, {
                    lightness: brightness_value
                }, {
                    saturation: saturation_value
                }]
            }, {
                featureType: "landscape",
                stylers: [{
                    hue: main_color
                }, {
                    visibility: "on"
                }, {
                    lightness: brightness_value
                }, {
                    saturation: saturation_value
                }]

            }, {
                featureType: "road",
                elementType: "geometry.fill",
                stylers: [{
                    hue: main_color
                }, {
                    visibility: "on"
                }, {
                    lightness: brightness_value
                }, {
                    saturation: saturation_value
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{
                    hue: main_color
                }, {
                    visibility: "on"
                }, {
                    lightness: brightness_value
                }, {
                    saturation: saturation_value
                }]
            }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [{
                    hue: main_color
                }, {
                    visibility: "on"
                }, {
                    lightness: brightness_value
                }, {
                    saturation: saturation_value
                }]
            }
        ];

        //set google map options
        var map_options = {
                center: new google.maps.LatLng(latitude, longitude),
                zoom: map_zoom,
                panControl: false,
                zoomControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                styles: style,
            }
            //inizialize the map
        var map = new google.maps.Map(document.getElementById('google-container'), map_options);
        //add a custom marker to the map
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude),
            map: map,
            visible: true,
            icon: marker_url,
        });

        //add custom buttons for the zoom-in/zoom-out on the map
        function CustomZoomControl(controlDiv, map) {
            //grap the zoom elements from the DOM and insert them in the map
            var controlUIzoomIn = document.getElementById('cd-zoom-in'),
                controlUIzoomOut = document.getElementById('cd-zoom-out');
            controlDiv.appendChild(controlUIzoomIn);
            controlDiv.appendChild(controlUIzoomOut);

            // Setup the click event listeners and zoom-in or out according to the clicked element
            google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
                map.setZoom(map.getZoom() + 1)
            });
            google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
                map.setZoom(map.getZoom() - 1)
            });
        }

        var zoomControlDiv = document.createElement('div');
        var zoomControl = new CustomZoomControl(zoomControlDiv, map);

        //insert the zoom div on the top left of the map
        map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);

    });




})(jQuery);
