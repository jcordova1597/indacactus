var jQ = jQuery.noConflict();

jQ(document).ready(function(){

/*START Slider Touchable-----------------------------------*/

  jQ("#home-slider").swiperight(function() {  
    jQ(this).carousel('prev');  
  });  
  jQ("#home-slider").swipeleft(function() {  
    jQ(this).carousel('next');  
  }); 



  jQ("#carouselSuccess").swiperight(function() {  
      jQ(this).carousel('prev');  
  });  
  jQ("#carouselSuccess").swipeleft(function() {  
      jQ(this).carousel('next');  
  }); 


  jQ("#carouselSuccess2").swiperight(function() {  
      jQ(this).carousel('prev');  
  });  
  jQ("#carouselSuccess2").swipeleft(function() {  
      jQ(this).carousel('next');  
  }); 


  jQ("#carouselSuccess3").swiperight(function() {  
      jQ(this).carousel('prev');  
  });  
  jQ("#carouselSuccess3").swipeleft(function() {  
      jQ(this).carousel('next');  
  }); 


  jQ("#carouselSuccess4").swiperight(function() {  
      jQ(this).carousel('prev');  
  });  
  jQ("#carouselSuccess4").swipeleft(function() {  
      jQ(this).carousel('next');  
  });

  jQ("#carouselSuccess5").swiperight(function() {  
      jQ(this).carousel('prev');  
  });  
  jQ("#carouselSuccess5").swipeleft(function() {  
      jQ(this).carousel('next');  
  }); 


  jQ("#sponsors").swiperight(function() {  
      jQ(this).carousel('prev');  
  });  
  jQ("#sponsors").swipeleft(function() {  
      jQ(this).carousel('next');  
  });


  jQ("#testimonials").swiperight(function() {  
      jQ(this).carousel('prev');  
  });  
  jQ("#testimonials").swipeleft(function() {  
      jQ(this).carousel('next');  
  }); 

  jQ("#teamBios").swiperight(function() {  
      jQ(this).carousel('prev');  
  });  
  jQ("#teamBios").swipeleft(function() {  
      jQ(this).carousel('next');  
  });   

  jQ("#thanks").swiperight(function() {  
      jQ(this).carousel('prev');  
  });  
  jQ("#thanks").swipeleft(function() {  
      jQ(this).carousel('next');  
  });

  jQ("#gallery-dog").swiperight(function() {  
      jQ(this).carousel('prev');  
  });  
  jQ("#gallery-dog").swipeleft(function() {  
      jQ(this).carousel('next');  
  });
/*END Slider Touchable-----------------------------------*/

/*START List Effect----------------------------------------*/

  jQ('.section-c .right-c').first().css('display','block');
  jQ('.section-c .previous').first().next().css('display', 'block');
  jQ('.section-c .left-c .program-container .program-link').click(function(e) {
    e.preventDefault();

    var link_c = jQ(this).attr("href");
    jQ(".right-c").fadeOut("600");
    jQ(link_c).fadeIn("600");
    setTimeout(function(){
      jQ('html,body').animate({
        scrollTop: jQ(link_c).offset().top - 128
      }, 500);
    },500);
    var number_ = jQ(this).data("number");
    if (number_ < jQ('.section-c .left-c .program-container .program-link').length) {
      var link_c_2 = number_ + 1;
      jQ(".previous").fadeOut("400");
      jQ('div[data-number="'+link_c_2+'"].previous').fadeIn("400");
    } else{
      var link_c_2 = number_ + 1;
      jQ(".previous").fadeOut("400");
      jQ('div[data-number="1"].previous').fadeIn("400");
    }
  })
/*END List Effect------------------------------------------*/


/*START SLIDERS BULLETS---------------------------------------------------------------*/

  var homeDiv = jQ('#home-slider .slider-box');
    for(var i = 0; i < homeDiv.length; i+=1) {
      homeDiv.slice(i, i+1).wrapAll('<div class="item"></div>');
  }

  /*Start Home Slider Bullets and Wrap Item----------------------------*/;

   var indicatorsHome= jQ("#home-slider .item").size();  
    var rowHome = jQ('<li data-target="#home-slider"></li>');
    for (var i=0; i<indicatorsHome; i++) {
      jQ('#home-slider .carousel-indicators').append(rowHome.clone());
    }
    var counterHome=-1;
    jQ("#home-slider .carousel-indicators li").each(function(){
    counterHome++;
      var self=jQ(this);
      self.attr('data-slide-to', counterHome);
    }); 

    jQ("#home-slider .carousel-indicators li").first().addClass('active');
  /*end Home Slider Bullets----------------------------*/

   /*Start Testimonials Slider Bullets----------------------------*/


     var indicatorsHome= jQ("#testimonials .item").size();  
      var rowHome = jQ('<li data-target="#testimonials"></li>');
      for (var i=0; i<indicatorsHome; i++) {
        jQ('#testimonials .carousel-indicators').append(rowHome.clone());
      }
      var counterHome=-1;
      jQ("#testimonials .carousel-indicators li").each(function(){
      counterHome++;
        var self=jQ(this);
        self.attr('data-slide-to', counterHome);
      }); 

      jQ("#testimonials .carousel-indicators li").first().addClass('active');
    /*end Testimonials Slider Bullets----------------------------*/


  /*Start Testimonials Slider Bullets----------------------------*

   var indicatorsHome= jQ("#testimonials .item").size();  
    var rowHome = jQ('<li data-target="#testimonials"></li>');
    for (var i=0; i<indicatorsHome; i++) {
      jQ('#testimonials .carousel-indicators').append(rowHome.clone());
    }
    var counterHome=-1;
    jQ("#testimonials .carousel-indicators li").each(function(){
    counterHome++;
      var self=jQ(this);
      self.attr('data-slide-to', counterHome);
    }); 

    jQ("#testimonials .carousel-indicators li").first().addClass('active');
  /*end Testimonials Slider Bullets----------------------------*/

  /*Start Thanks Slider Bullets----------------------------*/

   var indicatorsHome= jQ("#thanks .item").size();  
    var rowHome = jQ('<li data-target="#thanks"></li>');
    for (var i=0; i<indicatorsHome; i++) {
      jQ('#thanks .carousel-indicators').append(rowHome.clone());
    }
    var counterHome=-1;
    jQ("#thanks .carousel-indicators li").each(function(){
    counterHome++;
      var self=jQ(this);
      self.attr('data-slide-to', counterHome);
    }); 

    jQ("#thanks .carousel-indicators li").first().addClass('active');
  /*end Thanks Slider Bullets----------------------------*/

  /*Start Gallery Dog Slider Bullets----------------------------*/

   var indicatorsHome= jQ("#gallery-dog .item").size();  
    var rowHome = jQ('<li data-target="#gallery-dog"></li>');
    for (var i=0; i<indicatorsHome; i++) {
      jQ('#gallery-dog .carousel-indicators').append(rowHome.clone());
    }
    var counterHome=-1;
    jQ("#gallery-dog .carousel-indicators li").each(function(){
    counterHome++;
      var self=jQ(this);
      self.attr('data-slide-to', counterHome);
    }); 

    jQ("#gallery-dog .carousel-indicators li").first().addClass('active');
  /*end Gallery Dog Slider Bullets----------------------------*/
/*END SLIDERS BULLETS-----------------------------------------------------------*/


/*SOCIAL STREAM---------------------------------------------*/

/*END SOCIAL STREAM-----------------------------------------*/



/*START Slider Wrap into active----------------------------*/

  jQ('#home-slider .item').first().addClass('active');
  jQ('#carouselSuccess5 .item').first().addClass('active');
  jQ('#home-programs .item').first().addClass('active');
  jQ('#testimonials .item').first().addClass('active');
  jQ('#impact-slider .item').first().addClass('active');
  jQ('#thanks .item').first().addClass('active');
  jQ('#gallery-dog .item').first().addClass('active');
/*END Slider Wrap into active-----------------------------*/



/*START Team Js----------------------------------------------*
  
  jQ('.Grid-Boxes-with-Side-Panel .img-wrap a').click(function(event) {
    event.preventDefault();
    var sidebarID = jQ(this).attr('href');
      if (contadorTeam == 1) {
        jQ(sidebarID).animate({
          right: '0'
        });
        contadorTeam = 0;
      } else {
        contadorTeam = 1;
        jQ(sidebarID).animate({
          right: '-100%'
        });
      }
  });

   jQ('.team-bios-widget .sidebar-Grid-Boxes-with-Side-Panel .bio-wrap .content-wrap .box-top button.close').click(function(event){
      event.preventDefault();
       
        contadorTeam = 1;
        jQ('.team-bios-widget .sidebar-Grid-Boxes-with-Side-Panel').animate({
          right: '-100%'
        });
      
    });
/*END Team Js-------------------------------------------------*/


/*START Dropdown Main Menu Animation--------------------*/

  jQ('.dropdown, .dropdown-menu').hover(function(){
        jQ(this).children('.dropdown-menu').stop(true, false).slideDown("slow");
    }, function(){
        jQ(this).children('.dropdown-menu').stop(true, false).slideUp("fast");

    });

  jQ(".dropdown-btn").click(function(){
        jQ(this).next().slideToggle("fast");
    });
/*END Dropdown Main Menu Animation--------------------*/
 

/*Same Height*/
  
/*START Member Social--------------------------------*/
  setTimeout(function() {
    var imgslBox = 0;
       jQ('.section-e .testimonial-box').each(function(){  
               if(jQ(this).outerHeight() > imgslBox){  
               imgslBox = jQ(this).outerHeight();  
       }
    });  
    jQ('.section-e .testimonial-box').height(imgslBox);
    jQ('.section-e .t-box').wrap('<div class="item"></div>');
    jQ('#carouselSuccess2 .item').first().addClass('active');

    /*Start Carousel2 Slider Bullets----------------------------*/

     var indicatorsHome= jQ("#carouselSuccess2 .item").size();  
      var rowHome = jQ('<li data-target="#carouselSuccess2"></li>');
      for (var i=0; i<indicatorsHome; i++) {
        jQ('#carouselSuccess2 .carousel-indicators').append(rowHome.clone());
      }
      var counterHome=-1;
      jQ("#carouselSuccess2 .carousel-indicators li").each(function(){
      counterHome++;
        var self=jQ(this);
        self.attr('data-slide-to', counterHome);
      }); 

      jQ("#carouselSuccess2 .carousel-indicators li").first().addClass('active');
    /*end Carousel2 Slider Bullets----------------------------*/

    /*START Landing Membership----------------------------------*/
      var col_l = jQ('.landing-d .col-md-5').height();

      jQ('.landing-d .col-md-7').height(col_l);

    /*END Landing Membership-------------------------------------*/


    
    },500);
    /*END Member Social----------------------------------*/


/*END Same Height*/


/*START VIDEO JS-------------------------------------------------*/

  jQ('.slider-widget .slider-box iframe').addClass('embed-responsive-item');
  jQ('.slider-widget .slider-box iframe').attr('id','video');
  var src = jQ('.slider-widget .slider-box iframe').attr('src');
  jQ('.slider-widget .slider-box .content .play a').click(function(event) {
    event.preventDefault();
    jQ('.slider-widget .slider-box .video-wrap').slideDown('slow');
    jQ('.slider-widget .slider-box iframe').attr('src', src + '?rel=0&autoplay=1');
  });

  jQ('.slider-widget .slider-box .video-wrap #close').click(function(event) {
    event.preventDefault();
    jQ('.slider-widget .slider-box .video-wrap').slideUp('fast');
    jQ('.slider-widget .slider-box iframe').attr('src', '');
    jQ('.slider-widget .slider-box iframe').attr('src', src);
  });
/*END VIDEO JS----------------------------------------------------*/


/*START COUNTDOWN JS--------------------------------------------*
  if (jQ('body.home').length > 0){
    var a = 0;
    jQ(window).scroll(function() {

      var oTop = jQ('#counter').offset().top - window.innerHeight;
      if (a == 0 && jQ(window).scrollTop() > oTop) {
        jQ('.counter-value').each(function() {
          var $this = jQ(this),
            countTo = $this.attr('data-count');
          jQ({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },

            {

              duration: 2000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }

            });
        });
        a = 1;
      }

    });
  };
/*END COUNTDOWN JS----------------------------------------------*/


/*START HIDDEN SECTION---------------------------------------*/
  jQ(".sec-dnt-c .box-column-c a.link-c").click(function(e){
    e.preventDefault();
    jQ(".sec-dnt-c .box-column-c").removeClass("arrow-dnt");
    jQ(this).parent().parent().addClass("arrow-dnt");
    var link_c = jQ(this).attr("href");
    jQ(".sec-dnt-d").slideUp("400");
    jQ(link_c).slideDown("400");
    jQ('html,body').animate({
              scrollTop: jQ(link_c).offset().top
            }, 1000);
    // setTimeout(function(){
    //   },500);
  });
/*END HIDDEN SECTION-----------------------------------------*/


/*START WRAP WITH SPAN-------------------------------------*/
  function halfWrap(element){
    jQ(element).each(function(){
    var str = jQ(this).text();
       var spaces = str.split(" ").length - 1;
        var spaces = parseInt(spaces / 2);
       var total = str.length;
       var char = str.indexOf(" ");
       var array = Array.from(str.slice());
       var i;
       var text = "<span>";
        var rest = "";
        var x = 0;
        for (i = 0; i < total; i++){
           if(array[i] == " "){
               if(x == spaces){
                   text += array[i];
                   text += '</span>';
               }else{
                 text += array[i];
               }
           x++;
           }else{
               text += array[i];  
           }
           
       };
       
       jQ(this).html(text);
    });  
  };
   halfWrap('.section-d .hover-resources-name .resources-name h2');
/*END WRAP WITH SPAN---------------------------------------*/


/*START Carousel Sync------------------------------------------*/
  jQ('.carousel-sync').carousel('cycle');
  jQ('.carousel-sync').on('click', 'slide.bs.carousel', function (ev) {
    ev.preventDefault();
      jQ('.carousel-sync').carousel(jQ(this).data('slide'));
  });
  jQ('.carousel-sync').on('mouseover', function(ev) {
      ev.preventDefault();
      jQ('.carousel-sync').carousel('pause');
  });
  jQ('.carousel-sync').on('mouseleave', function(ev) {
      ev.preventDefault();
      jQ('.carousel-sync').carousel('cycle');
  });
/*END Carousel Sync----------------------------------------------- */ 


/*START donate pop up----------------------------------------------*/
  jQ( "#gform_fields_10 > li:nth-child(6)").each(function(){
     jQ(this).nextAll().wrapAll( '<div class="content-modal"></div>');
     jQ(this).nextAll().wrapAll('<div class="modal fade" id="myModal" role="dialog"></div>');
  });

  var footerFormDonate = jQ('#gform_wrapper_10 #gform_10 .gform_footer').clone(); 
    jQ('#gform_wrapper_10 #gform_10 .gform_footer').remove();
    jQ('#gform_wrapper_10 #gform_10 .content-modal').append(footerFormDonate);
 
  jQ("a.btn-donate-popup").click(function(){
    var haveMoney = jQ("#input_10_3").val();
    if(haveMoney !== ""){
      jQ("#input_10_3").removeClass('redline');   
        jQ('a.btn-donate-popup').attr({
          "data-toggle":"modal",
          "data-target":"#myModal"
        });
      jQ("#gform_wrapper_10 #gform_10 .content-modal").fadeIn('0');
      //jQ("#field_10_3,#field_10_4,#field_10_5,#field_10_6").css('display','none');
    }else{
      jQ("#input_10_3").addClass('redline');
    }
  });
/*END donate pop up-----------------------------------------------*/


/*START FORM MONTHLY OR ONCE--------------------------------------*/

  jQ("#input_10_1 .gchoice_10_1_1 #label_10_1_1").click(function(){
    jQ(".btn-donate-popup").text("DONATE MONTHLY");
    jQ("#gform_submit_button_10").val("DONATE MONTHLY");
  });

  jQ("#input_10_1 .gchoice_10_1_0 #label_10_1_0").click(function(){
    jQ(".btn-donate-popup").text("DONATE");
    jQ("#gform_submit_button_10").val("DONATE");  
  });
/*END FORM MONTHLY OR ONCE----------------------------------------*/

if (jQ(window).width() > 992) {

  /*START Fixed Header--------------------*/
    jQ(window).bind('scroll', function () {
        if (jQ(window).scrollTop() > 150) {
            jQ('body').addClass('fixed');         
        }
        else {
            jQ('body').removeClass('fixed');
        }
    });
  /*END Fixed Header--------------------*/

  /*START Slider Wrap flex-container and item----------------------------*/

    var dog_gallery = jQ('.section-d .right-side .text-box');
    for(var i = 0; i < dog_gallery.length; i+=2) {
      dog_gallery.slice(i, i+2).wrapAll('<div class="d-flex center"></div>');
    }
    jQ('.section-d .right-side .d-flex').wrap('<div class="item"></div>')
    jQ('#carouselSuccess .item').first().addClass('active');
 
    /*Start Carousel Slider Bullets----------------------------*/

     var indicatorsHome= jQ("#carouselSuccess .item").size();  
      var rowHome = jQ('<li data-target="#carouselSuccess"></li>');
      for (var i=0; i<indicatorsHome; i++) {
        jQ('#carouselSuccess .carousel-indicators').append(rowHome.clone());
      }
      var counterHome=-1;
      jQ("#carouselSuccess .carousel-indicators li").each(function(){
      counterHome++;
        var self=jQ(this);
        self.attr('data-slide-to', counterHome);
      }); 

      jQ("#carouselSuccess .carousel-indicators li").first().addClass('active');
    /*end Carousel Slider Bullets----------------------------*/

  /*END Slider Wrap flex-container and item-----------------------------*/



  /*START Slider Wrap flex-container and item----------------------------*/

    var dog_gallery_2 = jQ('.section-g .content-item');
    for(var i = 0; i < dog_gallery_2.length; i+=4) {
      dog_gallery_2.slice(i, i+4).wrapAll('<div class="flex-container"></div>');
    }
    jQ('.section-g .flex-container').wrap('<div class="item"></div>')
    jQ('#sponsors .item').first().addClass('active');
    
 
    /*Start Sponsors Slider Bullets----------------------------*/

     var indicatorsHome= jQ("#sponsors .item").size();  
      var rowHome = jQ('<li data-target="#sponsors"></li>');
      for (var i=0; i<indicatorsHome; i++) {
        jQ('#sponsors .carousel-indicators').append(rowHome.clone());
      }
      var counterHome=-1;
      jQ("#sponsors .carousel-indicators li").each(function(){
      counterHome++;
        var self=jQ(this);
        self.attr('data-slide-to', counterHome);
      }); 

      jQ("#sponsors .carousel-indicators li").first().addClass('active');
    /*end Sponsors Slider Bullets----------------------------*/

  /*END Slider Wrap flex-container and item-----------------------------*/



  /*START Slider Wrap flex-container and item----------------------------*/

    var gallery_img = jQ(' #carouselSuccess3 .content-item');
    for(var i = 0; i < gallery_img.length; i+=3) {
      gallery_img.slice(i, i+3).wrapAll('<div class="flex-container"></div>');
    }
    jQ('#carouselSuccess3 .flex-container').wrap('<div class="item"></div>')
    jQ('#carouselSuccess3 .item').first().addClass('active');
 
    /*Start Carousel Slider Bullets----------------------------*/

     var indicatorsHome= jQ("#carouselSuccess3 .item").size();  
      var rowHome = jQ('<li data-target="#carouselSuccess3"></li>');
      for (var i=0; i<indicatorsHome; i++) {
        jQ('#carouselSuccess3 .carousel-indicators').append(rowHome.clone());
      }
      var counterHome=-1;
      jQ("#carouselSuccess3 .carousel-indicators li").each(function(){
      counterHome++;
        var self=jQ(this);
        self.attr('data-slide-to', counterHome);
      }); 

      jQ("#carouselSuccess3 .carousel-indicators li").first().addClass('active');
    /*end Carousel Slider Bullets----------------------------*/

  /*END Slider Wrap flex-container and item-----------------------------*/


   /*START Slider Wrap flex-container and item----------------------------*/

      var team_g = jQ(' #carouselSuccess4 .member');
      for(var i = 0; i < team_g.length; i+=3) {
        team_g.slice(i, i+3).wrapAll('<div class="d-flex justify-content-center"></div>');
      }
      jQ('#carouselSuccess4 .d-flex').wrap('<div class="item"></div>')
      jQ('#carouselSuccess4 .item').first().addClass('active');
   
      /*Start Carousel Slider Bullets----------------------------*/

       var indicatorsHome= jQ("#carouselSuccess4 .item").size();  
        var rowHome = jQ('<li data-target="#carouselSuccess4"></li>');
        for (var i=0; i<indicatorsHome; i++) {
          jQ('#carouselSuccess4 .carousel-indicators').append(rowHome.clone());
        }
        var counterHome=-1;
        jQ("#carouselSuccess4 .carousel-indicators li").each(function(){
        counterHome++;
          var self=jQ(this);
          self.attr('data-slide-to', counterHome);
        }); 

        jQ("#carouselSuccess4 .carousel-indicators li").first().addClass('active');
      /*end Carousel Slider Bullets----------------------------*/

    /*END Slider Wrap flex-container and item-----------------------------*/


    /*START Slider Wrap flex-container and item----------------------------*/

      var team_carousel = jQ('#teamBios .single-box');
      for(var i = 0; i < team_carousel.length; i+=4) {
        team_carousel.slice(i, i+4).wrapAll('<div class="Grid-Boxes-with-carousel-and-Side-Panel"><div class="content-wrap"></div></div>');
      }
      jQ('#teamBios .Grid-Boxes-with-carousel-and-Side-Panel').wrap('<div class="item"></div>')
      jQ('#teamBios .item').first().addClass('active');
   
      /*Start Carousel Slider Bullets----------------------------*/

       var indicatorsHome= jQ("#teamBios .item").size();  
        var rowHome = jQ('<li data-target="#teamBios"></li>');
        for (var i=0; i<indicatorsHome; i++) {
          jQ('#teamBios .carousel-indicators').append(rowHome.clone());
        }
        var counterHome=-1;
        jQ("#teamBios .carousel-indicators li").each(function(){
        counterHome++;
          var self=jQ(this);
          self.attr('data-slide-to', counterHome);
        }); 

        jQ("#teamBios .carousel-indicators li").first().addClass('active');
      /*end Carousel Slider Bullets----------------------------*/

    /*END Slider Wrap flex-container and item-----------------------------*/



} else{

  /*START Fixed Header--------------------*/
    jQ(window).bind('scroll', function () {
        if (jQ(window).scrollTop() > 200) {
            jQ('body').addClass('fixed');
            jQ('.fix-social').fadeIn('slow');
        }
        else {
            jQ('body,.fix-social').removeClass('fixed');
            jQ('.fix-social').fadeOut('fast');
         }

    });

  /*END Fixed Header--------------------*/

   /*START Slider Wrap flex-container and item----------------------------*/

      var team_carousel = jQ('#teamBios .single-box');
      for(var i = 0; i < team_carousel.length; i+=1) {
        team_carousel.slice(i, i+1).wrapAll('<div class="Grid-Boxes-with-carousel-and-Side-Panel"><div class="content-wrap"></div></div>');
      }
      jQ('#teamBios .Grid-Boxes-with-carousel-and-Side-Panel').wrap('<div class="item"></div>')
      jQ('#teamBios .item').first().addClass('active');
   
      /*Start Carousel Slider Bullets----------------------------*/

       var indicatorsHome= jQ("#teamBios .item").size();  
        var rowHome = jQ('<li data-target="#teamBios"></li>');
        for (var i=0; i<indicatorsHome; i++) {
          jQ('#teamBios .carousel-indicators').append(rowHome.clone());
        }
        var counterHome=-1;
        jQ("#teamBios .carousel-indicators li").each(function(){
        counterHome++;
          var self=jQ(this);
          self.attr('data-slide-to', counterHome);
        }); 

        jQ("#teamBios .carousel-indicators li").first().addClass('active');
      /*end Carousel Slider Bullets----------------------------*/

    /*END Slider Wrap flex-container and item-----------------------------*/

} /*END else*/

/*START less window width--------------------*/

  if (jQ(window).width() < 1200) {
     /*START Include Dropdown Button--------------------*/
      var itemBtn = '<button  class="dropdown-toggle dropdown-btn"><span class="caret"></span></button>';
          
      jQ( 'header #navigation .nav .dropdown a').after(itemBtn);
    /*END Include Dropdown Button--------------------*/

    /*START Dropdown Main Menu Animation--------------------*/
      jQ(".dropdown-btn").click(function(){
            jQ(this).next().slideToggle("slow");
        });
    /*END Dropdown Main Menu Animation--------------------*/

    /*START Dropdown Main Menu Animation--------------------*/
     jQ('header #navigation .nav .dropdown .dropdown-menu').css('display','none');

        jQ(".dropdown, .dropdown-menu .dropdown").unbind();

        jQ(".navbar-header button.navbar-toggle").click(function(event) {
          event.preventDefault();
          jQ("#navigation .dropdown-menu").slideUp("400");
          setTimeout(function(){
            var navHeight = jQ('#navigation').height();
            jQ('#navigation').height(navHeight);
          },500);  
        });
    /*END Dropdown Main Menu Animation--------------------*/
  } else {}
  

  if (jQ(window).width() < 992) {



      /*START Slider Wrap flex-container and item----------------------------*/

        var dog_gallery = jQ('.section-d .right-side .text-box');
        for(var i = 0; i < dog_gallery.length; i+=1) {
          dog_gallery.slice(i, i+1).wrapAll('<div class="d-flex center"></div>');
        }
        jQ('.section-d .right-side .d-flex').wrap('<div class="item"></div>')
        jQ('#carouselSuccess .item').first().addClass('active');
     
        /*Start Carousel Slider Bullets----------------------------*/

         var indicatorsHome= jQ("#carouselSuccess .item").size();  
          var rowHome = jQ('<li data-target="#carouselSuccess"></li>');
          for (var i=0; i<indicatorsHome; i++) {
            jQ('#carouselSuccess .carousel-indicators').append(rowHome.clone());
          }
          var counterHome=-1;
          jQ("#carouselSuccess .carousel-indicators li").each(function(){
          counterHome++;
            var self=jQ(this);
            self.attr('data-slide-to', counterHome);
          }); 

          jQ("#carouselSuccess .carousel-indicators li").first().addClass('active');
        /*end Carousel Slider Bullets----------------------------*/

      /*END Slider Wrap flex-container and item-----------------------------*/
    

    /*START Slider Wrap flex-container and item----------------------------*/

      var dog_gallery_2 = jQ('.section-g .content-item');
      for(var i = 0; i < dog_gallery_2.length; i+=2) {
        dog_gallery_2.slice(i, i+2).wrapAll('<div class="flex-container"></div>');
      }
      jQ('.section-g .flex-container').wrap('<div class="item"></div>')
      jQ('#sponsors .item').first().addClass('active');
      
   
      /*Start Sponsors Slider Bullets----------------------------*/

       var indicatorsHome= jQ("#sponsors .item").size();  
        var rowHome = jQ('<li data-target="#sponsors"></li>');
        for (var i=0; i<indicatorsHome; i++) {
          jQ('#sponsors .carousel-indicators').append(rowHome.clone());
        }
        var counterHome=-1;
        jQ("#sponsors .carousel-indicators li").each(function(){
        counterHome++;
          var self=jQ(this);
          self.attr('data-slide-to', counterHome);
        }); 

        jQ("#sponsors .carousel-indicators li").first().addClass('active');
      /*end Sponsors Slider Bullets----------------------------*/

    /*END Slider Wrap flex-container and item-----------------------------*/

     /*START Slider Wrap flex-container and item----------------------------*/

      var team_g = jQ(' #carouselSuccess4 .member');
      for(var i = 0; i < team_g.length; i+=1) {
        team_g.slice(i, i+1).wrapAll('<div class="d-flex justify-content-center"></div>');
      }
      jQ('#carouselSuccess4 .d-flex').wrap('<div class="item"></div>')
      jQ('#carouselSuccess4 .item').first().addClass('active');
   
      /*Start Carousel Slider Bullets----------------------------*/

       var indicatorsHome= jQ("#carouselSuccess4 .item").size();  
        var rowHome = jQ('<li data-target="#carouselSuccess4"></li>');
        for (var i=0; i<indicatorsHome; i++) {
          jQ('#carouselSuccess4 .carousel-indicators').append(rowHome.clone());
        }
        var counterHome=-1;
        jQ("#carouselSuccess4 .carousel-indicators li").each(function(){
        counterHome++;
          var self=jQ(this);
          self.attr('data-slide-to', counterHome);
        }); 

        jQ("#carouselSuccess4 .carousel-indicators li").first().addClass('active');
      /*end Carousel Slider Bullets----------------------------*/

    /*END Slider Wrap flex-container and item-----------------------------*/




 }
	else {
	}

  if (jQ(window).width() < 767) {

    /*START Change position--------------------  */
      var menuTop = jQ('.top .header-top').clone(); 
         jQ('footer.footer .fixed-footer').append(menuTop);
         jQ('.top .header-top').remove();
    /*END Change position--------------------  */



    /*START Slider Wrap flex-container and item----------------------------*/

      var gallery_img = jQ(' #carouselSuccess3 .content-item');
      for(var i = 0; i < gallery_img.length; i+=1) {
        gallery_img.slice(i, i+1).wrapAll('<div class="flex-container"></div>');
      }
      jQ('#carouselSuccess3 .flex-container').wrap('<div class="item"></div>')
      jQ('#carouselSuccess3 .item').first().addClass('active');
   
      /*Start Carousel Slider Bullets----------------------------*/

       var indicatorsHome= jQ("#carouselSuccess3 .item").size();  
        var rowHome = jQ('<li data-target="#carouselSuccess3"></li>');
        for (var i=0; i<indicatorsHome; i++) {
          jQ('#carouselSuccess3 .carousel-indicators').append(rowHome.clone());
        }
        var counterHome=-1;
        jQ("#carouselSuccess3 .carousel-indicators li").each(function(){
        counterHome++;
          var self=jQ(this);
          self.attr('data-slide-to', counterHome);
        }); 

        jQ("#carouselSuccess3 .carousel-indicators li").first().addClass('active');
      /*end Carousel Slider Bullets----------------------------*/

    /*END Slider Wrap flex-container and item-----------------------------*/


   /*START Slider Wrap flex-container and item----------------------------*/

      var team_g = jQ(' #carouselSuccess4 .member');
      for(var i = 0; i < team_g.length; i+=1) {
        team_g.slice(i, i+1).wrapAll('<div class="d-flex justify-content-center"></div>');
      }
      jQ('#carouselSuccess4 .d-flex').wrap('<div class="item"></div>')
      jQ('#carouselSuccess4 .item').first().addClass('active');
   
      /*Start Carousel Slider Bullets----------------------------*/

       var indicatorsHome= jQ("#carouselSuccess4 .item").size();  
        var rowHome = jQ('<li data-target="#carouselSuccess4"></li>');
        for (var i=0; i<indicatorsHome; i++) {
          jQ('#carouselSuccess4 .carousel-indicators').append(rowHome.clone());
        }
        var counterHome=-1;
        jQ("#carouselSuccess4 .carousel-indicators li").each(function(){
        counterHome++;
          var self=jQ(this);
          self.attr('data-slide-to', counterHome);
        }); 

        jQ("#carouselSuccess4 .carousel-indicators li").first().addClass('active');
      /*end Carousel Slider Bullets----------------------------*/

    /*END Slider Wrap flex-container and item-----------------------------*/




 } 

/*END less window width--------------------*/


/*START Search--------------------*/    
  jQ('.search #searchform #s').attr('placeholder', 'Search here...');

  jQ('#open-search').click(function() {
    jQ('.search-section').slideToggle('400');
  });  
/*END Search--------------------*/

if (jQ(window).width() > 992) {
 
  var thumb_slider = jQ('#home-thumb-slider .carousel-inner .thumb-box');
    for(var i = 0; i < thumb_slider.length; i+=4) {
      thumb_slider.slice(i, i+4).wrapAll('<div class="item"></div>');
  }
  var countSlider = jQ("#home-thumb-slider .carousel-inner .thumb-box").size(); 
   if (countSlider <= 4) {
      jQ('#home-thumb-slider .carousel-control').css('display', 'none');
   } else {
      jQ('#home-thumb-slider .carousel-control').css('display', 'block');
   }    
  
} else if (jQ(window).width() > 767) {
    var thumb_slider = jQ('#home-thumb-slider .carousel-inner .thumb-box');
      for(var i = 0; i < thumb_slider.length; i+=3) {
        thumb_slider.slice(i, i+3).wrapAll('<div class="item"></div>');
    }
    var countSlider = jQ("#home-thumb-slider .carousel-inner .thumb-box").size(); 
     if (countSlider <= 3) {
        jQ('#home-thumb-slider .carousel-control').css('display', 'none');
     } else {
        jQ('#home-thumb-slider .carousel-control').css('display', 'block');
     }    
} else if (jQ(window).width() > 480) {
    var thumb_slider = jQ('#home-thumb-slider .carousel-inner .thumb-box');
      for(var i = 0; i < thumb_slider.length; i+=2) {
        thumb_slider.slice(i, i+2).wrapAll('<div class="item"></div>');
      }
    var countSlider = jQ("#home-thumb-slider .carousel-inner .thumb-box").size(); 
     if (countSlider <= 2) {
        jQ('#home-thumb-slider .carousel-control').css('display', 'none');
     } else {
        jQ('#home-thumb-slider .carousel-control').css('display', 'block');
     }      
} else{
    var thumb_slider = jQ('#home-thumb-slider .carousel-inner .thumb-box');
      for(var i = 0; i < thumb_slider.length; i+=1) {
        thumb_slider.slice(i, i+1).wrapAll('<div class="item"></div>');
    }  
}

jQ('#home-thumb-slider .item').first().addClass('active');
jQ('#home-thumb-slider .item .thumb-box').first().addClass('active');
  
jQ("#home-thumb-slider .thumb-box").click(function(){
    jQ('#home-thumb-slider .thumb-box').removeClass('active');
    jQ(this).toggleClass('active');
}); 

jQ("#impact-slider").swiperight(function() {  
      jQ(this).carousel('prev');  
  });  
  jQ("#impact-slider").swipeleft(function() {  
      jQ(this).carousel('next');  
  });

  jQ("#home-thumb-slider").swiperight(function() {  
      jQ(this).carousel('prev');  
  });  
  jQ("#home-thumb-slider").swipeleft(function() {  
      jQ(this).carousel('next');  
  });
});

