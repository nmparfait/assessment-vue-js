<template>
  <b-row>
    <b-navbar style="width: 100%" type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item>
          <a href="#">AT Vue JS</a>
        </b-nav-item>
        <b-nav-item>
          <router-link tag="nav" to="/">Lista De Cards</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link tag="nav" to="/formulario">Formulário</router-link>
        </b-nav-item>
      </b-navbar-nav>
      
    </b-navbar>
  </b-row>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style>
</style>