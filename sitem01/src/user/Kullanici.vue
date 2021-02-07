<template>
  <div>
    <h1>Geldiimm</h1>
    <button class="btn btn-primary " @click="save = true">
      GERİ DÖN
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      save: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    console.log("Kontrol Sağlandi");
    if (this.save) {
       if (confirm("Emin misin?")) {
        next();
      } else {
        next(false);
      }
     
    
     
    }}
};
</script>

<style>
</style>