/*START Activate Sidebar Team Widget----------------------------*

  var contadorTeam = 1;
 
    jQ('.team-bios-widget .Grid-Boxes-with-Side-Panel .single-box .img-wrap a').click(function(event){
      event.preventDefault();
      var sidebarID = jQ(this).attr('href');
      if (contadorTeam == 1) {
        jQ(sidebarID).animate({
          right: '0'
        });
        contadorTeam = 0;
      } else {
        contadorTeam = 1;
        jQ(sidebarID).animate({
          right: '-100%'
        });
      }
    });

    jQ('.team-bios-widget .sidebar-Grid-Boxes-with-Side-Panel .bio-wrap .content-wrap .box-top button.close').click(function(event){
      event.preventDefault();
       
        contadorTeam = 1;
        jQ('.team-bios-widget .sidebar-Grid-Boxes-with-Side-Panel').animate({
          right: '-100%'
        });
      
    });




  var contadorTeam2 = 1;
 
    jQ('.team-bios-widget .Grid-Boxes-with-Pop-Up .single-box .img-wrap a').click(function(event){
      event.preventDefault();
      var sidebarID = jQ(this).attr('href');
      if (contadorTeam2 == 1) {
        jQ(sidebarID).animate({
          right: '0'
        });
        contadorTeam2 = 0;
      } else {
        contadorTeam2 = 1;
        jQ(sidebarID).animate({
          right: '-100%'
        });
      }
    });

    jQ('.team-bios-widget .sidebar-Grid-Boxes-with-Pop-Up .big-content-wrap .info-side-right .close-box button.close').click(function(event){
      event.preventDefault();
       
        contadorTeam2 = 1;
        jQ('.team-bios-widget .sidebar-Grid-Boxes-with-Pop-Up').animate({
          right: '-100%'
        });
      
    });






  setTimeout(function(){
    var contadorTeam3 = 1;
   
      jQ('.team-bios-widget .Stacked-Layout-with-Side-Panel .single-box .img-wrap a').click(function(event){
        event.preventDefault();
        var sidebarID = jQ(this).attr('href');
        if (contadorTeam3 == 1) {
          jQ(sidebarID).animate({
            right: '0'
          });
          contadorTeam3 = 0;
        } else {
          contadorTeam3 = 1;
          jQ(sidebarID).animate({
            right: '-100%'
          });
        }
      });

      jQ('.team-bios-widget .sidebar-Stacked-Layout-with-Side-Panel .bio-wrap .content-wrap .box-top button.close').click(function(event){
        event.preventDefault();
         
          contadorTeam3 = 1;
          jQ('.team-bios-widget .sidebar-Stacked-Layout-with-Side-Panel').animate({
            right: '-100%'
          });    
    });
    var contadorTeam4 = 1;
   
      jQ('.team-bios-widget .Grid-Boxes-with-carousel-and-Side-Panel .text-wrap a').click(function(event){
        event.preventDefault();
        var sidebarID = jQ(this).attr('href');
        if (contadorTeam4 == 1) {
          jQ(sidebarID).animate({
            right: '0'
          });
          contadorTeam4 = 0;
        } else {
          contadorTeam4 = 1;
          jQ(sidebarID).animate({
            right: '-100%'
          });
        }
      });

      jQ('.team-bios-widget .sidebar-Grid-Boxes-with-carousel-and-Side-Panel .bio-wrap .content-wrap .box-top button.close').click(function(event){
        event.preventDefault();
         
          contadorTeam = 1;
          jQ('.team-bios-widget .sidebar-Grid-Boxes-with-carousel-and-Side-Panel').animate({
            right: '-100%'
          });
        
      }); 
  },500)

  
/*END Activate Sidebar Team Widget----------------------------*/

