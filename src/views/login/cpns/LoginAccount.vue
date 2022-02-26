<template>
  <div>
    <el-form :model="account" :rules="rules" label-width="60">
      <el-form-item label="账号" :model="account" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" :model="account" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: '',
    });
    // 表单验证规则
    const rules = {
      name: [
        {
          required: true,
          message: '请输入用户名',
          trigger: 'blur',
        },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: '用户名必须是5-10个字母或数字',
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'blur',
        },
        {
          pattern: /^[a-z0-9]{3,}$/,
          message: '密码必须是3位以上的字母或数字',
          trigger: 'blur',
        },
      ],
    };
    return {
      account,
      rules,
    };
  },
});
</script>
