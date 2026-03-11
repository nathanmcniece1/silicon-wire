# The Liquid Cooling Inflection: Why Air Can't Cool a 1,200-Watt GPU

**Beat:** Infrastructure
**Format:** Supply Chain Map
**Published:** March 9, 2026
**Read time:** 12 min

**Excerpt:** NVIDIA's Blackwell GPUs consume 1,000 watts each. Vera Rubin will hit 1,800 watts. A single NVL72 rack draws 120 kilowatts. Air cooling physically cannot remove that much heat from that small a space. The liquid cooling market is projected to grow from $6 billion to $16 billion by 2030, and a wave of billion-dollar acquisitions — Vertiv, Schneider Electric, Eaton, Daikin — is reshaping the supply chain.

---

There is a thermodynamic wall in data center design, and the AI industry just hit it.

NVIDIA's H100 GPU consumed 700 watts [1]. The Blackwell B200 consumes 1,000 watts — a 43% increase [1]. The Vera Rubin GPU, entering production in the second half of 2026, will reach approximately 1,800 watts per package [2]. A full NVL72 rack — 72 GPUs and 36 CPUs in a single enclosure — draws 120 kilowatts or more [2].

Air cannot remove 120 kilowatts of heat from a single server rack. The physics is straightforward: air's thermal conductivity is too low, and the volumetric airflow required to cool a 120kW rack would create wind speeds and noise levels incompatible with any operational environment. The data center industry has spent three decades scaling air cooling. That scaling has ended.

The result is an industry-wide pivot to liquid cooling that is reshaping the data center supply chain — from the cold plates bolted to GPU packages to the coolant distribution units in the mechanical room to the billion-dollar acquisitions consolidating the cooling vendor landscape.

## The Power Curve

The GPU thermal design power (TDP) trajectory tells the story:

NVIDIA H100: 700W. Blackwell B200: 1,000W. Blackwell Ultra: 1,400W maximum. Vera Rubin VR200: 1,800W. VR200 NVL44 CPX: up to 3,700W [1][2].

Each generation's power increase outpaces Moore's Law efficiency gains. The compute per watt improves, but the total watts per GPU rises faster — because AI workloads demand more total compute than efficiency can offset.

At the rack level, the numbers are even more stark. A traditional enterprise server rack consumed 5–10 kilowatts. An air-cooled AI rack with H100 GPUs might hit 30–40 kilowatts. An NVIDIA GB200 NVL72 rack consumes approximately 120 kilowatts [3]. That is a 12–24x increase in power density compared to what most existing data centers were designed to handle.

NVIDIA's cooling specifications for the NVL72 are precise: inlet coolant temperature of 20–25°C, flow rate of 80 liters per minute, pressure drop not exceeding 1.5 bar, and GPU junction temperatures maintained below 75°C [3]. Deviation from these specifications triggers automatic 60% performance throttling [3]. The cooling system is not optional infrastructure — it is a performance-critical component that determines whether a $3 million GPU rack operates at full capability.

## The Cooling Technologies

Three liquid cooling approaches are competing for dominance in AI data centers.

**Direct-to-chip (cold plate) cooling** is the current mainstream approach for high-density AI deployments. Metal cold plates mount directly onto GPU packages, with liquid coolant circulating through channels to absorb heat. The heated coolant flows to a Coolant Distribution Unit (CDU) in the rack or row, where it transfers heat to a facility cooling loop. Direct-to-chip systems can handle approximately 75% of a rack's thermal load, with supplemental air cooling managing the remaining 25% from memory, networking, and storage components [4].

**Rear-door heat exchangers** replace the back door of a standard server rack with a liquid-cooled heat exchanger. Passive units handle 5–25 kW loads; active units with built-in fans reach 50 kW or more [4]. Rear-door exchangers are popular for retrofit scenarios because they integrate with existing rack form factors, but they lack the thermal capacity for 120kW+ AI racks.

**Immersion cooling** submerges entire servers in thermally conductive dielectric fluid — either single-phase (the fluid remains liquid) or two-phase (the fluid boils on contact with hot components, and the resulting vapor is condensed and returned) [5]. Immersion cooling is the most thermally efficient approach, eliminating air from the thermal path entirely. It also eliminates water from the cooling loop, addressing the water consumption concerns that have made data center environmental impact a growing policy issue.

## The Supply Chain Map

**NVIDIA (Santa Clara, CA):** Sets the thermal specifications that drive the entire cooling supply chain. Designs the GPU packages, NVLink trays, and rack-scale systems that determine cooling requirements. The NVL72's liquid cooling architecture defines what every vendor downstream must deliver.

**Vertiv (Columbus, OH):** Global leader in data center thermal management. Acquired PurgeRite for approximately $1 billion in December 2025, adding mechanical flushing, purging, and filtration capabilities for liquid cooling infrastructure [6]. Delivers CDUs, rear-door heat exchangers, and rack-level cooling systems. 27,000 employees operating in 130+ countries.

