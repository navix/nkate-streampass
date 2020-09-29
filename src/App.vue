<template>
  <h1 class="title">Nkate — Stream Pass</h1>
  <h2 class="sub-title" v-on:click="renderWidget()">Season 1</h2>
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
import { stages } from '@/stages';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    ArrowIcon,
    YoutubeEmbed,
  },
})
export default class App extends Vue {
  stages = stages.map(s => ({...s, hasYoutube: s.youtube ? s.youtube.length > 0 : false}));

  opened: number | null = null;

  renderWidget() {
    alert(renderWidget());
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

html {
  font-family: 'Inter', Arial, sans-serif;
  min-height: 100%;
  background: rgb(66, 72, 77);
  background: linear-gradient(146deg, rgba(66, 72, 77, 1) 0%, rgba(40, 44, 49, 1) 100%);
  font-size: 16px;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, .8);
}

body {
  margin: 7rem auto;
  max-width: 900px;
  border-radius: 1rem;
  padding: 2rem 3rem;
  background: #292c31;
  box-shadow: 20px 15px 37px rgba(0, 0, 0, .45), 18px 10px 16px rgba(0, 0, 0, .05);
}

.title {
  text-align: center;
  font-size: 3rem;
}

.sub-title {
  color: #df5c54;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 4rem;
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
    background: linear-gradient(145deg, #25282c, #2c2f34);
    box-shadow: 9px 9px 29px #1d1f22,
    -9px -9px 29px #353940;
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
</style>
