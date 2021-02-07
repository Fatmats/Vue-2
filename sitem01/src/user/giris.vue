<template>
  <div class="container">
    <div class="card" style="width: 25rem">
      <div class="card-body">
        <h5 class="card-title">GİRİŞ</h5>
        <div class="row justify-content-around">
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              v-model="emaild"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email Adresinizi Girin"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Şifre</label>
            <input
              
              v-model="sifred"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Şifrenizi Girin"
            />
            <router-link to='' tag="button">
            <button type="submit" @click="submit" class="btn btn-primary mt-1">
            Giriş Yap
          </button>
          </router-link><router-view ></router-view>
          <p @click="gotoKayit">Bir Hesabim Yok</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Kullanici from './Kullanici'
export default {
  data(){
    return{
      save:false,
        sifred:"",
        emaild:"",
    
    }
  },
  methods:{
    submit(){
      // this.$http.get('https://sitemsitem01-default-rtdb.firebaseio.com/users.json')
      // .then((respons)=>{
      //     const data = respons.data
      //     for(let key in data){
      //       this.UserList.push(data[key])} })

      this.$http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDMzVrU6XUmWHueWu_QNLoLlY0bTnGrYHM'
,{email:this.emaild, password:this.sifred, returnSecureToken:true})
      .then((response)=>{
        console.log(response)
        if(response.ok==true){this.$router.push("/kullanici")}
        // else{
        //   if(response.ok==false){console.log("oldu");}
        // }
     
      })
      

      }, gotoKayit(){
        this.$router.push("/kayit")

      },

     }}
      

</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>