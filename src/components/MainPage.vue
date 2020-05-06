<template>
  <v-row>
    <v-col cols="8">
      <v-sheet class="pa-4 ml-3"
               color="grey lighten-5"
               elevation="3">
        <BookNote v-if="tab==='book'"
                  :tag="tag"
                  class="mb-n4" />
        <LightNote v-if="tab==='light'"
                   class="mb-n4" />
      </v-sheet>
    </v-col>
    <v-col cols="4">
      <v-sheet class="pa-4 mr-3 mb-5"
               color="grey lighten-5"
               elevation="3">
        <NavigateBoard v-on:selectTab="selectTab"
                       v-on:selectTag="selectTag" />
      </v-sheet>
      <v-sheet class="mr-3"
               color="grey lighten-5"
               elevation="3">
        <RecomandBoard />
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import RecomandBoard from '@/components/RecomandBoard'
import BookNote from '@/components/BookNote'
import LightNote from '@/components/LightNote'
import NavigateBoard from '@/components/NavigateBoard'
export default {
  name: 'MainPage',
  components: { BookNote, NavigateBoard, RecomandBoard, LightNote },
  data: () => ({
    tab: 'book',
    tag: ''
  }),
  methods: {
    selectTab: function (tab) {
      this.tab = tab
    },
    selectTag: function (tag) {
      this.tag = tag
    }
  }
}
</script>
