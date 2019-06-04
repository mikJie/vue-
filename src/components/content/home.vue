<template>
  <div style="background-color: #EBEBEB;min-height:900px">
    <div style="width:100%;background-color: #636363; overflow: hidden">
        <header-search></header-search>
    </div>
    <div style="margin-top:5px">
      <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="4">
          <div>
            <!-- <el-menu default-active="1" class="el-menu-vertical-demo" style="min-height:900px" @select="handleSelect">
             <el-menu-item index="1"><i class="el-icon-message"></i>导航一</el-menu-item>
              <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
              <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
                <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item> 
            </el-menu> -->
            <el-menu default-active="1" class="el-menu-vertical-demo" style="min-height:900px" @select="handleSelect">
                <template v-for="(menu,index) in menuData">
                    <el-menu-item :key='"item"+index' v-if='!menu.children' :index="menu.path || menu.id"><i class="el-icon-menu"></i>{{menu.name}}</el-menu-item>
                    <el-submenu v-if='menu.children' :index='menu.path || menu.id' :key='"item"+index'>
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">{{menu.name}}</span>
                        </template>
                        <template v-for="(item,index) in menu.children">
                            <el-menu-item :key='"item"+index' :index="item.path || item.id">{{item.name}}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
            </el-menu>
          </div>
        </el-col>
        <el-col :xs="20" :sm="20" :md="20" :lg="20">
            <div style="border: 1px solid #A6A6A6; border-radius:6px; padding:5px; margin:2px; background-color: white">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item  v-for="item in breadcrumbItems" :key="item.index">{{item}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
             <div style="margin-top:10px">
                <!-- <router-view></router-view> -->
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive"></router-view>
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive"></router-view>
            </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style scoped>
    .el-submenu .el-menu-item{
        min-width:inherit
    }
</style>


<script type="text/ecmascript-6">
import headerSearch from '../header/header'
  export default {
    data(){
      return {
        searchCriteria: '',
        menuData:'',
        breadcrumbItems: ['导航一'],
      }
    },
    components:{
        headerSearch
    },
    mounted(){
        var vm = this;
        this.$http.get("/getTest").then(function (res) {
            console.log(res.data);
            vm.menuData = res.data.data.menu;
            console.log(vm.menuData)
        });
    },
    methods:{
    
      handleIconClick(ev) {
          
      },
      handleSelect(key, keyPath){
        this.$router.push(key);
        this.breadcrumbItems  = keyPath
      },

    },
  }
</script>
