# TSMC's $56 Billion Year: Inside the Largest Semiconductor Capex Budget in History

**Beat:** Materials & Fab
**Format:** Deep Dive
**Published:** March 9, 2026
**Read time:** 12 min

**Excerpt:** TSMC will spend up to $56 billion in 2026 — more than any semiconductor company has ever invested in a single year. We break down where the money is going, from 2nm node buildout to a fourfold expansion of advanced packaging capacity, and what it means for chip pricing and customer allocation.

---

No semiconductor company has ever attempted what TSMC is attempting in 2026. The Taiwan Semiconductor Manufacturing Company's capital expenditure budget for the year — $52 billion to $56 billion, as disclosed on its Q4 2025 earnings call [1] — represents a 30% increase over the $40.9 billion it spent in 2025 [2] and exceeds the combined annual capex of Intel, Samsung, and GlobalFoundries.

The number reflects a simple calculus: artificial intelligence has created a structural demand shock for advanced silicon, and TSMC — which commands approximately 90% of the market for cutting-edge AI chip fabrication [3] — is the only company positioned to absorb it. The question is not whether the spending is justified, but whether it is sufficient.

## The Financial Foundation

TSMC enters 2026 from a position of unprecedented strength. Full-year 2025 consolidated revenue reached NT$3.809 trillion (approximately $122.9 billion), a 31.6% increase over 2024 [4]. Net income hit a record NT$1.7178 trillion ($55.4 billion) [5]. Gross margin averaged 59.9% for the year, with Q4 2025 coming in at 62.3% [1].

The company's Q1 2026 guidance points to continued acceleration: revenue of $34.6 billion to $35.8 billion, implying roughly 30% year-over-year growth [6]. Gross margin is expected between 63% and 65%, and operating margin between 54% and 56% [6].

These are extraordinary numbers for a capital-intensive manufacturer. TSMC is generating the cash flow to self-fund its expansion while maintaining the margins to satisfy shareholders — a balancing act that neither Intel nor Samsung has managed in recent years.

Full-year 2026 revenue is guided to grow "close to 30%" [1], which would put TSMC's annual revenue in the range of $155 billion to $160 billion. Against that backdrop, a $56 billion capex budget represents roughly 35% of projected revenue — aggressive, but within the 32–40% range TSMC has historically maintained during major node transitions.

## Where the $56 Billion Goes

TSMC's management provided a high-level allocation framework on the Q4 2025 earnings call: 70% to 80% of the budget is directed toward advanced process technologies, with more than 10% allocated to advanced packaging, testing, mask production, and related infrastructure [1].

That translates to roughly the following breakdown:

**Advanced logic nodes ($36–45 billion):** The bulk of the spending targets the ramp of N2 (2nm), TSMC's first gate-all-around (GAA) transistor architecture, along with initial buildout for N2P and A16 (1.6nm) [7]. This includes tool procurement, cleanroom construction, and the expansion of Fab 20 in Hsinchu and Fab 22 in Kaohsiung, the two primary N2 production facilities [8]. A16, which adds backside power delivery to the GAA architecture, is on track for trial production in March 2026 and volume production in H2 2026 [9].

**Advanced packaging ($5–11 billion):** This covers the aggressive expansion of CoWoS (Chip-on-Wafer-on-Substrate), InFO (Integrated Fan-Out), and SoIC (System-on-Integrated-Chips) capacity. TSMC aims to scale monthly CoWoS capacity from 75,000–80,000 wafers at the start of 2026 to 120,000–130,000 wafers by year-end [10] — roughly quadrupling output from late 2024 levels [11].

**Overseas fabs ($5–8 billion estimated):** Continued construction and tool installation across TSMC's Arizona, Japan, and Germany sites, with Arizona commanding the largest share.

## The 2nm Ramp: Already Sold Out

TSMC began N2 volume production in Q4 2025, on schedule, with initial output at Fab 22 in Kaohsiung [8]. Fab 20 in Hsinchu is expected to follow [8]. The ramp plan is aggressive: 40,000 wafers per month by late 2025, scaling to 100,000 wafers per month in 2026 and 200,000 wafers per month by 2027 [12].

The customer list for N2 reads as a who's who of the semiconductor industry: Apple, AMD, NVIDIA, and MediaTek are the confirmed initial adopters, with Intel notably absent [13]. Apple has secured an estimated 50% or more of initial N2 capacity for its A20 and M5 chip families, both expected in the fall 2026 product cycle [14].

