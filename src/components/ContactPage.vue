<template>
  <div id="contactform">
    <h2 class="font-weight-bold ml-8 mb-8 mt-8 text-center green--text">
      Contact
    </h2>
    <!-- <v-form @submit.prevent="submit">
      <v-container>
        <v-row>
          <v-col class="px-6" cols="12" md="6">
            <v-row>
              <v-col cols="12" md="10">
                <v-text-field
                  v-model="firstname"
                  label="First name"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="10">
                <v-text-field
                  v-model="email"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="10">
                <v-text-field
                  v-model="phone"
                  label="Phone Number"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="10">
                <v-textarea
                  v-model="message"
                  label="Message"
                  required
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row class="justify-center">
              <v-btn class="mr-4" type="submit"> submit </v-btn>
              <v-btn @click="clear"> clear </v-btn>
            </v-row>
          </v-col>
          <v-col cols="12" md="6">
            <v-img src="../assets/contact.jpg"> </v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-form> -->
    <v-row class="justify-center align-start">
      <v-col cols="12" md="6">
        <v-img src="../assets/contact.jpg"> </v-img>
      </v-col>
      <v-col class="align-center mx-16"
        ><v-row>
          <v-col>
            <v-sheet class="" elevation="10" rounded="xl">
              <v-sheet
                color="light-blue"
                class="pa-3 text-right"
                rounded="t-xl"
              >
                <span>Contact</span>
                <!-- <v-btn icon>
                <v-icon>mdi-content-save-cog-outline</v-icon>
              </v-btn>-->

                <v-btn class="ml-2" icon>
                  <v-icon>mdi-check-bold</v-icon>
                </v-btn>
              </v-sheet>

              <div class="pa-4 d-flex flex-column">
                <v-btn
                  class="text-transform-none"
                  href="mailto:nyabugandejp@gmail.com"
                  >nyabugandejp@gmail.com
                </v-btn>
                <v-btn href="tel:+15879307885">(587) 930-7885 </v-btn>
                <v-btn
                  href="https://drive.google.com/file/d/1M1stmnVx2GVWY0tOECgQQxlSY13lp5Gp/view?usp=sharing"
                >
                  Resume
                </v-btn>
                <v-btn
                  href="https://www.linkedin.com/in/nyabuganda-jean-paul-aime-a62a14102/"
                  >linkedin
                </v-btn>
                <v-btn href="https://github.com/jaypn">linkedin </v-btn>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
        <v-btn
          href="javascript:void(
        window.open(
          'https://form.jotform.com/203635649646263',
          'blank',
          'scrollbars=yes,
          toolbar=no,
          width=700,
          height=500'
        )
      )
    "
        >
          Request a Quote
        </v-btn></v-col
      >
    </v-row>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  // data() {
  //   return {
  //     name: "",
  //     email: "",
  //     phone: "",
  //     message: "",
  //   };
  //},
  //methods: {
  //submit() {
  //   axios
  //     .request({
  //       method: "post",
  //       url: "",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       data: {
  //         email: this.email,
  //         message: this.message,
  //         name: this.name,
  //         phone: this.phone,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       //write logic to ensure token was sent
  //       this.$router.push("/");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   },
  //   clear() {
  //     this.name = "";
  //     this.email = "";
  //     this.phone = "";
  //     this.message = "";
  //   },
  // },
};
</script>

<style>
</style>