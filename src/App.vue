<template>
  <div style="padding: 0 !important;">
    <vs-navbar
            target-scroll="#padding-scroll-content"
            padding-scroll
            left-collapsed
            square
            fixed
               v-model="active">
      <template #left>
        <img src="/logo2.png" alt="">
      </template>
      <vs-navbar-item
              to="/"
              :active="$route.path == '/'"

      >
        Home
      </vs-navbar-item>
      <vs-navbar-item
              to="/explore"
              :active="$route.path == '/explore'"
      >
        Explore
      </vs-navbar-item>
      <vs-navbar-item
              :active="$route.path == '/search'"
              id="components"
      >

        Search
      </vs-navbar-item>
      <template #right>
        <vs-button flat >About this project</vs-button>
        <vs-button>Follow me</vs-button>
      </template>
    </vs-navbar>
    <div id="padding-scroll-content" class="square">


      <router-view></router-view>

      <vs-row class="p-5">

      </vs-row>

    </div>
  </div>
</template>

<script>
export default {
name: 'App',
data(){
  return{
    active:'/'
  }
}
}
</script>
<style>

</style>
