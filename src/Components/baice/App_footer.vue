<!-- <template>
    <div>
        Create a Component & Locally Import footer
        <p> Lastname : {{lastName}}</p>
  </div>
</template> -->

<!-- <script>
import {bus} from '../../main'
export default{
    props: {
        lastName: String,
    },
    created(){
        bus.$on('changeName', (data) =>{
            //console.log(data);
            // eslint-disable-next-line vue/no-mutating-props
            this.lastName = data;
        });
    }
}
</script> -->

<!-- <style scoped> -->
div{
    color: red;
}
</style>