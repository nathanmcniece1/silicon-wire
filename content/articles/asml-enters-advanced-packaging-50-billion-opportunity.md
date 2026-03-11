# ASML Enters Advanced Packaging: The $50 Billion Opportunity Beyond EUV

**Beat:** Materials & Fab
**Format:** Deep Dive
**Published:** March 9, 2026
**Read time:** 12 min

**Excerpt:** ASML shipped its first advanced packaging lithography system — the TWINSCAN XT:260 — in late 2025, marking the company's strategic expansion beyond EUV. With the advanced packaging market surpassing $50 billion annually and TSMC's CoWoS capacity constraining every major AI chip program, the lithography monopolist is opening a new competitive front. Here's what it means for the supply chain.

---

For three decades, ASML has been synonymous with one thing: pushing the boundaries of photolithography to print ever-smaller transistors. Its extreme ultraviolet (EUV) machines — $200 million instruments that focus 13.5-nanometer light through the most complex optical systems ever built — are the reason chips at 5nm, 3nm, and now 2nm exist at all [1].

But in late 2025, ASML shipped something different. The TWINSCAN XT:260 is not an EUV scanner. It is an i-line lithography system operating at 365 nanometers — a wavelength so mature it predates the smartphone era. Its resolution of approximately 400 nanometers would be laughable for transistor patterning. And yet, this machine may represent ASML's most strategically important product launch in years [1].

The XT:260 is designed for advanced packaging — the increasingly critical layer of semiconductor manufacturing that connects multiple chiplets, memory stacks, and logic dies into a single high-performance module. And in a world where AI accelerators are defined as much by their packaging as by their transistors, ASML's entry into this market signals a fundamental shift in the company's growth strategy.

## The Packaging Bottleneck

To understand why ASML is entering advanced packaging, you need to understand why packaging has become the semiconductor industry's most consequential bottleneck.

Every NVIDIA Blackwell GPU, every Google TPU, and every AMD Instinct accelerator relies on advanced packaging to integrate high-bandwidth memory (HBM) with logic dies on a silicon interposer. The dominant technology — TSMC's Chip-on-Wafer-on-Substrate (CoWoS) — uses through-silicon vias and redistribution layers to create the dense interconnections that enable terabytes-per-second memory bandwidth [2].

TSMC commands more than 50% of the global CoWoS market, and demand has overwhelmed capacity. The company's CoWoS utilization stood at 75,000 to 80,000 wafers per month in late 2025, and global demand for 2026 is projected at one million wafers — roughly 25% more than available supply [3].

The consequences of this shortage are already visible. In December 2025, DigiTimes reported that Google reduced its 2026 TPU production target from four million to three million units — not because demand softened, but because NVIDIA had secured priority access to TSMC's CoWoS capacity [4]. When the world's second-largest AI chip buyer loses 25% of its production slots to packaging constraints, the bottleneck is not theoretical.

TSMC is responding with aggressive expansion. The company targets 120,000 to 130,000 CoWoS wafers per month by the end of 2026, with its AP7 complex in Chiayi becoming the world's largest advanced packaging hub [5]. But even this expansion leaves a gap between supply and demand — and it creates an enormous market for the tools that make advanced packaging possible.

## What the XT:260 Actually Does

Advanced packaging lithography is fundamentally different from the cutting-edge EUV patterning that ASML is known for. Where EUV operates in vacuum chambers with reflective optics to achieve 13.5nm resolution, the XT:260 uses transmissive optics at atmospheric pressure to pattern features at roughly 400 nanometers [1].

This sounds primitive — and for transistor manufacturing, it would be. But advanced packaging doesn't need single-digit nanometer resolution. It needs something different: the ability to pattern interconnects, redistribution layers, and vias on large substrates with significant topography. CoWoS interposers have surface variations measured in tens of microns — a challenge that EUV scanners, designed for atomically flat wafers, are not built to handle.

