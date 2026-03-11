# The HBM4 Race: SK Hynix, Samsung, and Micron Battle for NVIDIA's Memory Orders

**Beat:** Chips & Architecture
**Format:** Deep Dive
**Published:** March 9, 2026
**Read time:** 13 min

**Excerpt:** With NVIDIA's Vera Rubin demanding 288GB of HBM4 per GPU — 576 stacks per rack — the three memory giants are in an all-out production war. SK Hynix leads with ~70% of NVIDIA's allocation, Samsung is shipping its turnkey solution, and Micron is ramping 15,000 wafers per month. Inside the race that will define AI's memory supply chain.

---

Every NVIDIA Vera Rubin GPU requires eight stacks of HBM4 memory. Every NVL72 rack contains 72 GPUs. That is 576 HBM4 stacks per rack, delivering 20.7 terabytes of memory at 1.6 petabytes per second of aggregate bandwidth. When NVIDIA says Rubin is "in full production," what it really means is that its memory supply chain must produce HBM4 at a scale the industry has never attempted.

Three companies control this supply chain: SK Hynix, Samsung, and Micron. Their HBM4 production timelines, allocation battles, and technology choices will determine how many Rubin systems actually ship in 2026 — and who captures the economics of the most valuable memory product ever manufactured.

## The Stakes: A Memory Supercycle

The high-bandwidth memory market is experiencing what SK Hynix CEO Kwak Noh-jung has called a "memory supercycle" driven by AI demand [1]. Bloomberg Intelligence projects the HBM chip market could grow to $130 billion by 2033 [2], up from an estimated $9 billion in 2026. HBM4, which began shipping in February 2026, represents the latest and most complex generation yet.

What makes HBM4 fundamentally different from previous generations is the introduction of a logic base die — a separate chip at the bottom of the memory stack that manages data routing, error correction, and power distribution [3]. Previous HBM generations used a simpler buffer die. The logic base die transforms HBM from a passive memory component into an active computing element, requiring foundry-grade manufacturing processes typically associated with processors, not memory.

This architectural shift has blown open the competitive dynamics. For the first time, HBM manufacturing depends not just on DRAM process technology and stacking expertise, but on logic foundry capability — and that means the relationship between memory makers and foundries like TSMC has become a strategic variable.

## SK Hynix: The Incumbent Leader

SK Hynix enters the HBM4 era from a position of dominance. The company controls over 50% of global HBM production — 62% of shipments as of Q2 2025 and has been NVIDIA's primary memory partner since the H100 generation [4]. For HBM4 specifically, SK Hynix is expected to supply roughly two-thirds of NVIDIA's total demand — a share that UBS estimates could be as high as 70% [5].

The company finalized the world's first HBM4 product in September 2025 and entered mass production shortly after [6]. By December 2025, SK Hynix had delivered large volumes of paid HBM4 samples to NVIDIA, which cleared final validation without issues [7]. Full commercial shipments began in Q1 2026.

**The TSMC Partnership:** SK Hynix's HBM4 strategy hinges on its partnership with TSMC. The company outsources the manufacture of its logic base die to TSMC's advanced process nodes — reportedly 5nm and 12nm, depending on the product tier [8]. This "One-Team" approach, as SK Hynix brands it, leverages TSMC's world-class logic manufacturing to ensure the base die is perfectly tuned for the TSMC-manufactured NVIDIA Rubin GPUs it will be paired with [8].

The partnership extends beyond manufacturing. SK Hynix and TSMC jointly developed the 2.5D advanced packaging integration that connects the HBM4 stacks to the GPU interposer via TSMC's CoWoS technology [9]. This vertical integration across the memory-logic-packaging stack gives SK Hynix a yield and performance advantage that competitors have struggled to match.

**16-Layer HBM4:** At CES 2026, SK Hynix unveiled the industry's first 16-layer (16-Hi) HBM4 device: 48GB capacity, 11.7 Gbps per pin, and over 2 TB/s of memory bandwidth per stack [10]. The transition to a 2,048-bit interface — double the 1,024-bit standard used since the original HBM specification — is a key enabler of the bandwidth leap [10].

Building a 16-layer stack within the JEDEC-standard 775μm height limit requires thinning each DRAM die to approximately 30 micrometers — about one-third the thickness of a human hair [10]. SK Hynix achieved this using its proprietary Advanced MR-MUF (Mass Reflow Molded Underfill) technology, which bonds and protects the ultra-thin dies during stacking [10].

