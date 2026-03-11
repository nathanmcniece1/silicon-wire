# Weekly Briefing #1: The Week NVIDIA Went to GTC and the World Followed

**Beat:** Cross-Beat
**Format:** Weekly Briefing
**Published:** March 9, 2026
**Read time:** 10 min

**Excerpt:** Our inaugural weekly briefing synthesizes the biggest stories across the AI supply chain: NVIDIA GTC 2026 previews, the HBM4 production race, TSMC's record capex plans, Cerebras's IPO filing, the EU Semiconductor Coalition, and the liquid cooling market inflection. Everything you need to know in one place.

---

Welcome to the first edition of The Silicon Wire Weekly Briefing — a cross-beat synthesis of the stories shaping the AI supply chain. This week: GTC 2026 approaches with Vera Rubin in production, the memory industry races to meet NVIDIA's 16-Hi HBM4 demands, TSMC plans to spend $56 billion, Cerebras files for its second IPO attempt, and Europe's semiconductor coalition pushes for a €200 billion commitment.

---

## The Big Picture

The AI supply chain entering March 2026 is defined by a single dynamic: demand for AI compute continues to outpace every layer of infrastructure — from silicon to packaging to power. The $690 billion in projected hyperscaler capex for 2026 is not a sign of exuberance; it's a floor set by the physical constraints that prevent companies from spending even more.

Microsoft's disclosure of an $80 billion backlog of unfulfillable Azure orders crystallizes the point. The bottleneck has migrated from chip supply (2023–2024) to advanced packaging (2025) to electrical power (2026). Each constraint, when partially relieved, reveals the next one downstream. The entire supply chain is operating at or near capacity across every layer simultaneously.

---

## GTC 2026: What to Expect (March 16–19)

NVIDIA's GPU Technology Conference begins next week in San Jose, and the stakes are higher than ever.

**Vera Rubin enters production.** Jensen Huang confirmed at CES 2026 that Vera Rubin — NVIDIA's next-generation architecture — has entered full-scale mass production. The Rubin platform features HBM4 memory (288 GB per GPU), NVLink 6 with 3.6 TB/s bidirectional bandwidth, and NVIDIA's first 100% liquid-cooled rack-scale system. Partner products are expected in H2 2026.

The performance claims are significant: 5x greater inference performance and 10x lower cost per token compared to Blackwell. For MoE models specifically — now the dominant frontier architecture — the improvement compounds on Blackwell's already transformative 10x speed advantage over Hopper.

**Feynman on the horizon.** The next architecture after Rubin is expected on TSMC's A16 (1.6nm) process with silicon photonics — potentially the first optical data transmission in a GPU. Jensen teased "never-before-seen" technologies. GTC will likely provide the first concrete details.

*Read more: [NVIDIA GTC 2026: Vera Rubin in Production, Feynman on the Horizon](/article/nvidia-gtc-2026-vera-rubin-feynman)*

---

## The HBM4 Race Intensifies

All three major memory suppliers are in a sprint to meet NVIDIA's demand for 16-layer HBM4 by Q4 2026.

**SK Hynix** debuted a 48 GB, 2+ TB/s 16-layer module at CES 2026 using its proprietary MR-MUF technology, thinning each DRAM wafer to 30 micrometers. **Samsung** shipped its first HBM4 on February 12 and is pursuing hybrid bonding for higher-density stacking, though yields remain around 10%. **Micron** met NVIDIA specifications and targets a high-yield ramp in Q2 2026 for 12-layer devices.

The 16-Hi push compresses roadmaps originally designed for 2027 into 2026 deliverables. NVIDIA's ability to dictate the memory industry's development timeline — across three independent companies simultaneously — is an unprecedented demonstration of demand-side market power.

