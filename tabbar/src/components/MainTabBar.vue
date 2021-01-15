<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="../assets/img/tabbar/homes.png" alt="" />
      <img slot="item-icon-active" src="../assets/img/tabbar/home.png" alt="" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="blue">
      <img slot="item-icon" src="../assets/img/tabbar/categorys.png" alt="" />
      <img
        slot="item-icon-active"
        src="../assets/img/tabbar/category.png"
        alt=""
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="../assets/img/tabbar/shopcarts.png" alt="" />
      <img
        slot="item-icon-active"
        src="../assets/img/tabbar/shopcart.png"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="../assets/img/tabbar/profiles.png" alt="" />
      <img
        slot="item-icon-active"
        src="../assets/img/tabbar/profile.png"
        alt=""
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
<style>
</style>