NVIDIA has requested all three memory suppliers deliver 16-Hi HBM4 by Q4 2026 [11], making SK Hynix's early demonstration a significant competitive advantage.

**Capacity Expansion:** SK Hynix is investing heavily in production infrastructure. The company's M15X fab in South Korea opened its cleanroom ahead of schedule in October 2025 and began commercial production of 5th-generation (1b-node) DRAM in February 2026 — the foundational layer for HBM4 [12]. A new $13 billion advanced packaging facility, designated P&T7, will be the world's largest HBM assembly plant [13].

In the United States, SK Hynix broke ground on a $3.9 billion 2.5D advanced packaging facility in West Lafayette, Indiana, with mass production expected in H2 2028 [14]. Construction fencing went up at the site on February 23, 2026 [15]. Once operational, the Indiana plant will create the first domestic US HBM packaging capability — a strategically significant development given the concentration of current HBM packaging in South Korea.

## Samsung: The Turnkey Challenger

Samsung's HBM4 story is one of redemption. The company lost significant ground during the HBM3 generation after quality issues with its products led NVIDIA to rely primarily on SK Hynix [16]. For HBM4, Samsung has redesigned its approach from the ground up — and is leveraging a unique structural advantage that no competitor can replicate.

Samsung is the only company in the world that operates a leading-edge memory fab, a foundry, and an advanced packaging house under a single corporate umbrella [17]. This allows Samsung to offer a "turnkey" HBM4 solution: the DRAM layers are fabricated on Samsung's 10nm-class 6th-generation (1c) process, the logic base die is manufactured on Samsung's own 4nm foundry node, and the entire stack is assembled in Samsung's packaging facility [17].

**First Commercial Shipments:** Samsung shipped what it called "industry-first commercial HBM4" on February 12, 2026, with deliveries to NVIDIA and AMD beginning in the third week of February [18]. The timing was strategic — Samsung's HBM4 was expected to be used in performance demonstrations of the Rubin platform ahead of GTC 2026 in March [19].

**Specifications:** Samsung's 12-layer HBM4 delivers 11.7 Gbps per pin (consistent), with tuning capability up to 13 Gbps [17]. Total bandwidth reaches 3.3 TB/s per stack — 2.7x higher than HBM3E [17]. Capacities range from 24GB to 36GB in 12-layer configurations, with 16-layer 48GB stacks planned to align with customer timelines [17].

Samsung claims a 40% improvement in power efficiency through low-voltage TSV technology and power distribution network optimization, plus a 10% improvement in thermal resistance and 30% improvement in heat dissipation compared to HBM3E [17]. Thermal performance was one of the key areas where Samsung's HBM3 products fell short with NVIDIA, making these improvements critical for qualification.

**The Integrated Advantage:** Samsung's turnkey model offers potential supply chain benefits: shorter lead times, reduced logistics complexity, and the ability to co-optimize across the entire stack without depending on external foundry partners [20]. However, the model also carries risk — Samsung's 4nm foundry process has historically lagged TSMC in yield and performance, raising questions about whether the base die can match the quality of TSMC-manufactured alternatives.

Samsung is targeting approximately 25–30% of NVIDIA's HBM4 allocation for 2026 — a significant improvement over its HBM3 share, though still well behind SK Hynix [5].

## Micron: The American Contender

Micron Technology is the smallest of the three HBM suppliers but brings a distinctive set of capabilities to the HBM4 race. The company has historically excelled at low-power memory design — a critical differentiator as HBM power consumption becomes an increasingly important constraint in data center thermal budgets.

**Qualification and Timeline:** Micron has met NVIDIA's HBM4 specifications for Rubin and delivered final customer samples [21]. CEO Sanjay Mehrotra confirmed the company would begin ramping HBM4 output from Q2 2026, with yield improvement progressing faster than HBM3E [21].

**Production Capacity:** Micron plans to scale HBM4 capacity to 15,000 wafers per month by the end of 2026 [22] — a substantial volume, though still significantly below SK Hynix's capacity. The company fabricates its HBM4 DRAM on the 1-beta node, achieving speeds above 11 Gbps [21].

**TSMC Partnership:** Like SK Hynix, Micron has partnered with TSMC to manufacture its HBM4 logic base die [8]. This alignment with the TSMC ecosystem positions Micron's product for optimal compatibility with NVIDIA's TSMC-manufactured GPUs. The company has also tapped TSMC for its HBM4E base logic die, targeting 2027 production [23].

