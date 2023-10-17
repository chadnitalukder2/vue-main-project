<template>
  <div>
    <comHeader></comHeader>
    <comFooter></comFooter>
    <p>{{age}}</p>
  <p>{{name}}</p>
</div>
</template>

<script>
import comHeader from './Components/baice/App_header';
import comFooter from './Components/baice/App_footer';

export default {
  data(){
    return{
      name: "Puja",
      age: 21
    }
  },
  components:{ 
    comHeader,
    comFooter
  }
  }
</script>

<style>

</style>
