  // section1
  let x;
  $(window).on('scroll', function() {
    x = $(window).scrollTop();
    $('.t').css('background-size', 100 + parseInt(x / 10) + 'vw');
  });

  let y;
  $(window).on('scroll', function() {
    y = $(window).scrollTop();
    $('.ttop').css('background-size', 100 + parseInt(y / 30) + 'vw');
  });

  let z;
  $(window).on('scroll', function() {
    z = $(window).scrollTop();
    $('.tsecond').css('background-size', 45 + parseInt(z / 1.5) + 'vw');
  });
  let z1;
  $(window).on('scroll', function() {
    z1 = $(window).scrollTop();
    $('.tsecond2').css('background-size', 45 + parseInt(z1 / 0.5) + 'vw');
  });

  // let myP = document.getElementById("myP").className

  window.onscroll = function() {myFunction()};
  function myFunction() {
    // if (document.documentElement.scrollTop <0.8*window.innerHeight) {
    //   document.getElementById("myP").className = "ttop","ttoptext";
    // }
    // else if (document.documentElement.scrollTop <2.9*window.innerHeight) {
    //   document.getElementById("myP").className = "t";
    // }
    // else if (document.documentElement.scrollTop <3.2*window.innerHeight) {
    //   document.getElementById("myP").className = "tsecond";
    // }
    // else if (document.documentElement.scrollTop <3.25*window.innerHeight) {
    //   document.getElementById("myP").className = "tsecond2";
    // }
    // else if (document.documentElement.scrollTop >3.3*window.innerHeight) {
    //   document.getElementById("myP").classList.remove("tsecond2","tsecond","t","ttop");
    // }

    // if (document.documentElement.scrollTop >0.01*window.innerHeight) {
    //   document.getElementById("image1").className = "image1";
    // }

    // else if (document.documentElement.scrollTop <3.7*window.innerHeight) {
    //   document.getElementById("image2").className = "image2";
    // }
    // else if (document.documentElement.scrollTop <3.9*window.innerHeight) {
    //   document.getElementById("image3").className = "image3";
    // }
  }


    // else if (document.documentElement.scrollTop <6*window.innerHeight) {
    //   document.getElementById("image1").classList.remove("image1");
    // }
  // }




// section2

 // const scroller = document.getElementById("two");

 $(window).on("scroll", () => {
    let image0 = $(window).scrollTop();
    let height = parseInt($(window).height()) * 3;
    let image1 = parseInt(image0) / 3;
    console.log(image0, height, image1);
    if (image0 > height) {
      let blur = parseInt(image1) * (0.001) +'vw'
      let x = parseInt(image1) * (-0.1) + 'vw'
      let y = parseInt(image1) * (0.2) + 'vw'
      let z = parseInt(image1) * (0.1) + 'vw'
      let scale = parseInt(image1/ 100) * (0.4)
      $('.image1').css('transform', `translate3d(${x},${y},${z})`, `scale3d(${scale},${scale},${scale})`);
      $('.image1').css('filter', `blur(${blur})`);
    } else {
      console.log('dont work')
    }

      // let image2 = $(window).scrollTop();
      // let blur2 = parseInt(image2) * (0.001) +'vw'
      // let x2 = parseInt(image2) * (0.1) + 'vw'
      // let y2 = parseInt(image2) * (0.2) + 'vw'
      // let z2 = parseInt(image2) * (0.1) + 'vw'
      // let scale2 = parseInt(image2/ 100) * (0.4)
      // $('.image2').css('transform', `translate3d(${x2},${y2},${z2})`, `scale3d(${scale2},${scale2},${scale2})`);
      // $('.image2').css('filter', `blur(${blur2})`);
      //
      // let image3 = $(window).scrollTop();
      // let blur3 = parseInt(image3) * (0.001) +'vw'
      // let x3 = parseInt(image3) * (0.15) + 'vw'
      // let y3 = parseInt(image3) * (-0.05) + 'vw'
      // let z3 = parseInt(image3) * (0.1) + 'vw'
      // let scale3 = parseInt(image3/  100) * (0.4)
      // $('.image3').css('transform', `translate3d(${x3},${y3},${z3})`, `scale3d(${scale3},${scale3},${scale3})`);
      // $('.image3').css('filter', `blur(${blur3})`);

    // }


    // else if ($(".two").scrollTop() < 1*window.innerHeight){
    //   let blur = parseInt(image1) * (0.001) +'vw'
    //   let x = parseInt(image1)*(0.001) + 'vw'
    //   let y = parseInt(image1)*(0.001)  + 'vw'
    //   let z = parseInt(image1)*(0.001)  + 'vw'
    //   $('.image1').css('transform', `translate3d(${x},${y},${z})`);
    //   $('.image1').css('filter', `blur(${blur})`);
    // }
});







// const scroller = document.getElementById("scroller");
// const output = document.getElementById("output");
//
// scroller.addEventListener("scroll", () => {
//  output.textContent = `scrollTop: ${scroller.scrollTop}`;
// });

 // document.getElementsByClassName("two").onscroll = function() {MyFunction()};
 //  function MyFunction() {
 //    if (document.documentElement.scrollTop > 2.0*window.innerHeight) {
 //      document.getElementById("image1").className = "image1";
 //    }
 //  }

//  $(function(){
//   $('.image').animatescroll({
//     onScrollStart: function(){
//        let image1 = $(window).scrollTop();
//        let blur = parseInt(image1)*0.0001 + 'vw'
//        let x = parseInt(image1)*(-0.02) + 'vw'
//        let y = parseInt(image1)*(-0.01)  + 'vw'
//        let z = parseInt(image1)*(-0.01)  + 'vw'
//        $('.image1').css('transform', `translate3d(${x},${y},${z})`);
//        $('.image1').css('filter', `blur(${blur})`);
//     },
//     onScrollEnd: function(){
//       // do something
//     }
//   });
// });



  // if ($(window).scrollTop() >= window.innerHeight * 0.03);

  // let z2;
  // $(window).on('scroll', function() {
  //   z2 = $(window).scrollTop();
  //   $('.image1').css.transform = "translate(x,y)";
  // });
  // let z1;
  // $(window).on('scroll', function() {
  //   z1 = $(window).scrollTop();
  //   $('.tsecond2').css('background-size', 45 + parseInt(z1 / 0.5) + 'vw');
  // });

  // $(window).scroll(function() {
  //   var scroll = $(window).scrollTop();
  //   $(".image1").css({width:(100 + scroll/5) + "vw"})
  // });
  // transform : 'translate3d(0px, 0px, 0px)'
  // .css({"transform" : "translate3d(0px, + st  + "%")",
  // ({backgroundPosition: '0px'+st+'px'})

  // function setup() {
  //   createCanvas(1000, 1000);
  // }
  //
  // function draw() {
  //   if (mouseIsPressed) {
  //     fill(0);
  //   } else {
  //     fill(255);
  //   }
  //   ellipse(mouseX, mouseY, 50, 50);
  // }
    // const img = document.querySelector('img');
    //
    // window.addEventListener('scroll', () => {
    //   const current = window.scrollTop;
    //   img.css.clipPath = 'circle(${current + 10}vw at center)';
    // });
    //
    // window.addEventListener('scroll', () => {
    //   const current = window.scrollTop();
    //   img.css.clipPath = ('circle', 100 +  parseInt(x / 20) + 'vw');
    // });
    //