Demand already exceeds supply. TSMC has told customers to define their N2 production needs through at least Q2 2027, because capacity slots for the next two years are, in the company's words, "almost sold out" [12]. Clients that fail to commit early risk being shut out of the most advanced process technology available.

N2 is not cheap. Wafer pricing is expected to exceed $30,000 — at least 50% higher than the approximately $20,000 per wafer that TSMC charges for its current 3nm process [15]. These increases are not one-time adjustments: TSMC notified customers in September 2025 of plans for four consecutive years of price increases on sub-5nm nodes, starting January 2026, with average hikes of 3–5% per year [16]. For N2 specifically, initial price increases of 10–20% above comparable N3 pricing have been reported [17].

The era of cheaper transistors driving down per-unit chip costs is ending. While N2 delivers up to 15% performance improvement at equivalent power [8], the economics only work for the highest-value applications — AI accelerators, flagship smartphone processors, and high-performance computing chips. The long tail of semiconductor products that once rode each new node's cost curve downward will increasingly stay on mature nodes.

## The Packaging Bottleneck: CoWoS as the Binding Constraint

For AI chips specifically, the more consequential investment may be in advanced packaging rather than the process node itself. NVIDIA's accelerators, AMD's MI-series chips, and Google's TPUs all rely on TSMC's CoWoS technology to integrate high-bandwidth memory (HBM) stacks with logic dies on a single interposer.

CoWoS has been the binding constraint on AI chip supply since 2023. Despite TSMC's continuous expansion — from roughly 35,000 wafers per month in early 2024 to 75,000–80,000 at the start of 2026 [10] — demand has consistently outpaced capacity. NVIDIA alone commands over 60% of TSMC's total CoWoS output for 2025 and 2026 [18].

The downstream effects are significant. Alphabet reportedly reduced its 2026 production target for Tensor Processing Units because NVIDIA had already secured priority CoWoS allocations [19]. When one company's packaging reservation prevents another company's chip from being produced, the bottleneck has shifted from wafer fabrication to integration.

TSMC's response is a massive packaging buildout: 120,000–130,000 CoWoS wafers per month by late 2026 [10], plus outsourcing an additional 240,000–270,000 wafers annually to OSAT (outsourced semiconductor assembly and test) partners [20]. Amkor is expected to handle 180,000–190,000 of those wafers, with SPIL (Siliconware Precision Industries) taking 60,000–80,000 [20]. Even with this combined capacity, it may not be enough: the shift to NVIDIA's Rubin architecture, which is expected to require larger and more complex CoWoS-L interposers, will consume more packaging capacity per GPU than current Blackwell designs.

ASML is also entering this space. The company shipped its first advanced packaging lithography system — the TWINSCAN XT:260 — in late 2025, targeting the 3D integration and advanced packaging market, which it estimates at $40 billion to $50 billion annually [21].

## The Global Fab Network

A meaningful slice of TSMC's $56 billion budget flows to its overseas fabrication facilities — a strategic shift driven by both geopolitical pressure and customer demand for geographic diversification.

**Arizona:** TSMC's US operation is the most advanced and most expensive. Fab 21 Phase 1, producing on the N4 (4nm) process, is already operational and has achieved yields 4% higher than comparable Taiwan fabs [22] — a remarkable outcome given industry skepticism about US-based advanced manufacturing. Phase 2 construction is complete, with tool installation expected to begin in Q3 2026 (July–September), targeting N3 (3nm) production in the second half of 2027, several quarters ahead of the original 2028 schedule [23].

Phase 3, which broke ground in April 2025, is being built for N2 and A16 production — the first time TSMC's most advanced node will be manufactured outside Taiwan. TSMC has officially announced six fabs at the Arizona complex, plus two advanced packaging facilities and an R&D center, with total investment increased to $165 billion [24]. Industry reports suggest the site could eventually expand to as many as 12 fabs, potentially linked to broader US-Taiwan trade discussions [25].

The cost premium is real: AMD CEO Lisa Su has publicly stated that chips produced at TSMC's Arizona fabs carry a 5–20% premium compared with equivalent wafers from Taiwan [26]. TSMC has acknowledged that overseas fabs dilute gross margin by 2–3 percentage points, potentially rising to 3–4% long-term [27] — part of the rationale for its sustained price increases.

