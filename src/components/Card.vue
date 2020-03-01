<template>
  <div @click="add" class="card">
    <img :src="img" />
    <h2>{{name}}</h2>
    <span>Likes: {{result}}</span>
  </div>
</template>
<script>
export default {
  name: "Card",
  data() {
    return {
      result: 0
    };
  },
  props: {
    img: { type: String },
    name: { type: String }
  },
  methods: {
    add() {
      this.result += 1;
      this.$emit("input", this.result);
    }
  }
};
</script>