<template>
    <div class="all">
        <div class="judul">
            <h2 v-for="status in listData" :key="status">{{ status.nomere }}</h2>
        </div>
        <div class="isi">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a veritatis beatae. Pariatur distinctio sunt dolor error iusto culpa atque, officiis iste, dolore vero modi, explicabo repellat doloribus incidunt ad.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur facilis quas blanditiis rem impedit velit ratione ducimus dicta maiores consectetur ipsa ut repudiandae, architecto recusandae placeat odit soluta facere. Repellendus!
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name:'DemoDua',
    computed: {
      listData() {
        return this.$store.state.listData;
    },
    },
};
</script>
 
<style scoped>
.all{
    border: 1px solid cadetblue;
}
 
.judul{
    font-family: serif;
    background-color: cadetblue;
}
.isi{
    font-family: Times;
    font-size: 16px;
    background-color: cornsilk;
}
</style>