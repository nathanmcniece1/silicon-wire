# ASML's High-NA EUV Rollout: Intel First, Samsung Second, TSMC Waiting

**Beat:** Materials & Fab
**Format:** Supply Chain Map
**Published:** March 9, 2026
**Read time:** 13 min

**Excerpt:** ASML's $380 million TWINSCAN EXE:5200B is the most expensive machine tool ever built. Intel completed acceptance testing in December 2025. Samsung is deploying High-NA for 2nm. SK Hynix is using it for DRAM. TSMC says it doesn't need it until 2029. We map who has which machines, what they're making, and why TSMC's decision to skip High-NA reshapes the competitive landscape.

---

There is exactly one company on Earth that can manufacture the machines required to print the smallest transistors that physics currently allows. That company is ASML, and its newest product — the TWINSCAN EXE:5200B, a High-NA extreme ultraviolet lithography system — costs approximately $380 million, weighs 150 metric tons, and determines which chipmakers will lead at the most advanced process nodes for the rest of this decade [1].

High-NA EUV increases the numerical aperture of the optical system from 0.33 to 0.55, enabling 8-nanometer resolution in a single exposure pass — compared to 13nm for standard EUV [1]. The improvement sounds incremental. It is not. At these scales, the difference between 13nm and 8nm resolution determines whether a chipmaker can pattern the most critical transistor layers in a single step or must use multiple patterning passes — a process that multiplies cost, complexity, and defect risk.

This is the map of who has High-NA machines, what they're building with them, and what it means that the world's most advanced foundry has decided it doesn't need them.

## The Machine: EXE:5200B

The TWINSCAN EXE:5200B is the production-ready successor to ASML's initial High-NA prototype, the EXE:5000. Its specifications define the frontier of semiconductor lithography [1]:

Resolution of 8nm without multi-patterning. Features 1.7x smaller than standard EUV with 2.9x higher transistor density. Throughput of 175 wafers per hour at 50 mJ/cm² exposure dose. Overlay accuracy of 0.7nm. Imaging contrast 40% better than the previous NXE generation.

The machine's physical scale matches its capability. The illumination system alone weighs 6 tons. The projection optics — manufactured by ZEISS SMT, the only company capable of polishing mirrors to the required sub-angstrom precision — weigh 12 tons [1]. The entire system requires specialized foundation engineering to support.

At $380 million per unit, the EXE:5200B costs roughly double ASML's standard EUV scanner [1]. ASML has received 10–20 orders and plans to build 20 High-NA systems per year by 2028 [1]. The company's Q4 2025 order book of €13.2 billion — a record — included €7.4 billion in EUV bookings [2], confirming that despite the price, demand is not the constraint on adoption.

## Intel: First in Line

Intel completed acceptance testing on the industry's first commercial EXE:5200B in December 2025, at its Oregon fabrication facility [3]. The system will support Intel's 14A (14 Angstrom) process node, expected to enter production in H1 2027 [3].

Intel has doubled its High-NA orders from one to two units, contributing to a global order increase from 8 to 10 systems for calendar year 2027 [4]. The company reported producing 30,000 wafers per quarter with its High-NA systems during acceptance testing and achieved 0.6nm overlay accuracy — exceeding the 0.7nm specification [3].

For Intel, High-NA is existential. The company's foundry business remains unprofitable, and its competitive position depends on reaching 14A — a node that relies heavily on High-NA for critical patterning layers. Intel's 14A is designed to deliver 15–20% better performance-per-watt compared to 18A, with simpler design rules enabled by single-patterning High-NA exposure [3].

The strategic logic is clear: by being first to volume production with High-NA, Intel aims to establish a manufacturing advantage that TSMC — which is skipping High-NA — cannot match until 2029 at the earliest. Whether Intel can convert this equipment advantage into competitive foundry wins depends on yields, cost, and customer confidence — all of which remain unproven at volume scale.

## Samsung: The 2nm Play

Samsung deployed its first High-NA system — an initial EXE:5000 — at its Hwaseong Campus in March 2025 [5]. The company committed 1.1 trillion won ($773 million) for two High-NA systems, with the first production-grade EXE:5200B arriving in late 2025 and a second scheduled for H1 2026 [5].

Samsung is deploying High-NA for two high-profile production programs:

**Exynos 2600:** Announced in December 2025, this is the world's first 2nm mobile system-on-chip. It will power Samsung's next-generation Galaxy smartphones and represents Samsung's bid to regain competitiveness in mobile processors after years of trailing TSMC's yields [6].

**Tesla AI6:** Samsung is manufacturing Tesla's AI6 chip on its 2nm process for self-driving systems, robotaxis, and the Optimus robot platform. Production volume has been negotiated to 40,000 wafers per month — more than double the initial 16,000 wafer commitment [7].

