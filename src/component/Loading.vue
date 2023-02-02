<template>
    <div class="loading"></div> 
</template>
<script>
export default {
    name:'Loading'
}
</script>
<style scoped>
.loading{
    position: fixed;
    left: 0;
    top: 0;
    background: url('~@/assets/img/loading.gif') center center no-repeat rgba(0, 0, 0, 0.5);
    background-size:50px; 
    width:100vw ;
    height:100vh ;
    z-index: 1000;
}
</style>