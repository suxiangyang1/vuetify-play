<template>
  <div>
    <v-chip
      v-for="(item, index) in list"
      :key="index"
      close
      color="purple lighten-3"
      label
      text-color="white"
      class="mt-2 mr-2"
      @click="delDataWatch(index)"
    >
      <v-icon left>mdi-label</v-icon>
      {{ item }}
    </v-chip>
  </div>
</template>
<script>
export default {
  name: 'ListItem',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  watch: {
    list(val) {
      this.innerList = val
    }
  },
  data() {
    return {
      innerList: []
    }
  },
  methods: {
    delDataWatch(index) {
      this.innerList.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="scss"></style>