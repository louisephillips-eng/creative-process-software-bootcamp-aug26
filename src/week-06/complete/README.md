# Week 6 Complete

The canonical Week 6 outcome. The programme now remembers `selectedIds` in
this browser using `localStorage`.

It uses all 180 films from the connected fictional archive. The larger and
richer collection is the same project data supplied to learners, rather than a
separate twelve-film teaching subset.

Only the source of truth is saved. Selected films, the count, running time and
target message are still calculated from `selectedIds`, reinforcing the Week 5
rule: derive what you can instead of storing it twice.

```bash
npm ci
npm run dev
```
