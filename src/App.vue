<template>
  <div>Hello</div>
  <h2>{{ $store.state.name }}</h2>
  <router-link to="/about">about</router-link>
  <router-link to="/home">home</router-link>
  <router-view />
</template>
