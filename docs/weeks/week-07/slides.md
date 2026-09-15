---
marp: true
paginate: true
footer: Week 7
---

# Software Development Bootcamp

## Week 7

Build, Debug, Simplify and Stabilise

Dr Steve Huckle

steve@huckle.studio

<!--
Keep the opening short. Learners should have their own repository open and
their application running as early as possible.
-->

---

# Today belongs to your project

You already have enough ideas to keep building.

Today is about choosing what matters.

<!--
There is no new technical topic and no new reference build.
-->

---

<!-- _class: mentimeter-slide -->

# How confident do you feel about finding and fixing problems in your own project?

## Mentimeter Activity

<!--
Use a five-point scale:

1 — Not confident yet
5 — Very confident

Record the result and repeat the exact question at the end.
-->

---

# Open and run your application

Then identify:

- What somebody can do
- What already works
- What feels uncertain

<!--
Do this before a long recap. Let the visible projects anchor retrieval.
-->

---

# The course story is already in your project

```text
HTML       content and structure
CSS        presentation and layout
JavaScript behaviour
React      components, props and state
Data       collections and relationships
Storage    information that survives a refresh
```

<!--
Retrieve these ideas conversationally through examples in the room.
Do not turn this into six mini-lectures.
-->

---

# What can your application remember now?

- Which value changes while somebody uses it?
- Where does that value live?
- Should it survive a refresh?
- If it does, where is it saved?

<!--
This connects directly to Week 6. Not every learner project needs persistence.
-->

---

<!-- _class: big-idea section-slide -->

# Big Idea

## Progress comes from making the next useful change understandable and stable.

---

# Progress is not the same as adding features

Progress can mean:

- Repairing something unreliable
- Making one journey clearer
- Handling missing information
- Removing unnecessary scope
- Understanding code you already have

---

# Demonstrate the main journey now

Complete:

> A user should be able to __________
>
> without __________________________.

Then try it.

<!--
Allow learners to discover the current truth before planning the day.
-->

---

# Choose one observable outcome

Not:

> Work on search.

Try:

> A visitor can enter part of a title and see only matching films.

---

# Keep one task in progress

Use your GitHub Project board:

1. Choose the next useful outcome.
2. Move that task into **In Progress**.
3. Leave later ideas where they are.
4. Define how you will test it.

<!--
This is not a new planning activity. Learners use the board they already own.
-->

---

# Deliberately defer something

Decide what you will **not** work on today.

That is a development decision.

<!--
Ask a few learners what they are deferring. This makes scope control visible
without categorising learners by ability.
-->

---

<!-- _class: section-slide -->

# A Short Debugging Demonstration

## Follow the evidence

<!--
Use the prepared disposable Week 6 Complete fault. Keep this entire section to
20 minutes or less.
-->

---

# First, reproduce the problem

State:

- What you expected
- What actually happened
- The exact action that reveals it

<!--
Do not edit anything yet.
-->

---

# Choose evidence before choosing a fix

```text
Visible behaviour
Browser console
React DevTools
Terminal output
Git changes and history
```

Which source can answer the next question?

---

# Trace the value

```text
selectedIds
    ↓
isSelected
    ↓
FilmCard
    ↓
visible selected state
```

<!--
In the prepared fault, selected IDs are compared with a film title. Show the
actual values before explaining the mismatch.
-->

---

# Change one thing

Then repeat the original test.

Also check one thing that already worked.

<!--
Restore the ID comparison. The important point is the controlled change and
re-test, not the particular bug.
-->

---

# A repeatable debugging loop

```text
Reproduce
    ↓
Read the evidence
    ↓
Locate
    ↓
Change one thing
    ↓
Test again
```

---

# The completed Programme Builder

The Week 7 Showcase brings together:

- The 180-film archive
- Search and filters
- Film details and related films
- A remembered programme
- Loading, error and empty states

<!--
Show the working application briefly. This is an endpoint, not another guided
build and not a list learners must reproduce.
-->

---

# Read one path through the Showcase

```text
Visible filter
    ↓
SearchFilters event
    ↓
App state
    ↓
visibleFilms
    ↓
FilmCard list
```

Take only the pattern your project needs.

<!--
Trace this path in the code. Keep the orientation to ten minutes maximum.
-->

---

# The terminal answers practical questions

