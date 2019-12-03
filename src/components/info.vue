<template>
  <div>
    这是一个详情页
    <br />
    <van-button type="danger" @click="back">点我返回</van-button>
  </div>
</template>

<script>
export default {
  name: "info",
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
</style>
