<template>
  <v-app>
    <v-app-bar
      fixed
      color="white-smoke"
      scroll-target="#scrolling-techniques-4"
    >
      <v-tabs centered>
        <v-tab @click="$vuetify.goTo('#home')">Home</v-tab>
        <v-tab @click="$vuetify.goTo('#about', { offset: 75 })">About Me</v-tab>
        <v-tab @click="$vuetify.goTo('#skills', { offset: 75 })">Skills</v-tab>

        <v-tab @click="$vuetify.goTo('#project', { offset: 75 })"
          >Projects</v-tab
        >
        <v-tab @click="$vuetify.goTo('#contactform', { offset: 75 })"
          >Contact</v-tab
        >
      </v-tabs>
    </v-app-bar>
    <router-view />
  </v-app>
</template>

