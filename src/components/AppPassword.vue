<script>
export default {
  name: "AppPassword",
  data() {
    return {
      password: "",
    }
  },
  methods: {
    save() {
      localStorage.setItem("password", this.password);
      this.$emit("password");
    }
  }
}
</script>

<template>
  <v-card>
    <v-card-title>
      <span class="headline">Enter password for app</span>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="password"
          label="Password"
          @keydown.enter="save"
          required
        ></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            @click="save"
          >
            Enter
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>
