<template>
    <div>
        <ul>
            <li v-for="x in listArr" :key="x.id">{{x.name}}</li>
        </ul>
    </div>
</template>
<style scoped>
  ul>li{
    background: skyblue
  }
</style>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
          listArr:[],
          scrollHeight:''
      }
    },
    created(){
        for(let i = 0;i<60;i++){
          let obj = {};
          obj.id = i;
          obj.name =  'AAAAAA'+i;
          this.listArr.push(obj)
        }
        // console.log(this.listArr)
    },
    mounted(){
        window.addEventListener('scroll',this.handlscroll)
    },
    methods:{
      handlscroll(){
        // console.log(document.documentElement .scrollTop);
        this.scrollHeight = document.documentElement .scrollTop;
      }
    },
    activated(){
      if(this.scrollHeight > 0){
          window.scrollTo(0, this.scrollHeight);
          this.scrollHeight = 0;
          window.addEventListener('scroll', this.handlscroll);
        }
    },
    deactivated(){
      window.removeEventListener('scroll', this.handlscroll);
    }
  }
</script>