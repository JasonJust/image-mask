<template>
  <div class="the-home-container">
    <div class="the-home-container-box-one">
      <!--    创建左右两个盒子，给左边的盒子加上遮罩层和鼠标遮罩层，右边盒子内放入放大比例图片，顶部左对齐-->
      <div class="the-home-left">
        <!--        图片-->
        <img src="../assets/images/hot2.png"
             class="image-style">
        <!--        鼠标遮罩层-->
        <div class="mouse-mask" v-show="mouseMaskShow" :style="mouseMove"></div>
        <!--        图片遮罩层-->
        <div class="image-box-mask"
             @mouseenter="mouseenterChange"
             @mousemove="mousemoveChange"
             @mouseout="mouseoutChange"></div>
      </div>
      <div class="the-home-right" v-show="imgMaskShow">
        <!--        图片-->
        <img src="../assets/images/hot2.png"
             class="image-size-style" :style="imgMove"/>
      </div>
      <!--    <div class="the-home-container-box-two">-->
      <!--      <quill-editor></quill-editor>-->
      <!--    </div>-->
    </div>
  </div>
</template>

<script>
// import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

export default {
  components: {
    quillEditor
  },
  name: 'ImageSize',
  data () {
    return {
      mouseMaskShow: false,
      imgMaskShow: false,
      mouseMove: { transform: ''},
      imgMove: {}
    }
  },
  methods: {
    mouseenterChange () {
      this.imgMaskShow = true
      this.mouseMaskShow = true
    },
    mousemoveChange (i) {
      console.log('指针移动', i)
      //鼠标位置
      let x = i.offsetX
      let y = i.offsetY
      //限制鼠标层罩，限制其无法超出原图区域左上角
      let topX = x - 100 < 0 ? 0 : x - 100
      let topY = y - 100 < 0 ? 0 : y - 100
      //限制鼠标层罩，限制其无法超出原图区域
      if (topX > 600) {
        topX = 600
      }
      if (topY > 400) {
        topY = 400
      }
      //通过tranform移动鼠标层罩和右侧图片位置
      this.mouseMove.transform = `translate(${topX}px,${topY}px)`
      this.imgMove.transform = `translate(-${0.5 * topX}px,-${0.7 * topY}px)`
    },
    mouseoutChange () {
      this.imgMaskShow = false
      this.mouseMaskShow = false
    }
  }
}
</script>


<style scoped lang="scss">
  .the-home-container {

    .the-home-container-box-one {
      display: flex;
      height: 100%;
      width: 100%;

      .the-home-left {
        margin-right: 8px;
        width: 600px;
        height: 400px;
        border: 1px solid teal;

        .image-style {
          width: 600px;
          height: 400px;
        }

        .mouse-mask {
          width: 100px;
          height: 100px;
          background: rgba(158, 57, 48, 0.5);
          position: absolute;
          top: 8px;
          left: 8px;
        }

        .image-box-mask {
          width: 600px;
          height: 400px;
          position: absolute;
          z-index: 1;
          top: 8px;
          left: 8px;
        }
      }

      .the-home-right {
        margin-right: 8px;
        width: 600px;
        height: 400px;
        border: 1px solid pink;
        position: relative;
        overflow: hidden;

        .image-size-style {
          width: 1000px;
          height: 600px;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }

    .the-home-container-box-two {
      width: 500px;
      height: 300px;
    }
  }
</style>
