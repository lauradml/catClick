
<template>
  <div>
    <img @click="add" class="card" :src="img" />
    <h2>{{name}}</h2>
    <span>Clicks: {{result}}</span>
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