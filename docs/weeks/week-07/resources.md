# Week 7 Resources

## Build, Debug, Simplify and Stabilise

Week 7 is a project-build day. This guide is a reference for moments when you
need to find your location, understand an error, test a change or recover a
stable version. You do not need to read it from beginning to end.

---

## A Small Development Cycle

Use this whenever a task begins to feel too large:

```text
Choose → Change → Test → Commit → Review
```

Before changing code, finish this sentence:

> When I have finished, a user will be able to...

Make the smallest change that could produce that visible outcome. Test it, then
check one behaviour that already worked. Commit only when you have reached a
useful stable point.

---

## The Terminal in Plain Language

The terminal runs commands inside a particular folder. Many confusing errors
come from running the right command in the wrong place.

### Where am I?

```bash
pwd
```

`pwd` prints the path of the current working directory.

### What is here?

```bash
ls
```

Look for the files that identify your project, especially `package.json`,
`src/` and `vite.config.js`.

### Move into a folder

```bash
cd my-project
```

Use the real folder name. To move up one level:

```bash
cd ..
```

Paths and file names are case-sensitive in many development and deployment
environments. `FilmCard.jsx` and `filmcard.jsx` may not refer to the same file.

### Useful project commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

- `npm install` installs the dependencies described by `package.json`.
- `npm run dev` starts the local development server.
- `npm run lint` checks for suspicious code patterns when the project supplies
  that script.
- `npm run build` asks Vite to create a production build and can expose problems
  that development mode did not.

Do not run commands simply because they appear in an error message or AI
response. Know what folder you are in and what the command is expected to do.

---

## Read an Error Without Reading Everything

An error can contain a great deal of text. Start with:

1. the first useful error, not every later consequence
2. the file path and line number
3. the type of problem: missing file, syntax, value or behaviour
4. the code immediately around that location

Then ask:

- What did I expect to happen?
- What actually happened?
- Can I reproduce it?
- What changed since it last worked?
- What is the smallest test that could narrow the cause?

Avoid changing several unrelated things at once. If the problem disappears,
you need to know which change mattered.

---

## Choose the Right Evidence

### The page

Use the visible interface to reproduce the exact user journey. Record the
action that triggers the problem.

### The browser console

Use the console for JavaScript errors and temporary values. A useful log names
the value:

```js
console.log("selected film IDs", selectedIds);
```

Remove temporary logs when they no longer help.

### React DevTools

When available, use the Components view to inspect which props and state a
component currently receives. This can answer whether the wrong value reached
the component before you edit its rendering code.

### The terminal

Use terminal output for installation, lint and build failures. Read the first
useful error and confirm that the path belongs to the project you intended to
run.

### Git

Use Git to understand the state of the repository:

```bash
git status
git diff
git log --oneline
```

- `git status` shows changed, staged and untracked files.
- `git diff` shows unstaged changes.
- `git log --oneline` shows recent committed checkpoints.

Read before acting. Do not discard changes unless you understand exactly what
will be lost.

---

## Common Problems

### The page is blank

1. Read the browser console.
2. Read the terminal running Vite.
3. Check the first named file and line.
4. Check recent imports, brackets and returned JSX.

### A component does not update

Trace the value:

```text
state → derived value → prop → rendered output
```

Check whether state was actually changed and whether the component receives the
value you think it receives.

### A click does nothing

Check:

- whether the event handler is passed to the element
- whether the handler is being called
- which value is passed into it
- whether the resulting state is different from the current state

### Data is missing

Check:

- the import or fetch path
- the property name and its spelling
- whether the record genuinely contains that optional field
- whether the interface provides a sensible fallback

Do not repair fictional missing information by pretending it exists. Design
for the record you actually have.

### Saved data behaves strangely

Inspect the storage key and stored value in browser developer tools. Old saved
data may have a different shape from the current code. Clear only the key owned
by your application, and only after deciding that losing its saved value is
acceptable.

### The build fails but development mode works

Run:

```bash
npm run build
```

Read its first useful error. Check file-name capitalisation, missing imports,
syntax and files that exist locally but were never committed.

---

## Testing the Essential Journey

Write one concrete goal, such as:

> A visitor can choose a festival and see the films in its programme.

Test from a known starting point:

1. refresh or reopen the application
2. perform the journey as a visitor would
3. try one ordinary case
4. try one awkward but realistic case
5. confirm that one existing behaviour still works

Examples of awkward cases include:

- no search results
- an empty selection
- a film without an image or optional credit
- refreshing after information has been saved
- following a route directly, if the project uses routes

Testing is evidence gathering. It is not proof that the whole application is
perfect.

---

## Using the Fictional Archive Selectively

The connected archive contains 180 films plus people, companies, festivals,
awards, credits, honours and taxonomy. Your application probably needs only a
small part of it.

Begin with the relevant joined file in
`datasets/fictional-film-archive/project-entry-points/` when possible:

- `films-with-directors.json`
- `festival-programmes.json`
- `filmmaker-filmographies.json`

Move to the separate Stage 3 entity files only when the joined entry point
cannot support your chosen outcome. More data is not automatically a better
project.

---

## Simplifying Is Development

Consider simplifying when:

- two unfinished features compete for the same time
- a new abstraction is harder to explain than the repeated code
- a route exists without a meaningful second view
- saved data creates more problems than value for the brief
- the interface requests information the project never uses
- polish is hiding an unreliable main journey

You may defer, remove or reduce a feature. Preserve a stable commit before a
risky experiment so you retain a known recovery point.

---

## The Completed Programme Builder

`src/week-07/showcase/` contains the final shared reference application. It
combines the 180-film archive with search, filters, film-detail routes, related
films, saved selections, derived totals and defensive interface states.

It is not a project specification. Use it to inspect one relevant pattern:

1. begin with the visible behaviour
2. locate the component that renders it
3. trace the data, props and state involved
4. explain the pattern in plain language
5. adapt the smallest useful part to your own project
6. test that adaptation in your own user journey

Do not copy the complete application into your project. A smaller project you
understand remains the goal.

---

## Asking AI for Diagnostic Help

Give AI evidence and retain ownership of the investigation. A useful request
is:

> I expected [specific behaviour], but [specific result] happened. The first
> error is [exact error]. Help me trace the likely cause. Ask me to inspect one
> thing at a time, explain why each check matters, and do not rewrite the whole
> component.

Before using a proposed change, ask:

- What does each changed line do?
- Which evidence suggests this is the cause?
- How will I test it?
- Could it disturb behaviour that already works?

Never paste private client material, credentials or personal information into
an AI service.

---

## Stable End-of-Day Check

- The main user journey has been tested.
- The current Project-board status reflects reality.
- Temporary debugging code has been removed or explained.
- The repository contains no secrets or Directors Notes assets.
- The latest stable work is committed and pushed.
- A production build has been attempted.
- Known problems and the next useful task are recorded.

Deployment and presentation rehearsal happen during the Week 8 morning.
