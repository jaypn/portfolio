<template>
  <div id="about">
    <!-- <h3 class="mt-8 font-weight-bold ml-8 mb-2 text-center green--text">
      About Me
    </h3> -->
    <section-title text="About Me" />
    <v-row class="align-center">
      <v-col cols="12" md="6">
        <v-img src="../assets/ab.jpg"> </v-img>
      </v-col>
      <v-col cols="12" md="6">
        <p class="text-center mx-8 text-body-1">
          I am a Junior Full Stack Developer, eager to build and strengthen my
          career in Web Application Developement.
        </p>
        <p class="text-center mx-8 text-body-1">
          I am dedicated to learning the latest technologies and build great
          user experiences.
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SectionTitle from "./SectionTitle.vue";
export default {
  components: { SectionTitle },
};
</script>

<style>
#about {
  min-height: 50vh;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>