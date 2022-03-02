<template>
  <div>
    <el-form label-width="60">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" />
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const phone = reactive({
      number: '',
      code: '',
    });
    return {
      phone,
    };
  },
});
</script>

<style lang="scss" scoped>
.get-code {
  display: flex;
  button {
    margin-left: 6px;
  }
}
</style>