Samsung's 2nm yield challenge is well documented. In February 2025, the company reported only 30% yield on early 2nm test runs, well below the 60–70% threshold required for profitable mass production [5]. High-NA's single-patterning capability is central to Samsung's yield improvement strategy: by eliminating multi-patterning complexity on critical layers, Samsung aims to reduce the defect sources that have plagued its advanced node ramp.

## SK Hynix: High-NA Comes to Memory

SK Hynix made semiconductor history on September 2, 2025, when it deployed the first High-NA EUV system for volume DRAM production at its M16 fabrication plant in Icheon, South Korea [8].

The deployment marked a milestone: High-NA EUV had been designed primarily for logic chip manufacturing. SK Hynix's decision to apply it to DRAM production demonstrated that the technology's density benefits extend to memory — enabling smaller memory cells and denser arrays that improve both performance and cost-per-bit.

SK Hynix plans to approximately double its EUV fleet from 20 to 40 systems by 2027, installing new machines at its Cheongju M15X and Icheon M16 fabs [8]. The company aims to become the third-largest EUV customer globally by 2027, reflecting a strategic bet that EUV-enabled DRAM will command premium pricing in the AI-driven HBM market.

## TSMC: The Deliberate Absence

And then there is TSMC — the world's most advanced foundry, manufacturer of 90% of the world's most complex chips — which has decided it does not need High-NA EUV [9].

TSMC will skip High-NA for its A16 (1.6nm-class) process and its A14 (1.4nm-class) process. The company does not plan to adopt High-NA until A14P, currently targeted for 2029 [9]. This creates a gap of four or more years between Intel's first High-NA volume production and TSMC's.

TSMC's rationale is economic, not technical. The company's engineering team determined that low-NA EUV with double patterning (specifically a Self-Aligned Litho-Etch-Litho-Etch process, or SALELE) can achieve comparable feature sizes at lower overall cost than High-NA single patterning [9]. The calculation hinges on several factors:

A single High-NA EUV exposure costs approximately 2.5x more than a single low-NA exposure, driven by the machine's higher capital cost and smaller exposure field [10]. High-NA's smaller field size requires more passes per wafer, reducing effective throughput. The net result, in TSMC's analysis, is that double-patterning on a $190 million low-NA tool is more cost-effective than single-patterning on a $380 million High-NA tool — even accounting for the additional process steps and longer cycle time.

This analysis is contested. ASML and its proponents argue that High-NA's simpler design rules reduce overall process complexity, improve yield, and shorten development cycles. IBM research found that a four-mask SALELE process costs 1.7–2.1x more than a single High-NA pass [10]. SemiAnalysis has published analysis arguing that High-NA is economically inferior to optimized low-NA multi-patterning [10].

The truth will be determined by production data, not modeling. When Intel and Samsung enter High-NA volume production in 2026–2027, the industry will have its first real cost-per-wafer comparisons. If High-NA proves cost-competitive, TSMC's delay becomes a competitive liability. If TSMC's multi-patterning approach proves cheaper at equivalent density, TSMC will have avoided hundreds of millions in unnecessary capital expenditure.

## The Supply Chain Map

The current High-NA deployment landscape as of March 2026:

**ASML (Veldhoven, Netherlands):** Sole manufacturer. 10–20 units ordered. Building capacity to 20 systems per year by 2028. €38.8 billion total backlog, of which €25.5 billion is EUV [2].

**ZEISS SMT (Oberkochen, Germany):** Sole supplier of projection optics for all EUV systems. The 12-ton projection optics module is the most technically demanding component — mirrors polished to sub-angstrom surface roughness.

**Intel (Hillsboro, Oregon):** 2 units ordered. First system acceptance-tested December 2025. Production target: 14A in H1 2027.

**Samsung (Hwaseong, South Korea):** 2 units committed ($773M). First deployed March 2025. Production: 2nm for Exynos 2600, Tesla AI6.

**SK Hynix (Icheon, South Korea):** 1+ units deployed September 2025 for DRAM. Fleet doubling to ~40 EUV systems by 2027.

**TSMC (Hsinchu, Taiwan):** No High-NA units ordered for current nodes. First adoption planned for A14P (~2029).

## ASML's Financial Position

ASML's 2025 results confirm the company's monopoly economics. Full-year revenue reached €32.7 billion, up 16% year-over-year [2]. Net income was €9.6 billion at a 52.8% gross margin. Q4 2025 was a record quarter: €9.7 billion in revenue, including revenue from two High-NA system deliveries, and €13.2 billion in new bookings [2].

The 2026 outlook projects €34–39 billion in revenue with 51–53% gross margins [2]. The EUV backlog of €25.5 billion provides multi-year revenue visibility — a luxury unique to a company that is, for practical purposes, the sole enabler of leading-edge semiconductor manufacturing worldwide.

