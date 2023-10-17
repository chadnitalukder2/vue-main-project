<template>
  <div>
    <app-header :myStudents="students"></app-header>
    <comFooter></comFooter>
</div>
</template>

<script>
import comFooter from './Components/baice/App_footer';

export default {
  data(){
    return{
      students: ["nitesh", "puja", "asha", "prem"]
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