**Japan:** Fab 23 Phase 1 in Kumamoto is already in production, manufacturing on mature process nodes for automotive and industrial customers. TSMC expanded AI chip production in Japan in February 2026 [28]. The company is considering upgrading its second Kumamoto fab from the originally planned 6/7nm to 4nm production, though this could require design changes and delay the timeline [29].

**Germany:** Fab 24, a joint venture with Bosch, Infineon, and NXP in Dresden, remains on track to open by late 2027, focused on specialty technologies for automotive and industrial applications [25].

## What This Means for the Supply Chain

TSMC's $56 billion year creates several downstream effects across the AI supply chain:

**For chip designers (NVIDIA, AMD, Apple, Broadcom):** Advanced node capacity remains scarce despite the investment. Companies that have already locked in multi-year allocation agreements are insulated; those that haven't face both supply constraints and rising wafer prices. The four-year price increase cycle [16] means design teams must factor in escalating manufacturing costs when architecting next-generation chips.

**For equipment makers (ASML, Applied Materials, Lam Research, Tokyo Electron):** TSMC's spending directly translates to equipment orders. ASML's record Q4 2025 order backlog of €13.2 billion and full-year 2025 revenue of €32.7 billion [30] are largely downstream effects of TSMC's expansion. Applied Materials, Lam Research, and Tokyo Electron are all beneficiaries of both the logic node buildout and the packaging capacity expansion.

**For OSAT providers (Amkor, SPIL):** The CoWoS outsourcing strategy creates a new revenue stream but also a dependency — these companies must invest in specialized tools and clean rooms to meet TSMC's quality and throughput requirements [20].

**For end customers (hyperscalers, enterprises):** The compounding effect of wafer price increases, packaging premiums, and HBM cost escalation means the total cost of AI accelerators will continue rising, even as the performance of each chip improves. The cost-per-FLOP may keep declining, but the absolute cost of building an AI training cluster is climbing.

## The Structural Question

TSMC CEO C.C. Wei dismissed "bubble" concerns on the Q4 2025 earnings call while acknowledging that TSMC "must invest carefully" [1]. The tension is real: $56 billion is a bet that AI-driven demand is structural, not cyclical. If hyperscaler capex contracts or AI model architectures shift toward more efficient compute, TSMC would be left with expensive, underutilized capacity.

The evidence, for now, points to structural demand. Hyperscaler AI capital expenditure is projected at $690 billion for 2026, according to Futurum Group [31]. NVIDIA's Vera Rubin architecture has entered full-scale mass production [32]. Microsoft has disclosed $80 billion in Azure orders it cannot fulfill due to infrastructure constraints [33]. The demand signal is not weakening.

But the concentration risk is also structural. TSMC's top five customers account for an outsized share of revenue, and 77% of Q4 2025 wafer revenue came from 7nm and below [1] — the nodes where AI demand is strongest. If AI spending decelerates, there is no ready substitute demand to fill a fab designed for 2nm AI accelerators.

For now, though, the math is simple: the world needs more advanced silicon than exists, and TSMC is the only company capable of manufacturing it at scale. The $56 billion question is whether they can build capacity fast enough.

---

## References