ASML's strategic risk is not demand — it is geopolitics. The company's ability to ship to China is constrained by Dutch export controls aligned with US policy, and any escalation of restrictions could affect its largest growth market. But for High-NA specifically, all current customers are in allied nations, and the technology's military and economic sensitivity ensures it will remain restricted to Tier 1 partners.

## What Comes Next: Hyper-NA

ASML has disclosed its next-generation initiative: Hyper-NA, targeting a numerical aperture of 0.75 or higher [11].

Hyper-NA systems, expected around 2030, would cost an estimated $720 million per unit and enable resolution sufficient for sub-1.4nm nodes without multi-patterning [11]. The technology addresses the "dangerous trend" of multi-patterning proliferation that TSMC's approach to skipping High-NA relies on.

The technical challenges are significant. At numerical apertures above 0.55, light polarization effects become critical — one polarization orientation begins canceling out the other, reducing imaging contrast [11]. Solving this requires fundamental advances in optical design, photomask technology, and resist materials.

If Hyper-NA arrives on schedule, it would validate the approach of continuous NA scaling as the primary driver of lithography advancement. If it is delayed or proves impractical, the industry may need to pursue entirely different patterning strategies — further vindicating TSMC's conservative approach to High-NA adoption.

## The Competitive Calculus

The High-NA rollout creates the most significant competitive divergence in semiconductor manufacturing in a decade.

Intel and Samsung are betting that High-NA's single-patterning advantage will translate into simpler processes, faster yield ramp, and lower defect density — enabling them to close the gap with TSMC at the leading edge. Intel's 14A and Samsung's 2nm are designed around High-NA capabilities that TSMC's A16 and A14 deliberately forego.

TSMC is betting that its superior process engineering, yield optimization, and customer relationships can overcome the theoretical disadvantage of multi-patterning — and that the hundreds of millions saved per High-NA system are better invested in other aspects of manufacturing capability.

The resolution of this bet will shape the semiconductor industry's competitive landscape through the end of the decade. It will determine whether ASML's most expensive product achieves the ubiquity of its standard EUV scanners — or whether the market concludes that $380 million per machine is a premium the economics of chipmaking cannot justify.

---

## References

[1] ASML, "TWINSCAN EXE:5200B Product Page." [asml.com](https://www.asml.com/en/products/euv-lithography-systems/twinscan-exe-5200b)

[2] ASML, "Q4 2025 Financial Results." [asml.com](https://www.asml.com/en/investors/financial-results/q4-2025)

[3] Tom's Hardware, "Intel installs industry's first commercial High-NA EUV lithography tool." [tomshardware.com](https://www.tomshardware.com/tech-industry/semiconductors/intel-installs-industrys-first-commercial-high-na-euv-lithography-tool-asml-twinscan-exe-5200b-sets-the-stage-for-14a)

[4] TweakTown, "Intel doubles High-NA EUV orders." [tweaktown.com](https://www.tweaktown.com/news/107875/intel-increases-asmls-new-high-na-euv-machine-orders-ready-for-14a-process-against-tsmc/index.html)

[5] TrendForce, "Samsung reportedly purchasing two ASML High-NA EUV tools for mass production." [trendforce.com](https://www.trendforce.com/news/2025/10/16/news-samsung-reportedly-purchasing-two-asml-high-na-euv-tools-for-mass-production-by-1h26/)

[6] GSMArena, "Samsung announces Exynos 2600, the world's first 2nm mobile chip." [gsmarena.com](https://www.gsmarena.com/samsung-announces-exynos-2600-the-worlds-first-2nm-mobile-chip-news-70790.php)

[7] Digitimes, "Tesla doubles AI6 chip orders from Samsung." [digitimes.com](https://www.digitimes.com/news/a20260305PD237/samsung-production-semiconductor-industry-plant-tesla.html)

[8] TrendForce, "SK Hynix leads the pack to introduce ASML's High-NA EUV system for memory production." [trendforce.com](https://www.trendforce.com/news/2025/09/03/news-sk-hynix-leads-the-pack-to-introduce-asmls-high-na-euv-system-for-memory-production/)

[9] Tom's Hardware, "TSMC reiterates it doesn't need High-NA EUV for 1.4nm-class process technology." [tomshardware.com](https://www.tomshardware.com/tech-industry/semiconductors/tsmc-reiterates-it-doesnt-need-high-na-euv-for-1-4nm-class-process-technology)

[10] Semi Engineering, "Multi-Patterning EUV vs. High-NA EUV." [semiengineering.com](https://semiengineering.com/multi-patterning-euv-vs-high-na-euv/)

[11] Tom's Hardware, "ASML explores Hyper-NA chipmaking tools as the next step in shrinking transistors." [tomshardware.com](https://www.tomshardware.com/tech-industry/manufacturing/asml-explores-hyper-na-chipmaking-tools-as-the-next-step-in-shrinking-transistors)
