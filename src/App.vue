<template>
  <div>
    <!-- :myStudents="students" -->
    <!-- :lastName = "lName"
    :age = "myAge"
    @updateValue = "fName = $event" -->
    <app-header 
    :firstName = "fName"
  
     
    ></app-header>
    <comFooter
    :lastName ="lName"
    ></comFooter>
</div>
</template>

<script>
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
</script>

<style>
body{
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
}
</style>

