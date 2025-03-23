<template>
  <div>
    <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/create-poll">Crear Encuesta</router-link> |
      <router-link to="/create-form">Crear Formulario</router-link> |
      <router-link to="/form-responses">Ver lista de formularios completados</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
nav {
  padding: 20px;
  text-align: center;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>