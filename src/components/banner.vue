<template>
  <div class="boxH">
    <audio autoplay>
      <source src="../../static/vioce/Summer.mp3"/>
    </audio>
    <audio ref="audio" loop="-1">
      <source src="../../static/vioce/knock.mp3"/>
    </audio>
    <div class="swiper-container boxH">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="slide1">
            <!--礼盒-->
            <p class="ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="1.5s" swiper-animate-delay="0.2s"
               style="position: absolute;bottom: 2rem;right: 0;font-size: 2rem;line-height: 1.5;font-weight: 600;">
              <img src="../assets/img/slide1/box.png" height="200rem" alt="">
            </p>
            <!--雪人-->
            <p class="ani" swiper-animate-effect="rollIn" swiper-animate-duration="1.8s" swiper-animate-delay="1s"
               style="position: absolute;bottom: 3rem;left: -10%;font-size: 2rem;padding: 1.5rem;line-height: 1.5;font-weight: 600;">
              <img src="../assets/img/slide1/snowman.png" height="150rem" alt="">
            </p>
            <!--两个人-->
            <p class="ani" swiper-animate-effect="zoomInRight" swiper-animate-duration="3s" swiper-animate-delay="2s"
               style="position: absolute;top: 17rem;left: 10%;font-size: 2rem;padding: 1.5rem;line-height: 1.5;font-weight: 600;">
              <img src="../assets/img/slide1/lover.png" height="230rem" alt="">
            </p>
            <!--帽子-->
            <p class="ani" swiper-animate-effect="rotateInUpLeft" swiper-animate-duration="3s" swiper-animate-delay="4s"
               style="position: absolute;top: 13rem;left: 25%;font-size: 2rem;padding: 1.5rem;line-height: 1.5;font-weight: 600;">
              <img src="../assets/img/slide1/cat.png" height="80rem" alt="">
            </p>
            <!--雪花-->
            <p class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="5s" swiper-animate-delay="3s"
               style="position: absolute;bottom: 0;right: 0;font-size: 2rem;padding: 1.5rem;line-height: 1.5;font-weight: 600;">
              <img src="../assets/img/slide1/snow.png" width="100%" alt="">
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slide2">
            <!--气球-->
            <p class="ani" swiper-animate-effect="bounceInUp" swiper-animate-duration="1.2s" swiper-animate-delay="0.1s"
               style="position: absolute;top: 0rem;font-size: 2rem;line-height: 1.5;font-weight: 600;">
              <img src="../assets/img/slide2/ball.png" width="100%" alt="">
            </p>
            <!--2018雪人-->
            <p class="ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="1.8s" swiper-animate-delay="1s"
               style="position: absolute;top: 6rem;left: 16%;font-size: 2rem;padding: 1.5rem;line-height: 1.5;font-weight: 600;">
              <img src="../assets/img/slide2/top.png" height="150rem" alt="">
            </p>
            <!--圣诞老人-->
            <p class="ani" swiper-animate-effect="zoomInRight" swiper-animate-duration="3s" swiper-animate-delay="2s"
               style="position: absolute;bottom: 2rem;right: 5%;font-size: 2rem;padding: 1.5rem;line-height: 1.5;font-weight: 600;">
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
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<style scoped>
  .boxH {
    height: 100%;
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
  .slide3>p {
    padding: 1rem;
    padding-top: 20%;
    line-height: 3rem;
    text-shadow:#000 1px 1px 1;
  }

  .msg1 {
    position: absolute;
    top: 18rem;
    left: 0;
    font-size: 3.5rem;
    padding: 1.5rem;
    line-height: 1;
    text-indent: 3rem;
  }
</style>
<script>
  export default {
    data() {
      return {
        one: 1,
        msg: [],
        flag: true,
        known: true,
        known3: true,
        testWord: 'Long long ago, there was a sincer cordial emotion in front of me, but I didn\'t cherish it. Until it lost, I just regreted at that time. It is only the most suffering thing in the world.But now...',
        slide3Word: '你说你喜怒哀乐反复无常，我就是你的沙袋让你发泄对现实的一切不满；你说你死气沉沉没有活力，我就是你的彩面小丑逗你开心让你笑；你说你深陷过去不能自拔，我就是你的朝阳拨开层层阴霾照进亮你的内心。'
      }
    },
    computed: {},
    mounted() {
      this.swiperLod();
      // var audio =  document.getElementById('audio').play(); //pause()

    },
    created() {
      var that = this;
      // setTimeout(function (){
      //   that.typing(that.testWord,200);
      // },10000)
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
                    if(that.known){
                      setTimeout(function () {
                        that.typing(that.testWord, 250, num - 1);
                        that.$refs.audio.play();
                        that.$refs.audio.playbackRate = 0.8;
                        that.flag = false;
                        that.known = false;
                      }, 3000);
                    }
                    break;
                  case 2:
                    if(that.known3){
                      that.typing(that.slide3Word, 250, num - 1);
                      that.$refs.audio.play();
                      that.$refs.audio.playbackRate = 0.8;
                      that.flag = false;
                      that.known3 = false;
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
    }
  }
</script>


