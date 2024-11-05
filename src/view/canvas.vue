<template>
  <div>
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";


const canvasRef = ref(null);
onMounted(() => {
  const canvasElement: any = canvasRef.value;
  if (canvasElement) {
    var canvas = canvasElement;
    var ctx = canvas.getContext('2d') as any;
    let dotShowState=ref(false)
     
    canvas.width = window.innerWidth;
    canvas.height = 3000;
    ctx.lineWidth = .3;
    const colorValue = (min:any) => {
      return Math.floor(Math.random() * 255 + min);
    }
    const createColorStyle = (r:any, g:any, b:any) => {
      if(!dotShowState.value){
        return 'rgba(' + r + ',' + g + ',' + b + ', 0)';
      }else{
        return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
      }
    }
    const Color = (min?:any) => {
      min = min || 0;
      let r = colorValue(min);
      let g = colorValue(min);
      let b = colorValue(min);
      let style = createColorStyle(255, 255, 255);
      return { r, g, b, style };
    }
    ctx.strokeStyle = (Color()).style;

    var mousePosition = {
      x: 30 * canvas.width / 100,
      y: 30 * canvas.height / 100
    };
    var dots = {
      nb: 1000,
      distance: 50,
      d_radius: 100,
      array: [] as any
    };

    const mixComponents = (c1:any, r1:any, c2:any, r2:any) => {
      // 增加蓝色分量的影响
      if (isBlueComponent(c1, c2)) {
        return (c1 * r1 + c2 * r2) / (r1 + r2) * 1.2;
      } else {
        return (c1 * r1 + c2 * r2) / (r1 + r2);
      }
    }
    const isBlueComponent = (c1:any, c2:any) => {
      return c1 === c1 || c2 === c2;
    }
    const averageColorStyles = (dot1:any, dot2:any) => {
      var color1 = dot1.color,
        color2 = dot2.color;
      var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
        g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
        b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
      // 调整生成的颜色更接近蓝色
      r = Math.min(r, b - 50);
      g = Math.min(g, b - 50);
      return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
    }
    const Dot = () => {
      let dotObj = {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        radius: 0,
        color: {} as any,
        draw: () => { }
      }
      dotObj.x = Math.random() * canvas.width;
      dotObj.y = Math.random() * canvas.height;

      dotObj.vx = -.5 + Math.random();
      dotObj.vy = -.5 + Math.random();

      dotObj.radius = Math.random() * 2;

      dotObj.color = Color();
      dotObj.draw = () => {
        ctx.beginPath();
        ctx.fillStyle = dotObj.color.style;
        ctx.arc(dotObj.x, dotObj.y, dotObj.radius, 0, Math.PI * 2, false);
        ctx.fill();
      }
      return dotObj
    }
    const createDots = () => {
      for (let i = 0; i < dots.nb; i++) {
        dots.array.push(Dot());
      }
    }
    const moveDots = () => {
      for (let i = 0; i < dots.nb; i++) {

        var dot = dots.array[i];
        if (dot.y < 0 || dot.y > canvas.height) {
          dot.vy = - dot.vy;
        }
        else if (dot.x < 0 || dot.x > canvas.width) {
          dot.vx = - dot.vx;
        }
        dot.x += dot.vx;
        dot.y += dot.vy;
      }
    }
    const connectDots = () => {
      for (let i = 0; i < dots.nb; i++) {
        for (let j = 0; j < dots.nb; j++) {
          let i_dot = dots.array[i];
          let j_dot = dots.array[j];

          if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance) {
            if ((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius) {
              i_dot.color = { r: 255, g: 255, b: 255, style: "rgba(255,255,255,0)" }
              j_dot.color = { r: 255, g: 255, b: 255, style: "rgba(255,255,255,0)" }
          
              ctx.beginPath();
              ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
              ctx.moveTo(i_dot.x, i_dot.y);
              ctx.lineTo(j_dot.x, j_dot.y);
              ctx.stroke();
              ctx.closePath();
            }
          }
        }
      }
    }
    const drawDots = () => {
      for (let i = 0; i < dots.nb; i++) {
        var dot = dots.array[i];
        dot.draw();
      }
    }
    
    const animateDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      moveDots();
      connectDots();
      drawDots();

      window.requestAnimationFrame(animateDots);
    }
    canvas.addEventListener('mousemove', function(e:any) {
      dotShowState.value=true
    mousePosition.x = e.pageX;
    mousePosition.y = e.pageY;
  })
  canvas.addEventListener('mouseleave', function(e:any) {
    dotShowState.value=false
    mousePosition.x = canvas.width / 2;
    mousePosition.y = canvas.height / 2;
  })
    // 后续代码...
    createDots();
    window.requestAnimationFrame(animateDots);
  }
});
</script>

<style lang="less" scoped></style>