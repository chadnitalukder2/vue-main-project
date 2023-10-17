<!-- <template> -->
    <!-- <div>
        Globally Import a Component  header
        <ul>
            <li v-for="stu in myStudents" :key="stu">
                {{stu}}
            </li>
        </ul>
   </div> -->
   <!-- <div>
    <p>Firstname : {{ firstName }}</p> -->
    <!-- <p>Lastname : {{ lastName }}</p>
    <p>Age : {{ age }}</p> -->

    <!-- <button @click="updateName">Click me</button>
    <hr>
   </div>
</template> -->

<!-- <script>
import {bus} from '../../main'
export default{
    props: {
     /* myStudents: {
        type: Array
      }*/
      firstName: String,
    //   lastName: String,
    //   age: Number
    },
    methods: {
        updateName(){
           // this.firstName = "Chadni";
          // this.$emit('updateValue', 'Chadni')
            bus.$emit('changeName', 'Chadni');
        }
    }
}
</script> -->

<!-- <style scoped> -->
div{
    color: blue;
}
</style>