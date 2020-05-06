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
          <v-col cols="12">
            <v-textarea filled
                        disabled
                        value="小青龙和你看这软件整的行不行是很友好的朋友"
                        auto-grow
                        label="内容"
                        rows="4"
                        row-height="30"
                        shaped></v-textarea>
          </v-col>

        </v-row>
      </v-container>
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
        <v-row dense>
          <v-col cols="12">
            <v-textarea filled
                        solo
                        readonly
                        value="众所周知PHP是全世界最好的语言"
                        auto-grow
                        label="内容"
                        rows="4"
                        row-height="30"
                        shaped></v-textarea>
          </v-col>

        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'LightNote'
}
</script>