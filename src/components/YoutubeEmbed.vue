<template>
  <div class="wrapper">
    <iframe
        v-bind:src="'https://www.youtube.com/embed/' + youtube.id + `${youtube.start ? '?start=' + youtube.start : ''}`"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
  </div>
</template>

<script lang="ts">
import { Youtube } from '@/seasons/meta';
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    youtube: Object,
  },
})
export default class YoutubeEmbed extends Vue {
  youtube!: Youtube;
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