[1] TSMC, "TSMC Fourth Quarter 2025 Earnings Conference Call Transcript," January 2026. [investor.tsmc.com](https://investor.tsmc.com/english/encrypt/files/encrypt_file/reports/2026-01/51d09df96cd89ac19d65af39032b038dc2896a24/TSMC%204Q25%20Transcript.pdf)

[2] DataCenterDynamics, "TSMC announces 2026 capex spend of $56bn after posting eighth consecutive quarter of growth," January 2026. [datacenterdynamics.com](https://www.datacenterdynamics.com/en/news/tsmc-announces-2026-capex-spend-of-56bn-after-posting-eighth-consecutive-quarter-of-growth/)

[3] Futurum Group, "TSMC Q4 FY 2025 Results and FY 2026 Outlook Signal AI-Led Growth," January 2026. [futurumgroup.com](https://futurumgroup.com/insights/tsmc-q4-fy-2025-results-and-fy-2026-outlook-signal-ai-led-growth/)

[4] TSMC, "TSMC Reports December 2025 Revenue," January 2026. [pr.tsmc.com](https://pr.tsmc.com/english/news/3278)

[5] TSMC, "TSMC Reports Fourth Quarter EPS of NT$19.50, Full Year EPS of NT$66.21," January 2026. [pr.tsmc.com](https://pr.tsmc.com/english/news/3281)

[6] TrendForce, "TSMC Q1 Revenue Guidance Hits $35.8B, Up 38% YoY; Unveils Record $56B CapEx for 2026," January 2026. [trendforce.com](https://www.trendforce.com/news/2026/01/15/news-tsmc-q1-revenue-guidance-hits-35-8b-up-38-yoy-unveils-record-56b-capex-for-2026/)

[7] TrendForce, "TSMC's 2026 CapEx Reportedly Near US$50B, Driven by 2nm Expansion and Global Buildout," November 2025. [trendforce.com](https://www.trendforce.com/news/2025/11/24/news-tsmcs-2026-capex-reportedly-near-us50b-driven-by-2nm-expansion-and-global-buildout/)

[8] Tom's Hardware, "TSMC begins volume production of 2nm-class chips — first GAA transistor claims up to 15% improvement at ISO power," Q4 2025. [tomshardware.com](https://www.tomshardware.com/tech-industry/semiconductors/tsmc-begins-quietly-volume-production-of-2nm-class-chips-first-gaa-transistor-for-tsmc-claims-up-to-15-percent-improvement-at-iso-power)

[9] TSMC, "2nm Technology," official technology page. [tsmc.com](https://www.tsmc.com/english/dedicatedFoundry/technology/logic/l_2nm)

[10] Financial Content, "TSMC to Quadruple Advanced Packaging Capacity: Reaching 130,000 CoWoS Wafers Monthly by Late 2026," February 2026. [markets.financialcontent.com](https://markets.financialcontent.com/stocks/article/tokenring-2026-2-5-tsmc-to-quadruple-advanced-packaging-capacity-reaching-130000-cowos-wafers-monthly-by-late-2026)

[11] Financial Content, "The Great Packaging Pivot: How TSMC is Doubling CoWoS Capacity to Break the AI Supply Bottleneck through 2026," January 2026. [markets.financialcontent.com](https://markets.financialcontent.com/wral/article/tokenring-2026-1-1-the-great-packaging-pivot-how-tsmc-is-doubling-cowos-capacity-to-break-the-ai-supply-bottleneck-through-2026)

[12] Cloud News, "TSMC wraps up the 2nm roadmap: capacity for 2026 and 2027 is exhausted, requiring a one-year reservation." [cloudnews.tech](https://cloudnews.tech/tsmc-wraps-up-the-2nm-roadmap-capacity-for-2026-and-2027-is-exhausted-requiring-a-one-year-reservation/)

[13] TechSpot, "TSMC's 2nm N2 process officially enters volume production," Q4 2025. [techspot.com](https://www.techspot.com/news/110755-tsmc-2nm-n2-process-officially-enters-volume-production.html)

[14] AppleInsider, "Apple taking half of TSMC's 2nm chip capacity when production hits full speed," August 2025. [appleinsider.com](https://appleinsider.com/articles/25/08/27/apple-taking-half-of-tsmcs-2nm-chip-capacity-when-production-hits-full-speed)

[15] TechNode, "TSMC sets 2nm wafer price at $30,000, far below earlier 50% increase speculation," October 2025. [technode.com](https://technode.com/2025/10/09/tsmc-sets-2nm-wafer-price-at-30000-far-below-earlier-50-increase-speculation/)

[16] TrendForce, "TSMC Reportedly Flags 3–5% Price Hikes for Sub-5nm in 2026; Ripple Effects on Mature Nodes Expected," November 2025. [trendforce.com](https://www.trendforce.com/news/2025/11/03/news-tsmc-reportedly-flags-3-5-price-hikes-for-sub-5nm-in-2026-ripple-effects-on-mature-nodes-expected/)

[17] TrendForce, "TSMC 2nm Reportedly Up 10–20%, Far Below Rumored 50%; 3–7nm to Rise Single-Digit in 2026," October 2025. [trendforce.com](https://www.trendforce.com/news/2025/10/08/news-tsmc-2nm-reportedly-up-10-20-far-below-rumored-50-3-7nm-to-rise-single-digit-in-2026/)

[18] Digitimes, "TSMC expands CoWoS capacity with Nvidia booking over half for 2026–27," December 2025. [digitimes.com](https://www.digitimes.com/news/a20251210PD218/tsmc-cowos-capacity-nvidia-equipment.html)

[19] Astute Group, "Advanced Packaging Demand Soars: Nvidia Secures 60% of CoWoS Capacity," 2025. [astutegroup.com](https://www.astutegroup.com/news/industrial/advanced-packaging-demand-soars-nvidia-secures-60-of-cowos-capacity/)

[20] TrendForce, "TSMC's CoWoS-L/S Reportedly Fully Booked, OSAT Partners Step Up with ASE's CoWoP in Focus," December 2025. [trendforce.com](https://www.trendforce.com/news/2025/12/08/news-tsmcs-cowos-l-s-reportedly-fully-booked-osat-partners-step-up-with-ases-cowop-in-focus/)

[21] 24/7 Wall St., "ASML Targets TSM in Advanced Packaging: Strategic Expansion or Unnecessary Gamble?" March 2026. [247wallst.com](https://247wallst.com/investing/2026/03/02/asml-targets-tsm-in-advanced-packaging-strategic-expansion-or-unnecessary-gamble/)

[22] Tom's Hardware, "TSMC Arizona fab delivers 4% more yield than comparable facilities in Taiwan," October 2024. [tomshardware.com](https://www.tomshardware.com/tech-industry/semiconductors/tsmc-arizona-fab-delivers-4-percent-more-yield-than-comparable-facilities-in-taiwan)

[23] TrendForce, "TSMC Reportedly Accelerates Arizona 2nd Fab, Eyes 3Q26 Tool Install, 2027 3nm Production," December 2025. [trendforce.com](https://www.trendforce.com/news/2025/12/18/news-tsmc-reportedly-accelerates-arizona-2nd-fab-eyes-3q26-tool-install-2027-3nm-production/)

[24] TSMC, "TSMC Intends to Expand Its Investment in the United States to US$165 Billion," official press release. [pr.tsmc.com](https://pr.tsmc.com/english/news/3210)

[25] Digitimes, "TSMC reportedly set to build 12 Arizona fabs as Japan, Germany expansions stall," January 2026. [digitimes.com](https://www.digitimes.com/news/a20260106PD217/tsmc-arizona-market-germany-2026.html)

[26] Tom's Hardware, "AMD CEO says U.S.-made TSMC chips are more expensive but worth it — costs 'more than 5% but less than 20%' higher than Taiwan-sourced alternative," July 2025. [tomshardware.com](https://www.tomshardware.com/tech-industry/amd-ceo-says-u-s-made-tsmc-chips-are-more-expensive-but-worth-it-costs-more-than-5-percent-but-less-than-20-percent-higher-than-taiwan-sourced-alternative)

[27] Design Reuse, "TSMC Price Hikes End the Era of Cheap Transistors," 2025. [design-reuse.com](https://www.design-reuse.com/news/202529441-tsmc-price-hikes-end-the-era-of-cheap-transistors/)

[28] TSMC / Focus Taiwan, "TSMC to expedite Arizona expansion, upgrade; keep investing in Taiwan," October 2025; TSMC Japan expansion announced February 2026. [focustaiwan.tw](https://focustaiwan.tw/business/202510160024)

[29] SemiAnalysis, "TSMC Overseas Fabs – A Success?" Newsletter report on Kumamoto Phase 2 upgrade considerations. [newsletter.semianalysis.com](https://newsletter.semianalysis.com/p/tsmc-overseas-fabs-a-success)

[30] TrendForce, "ASML's High-NA EUV for 2027–28: Which Giants Are Betting Big?" February 2026; ASML reported €32.7B revenue and €13.2B in Q4 2025 orders. [trendforce.com](https://www.trendforce.com/news/2026/02/16/news-asmls-high-na-euv-for-2027-28-which-giants-are-betting-big-intel-samsung-sk-hynix-or-tsmc/)

[31] Futurum Group, AI capex projection of $690B for 2026. Referenced in TSMC earnings analysis. [futurumgroup.com](https://futurumgroup.com/insights/tsmc-q4-fy-2025-results-and-fy-2026-outlook-signal-ai-led-growth/)

[32] NVIDIA, Jensen Huang CES 2026 keynote confirming Vera Rubin entered full-scale mass production, January 5, 2026.

[33] Microsoft, FY2025 earnings disclosure of $80B unfulfillable Azure order backlog due to power constraints.
