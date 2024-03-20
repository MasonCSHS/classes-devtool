<script>
import { classesRef } from "@/plugins/VueFire";
import {useCollection} from "vuefire";


export default {
  name: "ShowItems",
  data() {
    return {
      items: [{name: "Item 1"}, {name: "Item 2"}, {name: "Item 3"}],
      headers: [
        {title: "ID", value: "id"},
        {title: "Name", value: "name"},
        {title: "Description", value: "description"},
        {title: "Difficulty", value: "difficulty"},
        {title: "Prerequisites", value: "prerequisites"},
        {title: "Credits", value: "credits"},
        {title: "Fee", value: "fee"},
        {title: "Grades", value: "grades"},
        {title: "Semesters", value: "semesters"},
        {title: "Notes", value: "notes"},

      ],
      search: ''
    }
  },
  created() {
    this.items = useCollection(classesRef)
    console.log(this.items)
  }
}
</script>

<template>
  <div>
    <v-card>
      <v-card-title class="text-center py-5">
        <span class="headline text-h3 py-2">Classes</span>
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="search"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          hide-details
          single-line
          style="width: 20vw"
          class="py-2 mx-2"
        ></v-text-field>
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          item-key="name"
        >
          <template v-slot:item.description="{ value }">
            <span v-if="value.length > 25">
              {{ value.substring(0, 25) }}...
              <v-tooltip
                activator="parent"
                location="top">{{value}}</v-tooltip>

            </span>
            <span v-else>{{value}}</span>
          </template>
          <template v-slot:item.notes="{ value }">
            <span v-if="value.length > 25">
              {{ value.substring(0, 25) }}...
              <v-tooltip
                activator="parent"
                location="top">{{value}}</v-tooltip>

            </span>
            <span v-else>{{value}}</span>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>

</style>
