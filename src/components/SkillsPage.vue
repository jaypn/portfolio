<template>
  <div id="skills" class="mt-16">
    <section-title text="Skills" />
    <!-- <h3 class="font-weight-bold mb-8 text-center green--text">Skills</h3> -->
    <div id="background" class="align-center d-flex flex-wrap">
      <v-col cols="12" md="6">
        <v-img src="../assets/about.jpg"> </v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-sheet class="mx-4" elevation="10" rounded="xl">
          <v-sheet color="light-blue" class="pa-3 text-right" rounded="t-xl">
            <span>Languages/Technologies</span>
            <!-- <v-btn icon>
                <v-icon>mdi-content-save-cog-outline</v-icon>
              </v-btn>-->

            <v-btn class="ml-2" icon>
              <v-icon>mdi-check-bold</v-icon>
            </v-btn>
          </v-sheet>

          <div class="pa-4">
            <v-chip-group active-class="primary--text" column>
              <v-chip v-for="tag in tags" :key="tag">
                {{ tag }}
              </v-chip>
            </v-chip-group>
          </div>
        </v-sheet>
      </v-col>
    </div>
  </div>
</template>

<script>
import SectionTitle from "./SectionTitle.vue";
export default {
  components: { SectionTitle },
  data: () => ({
    tags: [
      "HTML/CSS",
      "Apache",
      "Flask",
      "JavaScript",
      "Python",
      "VueJs",
      "MariaDB/SQL",
      "Git/GitHub",
      "Vuetify",
      "RestfullAPI",
      "Google Cloud",
    ],
  }),
};
</script>

<style>
#skills {
  min-height: 50vh;
}
#background {
  background-image: url("~@/assets/back1.jpeg");
}
</style>