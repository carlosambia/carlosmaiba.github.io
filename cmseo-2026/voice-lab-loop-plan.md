# Voice Lab: a training loop for a writer-style agent

**Goal:** an agent that can do three things for one writer, or a blend of 2 or 3, adapted to each client's audience:

1. Pick out the writer's real text from imposters.
2. Explain what gave it away.
3. Write new text that an independent judge can't tell apart from the real thing.

**What "training" means here:** no model weights change. Three things get better each round:

- the **voice card** (the style rules)
- the **example bank** (which real samples the agent sees)
- the **distractor pool** (the fake answers keep getting harder)

The exams are the feedback that drives every change.

---

## 1. Setup (once per writer)

**Inputs:**
- **The writer's work:** 30 to 100 pieces (minimum 20). Mix the formats: articles, emails, LinkedIn posts, transcripts.
- **Consent:** the writer's OK to use their work.
- **Comparison writers:** 3 to 5 people writing on the same topics, such as competitors' blogs or colleagues. They supply the hard wrong answers.

**Cut everything into passages of 80 to 200 words**, then split them once and never reshuffle:

| Set | Share | Used for |
|---|---|---|
| Build | 60% | The agent reads these to write the voice card and choose examples |
| Practice | 25% | Exam questions during the loop |
| Final | 15% | **Locked.** Used once, at the very end |

**Clean every passage so nothing gives away the answer.** Strip bylines, dates, brand names and formatting. Keep the answer options within about 15% of each other in length.

---

## 2. The exams, from easy to hard

Most exams use one real passage plus **two wrong answers**, with the order shuffled.

| Level | Exam | The wrong answers are | What it tests | Pass mark |
|---|---|---|---|---|
| L1 | Spot the author | Other writers, any topic | Basic voice | 95% |
| L2 | Spot the author, same topic | Other writers on the **same topic** | Voice, not topic | 90% |
| L3 | Original vs paraphrase | 2 AI rewrites of the **same passage** | Pure style, same content | 85% |
| L4 | Real vs imitations | 2 imitations from the agent's own last round | The hardest negatives | 75%, rising |
| L5 | Find the edited sentence | A real paragraph with one sentence rewritten neutrally | Detail, sentence by sentence | 70% |
| L6 | Next sentence | A real opening plus 3 possible next sentences | Rhythm and logic | 80% |
| L7 | Explain | The agent names 3 features behind each answer | Whether it understands the style, beyond the score | Spot-checked by a person |
| L8 | Write | The agent writes in the voice, then a separate judge takes L4 with it | Can it pass as the writer? | Judge fooled about 33% of the time (chance) |
| L9 | Audience switch | Same brief, written for two audiences, e.g. fuel card vs mattress | Voice holds, tone adapts | Judge plus a person |
| L10 | Guardrails | No invented first-hand experience, no banned phrases, facts match the source | Safety and accuracy | 100% |

**Why 33% is the target for L8:** with one real passage and two fakes, a judge who can't tell the difference picks at random. If the judge is fooled about a third of the time, the imitation can't be told apart from the real thing.

### Example exam item (L2)

```json
{
  "id": "L2-0147",
  "level": "L2",
  "question": "Which passage was written by Writer A?",
  "options": {
    "A": "…passage from comparison writer 3, same topic…",
    "B": "…real passage from Writer A (practice set)…",
    "C": "…passage from comparison writer 1, same topic…"
  },
  "answer": "B",
  "student_must_give": ["choice", "three features that decided it"]
}
```

---

## 3. Roles

Each role runs in a fresh, separate context, so nothing sees what it shouldn't.

| Role | Sees | Job |
|---|---|---|
| **Exam builder** | Practice set, distractor pool | Writes exam items and the answer key. Never takes exams. |
| **Student** | Voice card, example bank, the exam | Answers, with a one-line reason for each. **Never sees the answer key.** |
| **Grader** | Answers and key | Scores L1 to L6 with a script, not with AI. |
| **Coach** | The misses and the student's reasons | Proposes edits to the voice card. |
| **Writer** | Voice card, example bank | Writes imitations for L4 and L8. |
| **Judge** | Real samples only, **never the voice card** | Tries to spot the fakes (L8). |

---

## 4. One round of the loop (about 20 to 40 minutes, automated)

