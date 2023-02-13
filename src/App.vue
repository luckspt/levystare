<script setup lang="ts">
// Load the array from images.json
import images from "./images.json";

// Get a random number between 0 and the length of the array
const randomIndex = Math.floor(Math.random() * images.length);

// Return the image at that index
const imageName = images[randomIndex];
const randomImage = `assets/img/${imageName}`;
</script>

<template>
  <!-- Center an image vertically and horizontally. Put it in the middle of the screen, with a paragraph beneath the image -->

  <div id="container">
    <div id="subcontainer">
      <img :src="randomImage" alt="Random image" />
      <p>{{ imageName }} from {{ images.length }} images</p>
    </div>
  </div>
</template>

<style scoped>
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#subcontainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 100%;
  max-width: max(70%, 700px);
  border-radius: 10px;
}
</style>
