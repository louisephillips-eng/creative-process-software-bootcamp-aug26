# Week 6 Showcase

Optional reference material for two project needs beyond the core outcome:

- loading the expanded archive with `fetch()`, including loading and error
  states
- defensive persistence, including invalid-data recovery and a clear button
- two application views connected with `HashRouter`

Like Starter and Complete, this state uses all 180 films from the connected
fictional archive. Starter and Complete import the JSON so it is immediately
available; Showcase fetches the same JSON after the application starts. It
deliberately keeps the interface focused on data loading, persistence and
routing; discovery filters and film-detail journeys are brought together in the
completed Week 7 Showcase.

The Archive and Saved Programme views share selection state because that state
lives above `Routes` in `App`. Routing is not required when normal links to
sections on one page are enough.

Inspect and trace the relevant pattern before adapting it. Neither defensive
storage helpers nor routing redefine Week 6 success.

```bash
npm ci
npm run dev
```
