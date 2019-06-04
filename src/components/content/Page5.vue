<template>
  <div>
    <el-form :model="searchRow">
      <el-row>
        <el-col :span="6">
          房租：
          <el-input
            placeholder="房租"
            v-model="searchRow.one">
          </el-input>
        </el-col>
        <el-col :span="6">
          押金：
          <el-input
            placeholder="押金"
            v-model="searchRow.two">
          </el-input>
        </el-col>
         <el-col :span="6">
           服务费：
          <el-input
            placeholder="服务费"
            v-model="searchRow.three">
          </el-input>
        </el-col>
        <el-col :span="6">
          人数：
          <el-input
            placeholder="人数"
            v-model="searchRow.four">
          </el-input>
        </el-col>
      </el-row>
      <el-row>
          <el-switch
            v-model="flag"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change='changeFlag'
            active-text="按月付费"
            inactive-text="按半年付费">
          </el-switch>
          <el-button type="primary" @click="sure">计算费用</el-button>
          <el-button type="primary" @click="close">重置</el-button>
      </el-row>
       <el-row>
          <el-input
            placeholder="总计"
            v-model="price"
          ></el-input>
       </el-row>
    </el-form>
  </div>
</template>
<style>
  .el-row{
    height: 80px;
  }
  .el-input,.el-switch{
    width: 200px;
    
  }
  .el-message{
    left: 60%;
    top: 35%;
  }
</style>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        input2:'',
        searchRow:{
          one:'',
          two:'',
          three:'',
          four:''
        },
        flag: true,
        flagNum:1,
        price:''
      }
    },
    beforeRouteLeave(to, from, next){
        to.meta.keepAlive = false;
        next();
    },
    methods:{
      changeFlag(val){
        // console.log(val);
        // if(val==true){
        //   this.flagNum = 1
        // }else{
        //   this.flagNum = 6
        // }
      },
      close(){
        this.searchRow = {
          one:'',
          two:'',
          three:'',
          four:''
        };
        this.price = ''
      },
      sure(){
          if(this.searchRow.one!=''&&this.searchRow.two!=''&&this.searchRow.three!=''&&this.searchRow.four!=''){
              if(this.flag==true){
                  this.price = (Number(this.searchRow.one)+Number(this.searchRow.two)/12+Number(this.searchRow.three)/12)/this.searchRow.four
              }else{
                  this.price = (Number(this.searchRow.one)+Number(this.searchRow.two)/12+Number(this.searchRow.three)/12)/this.searchRow.four*6
              }
          }else{
            this.$message({
              message:'请填写每一项',
              type: "warning",
              showClose: true,
            });
          }
      }
    }
  }
</script>