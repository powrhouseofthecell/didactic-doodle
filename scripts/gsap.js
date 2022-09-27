$(window).on('load', function (e) {
   var tlOnLoad = gsap.timeline({ delay: 1 });
   var onLoadTextCount = $('.anim-text-banner>.anim-text').length;
   console.log(onLoadTextCount);

   for (var i = 1; i <= onLoadTextCount; i++) {
      var onLoadTextWidth =
         '.anim-text-banner>.anim-text:nth-of-type(' + i + ')';
      tlOnLoad.to(
         onLoadTextWidth,
         {
            clip: 'rect(0px, ' + $(onLoadTextWidth).width() + 'px, 300px, 0px)',
            ease: 'expo.out',
            duration: 1,
         },
         '-=0.2'
      );
   }
   tlOnLoad.to(
      '.anim-text-parent>.v-bar',
      { width: 100, ease: 'expo.out', duration: 1 },
      '-=0.2'
   );

   // ------------

   var tlMainAnim = gsap.timeline({ repeat: -1 });
   var animTextCount = $('.anim-text-parent>.anim-text').length;

   for (var i = 1; i <= animTextCount; i++) {
      var animTextWidth = '.anim-text-parent>.anim-text:nth-of-type(' + i + ')';
      tlMainAnim.to(animTextWidth, { opacity: 1, duration: 0.1 });
      tlMainAnim.to(animTextWidth, {
         clip: 'rect(0px, ' + $(animTextWidth).width() + 'px, 300px, 0px)',
         ease: 'expo.out',
         duration: 1,
      });
      tlMainAnim.to(
         animTextWidth,
         {
            clip: 'rect(0px, 0px, 300px, 0px)',
            ease: 'expo.out',
            duration: 1,
         },
         '+=0.75'
      );
      tlMainAnim.to(animTextWidth, { opacity: 0, duration: 0.1 });
   }

   tlOnLoad.add(tlMainAnim, '-=0.5');
});

// ! ================================================================

let tl = gsap.timeline();

tl.from('h1 span>span', {
   duration: 0.75,
   y: 150,
   autoAlpha: 0,
   ease: Power3.out,
   stagger: 1.5,
}).from(
   'li',
   {
      duration: 0.75,
      x: 300,
      autoAlpha: 0,
      ease: 'elastic.out(1, 1)',
      stagger: {
         each: 0.75,
         amount: 0.5,
      },
   },
   '+=0.25'
);
