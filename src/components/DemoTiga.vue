<template>
    <div class="all">
        <div class="judul">
            <h2 v-for="status in listData" :key="status">{{ status.nomero }}</h2>
        </div>
        <div class="isi">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, vero dolore vitae molestias 
                voluptatibus, accusamus fugiat facere quis esse obcaecati cupiditate quaerat cum possimus neque quidem 
                nemo reprehenderit repellendus quo.</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'DemoTiga',
    computed: {
      listData() {
        return this.$store.state.listData;
    },
    },
};
</script>
 
<style scoped>
.all{
    border: 1px solid rgb(0, 0, 252);
}
.judul{
    font-family: Arial;
    color: whitesmoke;
    background-color: darkblue;
}
.isi{
    font-family: cursive;
    font-size: 16px;
    background-color: darksalmon;
}
</style>