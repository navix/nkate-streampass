import { stages, Youtube } from '@/stages';

export function renderWidget() {
  let nextRendered = false;
  return stages.reduce((res, curr, index) => {
    const isNext = !nextRendered && !curr.ready;
    if (isNext) {
      nextRendered = true;
    }
    return `${res}\n`
      + `${isNext ? '##### ' : ''}`
      + `**${index + 1} ${curr.done ? '✅' : curr.ready ? '⬜' : curr.emoji} ${curr.amount}** — ${curr.description}`
      + `${curr.youtube && curr.youtube.length > 0 ? ` (${renderYoutubeLinks(curr.youtube)})` : ''}`;
  }, '') + `\n\n##### >>>> [Stream Pass](https://pass.nkate.com/) <<<<`;
}

function renderYoutubeLinks(youtube: Youtube[]) {
  return youtube.length === 1
    ? `[Дивитись](${renderYoutubeUrl(youtube[0])})`
    : 'Дивитись: ' + youtube
    .map((y, index) => `[${index + 1} частина](${renderYoutubeUrl(y)})`)
    .join(', ');
}

function renderYoutubeUrl(youtube: Youtube) {
  return `https://www.youtube.com/watch?v=${youtube.id}${youtube.start ? '&start=' + youtube.start : ''}`;
}
