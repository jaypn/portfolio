<template>
  <div id="project">
    <!-- <div class="font-weight-bold ml-8 mb-2 text-center green--text">
      My Project
    </div> -->
    <!-- <h3 class="font-weight-bold mb-8 text-center green--text">Projects</h3> -->
    <section-title text="Projects" />

    <div cols="12" md="6" class="d-flex pa-2 justify-content:center flex-wrap">
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          width="100%"
          max-height="600px"
          src="~@/assets/IMG_3288.jpg"
        >
          <v-card-title>Okotoks Pizza Website </v-card-title>
        </v-img>

        <v-card-text class="text--primary">
          <div>Responsive, Pure CSS &amp; HTML</div>

          <!-- <div>Whitsunday Island, Whitsunday Islands</div> -->
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text href="https://www.okotokspizzalltd.ml/">
            live website
          </v-btn>

          <v-btn
            color="orange"
            text
            href="https://github.com/jaypn/okotokosPizzaProject.git"
          >
            GitHub
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          width="100%"
          max-height="600px"
          src="~@/assets/IMG_0098.jpg"
        >
          <v-card-title>Twitter Project </v-card-title>
        </v-img>

        <v-card-text class="text--primary">
          <div>
            Responsive, CSS, RestefulAPIs, Python, Git Workflow &amp; HTML
          </div>

          <!-- <div>Whitsunday Island, Whitsunday Islands</div> -->
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text href="https://socialmedialike.ml/">
            live website
          </v-btn>

          <v-btn
            color="orange"
            text
            href="https://github.com/jaypn/tweeterback"
          >
            GitHub
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          width="100%"
          max-height="600px"
          src="~@/assets/IMG_0216.jpg"
        >
          <v-card-title>MVP </v-card-title>
        </v-img>

        <v-card-text class="text--primary">
          <div>
            Responsive, CSS, RestefulAPIs, Python, Git Workflow, Vuetify &amp;
            HTML
          </div>

          <!-- <div>Whitsunday Island, Whitsunday Islands</div> -->
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text href="https://jayfitness.ml/">
            live website
          </v-btn>

          <v-btn
            color="orange"
            text
            href="https://github.com/jaypn/fitnessBack.git"
          >
            GitHub
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import SectionTitle from "./SectionTitle.vue";
export default {
  components: { SectionTitle },
  // data: () => ({
  //   messages: [
  //     {
  //       from: "Languages/Techonilogies",
  //       message: `HTML & CSS.`,
  //       color: "deep-purple lighten-1",
  //     },
  //     {
  //       from: "Responsive",
  //       message: "On mobile, tbale and Desktop",
  //       color: "green",
  //     },
  // {
  //   from: 'You',
  //   message: 'Did you still want to grab lunch today?',
  //   color: 'deep-purple lighten-1',
  // },
  //   ],
  // }),
};
</script>

<style>
</style>