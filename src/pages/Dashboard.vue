<template>
  <div id="app">
    <v-app id="inspire">
      <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp"
                 app
                 dense
                 color="blue darken-3"
                 dark>
        <v-toolbar-title style="width: 300px"
                         class="ml-1 pl-3">
          <span class="hidden-sm-and-down">TencentPedia</span>
        </v-toolbar-title>
        <v-text-field flat
                      solo-inverted
                      hide-details
                      dense
                      prepend-inner-icon="search"
                      label="Search"
                      class="hidden-sm-and-down"></v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>

        <v-menu v-model="menu"
                :close-on-content-click="false"
                :nudge-width="200"
                offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon
                   large
                   v-on="on">
              <v-avatar size="32px"
                        item>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg"
                     alt="John">
              </v-avatar>
            </v-btn>
          </template>

          <v-card elevation="24">
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <img src="https://cdn.vuetifyjs.com/images/john.jpg"
                       alt="John">
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>温鑫</v-list-item-title>
                  <v-list-item-subtitle>同济大学算法大师</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn outlined
                         color="primary"
                         @click="fav = !fav">
                    <v-icon>mdi-account</v-icon>个人中心
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>
            <v-container class="grey lighten-5">
              <v-row dense>
                <v-col cols="6">
                  <v-btn text
                         @click="menu = false">
                    <v-icon large
                            color="green darken-2"
                            class="mr-2">
                      mdi-share-all</v-icon>轻分享
                  </v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn text
                         @click="menu = false">
                    <v-icon large
                            color="blue darken-2"
                            class="mr-2">
                      mdi-clipboard-file</v-icon>读书笔记
                  </v-btn>
                </v-col>
              </v-row>
              <v-row dense
                     class="mt-3">
                <v-col cols="6">
                  <v-btn text
                         @click="menu = false">
                    <v-icon large
                            color="pink darken-2"
                            class="mr-2">
                      mdi-timeline-clock</v-icon>时光书单
                  </v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn text
                         @click="menu = false">
                    <v-icon large
                            color="yellow darken-2"
                            class="mr-2">
                      mdi-star</v-icon>收藏列表
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>

            <v-card-actions>

              <v-btn text
                     @click="menu = false">
                <v-icon>mdi-menu</v-icon>账号设置
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn text
                     color="error"
                     @click="logout">
                <v-icon>mdi-logout-variant</v-icon>登出
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-app-bar>
      <v-content>
        <v-container fluid>
          <MainPage />
        </v-container>
        <!--v-container fluid
                     fill-height>
          <v-layout align-center
                    justify-center>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn :href="source"
                       icon
                       large
                       target="_blank"
                       v-on="on">
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn icon
                       large
                       href="https://codepen.io/johnjleider/pen/MNYLdL"
                       target="_blank"
                       v-on="on">
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-layout>
        </v-container-->
      </v-content>
      <v-btn bottom
             color="pink"
             dark
             fab
             fixed
             right
             @click="dialog = !dialog">
        <v-icon>add</v-icon>
      </v-btn>
      <v-dialog v-model="dialog"
                width="800px">
        <v-card>
          <v-card-title class="blue darken-3">
            <span style="color:white">创建轻分享</span>
          </v-card-title>
          <v-container grid-list-sm>
            <v-layout row
                      wrap>
              <v-flex xs12
                      align-center
                      justify-space-between>
                <v-layout align-center>
                  <v-text-field placeholder="轻分享标题"></v-text-field>
                </v-layout>
              </v-flex>
              <v-file-input accept="image/png, image/jpeg, image/bmp"
                            placeholder="选择你要分享的图片"
                            prepend-icon="mdi-camera"
                            label="图片上传"></v-file-input>
              <v-container fluid>
                <v-textarea label="文本"
                            outlined
                            no-resize
                            rows="7"></v-textarea>
              </v-container>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-btn color="primary">创建读书笔记</v-btn>
            <v-spacer></v-spacer>
            <v-btn text
                   @click="dialog = false">取消</v-btn>
            <v-btn text
                   color="primary"
                   @click="dialog = false">确定</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app>
  </div>
</template>

<script>
import MainPage from '@/components/MainPage';

export default {
  name: 'Dashboard',
  components: {
    MainPage
  },
  methods: {
    logout: function () {
      this.$router.push('/')
    }
  },
  data: () => ({
    dialog: false,
    menu: false,
    items: [
      { icon: 'contacts', text: 'Contacts' },
      { icon: 'history', text: 'Frequently contacted' },
      { icon: 'content_copy', text: 'Duplicates' },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Labels',
        model: true,
        children: [
          { icon: 'add', text: 'Create label' },
        ],
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'More',
        model: false,
        children: [
          { text: 'Import' },
          { text: 'Export' },
          { text: 'Print' },
          { text: 'Undo changes' },
          { text: 'Other contacts' },
        ],
      },
      { icon: 'settings', text: 'Settings' },
      { icon: 'chat_bubble', text: 'Send feedback' },
      { icon: 'help', text: 'Help' },
      { icon: 'phonelink', text: 'App downloads' },
      { icon: 'keyboard', text: 'Go to the old version' },
    ],
  })
};
</script>
