<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height"
    >
      <MainApp v-if="isPasswordCorrect()" :key="reload" class="d-flex">

      </MainApp>
      <AppPassword v-else :key="reload" @password="reload = !reload"></AppPassword>
    </v-responsive>
  </v-container>
</template>

<script>
  //
import AppPassword from "@/components/AppPassword.vue";
  import ShowItems from "@/components/App/ShowItems.vue";
  import MainApp from "@/components/App/MainApp.vue";

export default {
  name: "Router",
  components: {MainApp, ShowItems, AppPassword},

  data() {
    return {
      reload: false
    }
  },

  methods: {
    isPasswordCorrect() {
      console.log(localStorage.getItem("password") === "CSHS123");
      return localStorage.getItem("password") === "CSHS123";
    }
  }
}
</script>
