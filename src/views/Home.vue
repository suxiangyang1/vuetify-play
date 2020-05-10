<template>
  <v-app>
    <!--顶部导航-->
    <v-app-bar
      app
      clipped-left
      color="primary"
      height="100"
      src="../assets/img/beauty.jpg"
      shrink-on-scroll
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>开到荼蘼</v-toolbar-title>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(236,97,145,.7), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-spacer></v-spacer>
      <div class="mt-1">
        <v-avatar>
          <v-img src="../assets/img/avatar/taoranran.jpg"></v-img>
        </v-avatar>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="secondary">mdi-heart</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <!--左边侧边栏-->
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      dark
      color="secondary"
      :mini-variant.sync="mini"
      class="elevation-12"
    >
      <!--左边侧边栏的的四个目录-->
      <v-list dense>
        <v-list-item
          link
          @click="$router.push('/')"
        >
          <v-list-item-action>
            <v-icon @click.stop="mini = !mini">mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click="$router.push('/about')"
        >
          <v-list-item-action>
            <v-icon>mdi-at</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click="$router.push('/login')"
        >
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <!--可更换mdi-后的字符串(到https://materialdesignicons.com/)来修改icon-->
            <v-icon>mdi-diamond-stone</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title @click="$router.push('/todo')">TodoList</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!--主题内容区-->
    <v-content class="accent">
      <!--行高-->
      <v-container class="fill-heigh">
        <!--水平,垂直对齐方式-->
        <v-row
          align="start"
          justify="start"
        >
          <!--响应式布局 总数为12 当前组件为4 有剩余或不足按相关比例进行缩放和扩展-->
          <v-col
            cols="12"
            class="shrink"
            md="4"
            v-for="(img, index) in imgs"
            :key="index"
          >
            <v-hover
              v-slot:default="{ hover }"
              open-delay="200"
            >
              <v-card
                class="mx-auto secondary"
                dark
                :elevation="hover ? 16 : 2"
                link
              >
                <v-img
                  :src="require('../assets/img/avatar/' + img)"
                  height="220px"
                ></v-img>
                <v-card-title>
                  Western road trips
                </v-card-title>
                <v-card-subtitle>
                  1,000 miles of wonder
                </v-card-subtitle>
                <v-card-actions>
                  <v-btn
                    text
                    color="accent"
                  >Share</v-btn>
                  <v-btn
                    color="accent"
                    text
                  >
                    Explore
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    icon
                    @click="show = !show"
                  >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="show">
                    <v-divider></v-divider>
                    <v-card-text>
                      I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have
                      time for sleeping, soldier, not with all the bed making you'll be doing.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <!--底部-->
    <v-footer
      app
      color="primary"
    >
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    show: false,
    mini: false,
    imgs: ['beauty.jpg', 'beauty.jpg', 'beauty.jpg', 'beauty.jpg', 'beauty.jpg', 'beauty.jpg']
  }),
  created() {
    //当前页面的主题
    this.$vuetify.theme.dark = false
    //mutation1
    this.$store.commit('CAT', { name: 'newCat1' })
    //mutation2
    this.changeCatAge({ age: 20 })
    //action 2秒后执行异步更新
    this.$store.dispatch('updateCat')
    this.handleUpdateCat({ name: '我是辅助函数定义的' })
    //getter过滤 返回的值
    console.log(this.$store.getters.filterCat)
  },
  methods: {
    //数组的方式
    ...mapMutations({
      changeCatAge: 'CAT'
    }),
    ...mapActions({
      handleUpdateCat: 'updateCat'
    })
  }
}
</script>
