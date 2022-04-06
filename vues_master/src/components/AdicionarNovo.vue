<template>
  <b-row class="novo">
    <h2 style="margin-right: 20px; color: white">Adicione um novo card:</h2>

    <b-row style="">
      <b-form inline>
        <label class="sr-only" for="inline-form-input-name">Name</label>
        <b-form-input
          v-model="name"
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Nome do card"
        ></b-form-input>

        <label class="sr-only" for="inline-form-input-username">Username</label>
        <b-input-group prepend="Raridade" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input
            v-model="raridade"
            id="inline-form-input-username"
            placeholder="ex: Uncommon"
          ></b-form-input>
        </b-input-group>

        <b-button @click="criarCard()" variant="primary">Salvar</b-button>
      </b-form>
      
    </b-row>
  </b-row>
  
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AdicionarNovo",
  data() {
    return {
      name: "",
      raridade: "",
    };
  },

  methods: {
    ...mapActions(["addCard"]),

    criarCard() {
      let novoCard = {
        name: this.name,
        imageUrl:'https://blog.influx.com.br/storage/app/uploads/public/67d/18f/2fd/67d18f2fdf601e40e21e8dc4e70247ca62c6ac83.jpg',
        colors: ['pardo'],
        types: ['Nordestino'],
        rarity: this.raridade,
        set: "Campina Grande - PB",
        originalText:"Melhor cair em contradição do que do 8º andar.",
        artist: "Minha Mãe",
        number: "",
        printings: ['campina grande', 'rio de janeiro', 'vancouver']
        
      };
      this.addCard(novoCard)
      alert('Adicionado com sucesso total!!!')
    },
  },
};
</script>

<style>
.novo {
  margin-top: 30px;
  margin-left: 40px;
}
</style>