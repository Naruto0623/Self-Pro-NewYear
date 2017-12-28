<template>
  <div class="boxH">
    <audio autoplay ref="mp3">
      <source src="../../static/vioce/Summer.mp3"/>
    </audio>
    <audio ref="audio" loop="-1">
      <source src="../../static/vioce/knock.mp3"/>
    </audio>
    <div class="bjPlay" v-if="isPlay" v-on:click="playIng(0)"></div>
    <div class="pausePlay" v-if="!isPlay" v-on:click="playIng(1)"></div>
    <!--<div class="bjPlay"></div>-->
    <div class="swiper-container boxH">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="slide1">
            <!--礼盒-->
            <p class="ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="1.5s" swiper-animate-delay="0.2s"
               style="position: absolute;bottom: 2rem;right: 0;">
              <img src="../assets/img/slide1/box.png" height="200rem" alt="">
            </p>
            <!--雪人-->
            <p class="ani" swiper-animate-effect="rollIn" swiper-animate-duration="1.8s" swiper-animate-delay="1s"
               style="position: absolute;bottom: 3rem;left: 1%;">
              <img src="../assets/img/slide1/snowman.png" height="150rem" alt="">
            </p>
            <!--两个人-->
            <p class="ani" swiper-animate-effect="zoomInRight" swiper-animate-duration="3s" swiper-animate-delay="2s"
               style="position: absolute;top: 22rem;left: 19%;">
              <img src="../assets/img/slide1/lover.png" height="230rem" alt="">
            </p>
            <!--帽子-->
            <p class="ani" swiper-animate-effect="rotateInUpLeft" swiper-animate-duration="3s" swiper-animate-delay="4s"
               style="position: absolute;top: 17rem;left: 32%;">
              <img src="../assets/img/slide1/cat.png" height="80rem" alt="">
            </p>
            <!--雪花-->
            <p class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="10s" swiper-animate-delay="4s"
               style="position: absolute;bottom: 0;right: 0;">
              <img src="../assets/img/slide1/snow.png" width="100%" alt="">
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slide2">
            <!--气球-->
            <p class="ani" swiper-animate-effect="bounceInUp" swiper-animate-duration="1.2s" swiper-animate-delay="0.1s"
               style="position: absolute;top: 0;">
              <img src="../assets/img/slide2/ball.png" width="100%" alt="">
            </p>
            <!--2018雪人-->
            <p class="ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="1.8s" swiper-animate-delay="1s"
               style="position: absolute;top: 10rem;left: 24%;">
              <img src="../assets/img/slide2/top.png" height="150rem" alt="">
            </p>
            <!--圣诞老人-->
            <p class="ani" swiper-animate-effect="zoomInRight" swiper-animate-duration="3s" swiper-animate-delay="2s"
               style="position: absolute;bottom: 2rem;right: 5%;">
              <img src="../assets/img/slide2/man.png" height="80rem" alt="">
            </p>
            <p class="ani msg1 words" swiper-animate-effect="flip" swiper-animate-duration="0.5s"
               swiper-animate-delay="4000s">{{msg[0]}}</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slide3">
            <p class="china">
              {{msg[1]}}
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slide4">
            <!--麋鹿-->
            <p class="ani" swiper-animate-effect="hinge" swiper-animate-duration="3s" swiper-animate-delay="5s"
               style="position: absolute;top: -2rem;left: -2rem;">
              <img src="../assets/img/slide4/top.png" height="180rem" alt="">
            </p>
            <!--圣诞老人车-->
            <p class="ani" swiper-animate-effect="zoomOutRight" swiper-animate-duration="5s" swiper-animate-delay="10s"
               style="position: absolute;bottom: 10rem;left: -3rem;">
              <img src="../assets/img/slide4/animal.png" height="100rem" alt="">
            </p>
            <p class="china" v-html="msg[2]"></p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slide5">
            <!--Be-->
            <p class="ani" swiper-animate-effect="rollIn" swiper-animate-duration="1.5s" swiper-animate-delay="0.2s"
               style="position: absolute;top: 14rem;left: 6rem;">
              <img src="../assets/img/end/Be.png" height="80rem" alt="">
            </p>
            <!--my-->
            <p class="ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="2s" swiper-animate-delay="1s"
               style="position: absolute;top: 15rem;left: 15rem;">
              <img src="../assets/img/end/my.png" height="80rem" alt="">
            </p>
            <!--grilfriend-->
            <p class="ani" swiper-animate-effect="rotateIn" swiper-animate-duration="3s" swiper-animate-delay="5s"
               style="position: absolute;top: 24rem;left: 3rem;">
              <img src="../assets/img/end/girl.png" height="85rem">
            </p>
            <!--in-->
            <p class="ani" swiper-animate-effect="zoomInDown" swiper-animate-duration="5s" swiper-animate-delay="2s"
               style="position: absolute;top: 33rem;left: 11rem;">
              <img src="../assets/img/end/in.png" height="60rem">
            </p>
            <!--2018-->
            <p class="ani" swiper-animate-effect="flip" swiper-animate-duration="3s" swiper-animate-delay="3s"
               style="position: absolute;bottom: 9rem;left: 5rem;">
              <img src="../assets/img/end/2018.png" height="60rem" alt="">
            </p>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<style scoped>
  .boxH {
    height: 100%;
  }

  .bjPlay {
    height: 4rem;
    width: 4rem;
    /*background: #f00;*/
    background: url("../assets/img/play.gif") no-repeat center;
    background-size: 350%;
    border-radius: 50%;
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 2;
  }
  .pausePlay {
    height: 4rem;
    width: 4rem;
    /*background: #f00;*/
    background: url("../assets/img/pause.png") no-repeat center;
    background-size: 350%;
    border-radius: 50%;
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 2;
  }

  .slide1 {
    background: url('../assets/img/slide1/bj.png') no-repeat center;
    height: 100%;
    background-size: 100%
  }

  .slide2 {
    background: url('../assets/img/slide2/bj.jpg') no-repeat center;
    height: 100%;
    background-size: 100%
  }

  .slide3 {
    background: url('../assets/img/slide3.png') no-repeat center;
    height: 100%;
    background-size: 100%;
    color: #fff;
    text-indent: 2.8rem;
  }

  .slide3 > p {
    padding: 1rem;
    padding-top: 20%;
    line-height: 4rem;
    text-shadow: 8px 2px 4px rgba(0, 0, 0, 0.9);
  }

  .slide4 {
    background: url('../assets/img/slide4/slide4.png') no-repeat center;
    height: 100%;
    background-size: 100%;
    color: #fff;
  }

  .slide4 > p {
    padding: 1rem;
    padding-top: 14%;
    color: #fff;
    text-shadow: 8px 2px 4px rgba(0, 0, 0, 0.9);
    line-height: 3rem;
    text-indent: 2.8rem;
  }

  .slide5 {
    background: url('../assets/img/end/bj.png') no-repeat center;
    height: 100%;
    background-size: 100%;
    color: #fff;
    text-indent: 2.8rem;
  }

  .msg1 {
    position: absolute;
    top: 22rem;
    left: 0;
    font-size: 3.5rem;
    padding: 1.5rem;
    line-height: 4.5rem;
    text-indent: 3rem;
  }
