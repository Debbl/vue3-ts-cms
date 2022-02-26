<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label
          ><el-icon><user-filled /></el-icon>账号登录</template
        >
        <login-account />
      </el-tab-pane>
      <el-tab-pane>
        <template #label
          ><el-icon><cellphone /></el-icon>手机登录</template
        >
        <login-phone />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UserFilled, Cellphone } from '@element-plus/icons-vue';
import LoginAccount from './LoginAccount.vue';
import LoginPhone from './LoginPhone.vue';

export default defineComponent({
  components: {
    UserFilled,
    Cellphone,
    LoginAccount,
    LoginPhone,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.login-panel {
  margin-bottom: 160px;
  width: 330px;
  .title {
    text-align: center;
  }
}
</style>
