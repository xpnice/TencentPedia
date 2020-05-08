<template>
  <div id="app">
    <v-app id="inspire">
      <TopBar />
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
import TopBar from '@/layouts/TopBar'
export default {
  name: 'Dashboard',
  components: {
    MainPage,
    TopBar
  },
  data: () => ({
    dialog: false,
  })
};
</script>