1. **Build:** the exam builder makes 40 items across L1 to L6, with more weight on levels below their pass mark.
2. **Test:** the student takes the exam.
3. **Grade:** the grader scores it and logs every miss along with the student's reason.
4. **Coach:** the coach reviews the misses and makes **at most 3 edits** to the voice card per round: add a rule, sharpen one or delete one. Every edit must cite the misses behind it. Example-bank samples can be swapped too.
5. **Keep or revert:** re-run the exam with the new card. If the score drops, go back to the previous card.
6. **Imitate:** the writer produces 10 new imitations using the updated card.
7. **Judge:** the judge runs L8 on them and records the fool rate.
8. **Feed back:**
   - Imitations that fooled the judge become L4 wrong answers next round, so the exam gets harder each time.
   - Imitations the judge caught go to the coach, to work out why.
9. **Save:** record the scoreboard, the voice card version and a changelog, then commit to the repo.

**Stop when** every level is at its pass mark for 2 rounds in a row, or there's no improvement for 3 rounds.

**Then:**
1. Run the **final exam once** on the locked set.
2. Run a **human blind test**: George and the team get 10 items, a mix of real and AI-written, and guess which is which.

---

## 5. Guarding against fake progress

- The final set stays locked until the end.
- Exam items are never reused, and the wrong answers rotate.
- The voice card is capped at about one page (about 40 rules). That forces general rules rather than memorised quirks.
- Track the score for each level, not just the total. If L1 is much higher than L2, the agent is guessing from the topic, not the voice.
- Every 2 or 3 rounds, a person reads 5 imitations and the student's explanations.

---

## 6. Blended persona (2 or 3 writers)

| Phase | What happens |
|---|---|
| A | Run the loop for each writer, so each gets their own voice card. |
| B | **"Who wrote it?" exam:** A, B, C or none. The agent learns which traits belong to whom. |
| C | Design the blend: pick traits from each card and write a **house voice card**. |
| D | Run the loop again for the house style. Real passages from any of the three writers count as house style. The wrong answers are outside writers and generic AI. The L8 judge gets samples from all three. |

Publish under a brand or team byline, or under a real person who reviews and signs off. Never under an invented person who claims first-hand experience.

---

## 7. Audience layer

- Write one **audience card** per client, covering who reads, what they distrust and what proof they need.
- The voice card stays fixed. The audience card changes the vocabulary, the depth and the type of proof.
- Run L9 and L10 for every audience card. Examples:
  - **Fuel card:** fleet manager, numbers first.
  - **Mattress reviews:** shopper, honest negatives, first-hand only if someone really tested it.

---

## 8. Schedules

### A few hours: one writer, proof of concept

| Time | Step |
|---|---|
| 0:00 to 0:45 | Collect and split the samples, and gather the comparison writers |
| 0:45 to 1:15 | Write voice card v1 and run a **baseline exam**, to record the score before any training |
| 1:15 to 4:00 | 5 or 6 loop rounds |
| 4:00 to 4:30 | Final exam, then the 10-item human blind test |

### A few days: blend and audiences

| Day | Step |
|---|---|
| 1 | Loop for Writer A (can run overnight) |
| 2 | Loops for Writers B and C, then the "Who wrote it?" exam |
| 3 | Build the house voice card and run the house-style loop |
| 4 | Audience cards (fuel card, mattress), L9 and L10, human panel, final exam |
| 5 | Package it for the content team |

---

## 9. What you end up with

- **Voice card(s):** the final version, plus a changelog of what each round learned.
- **Scoreboard:** the baseline vs the final score at each level. This is the proof to show clients.
- **Example bank** and **audience cards**.
- **Prompt template** for the content team.
- **Final exam and human blind test results.**

---

## 10. How to run it

- **Option A, here in Claude Code:** the student and judge run as fresh sub-agents, and the exam building and grading are scripts in this repo. Results are committed after every round. Best for the few-hours version.
- **Option B, unattended:** a small Python harness on the Claude API, running overnight for the multi-day version. It needs an API key, which goes in the environment settings, never in chat.

**Needed to start:**
1. The writer, or 2 to 3 writers for a blend, plus samples as links or files.
2. 3 to 5 comparison writers on the same topics.
3. The target audience: which client.
