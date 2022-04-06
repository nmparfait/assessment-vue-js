<template>
  <b-container style="width: 100%" class="principal">
    <!--Mostrando o card com detalhamento.-->
    <b-card
      style="max-width: 95%; margin-top: 20px"
      :img-src="card.imageUrl"
      :img-alt="card.name"
      img-left
      class="mb-3"
    >
      <b-card-text>
        <h4>{{ card.name }}</h4>
      </b-card-text>
      <b-card-text> <strong>Artista:</strong> {{ card.artist }}</b-card-text>
      <b-card-text>
        <strong> Texto original: </strong> {{ card.originalText }}</b-card-text
      >
      <b-card-text> <strong> Tipo: </strong> {{ card.types[0] }}</b-card-text>
      <b-card-text>
        <strong> Edição Original: </strong> {{ card.set }}</b-card-text
      >
      <b-card-text> <strong> Raridade: </strong> {{ card.rarity }}</b-card-text>
      <b-card-text> <strong> Cores: </strong> {{ card.colors }} </b-card-text>
    </b-card>

    <!--Edição das informações apresentadas no Card. Só surge com o botão editar-->
    <b-row class="editar" v-show="editar">
      <b-form class="b-form" @submit="onSubmit">
        <!--Edição Nome do card-->
        <b-form-group
          id="input-group-1"
          label="Nome do card:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="card.name"
            type="text"
            required
          ></b-form-input>
        </b-form-group>

        <!--Edição Nome do card-->
        <b-form-group id="input-group-1" label="Artista:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="card.artist"
            type="text"
            required
          ></b-form-input>
        </b-form-group>

        <!--Edição Texto original do card-->

        <b-form-group
          id="input-group-1"
          label="Texto original:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="card.originalText"
            type="text"
            required
          ></b-form-input>
        </b-form-group>

        <!--Edição O tipo do card. Ex: Criatura, Feitiço...-->

        <b-form-group id="input-group-1" label="Tipo:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="card.types[0]"
            type="text"
            required
          ></b-form-input>
        </b-form-group>

        <!--Edição do set de origem-->

        <b-form-group
          id="input-group-1"
          label="Edição Original:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="card.set"
            type="text"
            required
          ></b-form-input>
        </b-form-group>

        <!--Edição da Raridade: comum, incomum, raro...-->

        <b-form-group id="input-group-1" label="Raridade:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="card.rarity"
            type="text"
            required
          ></b-form-input>
        </b-form-group>

        <!--Edição das CORES dominantes no Card-->
        <b-form-group id="input-group-3" label="Cores:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="card.colors"
            :options="listaCores"
            required
          ></b-form-select>
        </b-form-group>
        <b-button
          class="btn-editar"
          type="submit"
          @click="fecharEditar"
          variant="primary"
          v-show="editar"
          >Enviar</b-button
        >
      </b-form>
    </b-row>
    <b-row>
      <b-button
        class="btn-editar"
        @click="mostrarEditar"
        variant="danger"
        v-show="!editar"
        >Editar Card</b-button
      >
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Detalhamento",

  data() {
    return {
      //Puxando o card do meu 'params' passado no componente 'ListaDeCharacters'
      card: this.$route.params.card,
      number: this.$route.params.number,

      editar: false,
      listaCores: ["Artefato", "Azul", "Branco", "Verde", "Vermelho", "Preto"],
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert("Alterado com sucesso!");
    },

    mostrarEditar() {
      this.editar = true;
    },
    fecharEditar() {
      this.editar = false;
    },
  },

  created() {
    //inicio a página pegando o valor de card.colors e passo pro input que recebe a lista de cores.
    this.listaCores.push(this.card.colors);
  },
};
</script>

<style scoped>
.principal {
  background-image: url("../assets/wallpaper.jpg");
}

.mb-3 {
  background-color: white;
  opacity: 0.9;
  position: relative;
  top: 20px;
}
.editar {
  position: relative;
  top: 18px;
  left: 40px;
  color: aliceblue;
}
.btn-editar {
  width: 80%;
  margin-top: 20px;
  margin-left: 80px;
  margin-bottom: 20px;
}

.b-form {
  margin-left: 10px;
  font-weight: bold;
  text-shadow: black 0.1em 0.1em 0.2em;
}

#input-group-1 {
  display: flex;
  margin-right: 30px;
}

#input-1 {
  margin-left: 20px;
}
</style>