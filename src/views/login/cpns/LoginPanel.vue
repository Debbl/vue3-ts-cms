<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label
          ><el-icon><user-filled /></el-icon>账号登录</template
        >
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label
          ><el-icon><cellphone /></el-icon>手机登录</template
        >
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
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
    const isKeepPassword = ref(false);
    const accountRef = ref<InstanceType<typeof LoginAccount>>();
    const handleLoginClick = () => {
      accountRef.value?.loginAction();
    };
    return {
      isKeepPassword,
      accountRef,
      handleLoginClick,
    };
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
.account-control {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.login-btn {
  margin-top: 10px;
  width: 100%;
}
</style>
