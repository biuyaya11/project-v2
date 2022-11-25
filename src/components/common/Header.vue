<template>
  <div class="header">
    <el-header>
      <div class="title">通用管理系统</div>
      <div>{{name}}</div>
    </el-header>
  </div>
</template>

<script>
import { getToken} from "@/utils/setToken";

export default {
 data() {
   return {
     name: '',
   }
 },
  created() {
      this.name = getToken('username')
  }
}
</script>

<style lang="less" scoped>
.header {
  .el-header {
    width: 100%;
    background: cadetblue;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    .title {
      width: 200px;
      font-size: 30px;
    }

  }
}
</style>