/*Start function Slider Wrap into Item----------------------------*/

  function itemswrap($path, $number, $wrap){
     var divgallry = jQ($path);
    for(var i = 0; i < divgallry.length; i+=$number) {
      divgallry.slice(i, i+$number).wrapAll($wrap);
    }
    
  }
  function itemsunwrap($path){
    jQ($path).unwrap();
  }

/*END function Slider Wrap into Item----------------------------*/


/*START function Same height boxes--------------------*/ 
  
 function sameheight1($object){
    var Box1 = 0;
      jQ($object).each(function(){  
        if(jQ(this).height() > Box1){  
          Box1 = jQ(this).height();  
        }
    });    
    jQ($object).height(Box1);
  }

  // sameheight1("#");


  function sameheight2($object1, $object2){
    var Box2 = 0;
    jQ($object1).each(function(){  
      if(jQ(this).height() > Box2){  
        Box2 = jQ(this).height();  
      }
    });    
    jQ($object2).height(Box2);
  }

  // sameheight2("#1", "#2" );
/*END function Same height boxes--------------------*/ 


/*Start function Slider Bullets Wrap----------------------------*/

  function bulletsWrap($sliderID){
    jQ($sliderID + ' .carousel-indicators li').remove();

    var indicatorsProduct= jQ($sliderID + " .item").size();  

    var row = jQ('<li data-target="'+$sliderID+'"></li>');
    
    for (var i=0; i<indicatorsProduct; i++) {
        jQ($sliderID + ' .carousel-indicators').append(row.clone());

    }

    var counterProduct=-1;
    jQ($sliderID + " .carousel-indicators li").each(function(){
    counterProduct++;
        var self=jQ(this);
        self.attr('data-slide-to', counterProduct);
    });  

    jQ($sliderID + " .carousel-indicators li").first().addClass('active');
    
  }
