import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isloading: false,
        listAgenda: [
        ],
        listData: [
            {
                judul: "Ini adalah Judul Demo Satu",
                nomer: "Satu",
                nomere: "Dua",
                nomero: "Tiga"
            }
        ],
        listCv: [
            {
                nama: "Azizi Khoiri",
                nama2: [
                    "Azizi", "Khoiri"
                ],
                alamat: "Jl. Candi Sukuh No.3 Rt.4/Rw.V Kel. Bambankerep Kec. Ngaliyan Kota Semarang",
                phone: "+62 8********",
                email: "azizi.k@gmail.com",
                hobi: [
                    "Gabut", "Tidur", "Halu", "Dah..."
                ],
                sumary: `Pengembang Web Senior yang berspesialisasi dalam pengembangan ujung depan. Berpengalaman dengan semua
                tahapan siklus pengembangan untuk proyek web dinamis. Berpengalaman dalam berbagai bahasa pemrograman
                termasuk HTML5, PHP OOP, Javascript, CSS, MySQL. Latar belakang yang kuat dalam manajemen proyek dan
                hubungan pelanggan.`,
                skill: [
                    "Manajemen proyek",
                    "Pembuat keputusan yang kuat",
                    "Pemecah masalah yang kompleks",
                    "Designer Kreatif",
                    "Inovatif",
                    "Berfokus pada layanan"
                ],
                exp: [
                    "Web Developer - 09/2015 to 05/2019",
                    "Binus Developer, Semarang",
                    "Bekerja sama dengan desainer untuk membuat antarmuka yang bersih dan interaksi serta pengalaman yang sederhana dan intuitif.",
                    "Kembangkan konsep proyek dan pertahankan alur kerja yang optimal.",
                    "Bekerja dengan pengembang senior untuk mengelola proyek desain yang besar dan kompleks untuk klien korporat.",
                    "Selesaikan tugas pemrograman dan pengembangan terperinci untuk situs web publik dan internal front end serta kode server back-end yang menantang.",
                    "Lakukan tes jaminan kualitas untuk menemukan kesalahan dan mengoptimalkan kegunaan"
                ]
            }
        ],
    },
    mutations: {
        KONFIRMASI_AGENDA: (state, agenda) => {
            state.listAgenda.push(agenda)
        }
    },
    actions: {
        simpangAgenda({ commit, state }, agenda) {
            state.isLoading = true
            setTimeout(() => {
                commit('KONFIRMASI_AGENDA', agenda)
                state.isLoading = false
            }, 1500)
        }
    }
})