**Schneider Electric (Rueil-Malmaison, France):** Acquired Motivair for $850 million in October 2024, gaining cold plate technology and CDU manufacturing capabilities [7]. The acquisition positioned Schneider as a direct competitor to Vertiv in high-density liquid cooling.

**CoolIT Systems (Calgary, Canada):** Leading direct-to-chip cooling provider widely adopted by OEMs and colocation providers. Expanded R&D center in Toronto in June 2024 to accelerate next-generation cold plate development.

**Eaton (Dublin, Ireland):** Acquired Boyd Thermal in 2025 to build chip-to-grid thermal solutions capability [7].

**Daikin (Osaka, Japan):** Acquired Chilldyne in 2025 to enter the direct-to-chip liquid cooling market for hyperscale environments [7].

**Asetek (Aalborg, Denmark):** Pioneer of direct-to-chip and immersion cooling with patented solutions for heat and power reduction.

**GRC / Green Revolution Cooling (Austin, TX):** Pioneer of two-phase immersion cooling systems. Launched modular immersion units for hybrid edge deployments in March 2024.

The acquisition spree — Vertiv/PurgeRite ($1B), Schneider/Motivair ($850M), Eaton/Boyd, Daikin/Chilldyne — signals that the cooling industry is consolidating ahead of the demand wave. Companies are racing to build complete thermal management ecosystems before the hyperscaler buildout peaks.

## Hyperscaler Adoption

**Microsoft Fairwater:** Microsoft's next-generation Fairwater data center architecture uses a closed-loop liquid cooling system that eliminates water evaporation [8]. The system pipes hot liquid out of the building for external chilling and recirculation, requiring only an initial water fill equivalent to 20 homes' annual consumption. The water chemistry is designed for 6+ years between replacements. Fairwater facilities support approximately 140 kW per rack and deploy hundreds of thousands of NVIDIA GB200 and GB300 GPUs. The Atlanta Fairwater data center is a two-story facility with no UPS or diesel generators — a radical simplification enabled by liquid cooling's thermal consistency [8].

**Meta:** Deploying Air-Assisted Liquid Cooling (AALC) systems with rear-door heat exchangers supporting up to 40 kW per rack, with plans to transition to full facility water cooling as thermal loads increase [9]. Meta has achieved 120 kW per rack in previously air-cooled 20 kW data centers through retrofit — a 6x density improvement that demonstrates the transformative potential of liquid cooling in existing facilities [9].

**Google:** Using custom liquid-cooled racks for TPU deployments and developing water-conservative cooling technologies. Google's total 2023 water consumption exceeded 5 billion gallons across all data centers, with 31% of freshwater withdrawals from water-scarce watersheds [10].

## The Market

The global data center liquid cooling market is projected to reach approximately $16 billion by 2030, growing from roughly $6 billion in 2025 at a compound annual growth rate of 20–29% depending on the source and scope [11]. The CDU market alone — the centralized heat exchange units that every liquid-cooled rack requires — is projected to grow from $930 million in 2024 to nearly $6 billion by 2032 [12].

The immersion cooling segment, though smaller, is growing at 22.5% CAGR, from $294 million in 2024 to $1.49 billion by 2031 [11]. Immersion cooling's growth reflects the dual benefit of thermal efficiency and water elimination — a combination that addresses both the physics and the politics of data center cooling.

## The Retrofit Challenge

The transition to liquid cooling is not simply a matter of installing new equipment. Most existing data centers were designed for air cooling and lack the structural, plumbing, and power infrastructure that liquid cooling requires.

Structural constraints include floor load limits that cannot support the weight of liquid-cooled manifolds and CDUs. Raised floors, designed for under-floor air distribution, must be adapted for coolant piping. Power infrastructure designed for 5–10 kW per rack cannot support 50 kW+ loads even if cooling is available [13].

Retrofit costs range from $2–3 million per megawatt of cooling capacity — 20–40% less than building new facilities, but still substantial [13]. A complete liquid cooling retrofit of an existing data center requires careful phased migration, typically starting with 1–2 high-density racks before expanding.

The payback calculus depends on energy costs and utilization rates. In favorable conditions, liquid cooling retrofits achieve 2–5 year ROI through energy savings and increased rack density [13]. In less favorable scenarios, payback periods can extend to 12 years. The economic case is strongest in markets with high electricity costs and in facilities where the alternative is building entirely new data centers.

## The Water Question

Data center water consumption is emerging as a significant environmental and political concern. US data centers directly consumed approximately 17.4 billion gallons of water in 2023, a 216% increase from 2014 [14]. A single large data center can consume up to 5 million gallons per day. Training GPT-3 at a Microsoft US facility consumed an estimated 700,000 liters of freshwater through evaporative cooling [14].

Liquid cooling's relationship to water is nuanced. Traditional evaporative cooling consumes less energy but loses significant water to evaporation. Closed-loop liquid cooling is more energy efficient but can still require water in the cooling tower that rejects heat from the facility loop. True waterless alternatives — immersion cooling with dielectric fluids, or closed-loop systems like Microsoft Fairwater — eliminate water from the cooling cycle entirely, but at higher capital cost.

