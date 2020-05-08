<template>
  <div>
    <v-card class="mx-auto mb-4">
      <v-list dense>
        <v-list-item>
          <v-list-item-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg"
                 alt="John">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>上海老哥</v-list-item-title>
            <v-list-item-subtitle>带薪水群世界第一</v-list-item-subtitle>
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
        <v-textarea filled
                    solo
                    readonly
                    value="请问滨海大厦去腾讯大厦的班车周期是啥"
                    auto-grow
                    label="内容"
                    rows="2"
                    row-height="30"></v-textarea>
      </v-container>
      <v-card-actions>
        <v-btn text>
          <v-icon color="red darken-1">mdi-heart-outline</v-icon>关注问题
        </v-btn>
        <v-btn text>
          <v-icon color="green darken-1">mdi-message-outline</v-icon>回复
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="mx-auto mb-4">
      <v-list dense>
        <v-list-item>
          <v-list-item-avatar>
            <v-avatar color="red">
              <span class="white--text headline">YP</span>
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>李沿澎</v-list-item-title>
            <v-list-item-subtitle>一只特立独行的猪</v-list-item-subtitle>
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
        <v-textarea filled
                    solo
                    readonly
                    value="四月十七号变成的已完成现在没消息是凉了吗"
                    auto-grow
                    label="内容"
                    rows="2"
                    row-height="30"></v-textarea>
      </v-container>
      <v-card-actions>
        <v-btn text>
          <v-icon color="red darken-1">mdi-heart-outline</v-icon>关注问题
        </v-btn>
        <v-btn text>
          <v-icon color="green darken-1">mdi-message-outline</v-icon>回复
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'LightNote'
}
</script>