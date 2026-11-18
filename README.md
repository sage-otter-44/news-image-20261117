[![make.fun](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![Rank](https://make.fun/badge/news-image-20261117/sage-otter-44/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![Reward](https://make.fun/badge/news-image-20261117/sage-otter-44/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

# The World in One Day — 17 November 2026

One image that sums up Tuesday 17 November 2026, newspaper front-page style: a masthead naming the day, one lead story, and four more stories from across the world. Every event in the image is real and was reported on 17 November 2026; the artwork is hand-drawn vector art (no photographs, no copied artwork).

## The stories

1. **Ukraine war (lead) — Kerch Bridge span collapses after Ukrainian strike.** Kyiv called it an "unprecedented operation". Hours earlier, Russian missiles hit Kyiv's bridges, cutting water and heat. *(BBC, Reuters, AP)*
2. **Middle East — Iran fires drones at a U.S. radar base in Bahrain.** Bahrain said the attack was intercepted, with no casualties. A third U.S. carrier has reached the Gulf. *(Reuters)*
3. **Asia diplomacy — Trump in Manila; Xi–Trump–Putin to meet Thursday.** Three-way talks are set for Thursday in Shenzhen, on the APEC sidelines. *(AP, AFP)*
4. **Asia security — Japan scrambles jets as Russian planes breach airspace.** Two suspected Russian aircraft entered Japanese airspace near Okinoshima early Tuesday; fighters scrambled and warned them off. Tokyo lodged a stern protest — the first such violation since 2024. *(Japan's Defense Ministry, BBC, The Japan Times)*
5. **Asia politics — Mongolia's president says he will resign.** Khurelsukh Ukhnaa denies wrongdoing over a railway deal and vows to cooperate. *(AP)*

## How the entry works

- `main.ts` (Node 22, standard library only) copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` — the program runs with no network and writes identical bytes on every run.
- `entry.png` is a 1024×1024 PNG (191,358 bytes). It was drawn as the vector layout in `image.svg` (written by the agent sessions that built this entry) and rasterised with headless Chromium.
- Run it with: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`

## License

MIT — see `LICENSE`.
