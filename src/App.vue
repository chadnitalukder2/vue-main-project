<!-- <template>
  <div> -->
    <!-- :myStudents="students" -->
    <!-- :lastName = "lName"
    :age = "myAge"
    @updateValue = "fName = $event" -->
    <!-- <app-header 
    :firstName = "fName"
  
     
    ></app-header>
    <comFooter
    :lastName ="lName"
    ></comFooter>
</div>
</template> -->

<!-- <script>
import comFooter from './Components/baice/App_footer';

export default {
  data(){
    return{
     
      fName: "Puja",
      lName: "Talukder",
      //myAge: 20
    }
  },
  components:{ 
    comFooter
  }
  }
</script> -->

<!-- <style>
body{
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
}
</style> -->



<template>
  <div>
    <compListHelper>
     <ul slot="listItem">
      <li v-for="li in list" :key="li">{{li}}</li>
     </ul>
     <p slot="pera">User also knows php</p>
     <p See :slot="loader">See you again</p>
    </compListHelper>
  </div>
</template>

<script>
import compListHelper from './Components/ListHelper.vue'
export default {
  data(){
    return{
      list: ['HTML', 'CSS', 'JavaScript'],
      loader: ''

    }
  },
  components:{
    compListHelper
  },
  created(){
    setTimeout(() => {
      this.loader = 'other';
    },3000 );
  }
}
</script>
 <style scoped>
 ul li{
  color: rgb(211, 32, 92);
 }
</style>


