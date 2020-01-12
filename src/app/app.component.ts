import { Component, OnInit } from '@angular/core';
declare let jQuery: any;
declare let $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'resume-nitish';

  // ngOnInit(){
  //   (function($) {
  //     "use strict"; // Start of use strict
    
  //     // Smooth scrolling using jQuery easing
  //     $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  //       if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  //         var target = $(this.hash);
  //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //         if (target.length) {
  //           $('html, body').animate({
  //             scrollTop: (target.offset().top)
  //           }, 1000, "easeInOutExpo");
  //           return false;
  //         }
  //       }
  //     });
    
  //     // Closes responsive menu when a scroll trigger link is clicked
  //     $('.js-scroll-trigger').click(function() {
  //       $('.navbar-collapse').collapse('hide');
  //     });
    
  //     // Activate scrollspy to add active class to navbar items on scroll
  //     $('body').scrollspy({
  //       target: '#sideNav'
  //     });
    
  //   })(jQuery); // End of use strict
  // }

  ngOnInit() {}

  ngAfterViewInit(){
    $.getScript('../assets/js/resume.js');
  }
}
