<template>
   <div class="container">
    <div class="card" style="width: 25rem">
      <div class="card-body">
        <h5 class="card-title">Kayıt Ol</h5>
        <div class="row justify-content-around">
            <div class="form-group">
              <label for="exampleInputEmail1" >Email</label>
              <input
                v-model="email"
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
                v-model="sifre"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Şifrenizi Belirleyiniz"/>
                <button type="submit" class="btn btn-primary mt-1" @click="save">Kayıt Ol</button>
               <p @click="NavigatetoGiris"> Zaten Hesabim Var</p>
            </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      sifre:null,
      email:null,
      UserList:[]
    }
  },
methods:{
  save(){
    this.$http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDMzVrU6XUmWHueWu_QNLoLlY0bTnGrYHM',{ email: this.email, password: this.sifre , returnSecureToken:true})
    .then((response)=>{
      console.log(response);
      }).then((data)=>{
        this.$http.post('https://sitemsitem01-default-rtdb.firebaseio.com/users.json',{email:this.email,password:this.sifre})
        .then((response)=>{
          console.log(response);
        })
      })
    
  },
  NavigatetoGiris(){
    this.$router.push("/user")
  }
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