```bash
pwd                 # Where am I?
ls                  # What is here?
npm run dev         # Can the project run?
npm run build       # Can Vite build it?
git status          # What has changed?
git diff            # What did I change?
```

<!--
Do not teach these as a command list to memorise. The Resources explain them.
Use them during the day when each question becomes relevant.
-->

---

<!-- _class: section-slide -->

# Developer Studio 1

## Build the next useful change

Your project. Your decisions. Your keyboard.

<!--
Allow 80–90 minutes. Use one brief midpoint checkpoint.
-->

---

# Work in small cycles

```text
Choose → Change → Test → Commit → Review
```

One stable improvement is more useful than several unfinished changes.

---

# If you become stuck

Ask:

- What did I expect?
- What actually happened?
- Can I reproduce it?
- What evidence can I see?
- What is the smallest next check?

---

# Ask AI to help you investigate

Give it:

- The expected behaviour
- The observed behaviour
- The first useful error
- The smallest relevant code

Ask for **one diagnostic step at a time**.

<!--
Reinforce the AI Charter. Learners must understand and test any proposed
change, and private client material stays outside AI services.
-->

---

# Studio checkpoint

- Can you demonstrate the chosen outcome?
- What evidence says it works?
- Did an existing behaviour still work?
- Is the task honestly **Done** or still **In Progress**?

<!--
Keep this as a short room-wide pause, not an individual report from everyone.
-->

---

<!-- _class: section-slide -->

# User Check

## Observe before you explain

---

# Give another learner one goal

For example:

> Find films appearing at a particular festival.

Say what to achieve—not how to achieve it.

Watch what happens.

---

# Record evidence

- What did they understand immediately?
- Where did they hesitate?
- What behaved unexpectedly?
- What did their expectation reveal?

Then ask one follow-up question.

---

# Feedback does not become automatic scope

Choose:

- One response worth making
- One idea to defer

Explain both decisions.

---

<!-- _class: section-slide -->

# Developer Studio 2

## Respond, continue or simplify

<!--
Allow 75–90 minutes. Learners may act on user evidence or continue the core
outcome if that remains more important.
-->

---

# Use only the data your outcome needs

Start with one project entry point where possible:

```text
films-with-directors.json
festival-programmes.json
filmmaker-filmographies.json
```

More data is not automatically a better project.

---

# Simplifying is development

You can:

- Reduce a feature
- Remove an unreliable extra
- Use one meaningful view
- Handle missing data clearly
- Defer an idea until after the bootcamp

---

<!-- _class: section-slide -->

# Stabilise

## Stop expanding the project

<!--
Reserve 35–45 minutes. This block reduces uncertainty before learners leave.
-->

---

# Test from a known beginning

1. Try the essential user journey.
2. Try one awkward but realistic case.
3. Re-test one existing behaviour.
4. Remove unexplained debugging code.

---

# Ask the project for evidence

```bash
npm run lint
npm run build
git status
git diff
```

Read the first useful error before changing code.

<!--
Use only scripts the learner's project actually supplies. A failed build is
diagnostic evidence, not a verdict on the project.
-->

---

# Preserve a stable version

- Commit and push understood work
- Update your Project board honestly
- Record known problems
- Name the next useful task

---

# What changed today?

- What became more useful or reliable?
- What problem do you understand better?
- What did you simplify or defer?

<!--
Take a few responses before the final confidence check.
-->

---

<!-- _class: mentimeter-slide -->

# How confident do you feel about finding and fixing problems in your own project?

## Mentimeter Activity

<!--
Repeat the opening five-point scale exactly, then ask what evidence changed
learners' confidence.
-->

---

# Week 7 complete

## You made deliberate changes and left a stable recovery point

```text
Choose → Investigate → Build → Test → Stabilise
```

---

# Next week

## Deploy and rehearse in the morning

## Present your Directors Notes prototype to MarBelle

<!--
Do not teach deployment here. Week 8 will begin with supported deployment,
fallback preparation and presentation rehearsal.
-->

---

# Thank you

Dr Steve Huckle

steve@huckle.studio

<!-- EXPORT-IGNORE-START -->

---

# Mentimeter AI Import

<!--
Create two Scale slides using the same question:

How confident do you feel about finding and fixing problems in your own project?

Use a 1–5 scale:
1 — Not confident yet
5 — Very confident

Place one after the title and opening orientation, and one near the end before
the Week 7 completion slide.
-->

<!-- EXPORT-IGNORE-END -->
