<template>
  <div>Hello</div>
  <h2>{{ $store.state.name }}</h2>
  <el-button>按钮</el-button>
  <router-link to="/about">about</router-link>
  <router-link to="/home">home</router-link>
  <router-view />
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus';
</script>