/*END function Slider Bullets Wrap----------------------------*/

/*START Resize--------------------*/

  function myOrientResizeFunction(){

    if (jQ(window).width() < 1200) {

    }

    if (jQ(window).width() > 1201){

      setTimeout(function() {

        jQ('#testimonials .testimonial-box').height('auto');
        itemsunwrap('#testimonials .item .testimonial-box');
        sameheight1('#testimonials .testimonial-box')
        itemswrap('#testimonials .testimonial-box', 1, '<div class="item"></div>');
        bulletsWrap('#testimonials');
        jQ('#testimonials .item').first().addClass('active');

      },500)
      
    }else{
      
      setTimeout(function() {

        jQ('#testimonials .testimonial-box').height('auto');
        itemsunwrap('#testimonials .item .testimonial-box');
        sameheight1('#testimonials .testimonial-box')
        itemswrap('#testimonials .testimonial-box', 1, '<div class="item"></div>');
        bulletsWrap('#testimonials');
        jQ('#testimonials .item').first().addClass('active');

      },500)
          
    }


    if (jQ(window).width() > 900){

      
        

    }else if (jQ(window).width() >= 700 && jQ(window).width() < 899){
      setTimeout(function() {

        jQ('#testimonials .testimonial-box').height('auto');
        itemsunwrap('#testimonials .item .testimonial-box');
        sameheight1('#testimonials .testimonial-box')
        itemswrap('#testimonials .testimonial-box', 1, '<div class="item"></div>');
        bulletsWrap('#testimonials');
        jQ('#testimonials .item').first().addClass('active');

      },500)
     

    } else if (jQ(window).width() < 699){
      setTimeout(function() {

        jQ('#testimonials .testimonial-box').height('auto');
        itemsunwrap('#testimonials .item .testimonial-box');
        sameheight1('#testimonials .testimonial-box')
        itemswrap('#testimonials .testimonial-box', 1, '<div class="item"></div>');
        bulletsWrap('#testimonials');
        jQ('#testimonials .item').first().addClass('active');

      },500)
     
    }


    if (jQ(window).width() > 600){

        
    
    } else {
      
      
    }


    setTimeout(function() {
      // body...
      bulletsWrap('#carouselSuccess')
    },600)



  }



  myOrientResizeFunction();


          jQ('#carouselSuccess6 .item').first().addClass('active');


  // setTimeout(function(){
  // }, 500);


  jQ(window).bind('resize', function(e){
    if (window.RT) clearTimeout(window.RT);
    window.RT = setTimeout(function(){
       // this.location.reload(false); /* false to get page from cache */
        myOrientResizeFunction();
    }, 0);
  });

  jQ(window).resize(function(){
   myOrientResizeFunction();
  });


/*END  Resize--------------------*/
  

  
  /*FUNCTION SLOW ANIMATION ANCHOR LINKS-------------------------------*/  
    // ===== Scroll to Top ==== 
    /*
      jQ(window).scroll(function() {
          if (jQ(this).scrollTop() >= 600) {     // If page is scrolled more than 50px
            jQ('#return-to-top').fadeIn(200);    // Fade in the arrow
          } else {
            jQ('#return-to-top').fadeOut(200);   // Else fade out the arrow
          }
      });

      jQ(function() {
        jQ('#return-to-top').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

            var target = jQ(this.hash);
            target = target.length ? target : jQ('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              jQ('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });*/
  /*FUNCTION SLOW ANIMATION ANCHOR LINKS---------------------------------*/