<template>
  <!--背景图-->
  <v-app class="bg">
    <v-content>
      <!--响应流式布局-->
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
          class="login-form"
          elevation="12"
        >
          <!--md="4" 代表中等设备的比例,例如电脑,ipad,sd=代表小型设备,比如：手机-->
          <v-col
            cols="12"
            md="4"
          >
            <!--阴影效果 elevation-12-->
            <v-card class="elevation-12">
              <!--登录卡片的顶部,用来放置一标题和icon-->
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer />
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :href="source"
                      icon
                      large
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <!--文本内容密码用户输入框,以及验证码或者一些其他的东西-->
              <v-card-text>
                <!--表单-->
                <v-form>
                  <v-text-field
                    id="name"
                    label="Name"
                    name="name"
                    type="text"
                  />
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <!--行为,用来放置一些动作,例如按钮的提交操作,重置操作-->
              <v-card-actions>
                <!--分割线-->
                <v-spacer />
                <v-btn
                  color="primary mr-6"
                  @click="$router.push('/')"
                >Login</v-btn>
                <v-btn
                  color="cyan mr-6"
                  dark
                >Reset</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <!--遮罩层,渐变,用于美化页面-->
    <div class="mask"></div>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  }
}
</script>
<style lang="scss" scoped>
.bg {
  background-image: url('../assets/img/beauty.jpg');
  background-size: 100% 100%;
  // opacity: 0.8;
  .login-form {
    z-index: 100;
  }
}
.mask {
  //铺满页面
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  //从左向右进行渐变
  background-image: linear-gradient(to right, #bf30ac 0%, #0f9d58 100%);
  //透明度
  opacity: 0.7;
}
</style>
