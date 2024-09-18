<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="12" class="main d-flex flex-column pa-5">
        <v-col cols="12">
          <img class="img" src="/src/assets/image-equilibrium.jpg" alt="" />
        </v-col>
        <v-col>
          <div class="text1 text-left">Equilibrium #3249</div>
        </v-col>
        <v-col>
          <div class="text2 text-left">
            Our Equilibrium collection promotes balance and claim.
          </div>
        </v-col>

        <v-col class="d-flex justify-space-between align-center">
          <v-col cols="6" class="d-flex justify-center align-center">
            <v-col cols="6" class="d-flex mr-1">
              <img class="img2" src="/src/assets/icon-ethereum.svg" alt="" />
            </v-col>
            <v-col cols="6"> <div class="text3">0.041 ETH</div> </v-col>
          </v-col>

          <v-col cols="6" class="d-flex">
            <v-col cols="6" class="mt-1 mr-1"
              ><img src="/src/assets/icon-clock.svg" alt=""
            /></v-col>
            <v-col cols="6"> <div class="text2">3 days left</div> </v-col>
          </v-col>
        </v-col>

        <v-divider></v-divider>
        <div class="custom-divider"></div>

        <v-col class="d-flex align-center">
          <img class="pic" src="/src/assets/1.png" alt="" />
          <span class="c mx-1 ml-3">Creation of </span>
            <span class="name">Abhishek Negi</span>
        </v-col>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>

<style scoped>
@font-face {
  font-family: f1;
  src: url(/src/assets/Outfit-SemiBold.ttf);
}
@font-face {
  font-family: f2;
  src: url(/src/assets/Outfit-ExtraLight.ttf);
}
.text1 {
  font-family: f1;
  font-size: 20px;
  margin-top: 12px;
  margin-bottom: 10px;
}
.text2 {
  font-family: f2;
  font-size: 16px;
  color: hsl(215, 51%, 70%);
  margin-bottom: 12px;
}
.c {
  font-family: f2;
  font-size: 16px;
  color: hsl(215, 51%, 70%);
}
.name {
  font-family: f2;
  font-size: 16px;
  color: aliceblue;
}
.text3 {
  font-family: f1;
  font-size: 14px;
  color: hsl(178, 100%, 50%);
}
.main {
  width: 325px;
  height: 550px;
  background-color: hsl(216, 50%, 16%);
  color: aliceblue;
  border-radius: 10px;
}
.img {
  width: 100%;
  border-radius: 10px;
}

.pic {
  width: 13%;
  border: 2px solid aliceblue;
  border-radius: 50%;
  object-fit: cover;
}
.custom-divider {
  border-top: 1px solid hsla(215, 51%, 70%, 28%);
  margin: 16px 0; /* Adjust the margin as needed */
}
</style>