<template>
  <div>
    <slot name="listItem"></slot>
    I am a list helper
    <slot name="pera"></slot>
    <slot name="other">Loading...</slot>
    </div>
</template>

<script>
export default {
    data(){
        return{
           
        }
    }
};
</script>

<style>
p{
    color: blue;
}
body{
    font-size: 20px;
}
</style>