The XT:260's headline specification is throughput: 270 wafers per hour, roughly four times faster than existing advanced packaging lithography solutions [1]. In a market defined by capacity constraints, this is the metric that matters. If TSMC, Samsung, and Intel can pattern packaging layers four times faster, they can produce substantially more CoWoS-equivalent capacity from the same cleanroom footprint.

## A $50 Billion Market Opens

The financial opportunity is significant. Advanced packaging surpassed traditional packaging for the first time in 2025, with the market reaching an estimated $42 to $51 billion [6]. Growth projections suggest the market will reach $78.6 billion by 2028, driven by the same AI demand cycle that has supercharged TSMC's logic business [6].

For ASML, this represents a new growth vector at a time when the EUV market, while still expanding, faces potential saturation. EUV accounted for 48% of ASML's system revenue in 2025 — €11.6 billion out of the company's record €32.7 billion total — up from 38% in 2024 [7]. The progression from 38% to 48% in a single year is impressive, but it also implies that EUV's share of system revenue may approach its natural ceiling within the next few years.

Advanced packaging lithography offers ASML a way to grow the denominator. If the company can capture even 5 to 10% of the advanced packaging tooling market over the next decade, it adds billions to its revenue base without cannibalizing EUV sales.

## CoWoS-L vs. CoWoS-S: Why Packaging Complexity Is Increasing

The packaging market is not monolithic, and its increasing complexity favors ASML's entry.

TSMC's CoWoS-S (standard) uses a single silicon interposer with through-silicon vias, limited to roughly 2,700 square millimeters — about 3.3 times the reticle size [8]. This was sufficient for earlier AI accelerators but is approaching its physical limits as chip designers demand larger packages with more HBM stacks.

CoWoS-L solves this by incorporating an active Local Silicon Interconnect (LSI) chip as the interposer, breaking the 2,500 square millimeter barrier and supporting up to 12 HBM3 stacks [8]. CoWoS-L is more cost-effective than CoWoS-S at larger sizes while maintaining interconnect density — and both variants are fully booked through 2026 [8].

Each new packaging variant adds lithography steps. CoWoS-L requires patterning the LSI chip, the redistribution layers, and the via connections — all of which demand high-throughput packaging lithography. As TSMC, Samsung, and Intel scale up increasingly complex packaging architectures, the demand for tools like the XT:260 grows proportionally.

## The Competitive Landscape

ASML is not entering an empty market. Canon has maintained a portfolio of i-line lithography equipment for decades, supporting wafer sizes from 50mm to 300mm. Nikon is making an aggressive play: in July 2025, it began accepting orders for the DSP-100 Digital Lithography System, a maskless system using a spatial light modulator instead of traditional photomasks [9].

Nikon's DSP-100 offers 1.0 micrometer resolution, handles substrates up to 600mm square panels, and processes 50 panels per hour [9]. Its maskless design is a genuine advantage for advanced packaging, where the diversity of package designs makes photomask production an expensive bottleneck. Nikon is also developing a new ArF lithography system targeting fiscal year 2028 production [10].

ASML's XT:260 competes on throughput — 270 wafers per hour against Nikon's 50 panels per hour — but the comparison is imperfect because the systems target different substrate sizes and workflows. The market is likely large enough for both approaches to coexist, with ASML's optical lithography dominating high-volume CoWoS production and Nikon's maskless system finding traction in lower-volume, higher-mix packaging applications.

## TSMC's Packaging Expansion and the Outsourcing Strategy

TSMC's packaging expansion extends beyond its own fabs. The company is outsourcing 240,000 to 270,000 wafers annually in 2026 to OSAT (Outsourced Semiconductor Assembly and Test) partners, with Amkor handling 180,000 to 190,000 wafers and SPIL taking 60,000 to 80,000 [5].