Google and Microsoft have both pledged to be "water positive by 2030," returning more water than they consume [14]. Liquid cooling — particularly immersion and closed-loop systems — is a necessary enabling technology for these commitments.

## What Comes Next

The liquid cooling inflection is not a temporary technology transition. It is a permanent change in data center infrastructure driven by a GPU power trajectory that shows no sign of flattening.

Every watt of GPU power must be removed as heat. As GPUs progress from 1,000 watts to 1,800 watts to eventually 3,700 watts per package, the cooling infrastructure must scale proportionally. The companies that control the thermal path — from the cold plate on the GPU to the CDU in the rack to the cooling plant that rejects heat to the atmosphere — occupy a critical and growing position in the AI supply chain.

The cooling industry's billion-dollar acquisition spree is the market's acknowledgment of this reality. In a world where the binding constraint on AI infrastructure is power, the ability to efficiently remove heat is the ability to deploy more compute per megawatt. Cooling is no longer a cost center. It is a competitive advantage.

---

## References

[1] NVIDIA Data Center GPU specifications, multiple sources including Tom's Hardware and DataCenterDynamics.

[2] Videocardz, "NVIDIA Vera Rubin NVL72 Detailed." [videocardz.com](https://videocardz.com/newz/nvidia-vera-rubin-nvl72-detailed-72-gpus-36-cpus-260-tb-s-scale-up-bandwidth)

[3] Tom's Hardware, "Cooling system for a single Nvidia Blackwell Ultra NVL72 rack costs a staggering $50,000." [tomshardware.com](https://www.tomshardware.com/pc-components/cooling/cooling-system-for-a-single-nvidia-blackwell-ultra-nvl72-rack-costs-a-staggering-usd50-000)

[4] Vertiv, "Understanding Direct-to-Chip Cooling in HPC Infrastructure." [vertiv.com](https://www.vertiv.com/en-us/about/news-and-insights/articles/educational-articles/understanding-direct-to-chip-cooling-in-hpc-infrastructure-a-deep-dive-into-liquid-cooling/)

[5] Microsoft, "To cool datacenter servers, Microsoft turns to boiling liquid." [microsoft.com](https://news.microsoft.com/source/features/innovation/datacenter-liquid-cooling/)

[6] Vertiv, "Vertiv Completes Acquisition of PurgeRite." [vertiv.com](https://www.vertiv.com/en-emea/about/news-and-insights/news-releases/vertiv-completes-acquisition-of-purgerite-expanding-leadership-in-liquid-cooling-services/)

[7] Data Center Frontier, "Chip-to-Grid Gets Bought: Eaton, Vertiv, and Daikin Deals Imply a New Thermal Capital Cycle." [datacenterfrontier.com](https://www.datacenterfrontier.com/cooling/article/55328396/chip-to-grid-gets-bought-eaton-vertiv-and-daikin-deals-imply-a-new-thermal-capital-cycle)

[8] Microsoft, "From Wisconsin to Atlanta: Microsoft connects datacenters to build its first AI superfactory." [microsoft.com](https://news.microsoft.com/source/features/ai/from-wisconsin-to-atlanta-microsoft-connects-datacenters-to-build-its-first-ai-superfactory/)

[9] DataCenterDynamics, "How Meta achieves 120kW a rack in 20kW air-cooled data centers." [datacenterdynamics.com](https://www.datacenterdynamics.com/en/news/how-meta-acheives-120kw-a-rack-in-20kw-air-cooled-data-centers/)

[10] Data Center Frontier, "Google Developing New 'Climate Conscious' Cooling Tech to Save Water." [datacenterfrontier.com](https://www.datacenterfrontier.com/cooling/article/33001080/google-developing-new-climate-conscious-cooling-tech-to-save-water/)

[11] GlobeNewsWire, "Data Center Liquid Cooling Market Report 2026." [globenewswire.com](https://www.globenewswire.com/news-release/2026/02/04/3232076/28124/en/Data-Center-Liquid-Cooling-Market-Report-2026-16-16-Bn-Opportunities-Trends-Competitive-Landscape-Strategies-and-Forecasts-2020-2025-2025-2030F-2035F.html)

[12] IntelMarketResearch, "Coolant Distribution Unit for Data Centers Market Outlook 2025–2032." [intelmarketresearch.com](https://www.intelmarketresearch.com/coolant-distribution-unit-for-data-centers-2025-2032-803-4537)

[13] DataCenterDynamics, "Retrofitting liquid cooling for AI data centers." [datacenterdynamics.com](https://www.datacenterdynamics.com/en/opinions/retrofitting-liquid-cooling-for-ai-data-centers-strategies-for-success/)

[14] EESI, "Data Centers and Water Consumption." [eesi.org](https://www.eesi.org/articles/view/data-centers-and-water-consumption)