Micron's HBM4 share is expected to be in the 10–15% range of NVIDIA's total allocation for 2026, though the company is positioning for a larger share in the HBM4E generation with its earlier-than-expected qualification [22].

## The 16-Hi Push: NVIDIA Rewrites the Roadmap

The most disruptive force in the HBM4 market is NVIDIA itself. In late 2025, NVIDIA formally requested that all three memory suppliers deliver 16-layer HBM4 devices by Q4 2026 [11] — an acceleration of what the memory industry had planned as a 2027 milestone.

The demand is driven by Rubin's architecture: while 12-layer 36GB stacks deliver the 288GB per GPU that Rubin R200 ships with, 16-layer 48GB stacks would enable future Rubin configurations with 384GB or more per GPU. For Rubin Ultra, which targets 1 TB of HBM4e per GPU, 16-Hi stacking is a prerequisite [24].

All three suppliers have responded:

**SK Hynix** demonstrated 16-Hi 48GB HBM4 at CES 2026 with 2+ TB/s bandwidth [10], indicating production readiness.

**Samsung** has committed to 16-layer stacks "aligned to customer timelines" [17], with internal targets reportedly set for H2 2026.

**Micron** has begun full-scale development of 16-Hi devices [11], though has not publicly demonstrated a working sample.

The 16-Hi transition is not trivial. Stacking 16 DRAM dies within the standard package height requires each die to be thinned to ~30μm — creating extreme fragility during handling and bonding. Thermal management also becomes more challenging: more layers mean more heat generated in a smaller volume, requiring improved thermal interface materials and packaging design.

## HBM4E: The Next Battleground

Even as HBM4 is just entering volume production, the next generation — HBM4E — is already being designed. Samsung reportedly aims to complete its custom HBM4E design by May–June 2026, with SK Hynix and Micron on similar timelines [23].

HBM4E will target NVIDIA's Rubin Ultra platform (H2 2027), which requires 1 TB of memory per GPU at 4.6 PB/s of bandwidth [24]. Meeting these specifications will likely require 16-layer stacking with higher-density DRAM dies, further pushing the limits of packaging technology.

The foundry partnerships established for HBM4 base dies will carry forward into HBM4E, making the current generation's supply relationships a leading indicator of future market share.

## The Economics of HBM4

HBM4 is the most expensive memory product ever mass-produced. While exact per-unit pricing is confidential, industry analysis estimates HBM4 carries a 20% premium over HBM3E [25], which itself was already significantly more expensive than standard DRAM.

The cost drivers are substantial: the logic base die requires a separate foundry manufacturing step (at TSMC's 5nm or Samsung's 4nm), the stacking process involves precision bonding of ultra-thin dies with through-silicon vias, and the advanced packaging step (CoWoS or equivalent) adds another layer of manufacturing complexity.

For context, the HBM content in a single Rubin R200 GPU (8 stacks × 36GB) is estimated to represent 30–40% of the total chip cost — a remarkable share for what is, fundamentally, a memory component. Across a full NVL72 rack, the total HBM4 cost runs into the hundreds of thousands of dollars.

This pricing power is why the HBM business has transformed the financial profiles of all three memory companies. SK Hynix reported that its HBM revenue more than doubled year-over-year, and memory industry revenue broadly is benefiting from what analysts call the "AI memory supercycle" [1].

## The Structural Map

The HBM4 race is not simply a contest of manufacturing speed. It is a structural competition across four dimensions:

**Foundry partnerships:** SK Hynix and Micron's TSMC alliance versus Samsung's in-house foundry creates a fundamental architectural split. The TSMC-aligned products benefit from leading-edge logic yields; Samsung's integrated approach benefits from supply chain simplicity and vertical control.

**Packaging capability:** HBM packaging is becoming a bottleneck comparable to CoWoS in the logic chip supply chain. SK Hynix's $13 billion P&T7 investment and $3.9 billion Indiana plant [13][14], Samsung's in-house packaging, and Micron's reliance on outsourced assembly each represent different strategic bets on where the packaging bottleneck breaks.

**Customer lock-in:** NVIDIA's HBM4 qualification process takes months and is specific to each supplier's product. Once qualified and integrated into a platform, switching costs are high. SK Hynix's ~70% share of Rubin HBM4 [5] creates a reinforcing cycle: more volume means more data on yields and reliability, which means better qualification outcomes for the next generation.

