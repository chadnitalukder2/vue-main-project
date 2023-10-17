<template>
  <div>
    <app-header></app-header>
    <comFooter></comFooter>
    <p>{{age}}</p>
  <p>{{name}}</p>
</div>
</template>

<script>
import comFooter from './Components/baice/App_footer';

export default {
  data(){
    return{
      name: "Puja",
      age: 21
    }
  },
  components:{ 
    comFooter
  }
  }
</script>

<style>

</style>
