<template>
  <div class="col-md-6">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Input Barang dan Harga</h3>
      </div>
      <div class="card-body">
        <div class="form-group">
          <label for="">Tanggal</label>
          <input
            type="text"
            v-model="agenda.tanggal"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="">Nama Barang</label>
          <input
            type="text"
            v-model="agenda.namabarang"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="">Harga</label>
          <input
            type="text"
            v-model="agenda.harga"
            class="form-control"
            required
          />
        </div><br>
        <div class="form-group">
          <button
            class="btn btn-success btn-sm"
            :disabled="isLoading"
            @click.prevent="simpan"
          >
            {{ isLoading ? "Loading..." : "Tambahkan" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AgendaInput",
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  data() {
    return {
      agenda: {
        tanggal: "",
        namabarang: "",
        harga: ""
      },
    };
  },
  methods: {
    simpan() {
        this.$store.dispatch('simpangAgenda', this.agenda)
        this.agenda ={
            tanggal: '',
            namabarang:'',
            harga: ''
        }
    }
  },
};
</script>