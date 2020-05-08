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
          <span>TencentPedia</span>
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
        <UserCard pos="top"
                  :user="user" />
      </v-app-bar>
      <v-content>
        <v-container fluid>
          <MainPage />
        </v-container>
      </v-content>
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn bottom
                 color="pink"
                 dark
                 v-on="on"
                 fab
                 fixed
                 right
                 @click="dialog = !dialog">
            <v-icon>add</v-icon>
          </v-btn>
        </template>
        <span>Create</span>
      </v-tooltip>

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
import UserCard from '@/components/UserCard';
export default {
  name: 'Dashboard',
  components: {
    MainPage,
    UserCard
  },
  data: () => ({
    dialog: false,
    user: {
      name: '朱一旦',
      info: '有钱人的生活就是这么朴实无华且枯燥',
      avatar: 'https://alcdn.img.xiaoka.tv/20191102/60e/f5c/1321259173/60ef5c1e1124a5e54eff70893398aa63.jpg@1e_1c_0o_0l_96h_96w_100q_1pr.webp'
    }
  })
};
</script>
