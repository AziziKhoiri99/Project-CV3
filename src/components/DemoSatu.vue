<template>
    <div class="all">
        <div class="judul">
            <h2 v-for="status in listData" :key="status">{{ status.nomer }}</h2>
        </div>
        <div class="isi">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur facilis quas blanditiis rem impedit 
                velit ratione ducimus dicta maiores consectetur ipsa ut repudiandae, architecto recusandae placeat odit
                 soluta facere. Repellendus!
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name:'DemoSatu',
    computed: {
      listData() {
        return this.$store.state.listData;
    },
    },
};
</script>
 
<style scoped>
.all{
    border: 1px solid brown;
}
.judul{
    font-family: Arial;
    color: brown;
}
.isi{
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 16px;
}
</style>