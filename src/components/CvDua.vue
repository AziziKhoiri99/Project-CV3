<template>
<div>
<body v-for="(status, index) in listCv" v-bind:key="index">
    <header>
        <fieldset class="q">
            <legend>RESUME</legend>
            <img src="https://p.kindpng.com/picc/s/205-2055865_dog-face-transparent-dog-meme-face-png-png.png"
                alt="" width="70%" class="x">
            <h1 class="v da">{{ status.nama }}</h1>
        </fieldset>
    </header>
    <section>
        <nav class="column b">
            <br>
            <div class="a">
            <h1 class="da">PROFILE
                <hr class="h">
            </h1>
            <b>NAMA</b>
            <br>
            {{ status.nama }}
            <br><br>
            <b>TANGGAL LAHIR</b>
            <br>
            20 Maret 2006
            <br><br>
            <b>ALAMAT</b>
            <br>
            {{ status.alamat }}
            <br><br>
            <b>WEBSITE</b>
            <br>
            googleapis.com
            <br><br>
            <h1 class="da">PENGHARGAAN
                <hr class="h">
            </h1>
            <b>CREATIVE AWARDS 2012</b>
            <br>
            Openminded.org
            <br><br>
            <b>INTERFACE DESIGN 2013</b>
            <br>
            Coolideas.com
            <br><br>
            <h1 class="da">KONTAK
                <hr class="h">
            </h1>
            <b>TELP. RUMAH</b>	&#9742;
            <br>
            (0234) 789 888
            <br><br>
            <b>NO. TELP </b> &#128222;
            <br>
            {{ status.phone }}
            <br><br>
            <b>EMAIL</b> &#9993;
            <br>
            <u>{{ status.email}}</u>
            <br><br>
            <h1 class="da">SOCIAL
                <hr class="h">
            </h1>
            <b>TWITTER</b> &#116;
            <br>
            @Azizi_Khoiri
            <br><br>
            <b>FACEBOOK</b> &#102;
            <br>
            Azizi_Khoiri
            <br><br>
            </div>
        </nav>

        <article class="column hy">
            <form action="">
                <h2 class="da">GRAPHIC ARTIST</h2>
                <hr>

                <div class="row">
                <h2 class="da"> &#128188; PENGALAMAN
                    <hr class="h">
                </h2>
                <div class="row1">
                    <b>{{ status.exp[0] }}</b> 
                    <p>{{ status.edu[1] }}</p>

                    <b>{{ status.exp[1] }}</b>
                    <p>{{ status.edu[1] }}</p>

                    <p>{{ status.exp[3] }}</p>
                    
                    <b>{{ status.edu[3] }}</b>
                    <p>{{ status.exp[3] }}</p>
                </div>
                </div><br>

                <div class="row">
                <h2 class="da"> &#128213; PENDIDIKAN
                    <hr class="h">
                </h2>
                <div class="row1">
                    <b>{{ status.edu[0] }}</b> 
                    <p>{{ status.edu[1] }}</p>
                    <b>{{ status.edu[2] }}</b>
                    <p>{{ status.edu[1] }}</p>
                    <b>{{ status.edu[3] }}</b>
                    <p>{{ status.edu[4] }}</p>
                    <b>{{ status.edu[3] }}</b>
                    <p>{{ status.edu[4] }}</p>
                </div>
                </div><br>

                <div class="row">
                <h2 class="da">  &#128161; KETERAMPILAN
                    <hr class="h">
                </h2>
                <div class="row1">
                    <b>PROFESSIONAL SKILLS</b> 
                    <div class="row1">
                        Microsoft Windows
                        <p>Windows</p>
                        <p> &#9899;&#9899;&#9899;&#9899;&#9899;<span class="cle">&#9899;&#9899;</span></p>
                        <p> &#9899;&#9899;&#9899;&#9899;&#9899;<span class="cle">&#9899;&#9899;</span></p>
                    </div>
                    <b>PERSONAL SKILLS</b> 
                    <div class="row1">
                        Plagiator
                        <p>Halutination</p>
                        <p> &#9899;&#9899;&#9899;&#9899;&#9899;<span class="cle">&#9899;&#9899;</span></p>
                        <p> &#9899;&#9899;&#9899;&#9899;&#9899;<span class="cle">&#9899;&#9899;</span></p>
                    </div>                    
                    </div>
                </div>
                <br>
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