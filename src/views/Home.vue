<template>
  <div class="home">
    <button @click="sendSiames">Siames</button>
    <button @click="sendPersas">Persa</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    sendSiames() {
      this.$router.push("/Siameses");
    },
    sendPersas() {
      this.$router.push("/Persas");
    }
  }
};
</script>
