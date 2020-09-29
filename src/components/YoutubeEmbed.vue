<template>
  <div class="wrapper">
    <iframe
        v-bind:src="'https://www.youtube.com/embed/' + id"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    id: String,
  },
})
export default class YoutubeEmbed extends Vue {
  id!: string;
}
</script>

<style scoped>
.wrapper {
  padding-bottom: 56.25%;
  position: relative;
}

iframe {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
