<template>
  <div>
    <el-form :model="account" :rules="rules" label-width="60" ref="formRef">
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
import { ElForm } from 'element-plus';
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: '',
    });
    const formRef = ref<InstanceType<typeof ElForm>>();
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
    const loginAction = () => {
      console.log('account');
      formRef.value?.validate((valid) => {
        console.log(valid);
        valid && console.log('ook');
      });
    };
    return {
      account,
      rules,
      formRef,
      loginAction,
    };
  },
});
</script>