**Geographic diversification:** SK Hynix's Indiana plant and Micron's US-based manufacturing create Western supply options for customers concerned about Korean supply chain concentration. Samsung's one-roof approach in South Korea offers efficiency but geographic concentration.

## What to Watch

The key milestones for the remainder of 2026:

**Q2 2026:** Micron begins HBM4 production ramp. Samsung scales deliveries to NVIDIA and AMD. SK Hynix 16-Hi qualification with NVIDIA expected.

**Q3 2026:** NVIDIA Vera Rubin NVL72 systems ship to cloud partners. Total HBM4 demand visibility becomes clear based on order volumes.

**Q4 2026:** NVIDIA's 16-Hi HBM4 delivery deadline for all three suppliers. The companies that meet this deadline in volume will secure larger allocation shares for Rubin Ultra and beyond.

The memory supply chain has never mattered more to the AI industry than it does right now. Every frontier model, every training cluster, every inference deployment depends on HBM4 stacks that only three companies on earth can produce. The race to build them fast enough is the race to build AI itself.

---

## References

[1] SK Hynix Newsroom, "2026 Market Outlook: Focus on the HBM-Led Memory Supercycle," January 2026. [news.skhynix.com](https://news.skhynix.com/2026-market-outlook-focus-on-the-hbm-led-memory-supercycle/)

[2] Bloomberg Intelligence, "High-Bandwidth Memory Chip Market Could Grow to $130 Billion by 2033." [bloomberg.com](https://www.bloomberg.com/company/press/high-bandwidth-memory-chip-market-could-grow-to-130-billion-by-2033-according-to-bloomberg-intelligence/)

[3] EE Times, "The State of HBM4 Chronicled at CES 2026." [eetimes.com](https://www.eetimes.com/the-state-of-hbm4-chronicled-at-ces-2026/)

[4] Introl Blog, "South Korea's HBM4 Moment: How Samsung and SK Hynix Are Shaping AI's Memory Supercycle." [introl.com](https://introl.com/blog/south-korea-hbm4-stargate-memory-supercycle-2026)

[5] TrendForce, "SK hynix Reportedly to Supply About Two-Thirds of NVIDIA HBM4; Samsung Targets Early Delivery," January 2026. [trendforce.com](https://www.trendforce.com/news/2026/01/28/news-sk-hynix-reportedly-to-supply-about-two-thirds-of-nvidia-hbm4-samsung-targets-early-delivery/)

[6] TrendForce, "SK hynix Finalizes World's First HBM4, Mass Production Ready, Eyes NVIDIA Approval," September 2025. [trendforce.com](https://www.trendforce.com/news/2025/09/12/news-sk-hynix-finalizes-worlds-first-hbm4-mass-production-ready-eyes-nvidia-approval/)

[7] TrendForce, "SK hynix, Samsung Reportedly Deliver Paid HBM4 Samples to NVIDIA Ahead of 1Q26 Contracts," December 2025. [trendforce.com](https://www.trendforce.com/news/2025/12/16/news-sk-hynix-samsung-reportedly-deliver-paid-hbm4-samples-to-nvidia-ahead-of-1q26-contract-finalization/)

[8] Financial Content, "The 2026 HBM4 Memory War: SK Hynix, Samsung, and Micron Battle for NVIDIA's Rubin Crown," January 2026. [financialcontent.com](https://markets.financialcontent.com/stocks/article/tokenring-2026-1-15-the-2026-hbm4-memory-war-sk-hynix-samsung-and-micron-battle-for-nvidias-rubin-crown)

[9] Financial Content, "TSMC Boosts CoWoS Capacity as NVIDIA Dominates Advanced Packaging Orders through 2027," December 2025. [financialcontent.com](https://markets.financialcontent.com/wral/article/tokenring-2025-12-26-tsmc-boosts-cowos-capacity-as-nvidia-dominates-advanced-packaging-orders-through-2027)

[10] TrendForce, "SK hynix Debuts 16-Layer 48GB HBM4 at CES 2026, Alongside SOCAMM2 and LPDDR6," January 2026. [trendforce.com](https://www.trendforce.com/news/2026/01/06/news-sk-hynix-debuts-16-layer-48gb-hbm4-at-ces-2026-alongside-socamm2-and-lpddr6/)

[11] Tweaktown, "SK hynix, Samsung, and Micron fighting for NVIDIA supply contracts for new 16-Hi HBM4 orders." [tweaktown.com](https://www.tweaktown.com/news/109495/sk-hynix-samsung-and-micron-fighting-for-nvidia-supply-contracts-for-new-16-hi-hbm4-orders/index.html)

[12] Financial Content, "SK Hynix's $15 Billion HBM Gambit: Cementing Dominance in the Global AI Memory Arms Race," February 2026. [financialcontent.com](https://markets.financialcontent.com/stocks/article/marketminute-2026-2-25-sk-hynixs-15-billion-hbm-gambit-cementing-dominance-in-the-global-ai-memory-arms-race)

[13] Tom's Hardware, "SK hynix to spend $13 billion on the world's largest HBM memory assembly plant." [tomshardware.com](https://www.tomshardware.com/pc-components/dram/sk-hynix-to-spend-usd13-billion-on-the-worlds-largest-hbm-memory-assembly-plant)

[14] SK Hynix Newsroom, "SK hynix Signs Investment Agreement of Advanced Chip Packaging with Indiana." [news.skhynix.com](https://news.skhynix.com/sk-hynix-signs-investment-agreement-of-advanced-chip-packaging-with-indiana/)

[15] Semicon Electronics, "SK Hynix Begins Construction of $3.87B Advanced Packaging Plant." [semicone.com](https://www.semicone.com/article-205.html)

[16] Korea Herald, "Nvidia's 16-layer HBM push raises stakes for memory chip-makers." [koreaherald.com](https://www.koreaherald.com/article/10645471)

[17] Samsung Semiconductor Newsroom, "Samsung Ships Industry-First Commercial HBM4 With Ultimate Performance for AI Computing," February 2026. [semiconductor.samsung.com](https://semiconductor.samsung.com/news-events/news/samsung-ships-industry-first-commercial-hbm4-with-ultimate-performance-for-ai-computing/)

[18] Tweaktown, "Samsung officially ships HBM4 ready for NVIDIA's next-gen Rubin AI chips." [tweaktown.com](https://www.tweaktown.com/news/110147/samsung-officially-ships-hbm4-ready-for-nvidias-next-gen-rubin-ai-chips/index.html)

[19] TrendForce, "Samsung Reportedly Set to Begin Official HBM4 Shipments to NVIDIA and AMD in February," January 2026. [trendforce.com](https://www.trendforce.com/news/2026/01/26/news-samsung-reportedly-set-to-begin-official-hbm4-shipments-to-nvidia-and-amd-in-february/)

[20] Samsung Global Newsroom, "Samsung Ships Industry-First Commercial HBM4." [news.samsung.com](https://news.samsung.com/global/samsung-ships-industry-first-commercial-hbm4-with-ultimate-performance-for-ai-computing)

[21] Digitimes, "Nvidia's Vera Rubin enters full production, igniting Micron's HBM4 capacity bet for 2026." [digitimes.com](https://www.digitimes.com/news/a20260107PD236/nvidia-hbm4-micron-2026-rubin.html)

[22] TrendForce, "NVIDIA Fuels HBM4 Race: 12-Layer Ramps, 16-Layer Push by SK hynix, Samsung, and Micron," January 2026. [trendforce.com](https://www.trendforce.com/news/2026/01/09/news-nvidia-demand-fuels-hbm4-race-12-layer-ramps-16-layer-push-by-sk-hynix-samsung-and-micron/)

[23] TrendForce, "Samsung's Custom HBM4E Design Reportedly Aimed for Mid-2026, Parallels SK hynix and Micron," January 2026. [trendforce.com](https://www.trendforce.com/news/2026/01/23/news-samsungs-custom-hbm4e-design-reportedly-aimed-for-mid-2026-parallels-sk-hynix-and-micron/)

[24] Tom's Hardware, "Nvidia announces Rubin GPUs in 2026, Rubin Ultra in 2027, Feynman also added to roadmap." [tomshardware.com](https://www.tomshardware.com/pc-components/gpus/nvidia-announces-rubin-gpus-in-2026-rubin-ultra-in-2027-feynam-after)

[25] Introl Blog, "The AI Memory Supercycle: HBM and the New Economics of Compute." [introl.com](https://introl.com/blog/ai-memory-supercycle-hbm-2026)
