// window.onload = function atom() {
//   ctx = document.querySelector('.atom').getContext('2d');
//   console.log(ctx);

//   width = ctx.canvas.width = window.innerWidth;
//   height = ctx.canvas.height = window.innerHeight;
//   radius = 2;
//   r = 0;
//   inc = 3;
//   pulse = 0;
//   pulse2 = 106;
//   orb = 100;
//   orbi = 0;
//   obl1 = 'rgb(30, 25, 220)';
//   obl2 = 'rgb(250, 30, 100)';
//   obl3 = 'rgb(30, 20, 120)';
//   sig = 1;
//   start = false;
//   // sw = false;


//   function opp() {
//     ctx.save();
//     ctx.translate((width/2, height/2));
//     ctx.beginPath();
//     if (sig == 2) {
//       ctx.strokeStyle = obl3;
//       ctx.arc(0, 0, pulse2*3, pulse*r, Math.PI*2);
//       ctx.stroke();
//       ctx.beginPath();
//     } else {
//       ctx.strokeStyle = obl3;
//       ctx.arc(0, 0, pulse2, pulse*r, Math.PI*2);
//       ctx.stroke();
//       ctx.beginPath();
//     }
//     ctx.restore();
//     if (pulse2 < 2) {
//       pulse2 = 106;
//       return;
//     }
//     pulse2+=-3;
//     requestAnimationFrame(opp);
//   }


// };