This outsourcing strategy creates additional demand for packaging lithography tools. As OSAT partners scale their advanced packaging lines, they need the same lithography equipment that TSMC uses in-house. ASML's customer base for the XT:260 is therefore not limited to the big three foundries — it extends to every OSAT company building CoWoS-compatible capacity.

Arizona's P6 facility is being evaluated as a U.S.-based advanced packaging hub, which would bring TSMC's packaging capabilities — and tool procurement — to American soil for the first time [5].

## The Strategic Logic: Hedging Beyond EUV

ASML's 2026 revenue guidance of €34 to €39 billion reflects confidence in continued EUV demand [7]. But the company's leadership understands that lithography's role in the semiconductor supply chain is expanding beyond the traditional definition of "printing smaller transistors."

Advanced packaging is where chip design is heading. Chiplet architectures — where multiple smaller dies are integrated on a package rather than monolithically manufactured on a single large die — are becoming the standard approach for AI accelerators, high-performance computing, and even consumer processors. Every chiplet architecture requires advanced packaging, and every advanced packaging line requires lithography.

By entering this market now, ASML is positioning itself at both ends of the lithography value chain: EUV for the transistors, and i-line for the packages that connect them. It's a hedging strategy, certainly. But it's also an acknowledgment that the $50 billion packaging market is too large, too fast-growing, and too strategically important for the world's most valuable semiconductor equipment company to ignore.

The TWINSCAN XT:260 may not be as headline-grabbing as a High-NA EUV scanner. But in an industry where packaging has become the binding constraint on AI chip supply, a machine that patterns packaging layers four times faster may ultimately move more revenue than the next increment of EUV resolution.

---

## References

[1] Tom's Hardware, "ASML Launches Revolutionary Lithography Scanner for Advanced 3D Packaging," 2025. https://www.tomshardware.com/tech-industry/semiconductors/asml-launches-revolutionary-lithography-scanner-for-advanced-3d-packaging-twinscan-xt-360-machine-quadruples-throughput

[2] TSMC 3D Fabric, "CoWoS Technology Overview." https://3dfabric.tsmc.com

[3] Global Semi Research, "TSMC's CoWoS Capacity Scaling Up." https://globalsemiresearch.substack.com/p/tsmcs-cowos-capacity-scaling-up-outsourcing

[4] DigiTimes, "Google TPU demand remains strong, but CoWoS and memory cap 2026 production," December 9, 2025. https://www.digitimes.com/news/a20251209PD215/google-tpu-demand-production-cowos.html

[5] TrendForce, "TSMC Speeds Advanced Packaging: AP7 Targets 2026 Output," December 4, 2025. https://www.trendforce.com/news/2025/12/04/news-tsmc-speeds-advanced-packaging-ap7-targets-2026-output-arizona-p6-eyed-for-u-s-packaging-hub/

[6] Chip Stock Investor, "ASML's New Advanced Packaging Lithography Tool: Fresh Growth for 2026." https://chipstockinvestor.com/asmls-new-advanced-packaging-lithography-tool-fresh-growth-for-2026/

[7] ASML Q4 2025 Investor Presentation, January 28, 2026. https://ourbrand.asml.com/m/3136300aa4999bc1/original/2026_01_28_Presentation-Investor-Relations-Q4-2025.pdf

[8] AmiNext, "TSMC CoWoS-S, CoWoS-R, and CoWoS-L Differences." https://www.aminext.blog/en/post/tsmc-cowos-s-r-l-differences

[9] Nikon Precision, "Nikon Announces Development of a Digital Lithography System with 1.0μm Resolution," July 2025. https://www.nikonprecision.com/nikon-announces-development-of-a-digital-lithography-system-with-1-0-micron-l-s1-resolution/

[10] TrendForce, "Nikon Aims to Close the Gap on ASML with New ArF Lithography System in FY28," February 2025. https://www.trendforce.com/news/2025/02/21/news-nikon-aims-to-close-the-gap-on-asml-with-new-arf-lithography-system-in-fy28/
