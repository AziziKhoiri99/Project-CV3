<template>
<div>
<body v-for="(status, index) in listCv" v-bind:key="index">
    <section>
        <nav class="column">
            <h2></h2>
            <h2>{{ status.nama2[0] }} <span style="color: orange;">{{ status.nama2[1] }}</span></h2>
            <img src="https://cdn.popbela.com/content-images/post/20210111/elon-musk-usnews-b593d7d5c5a8d929e1076a2386508a17_750x500.jpg"
                alt="" width="100%">
            <br>
            <h1>Kontak
                <hr>
            </h1>
            <b>Alamat: </b>
            <br>
            {{ status.alamat }}
            <br><br>
            <b>No. Telp: </b>
            <br>
            {{ status.phone }}
            <br><br>
            <b>Email: </b>
            <br>
            <u>{{ status.email}}</u>
            <br><br>
            <b>LinkedIn: </b>
            <br>
            <u> linkedin.com/azizi.khoiri</u>
            <h1>Bahasa
                <hr>
            </h1>
            Indonesia - C2
            <br>
            Inggris - A1
            <br>
            Arab - A2
            <h1>Hobi
                <hr>
            </h1>
            <ul>
                <li>{{ status.hobi[0]}}</li>
                <li>{{ status.hobi[1]}}</li>
                <li>{{ status.hobi[2]}}</li>
                <li>{{ status.hobi[3]}}</li>
            </ul>
        </nav>

        <article class="column">
            <form action="">
                <h2>Ringkasan
                    <hr>
                </h2>
                {{ status.sumary }}
                <br>
                <h2>Sorotan Keterampilan
                    <hr>
                </h2>
                <ul>
                <div class="row1">
                        <li>{{ status.skill[0] }}</li>
                        <li>{{ status.skill[1] }}</li>
                        <li>{{ status.skill[2] }}</li>
                        <li>{{ status.skill[3] }}</li>
                        <li>{{ status.skill[4] }}</li>
                        <li>{{ status.skill[5] }}</li>
                </div>
                </ul>
                <h2>Pengalaman
                    <hr>
                </h2>
                <b>{{ status.exp[0] }} </b>- 09/2015 to 05/2019 <br>
                <b>{{ status.exp[1] }} </b>Semarang <br>
                <ul>
                    <li>{{ status.exp[2] }} </li>
                    <li>{{ status.exp[3] }} </li>
                    <li>{{ status.exp[4] }} </li>
                    <li>{{ status.exp[5] }} </li>
                    <li>{{ status.exp[6] }} </li>
                </ul>
                <h2>Pendidikan
                    <hr>
                </h2>
                SMK Bina Nusantara: <b>Teknik Komputer & Jaringan</b> - 2014 <br>
                <b>Bootcamp Coding,</b> SMG
                <br>
                <h2>Sertifikasi
                    <hr>
                </h2>
                PHP Framework (sertifikasi): <b>Zend, Codeigniter, Symfony.</b>
                Bahasa Pemrograman: <b>Javascript, HTML5, PHP OOP, CSS, SQL, MySQL</b>
            </form>
        </article>
    </section>
</body>
</div>
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
export default {
  name: "Cv",
  data(){
    return{
        listCv: []
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/listCv').then(res => {
        this.listCv = res.data
      }).catch ((err) => {
        console.log(err);
      })
    }
   }
  }
</script>