*Read more: [The HBM4 Race: SK Hynix, Samsung, and Micron Battle for NVIDIA's Memory Orders](/article/hbm4-race-sk-hynix-samsung-micron)*

---

## TSMC: $56 Billion and Counting

TSMC's 2026 capital expenditure budget of $52 to $56 billion — a 30% increase over 2025's $40.9 billion — sets a new record for semiconductor investment. The allocation: 70–80% to advanced process technologies (N2, A16), more than 10% to advanced packaging (CoWoS, InFO, SoIC), and the remainder to overseas fab construction.

Key targets: scale N2 to 200,000 wafers per month by 2027, expand CoWoS capacity to 120,000–130,000 wafers per month by end of 2026, and continue buildout in Arizona, Japan (now upgraded to 3nm), and Germany.

The company's Q1 2026 guidance implies roughly 30% year-over-year growth, putting full-year revenue in the $155–160 billion range. At these levels, TSMC generates the cash flow to self-fund its expansion while maintaining 63–65% gross margins.

*Read more: [TSMC's $56 Billion Year](/article/tsmc-56-billion-capex-2026)*

---

## Cerebras Files for IPO — Take Two

Bloomberg reported on March 6 that Cerebras Systems has tapped Morgan Stanley as lead underwriter for an IPO targeting Q2 2026. The valuation: $23 billion, nearly triple the $8.1 billion Series G from September 2025.

What changed: a $10 billion OpenAI compute deal signed in January 2026, CFIUS clearance resolving the G42 investor controversy, and a $1 billion Series H led by Tiger Global. Cerebras claims its CS-3 system delivers 21x faster inference than NVIDIA's Blackwell at one-third the cost and power.

The IPO will be the market's first major test of whether NVIDIA's AI compute dominance has a credible public-market challenger.

*Read more: [Cerebras Targets Q2 IPO: Inside the $23 Billion Challenger to NVIDIA](/article/cerebras-targets-q2-ipo-23-billion-challenger)*

---

## Europe Forms Semiconductor Coalition

Nine EU nations — Austria, Belgium, Finland, France, Germany, Italy, Poland, Spain, and the Netherlands — launched a Semiconductor Coalition pushing for Chips Act 2.0 with a target of €200 billion in investment by 2035.

The original Chips Act catalyzed €69 billion but fell short of its 20% global market share target (the European Court of Auditors projects 11.7% by 2030). High-profile cancellations — Intel Magdeburg, the STMicro/GlobalFoundries French fab — underscored the gap between ambition and execution.

The coalition wants approval times under 7 months, aligned EU and national funding, and a Europe-wide semiconductor talent pipeline.

*Read more: [The EU Chips Act at Two Years: €69 Billion Mobilized, Strategic Gaps Remain](/article/eu-chips-act-two-years-69-billion)*

---

## The Liquid Cooling Inflection

With NVIDIA's Blackwell GPUs consuming 1,000 watts each and Vera Rubin targeting 1,800 watts, the data center cooling market has hit an inflection point. Air cooling physically cannot remove 120 kilowatts from a single rack.

The liquid cooling market is projected to grow from $6 billion to $16 billion by 2030. Vertiv reported 60% year-over-year growth in organic orders. Microsoft's Fairwater AI campuses use closed-loop liquid cooling that eliminates water consumption. And a wave of billion-dollar acquisitions — Vertiv, Schneider Electric, Eaton, Daikin — is consolidating the supply chain.

*Read more: [The Liquid Cooling Inflection: Why Air Can't Cool a 1,200-Watt GPU](/article/liquid-cooling-inflection-1200-watt-gpu)*

---

## Policy Watch

**Trump's 25% AI chip tariff** (Section 232, effective January 15) imposes a value-based surcharge on advanced AI chips not destined for the US supply chain. Broad exemptions protect domestic data center buildout, R&D, and startups — creating a two-tier pricing system that financially incentivizes onshoring AI infrastructure.

**DeepSeek V4** released in mid-February with ~1 trillion parameters (32B active), million-token context, and optimization for Huawei Ascend processors. The model runs on dual RTX 4090s and is open-sourced under Apache 2.0 — continuing to challenge assumptions about the relationship between compute access and frontier model capability.

---

## Numbers of the Week

| Metric | Value | Context |
|--------|-------|---------|
| TSMC 2026 capex | $52–56B | +30% YoY, record for any semiconductor company |
| Microsoft Azure backlog | $80B | Unfulfillable due to power constraints |
| Hyperscaler 2026 capex | ~$690B | Nearly 100% of operating cash flows |
| Cerebras valuation | $23B | 2.8x increase in 5 months |
| NVIDIA NVL72 MoE speedup | 10x | Vs. Hopper for Mixture-of-Experts inference |
| CoWoS 2026 demand | ~1M wafers | Exceeding supply by ~25% |
| EU Chips Act 2.0 target | €200B by 2035 | Up from original €43B |

---

*The Silicon Wire Weekly Briefing publishes every Monday. Subscribe for the most comprehensive synthesis of AI supply chain intelligence.*