</style>
<script>
  export default {
    data() {
      return {
        //控制背景音乐是否播放
        isPlay: true,
        msg: [],
        flag: true,
        known: true,
        known3: true,
        known4: true,
        testWord: 'Long long ago, there was a sincer cordial emotion in front of me, but I didn\'t cherish it. Until it lost, I just regreted at that time. It is only the most suffering thing in the world.But now...',
        // testWord: '测试',
        slide3Word: '你说你喜怒哀乐反复无常，我就是你的沙袋让你发泄对现实的一切不满；你说你死气沉沉没有活力，我就是你的彩面小丑逗你开心让你笑；你说你深陷过去不能自拔，我就是你的朝阳拨开层层阴霾照进亮你的心房。这个世上，我的温柔只为你',
        // slide3Word: '测试',
        slide4Word: '清晨，还没睁开眼，便在想今天要给你发一个什么样的早安，暮色，没有你的一句晚安便迟迟无法睡去。糟心的生活每天都能变着花样的打击人，但每当你的笑容浮现在我的眼前，这个世界便不再冰冷，看着你笑，我便能安心。我喜欢你，喜欢看着你笑，喜欢和你斗嘴，喜欢你说“不”时候的傲娇，喜欢你无聊时萌萌的嘟嘴，喜欢你的恍然大悟时的发呆… <p>逝去的青春我无法挽回，但有你的日子，我想现在才刚刚开始…以后的日子，我想和你一起度过余生。把每天，当成是末日去珍惜，去爱你</p>'
      }
    },
    computed: {},
    mounted() {
      this.swiperLod();
    },
    created() {

    },
    methods: {
      //轮播图
      swiperLod() {
        var that = this;
        var mySwiper = new Swiper('.swiper-container', {
          //自动播放
          // autoplay: {
          //   //切换频率（毫秒）
          //   delay: 8000,
          // },
          autoplay: false,
          //是否循环
          loop: false,
          on: {
            init: function () {
              swiperAnimateCache(this); //隐藏动画元素
              swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function () {
              swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            },
            //滑动轮播图回调事件
            slideChangeTransitionStart: function () {
              let num = this.activeIndex;
              if (that.flag) {
                switch (num) {
                  case 1:
                    if (that.known) {
                      setTimeout(function () {
                        that.typing(that.testWord, 250, num - 1);
                        that.$refs.audio.play();
                        that.flag = false;
                        that.known = false;
                      }, 3000);
                    }
                    break;
                  case 2:
                    if (that.known3 && !that.known) {
                      that.typing(that.slide3Word, 250, num - 1);
                      that.$refs.audio.play();
                      that.flag = false;
                      that.known3 = false;
                    }
                    break;
                  case 3:
                    if (that.known4 && !that.known && !that.known3) {
                      that.typing(that.slide4Word, 250, num - 1);
                      that.$refs.audio.play();
                      that.flag = false;
                      that.known4 = false;
                    }
                    break;
                }
              }
            }
          },
          //分页
          pagination: {
            el: '.swiper-pagination',
          }
        })
      },
      //打字机效果
      typing(word, time, i) {
        var index = 1;
        var delay = 300;
        if (time) {
          delay = time;
        }
        var words = word;
        var that = this;
        var mtimer = setInterval(function () {
          if (index == words.length) {
            clearInterval(mtimer);
            that.flag = true;
            that.$refs.audio.pause();
            that.$forceUpdate();
          }
          that.msg[i] = words.substr(0, index) + ' _';
          that.$forceUpdate();
          index++;
        }, delay);
      },
      //背景音乐播放控制器
      playIng(id) {
        if(id == 0) {
          this.$refs.mp3.pause();
          this.$refs.audio.pause();
          this.isPlay = false;
        }else {
          this.$refs.mp3.play();
          this.isPlay = true;
        }
      }
    }
  }
</script>


