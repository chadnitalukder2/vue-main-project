<template>
  <div>
    <!-- :myStudents="students" -->
    <app-header 
    :firstName = "fName"
    :lastName = "lName"
    :age = "myAge"
    @updateValue = "fName = $event"
    
    ></app-header>
    <comFooter></comFooter>
</div>
</template>

<script>
import comFooter from './Components/baice/App_footer';

export default {
  data(){
    return{
     
      fName: "Puja",
      lName: "Dash",
      myAge: 20
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

