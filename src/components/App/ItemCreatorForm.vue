<script>
import {useCollection} from "vuefire";
import {classesRef, db} from "@/plugins/VueFire";
import { doc, setDoc } from "firebase/firestore";

export default {
  name: "ItemCreatorForm",
  data() {
    return {
      id: '',
      form: {
        name: "",
        description: "",
        difficulty: "",
        prerequisites: [],
        credits: null,
        fee: null,
        grades: [],
        semesters: null,
        notes: ""
      },
      classes: [],
      formValid: false,
      hasValue(v) {
        return !!v || "This field is required"
      },
      notNull(v) {
        return v !== null || "This field is required"
      },

    }
  },
  created() {
    this.classes = useCollection(classesRef)
    console.log(db)
  },
  methods: {
    submit() {
      setDoc(doc(db, "classes", this.id), this.form)
      this.id = ''
      this.form = {
        name: "",
        description: "",
        difficulty: "",
        prerequisites: [],
        credits: null,
        fee: null,
        grades: [],
        semesters: null,
        notes: ""
      }
    },
    idChecker(v) {
      let retval = true;
      this.classes.forEach(c => {
        if (c.id === v) {
          retval = "ID already exists"
        }
      })
      if (v.includes(" ")) {
        retval = "ID cannot contain spaces, try using dashes! (-)"
      }
      if (v !== v.toLowerCase()) {
        retval = "ID must be lowercase"
      }
      return retval
    }
  }


}
</script>

<template>
  <div>
    <h1 class="my-5">Create New Class</h1>
    <v-form class="px-3" v-model="formValid">
      <v-text-field
        v-model="id"
        label="ID"
        required
        :rules="[idChecker, hasValue]"
      ></v-text-field>
      <v-text-field
        v-model="form.name"
        label="Name"
        :rules="[hasValue]"
      ></v-text-field>
      <v-text-field
        v-model="form.description"
        label="Description"
        :rules="[hasValue]"


      ></v-text-field>
      <v-row>
        <v-text-field
          v-model="form.difficulty"
          label="Difficulty"
          required
          type="number"
          :rules="[() => (form.difficulty >= 1 && form.difficulty <= 5) || 'Difficulty must be between 1 and 5', notNull]"
          class="px-3"
        ></v-text-field>
        <v-text-field
          v-model="form.fee"
          label="Fee"
          required
          :rules="[() => (form.fee >= 0) || 'Fee must be greater than 0', notNull]"
          type="number"
          prefix="$"
          class="pr-3"
        ></v-text-field>
      </v-row>

      <v-select
        label="Prerequisites"
        v-model="form.prerequisites"
        :items="classes.map(c => c.id)"
        multiple></v-select>
      <v-text-field
        v-model="form.credits"
        label="Credits"
        required
        :rules="[() => (form.credits >= 0 && form.credits <= 5) || 'Credits must be between 0 and 5', notNull]"
        type="number"
      ></v-text-field>

      <v-select
        label="Grades"
        v-model="form.grades"
        :items="[9,10,11,12]"
        :rules="[hasValue]"
        multiple
      ></v-select>
      <v-text-field
        v-model="form.semesters"
        label="Semesters"
        required
        :rules="[() => (form.semesters >= 1 && form.semesters <= 8) || 'Semesters must be between 1 and 8', notNull]"
        type="number"
      ></v-text-field>
      <v-text-field
        v-model="form.notes"
        label="Notes"
      ></v-text-field>
      <v-spacer></v-spacer>

      <v-btn
        color="blue darken-1"
        :disabled="!formValid"
        @click="submit"
      >
        Submit
      </v-btn>
    </v-form>
  </div>
</template>

<style scoped>

</style>
