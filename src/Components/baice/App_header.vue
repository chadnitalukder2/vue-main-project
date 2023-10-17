<template>
    <!-- <div>
        Globally Import a Component  header
        <ul>
            <li v-for="stu in myStudents" :key="stu">
                {{stu}}
            </li>
        </ul>
   </div> -->
   <div>
    <p>Firstname : {{ firstName }}</p>
    <p>Lastname : {{ lastName }}</p>
    <p>Age : {{ age }}</p>
    <button @click="updateName">Click me</button>
   </div>
</template>

<script>
export default{
    props: {
     /* myStudents: {
        type: Array
      }*/
      firstName: String,
      lastName: String,
      age: Number
    },
    methods: {
        updateName(){
           // this.firstName = "Chadni";
           this.$emit('updateValue', 'Chadni')

        }
    }
}
</script>

<style scoped>
div{
    color: blue;
}
</style>