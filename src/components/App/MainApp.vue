<script>
import ShowItems from "@/components/App/ShowItems.vue";
import ItemCreatorForm from "@/components/App/ItemCreatorForm.vue";

export default {
  name: "MainApp",
  components: {ItemCreatorForm, ShowItems},

}
</script>

<template>
  <div>
    <v-col style="min-width:20vw">
      <ItemCreatorForm></ItemCreatorForm>
    </v-col>
    <v-col>
      <ShowItems></ShowItems>
    </v-col>
  </div>

</template>

<style scoped>

</style>
