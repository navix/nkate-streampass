<template>
  <h1 class="title">
    nkate
    <span class="sub">stream pass</span>
  </h1>
  <h2 class="sub-title">
    <button
        v-for="season in seasons"
        v-on:click="setCurrentSeason(season)"
        :class="{'-active': season === currentSeason}"
    >
      {{ season.title }}
    </button>
  </h2>
  <div
      v-for="(stage, index) in stages"
      class="stage"
      :class="{'-ready': stage.ready, '-done': stage.done, '-hasYoutube': stage.hasYoutube}">
    <div
        class="bar"
        v-bind:title="stage.done ? 'Виконано!' : stage.ready ? 'Заповнено, але не виконано.' : 'Не заповнено.'"></div>
    <div class="content">
      <div class="panel" v-on:click="opened = stage.hasYoutube ? opened !== index ? index : null : opened">
        <div v-if="stage.emoji" class="emoji">{{ stage.emoji }}</div>
        <div class="amount">{{ stage.amount }}₴</div>
        <div class="desc">
          {{ stage.description }}
        </div>
        <ArrowIcon v-if="stage.hasYoutube > 0" />
      </div>
      <div v-if="stage.hasYoutube && opened === index" class="youtube">
        <YoutubeEmbed v-for="youtube in stage.youtube" v-bind:youtube="youtube" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ArrowIcon from '@/components/ArrowIcon.vue';
import YoutubeEmbed from '@/components/YoutubeEmbed.vue';
import { renderWidget } from '@/renderWidget';
import { Season } from '@/seasons/meta';
import { season1 } from '@/seasons/season-1';
import { seasons } from '@/seasons/seasons';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    ArrowIcon,
    YoutubeEmbed,
  },
})
export default class App extends Vue {
  seasons = seasons;

  currentSeason?: Season;

  stages: any[] = [];

  opened: number | null = null;

  mounted() {
    this.setCurrentSeason(this.seasons[0]);
  }

  setCurrentSeason(season: Season) {
    this.opened = null;
    this.currentSeason = season;
    this.stages = season.stages.map(s => ({...s, hasYoutube: s.youtube ? s.youtube.length > 0 : false}));
  }

  renderWidget() {
    alert(renderWidget(season1));
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

html {
  font-family: 'Inter', Arial, sans-serif;
  min-height: 100%;
  background: rgb(66, 72, 77);
  background-image: linear-gradient(240deg, #181c1d, #1c2020);
  font-size: 16px;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, .8);
}

button {
  font-family: 'Inter', Arial, sans-serif;
}

body {
  margin: 7rem auto;
  max-width: 900px;
  border-radius: 1rem;
  padding: 2rem 3rem;
  background-image: linear-gradient(240deg, #282f33, #040404);
  border: 1px solid #2b3338;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, .4);
}

.title {
  text-align: center;
  font-size: 4rem;
  letter-spacing: -4px;
  .sub {
    color: #777777;
  }
}

.sub-title {
  margin-bottom: 4rem;
  text-align: center;
  button {
    border: 0;
    text-align: center;
    font-size: 1.5rem;
    margin: 0 1rem;
    outline: none;
    background: transparent;
    color: #aaaaaa;
    &.-active {
      animation: gradMove 5s ease infinite;
      background: linear-gradient(-45deg, #e73c7e, #b00df6, #23a6d5, #23d5ab);
      -webkit-background-clip: text;
      background-clip: text;
      background-size: 250% 250%;
      -webkit-text-fill-color: transparent;
      text-fill-color: transparent;
      font-weight: 700;;
    }
  }
}

.stage {
  display: flex;
  align-items: flex-start;
  .bar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: #292c31;
    box-shadow: inset 11px 11px 22px #1c1e21,
    inset -11px -11px 22px #363a41;
    flex-shrink: 0;
    margin-top: 2rem;
  }
  .content {
    margin: 1rem 0 1rem 2rem;
    flex-grow: 1;
  }
  .panel {
    align-items: center;
    display: flex;
    background: #282f33;
    border-radius: .5rem;
    padding: 1.5rem 2rem;
    .emoji {
      font-size: 1.4rem;
      margin-right: 1rem;
    }
    .amount {
      font-size: 1.2rem;
      font-weight: 700;
      margin-right: 2rem;
    }
    .desc {
      flex-grow: 1;
    }
  }
  .youtube {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    padding: 1.5rem 1.5rem 2.5rem;
  }
  &.-hasYoutube {
    cursor: pointer;
  }
  &.-ready {
    .bar {
      background: #e9e44b;
      box-shadow: inset 11px 11px 22px #9e9b33,
      inset -11px -11px 22px #ffff63;
    }
  }
  &.-done {
    .bar {
      background: #4ed36b;
      box-shadow: inset 11px 11px 22px #358f49,
      inset -11px -11px 22px #67ff8d;
    }
  }
}

@keyframes gradMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
