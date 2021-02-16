<template>
  <div id="home">
    <div class="main-div">
      <div class="welcome">
        <h4 class="white--text mx-8 text-h4">
          I am Jean Paul Aime NYABUGANDA, a Junior Full Stack Developer
        </h4>
        <v-btn
          @click="$vuetify.goTo('#project', { offset: 75 })"
          class="mx-8 mt-4"
          color="white"
          max-width="160"
        >
          See my Projects
        </v-btn>
      </div>
    </div>

    <about-page />
    <skills-page />
    <project-page />
    <contact-page />
  </div>
</template>

<script>
import ContactPage from "../components/ContactPage.vue";
import SkillsPage from "../components/SkillsPage.vue";
import ProjectPage from "../components/ProjectPage.vue";
import AboutPage from "../components/AboutPage.vue";
export default {
  components: { ProjectPage, ContactPage, AboutPage, SkillsPage },
};
</script>

<style lang="scss" scoped>
.main-div {
  background-image: url("~@/assets/back1.jpeg");
  filter: grayscale(300%);

  //background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>