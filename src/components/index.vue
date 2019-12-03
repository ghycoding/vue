<template>
  <div>
    <!-- 导航栏 start -->
    <div class="header">
      <div>
        <van-row class="headerRow">
          <van-col span="12">
            <van-col span="8">
              <i class="iconfont icon-zuo headerIcon"></i>
            </van-col>
            <van-col span="8">xxxxx</van-col>
          </van-col>
          <van-col span="12">
            <van-col span="8"></van-col>
            <van-col span="8">
              <i class="iconfont icon-sousuo headerIcon"></i>
            </van-col>
            <van-col span="8">
              <i class="iconfont icon-fenlei headerIcon"></i>
            </van-col>
          </van-col>
        </van-row>
      </div>
    </div>
    <!-- 导航栏 end -->

    <!-- 列表 start -->
    <div class="userlistWrapper">
      <div class="userlist" v-for="(item,key) in userlist" :key="key">
        <van-row class="userlistRow">
          <van-col span="5" class="userlistcol">
            <div class="userImg">
              <img :src="item.headerimg" alt />
            </div>
          </van-col>
          <van-col span="19" class="userlistcol">
            <div class="userName">
              <b>{{item.name}}</b>
            </div>
          </van-col>
        </van-row>
        <div class="line"></div>
      </div>
    </div>
    <!-- 列表 end -->

    <!-- 分组列表 start -->
    <div class="userlistWrapper">
      <div class="userlist" v-for="(arr,arrkey) in arrlist" :key="arrkey">
        <router-link to="./info">
          <van-row class="userlistRow">
            <van-col span="5" class="userlistcol">
              <div class="userImg">
                <img :src="arr.arrlogo" alt />
              </div>
            </van-col>
            <van-col span="19" class="userlistcol">
              <div class="userName">
                <b>{{arr.arrname}}</b>
              </div>
            </van-col>
          </van-row>
        </router-link>
        <div class="line"></div>
      </div>
    </div>
    <!-- 分组列表 end -->

    <!-- 数据 start -->
    <div class="data">
      <span class="data_yes">共10人，</span>
      <span class="data_no">4人未加入</span>
    </div>
    <!-- 数据 end -->

    <!-- 底部导航 start-->
    <div class="footer">
      <van-tabbar v-model="active">
        <van-tabbar-item class="iconfont icon-sousuo">消息</van-tabbar-item>
        <van-tabbar-item class="iconfont icon-tongxunlu">通讯录</van-tabbar-item>
        <van-tabbar-item class="iconfont icon-weimingmingwenjianjia_gongzuotai">工作台</van-tabbar-item>
        <van-tabbar-item class="iconfont icon-wo">我</van-tabbar-item>
      </van-tabbar>
    </div>
    <!-- 底部导航 end-->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      userlist: [
        {
          headerimg: require("../assets/img.jpeg"),
          name: "疯狂的石头"
        },
        {
          headerimg: require("../assets/img.jpeg"),
          name: "JACK"
        },
        {
          headerimg: require("../assets/img.jpeg"),
          name: "xxxxx"
        },
        {
          headerimg: require("../assets/img.jpeg"),
          name: "xxxxxx"
        },
        {
          headerimg: require("../assets/img.jpeg"),
          name: "xxxxxxx"
        },
        {
          headerimg: require("../assets/img.jpeg"),
          name: "666666"
        },
        {
          headerimg: require("../assets/img.jpeg"),
          name: "人事部"
        }
      ],
      arrlist: [
        {
          arrlogo: require("../assets/logo.png"),
          arrname: "分组一"
        },
        {
          arrlogo: require("../assets/logo.png"),
          arrname: "分组一"
        },
        {
          arrlogo: require("../assets/logo.png"),
          arrname: "分组一"
        },
        {
          arrlogo: require("../assets/logo.png"),
          arrname: "分组一"
        }
      ]
    };
  }
};
</script>

<style scoped>
@import url(../assets/icon.css);
.header {
  width: 100%;
  height: 50px;
  background-color: #4f77aa;
}
.headerRow {
  line-height: 46px;
}
.headerIcon {
  font-size: 24px;
}

.userlist {
  height: 65px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
.userlistRow {
  height: 100%;
}
.userlistcol {
  height: 100%;
}
.userImg {
  height: 100%;
  display: flex;
  align-items: center;
}
.userImg img {
  width: 45px;
  height: 45px;
  border-radius: 10px;
}
.userName {
  font-size: 16px;
  color: #666;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.line {
  width: 100%;
  height: 1px;
  background: #eee;
}
.data {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.data_yes {
  color: #666;
  font-size: 14px;
}
.data_no {
  color: #99aec8;
  font-size: 14px;
}
.footer {
  margin-top: 60px;
}
</style>
