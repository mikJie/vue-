<template>
  <div>
    <div class="block">
      <span class="demonstration">默认 Hover 指示器触发</span>
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>
     <span @click="addNum('+')">+</span>
     <input type="text" class="inputTxt" v-model="priceNum">
     <span @click="addNum('-')">-</span>
  </div>
</template>
<style>
  span{
    padding: 10px; 
    cursor: pointer;
  }
  .inputTxt{
    margin-top: 20px;
  }
   .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>

<script type="text/ecmascript-6">
 import {mapState, mapMutations} from 'vuex'
  export default {
    data(){
      return {
      }
    },
    beforeRouteLeave(to, from, next){
      to.meta.keepAlive = true;  // B 跳转到 A 时，让 A 缓存，即不刷新
        next();
    },
    mounted(){
        // console.log(window.scrollY)
        
    },
    computed:{
       ...mapState([
            'count'
        ]),
        priceNum:function(){
            console.log(this.$store.state.count)
            return this.count
        }
    },
    methods:{
       ...mapMutations([
           'BUY_CART'
        ]),
        addNum(flag){
          if(flag=='+'){
            this.BUY_CART(this.priceNum+1)
          }else{
            if(this.priceNum==0){
              this.BUY_CART(0)
            }else{
              this.BUY_CART(this.priceNum-1)
            }
          }
        }
    }
  }
</script>