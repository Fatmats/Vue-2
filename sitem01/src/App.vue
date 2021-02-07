<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">SİTEM0102</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/" exact>
            <a class="nav-link " aria-current="page">Anasayfa</a>
            </router-link>
            <router-link to="user"> 
               <a class="nav-link">Giriş</a>
            </router-link>
           <router-link to="kayit">
             <a class="nav-link">Kayit Ol</a>
           </router-link>
          </div>
        </div>
      </div>
    </nav>
   <router-view></router-view>
  </div>
</template>

<script>
import giris from "./user/giris";
import kayit from "./components/kayit";
import anasayfa from "./components/anasayfa";
export default {
  components: {
    appGiris: giris,
    appKayit: kayit,
    appAnasayfa: anasayfa,

  }}
</script>

<style>
body {
  background-color: bisque;
}
</style>
