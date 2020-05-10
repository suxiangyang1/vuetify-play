<template>
  <!--最好使用v-app,避免出现其他错误,因为使用了Vuetify组件-->
  <v-app id="app">
    <v-fade-transition>
      <router-view />
    </v-fade-transition>
  </v-app>
</template>
<style lang="scss"></style>
