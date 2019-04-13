<template>
  <div id="app">
    <div class="bg_top"></div>
    <div class="midd_img"></div>
    <div class="foot_img"></div>
  </div>
</template>

<script>
import '../../utils/rem'

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
body, html{
  margin: 0;
  width: 100%;
  height: auto;
}

#app {
  width: 100%;
  height: 2686px;
  background: url('../../assets/activity_rule/bg@2x.jpg') no-repeat center;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

#app .bg_top {
  width: 746px;
  height: 564px;
  background: url('../../assets/activity_rule/img2@2x.jpg') no-repeat center;
  background-size: 100% 100%;
  text-align: center;
}

.midd_img {
  width: 710px;
  height: 1174px;
  background: url('../../assets/activity_rule/img3@2x.jpg') no-repeat center;
  background-size: 100% 100%;
  text-align: center;
  border-radius: 1%;
}

.foot_img {
  width: 710px;
  height: 676px;
  background: url('../../assets/activity_rule/img1@2x.jpg') no-repeat center;
  background-size: 100% 100%;
  text-align: center;
  border-radius: 1%;
}
</style>
