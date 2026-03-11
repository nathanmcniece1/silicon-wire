# NVIDIA GTC 2026: Vera Rubin in Production, Feynman on the Horizon

**Beat:** Chips & Architecture
**Format:** Deep Dive
**Published:** March 9, 2026
**Read time:** 14 min

**Excerpt:** NVIDIA's Vera Rubin platform — 336 billion transistors, 288GB of HBM4, 50 petaflops per GPU — is already in production and shipping to hyperscalers. But the real reveal at GTC 2026 may be Feynman: the first 1.6nm AI chip with silicon photonics, targeting 2028.

---

On January 5, 2026, Jensen Huang stepped onto the CES stage in Las Vegas and delivered a statement that would have been unthinkable three years ago: NVIDIA's next-generation AI platform, Vera Rubin, was already in full production [1]. Not sampling. Not qualification. Full production — six months ahead of the original timeline.

The announcement transformed what was supposed to be a preview event into a production milestone. NVIDIA had not only designed the most complex AI computing platform ever built — 72 GPUs, 36 CPUs, six custom chip families, 336 billion transistors per GPU — it had pulled mass production forward to Q1 2026, with systems available to cloud partners in the second half of the year [2].

Now, as GTC 2026 opens in San Jose on March 16, the conversation has already moved beyond Rubin. The conference is expected to showcase detailed Vera Rubin NVL72 system architectures, but the headline event may be the first public unveiling of Feynman — NVIDIA's 2028 architecture built on TSMC's 1.6nm A16 process with silicon photonics, the first time optical data transmission has been integrated into a GPU platform [3].

This is the story of where NVIDIA's roadmap stands: what Rubin delivers, what Feynman promises, and what both mean for the AI supply chain.

## Vera Rubin: The Six-Chip Platform

The Vera Rubin platform represents what NVIDIA calls "extreme co-design" — the simultaneous development of six custom chips optimized to function as a single coherent system [2]. This is not simply a GPU refresh. It is a complete platform redesign touching compute, memory, networking, and system architecture.

The six chips are: the Rubin GPU, the Vera CPU, the NVLink 6 Switch, the ConnectX-9 SuperNIC, the BlueField-4 DPU, and the Spectrum-6 Ethernet Switch [2]. Each was designed in tandem to eliminate the bottlenecks that constrained Blackwell-era deployments.

The platform's flagship configuration is the Vera Rubin NVL72: a rack-scale AI supercomputer unifying 72 Rubin GPUs and 36 Vera CPUs into a single logical system [4]. Each rack delivers 3.6 exaFLOPS of NVFP4 inference performance and 2.5 exaFLOPS of NVFP4 training performance [4], connected by 260 TB/s of NVLink 6 scale-up bandwidth through nine NVLink 6 switches [5].

To put those numbers in context: a single Vera Rubin NVL72 rack delivers more raw AI compute than the entire top 10 of the November 2024 TOP500 supercomputer list combined.

## The Rubin GPU: 336 Billion Transistors

At the heart of the platform sits the Rubin R200 GPU — 336 billion transistors, a 62% increase over Blackwell's 208 billion and a 4.2x increase over the H100's 80 billion [6]. The chip is manufactured on TSMC's N3P (3nm-class) process and represents a paradigm shift in GPU packaging.

The R200 is not a monolithic die. It comprises two near-reticle-sized compute tiles connected via TSMC's SoIC (System-on-Integrated-Chips) 3D vertical stacking technology, along with a pair of dedicated I/O dies [7]. The entire assembly is then integrated using TSMC's CoWoS-L (Chip-on-Wafer-on-Substrate-Large) advanced packaging, creating what is effectively a 4x reticle design — four times the area achievable with a single lithography exposure [8].

This packaging approach is significant. By combining CoWoS-L for lateral integration with SoIC for vertical stacking, NVIDIA has created shorter interconnect paths between compute tiles, reducing power consumption while increasing bandwidth between the two GPU halves [8]. It is the first production GPU to combine both packaging technologies.

Each Rubin GPU carries eight stacks of HBM4 memory, delivering 288GB of capacity and 22 TB/s of memory bandwidth [6] — nearly tripling the memory bandwidth of Blackwell's HBM3e configuration. The total HBM4 memory across a full NVL72 rack reaches 20.7 TB, offering 1.6 PB/s of aggregate bandwidth [4].

Individual GPU performance is rated at 50 petaflops of NVFP4 inference and 35 petaflops of NVFP4 training [6] — 5x and 3.5x improvements over Blackwell, respectively.

## The Vera CPU: NVIDIA's Custom Arm Core

Paired with each Rubin GPU is the Vera CPU, NVIDIA's second-generation custom Arm-based data center processor. Vera features 88 proprietary "Olympus" cores — Armv9.2-compatible, with 2-way simultaneous multithreading enabling 176 threads per socket [9].

NVIDIA introduced a new capability called Spatial Multi-Threading, which physically partitions each core's resources rather than time-slicing them [9]. This allows the system to optimize for either performance or throughput density at runtime — a meaningful advantage for AI workloads that alternate between compute-bound training passes and memory-bound inference serving.

The CPU packs 227 billion transistors and pairs its cores with up to 1.5TB of LPDDR5X memory, delivering up to 1.2 TB/s of memory bandwidth [5]. The CPU-to-GPU coherent link operates at 1.8 TB/s via NVLink-C2C, enabling seamless data sharing between processors without the latency penalties of PCIe [9].

With 36 Vera CPUs in each NVL72 rack, the system provides 54 TB of LPDDR5X memory for host-side operations — handling data preprocessing, scheduling, and orchestration without competing for GPU HBM bandwidth [4].

## The Performance Claims: 10x Lower Cost Per Token

NVIDIA's headline economic claim is striking: Vera Rubin delivers up to a 10x reduction in inference token cost compared to Blackwell, and requires 4x fewer GPUs to train mixture-of-experts models [10].

The 10x cost reduction is driven by three factors working in combination: the raw 5x inference performance improvement per GPU, higher memory bandwidth enabling larger batch sizes and more efficient KV-cache utilization, and architectural optimizations in the updated Transformer Engine that specifically accelerate MoE routing [10].

For training, the 4x GPU efficiency gain on MoE workloads comes from Rubin's NVLink 6 fabric, which provides enough inter-GPU bandwidth to keep expert routing overhead minimal even at 72-GPU scale [2]. MoE architectures — now the dominant approach for frontier models, used by Google, Meta, Mistral, and DeepSeek — require high all-to-all communication bandwidth to route tokens to the correct expert sub-networks, a bottleneck that Blackwell's NVLink 5 partially addressed but Rubin's NVLink 6 effectively eliminates at rack scale.

These are not theoretical numbers. NVIDIA has published benchmarks showing that leading inference providers achieved up to 10x cost-per-token reductions on open-source MoE models running on the Blackwell platform [11], and Rubin extends those gains by 5x.

## Production Status and Cloud Availability

The production timeline acceleration is perhaps the most strategically important aspect of the Vera Rubin launch. At CES 2026, Jensen Huang confirmed that Rubin is "in full production" [1] — a statement that surprised the industry given that original guidance pointed to mass production in H2 2026.

Partner availability is now set for the second half of 2026, with confirmed deployment commitments from AWS, Google Cloud, Microsoft Azure, and Oracle Cloud Infrastructure, as well as NVIDIA Cloud Partners CoreWeave, Lambda, Nebius, and Nscale [2].

Microsoft has been particularly specific about its readiness: the company disclosed that its next-generation Fairwater AI superfactories will scale to "hundreds of thousands" of Vera Rubin Superchips, using closed-loop liquid cooling systems that eliminate water consumption [12].

The liquid cooling requirement is not optional. Each NVL72 rack is expected to draw substantial power — the successor Rubin Ultra NVL576 configuration is rated at approximately 600 kW per rack [13] — pushing well beyond what air cooling can handle.

## The Rubin Roadmap: Ultra in 2027

Vera Rubin NVL72 is only the first step. NVIDIA's disclosed roadmap shows Rubin Ultra arriving in the second half of 2027 [14], representing a massive scale-up of the platform.

Rubin Ultra will pack four reticle-limited GPU chiplets into a single socket, delivering 100 petaflops of FP4 performance per GPU [14] — double the already enormous Rubin R200. The system will feature HBM4e memory with 1 TB per GPU and 4.6 PB/s of HBM4e bandwidth [14].

The full Rubin Ultra rack configuration, designated NVL576, will contain 576 GPUs and offer 365 TB of memory [13]. At 15 exaFLOPS of FP4 inference compute [14], a single Rubin Ultra rack will deliver computational throughput that would have ranked as the world's most powerful supercomputer as recently as 2023.

The progression from NVL72 (72 GPUs) to NVL576 (576 GPUs) reflects NVIDIA's strategy of scaling rack-level systems rather than individual chips — a recognition that AI workload performance is increasingly determined by system-level bandwidth and memory capacity rather than peak single-chip compute.

## Feynman: The 2028 Architecture

The more forward-looking revelation at GTC 2026 is expected to be Feynman — NVIDIA's 2028 architecture, named after physicist Richard Feynman [15].

Feynman represents two simultaneous technology transitions that have never been attempted together in a production GPU: the move to TSMC's A16 (1.6nm) process node, and the integration of silicon photonics for chip-to-chip data transmission [3].

**TSMC A16:** The A16 node is TSMC's first process to feature Super Power Rail (SPR) — backside power delivery that routes power through the back of the wafer rather than competing with signal routing on the front side [3]. Compared to TSMC's N2 (2nm) process, A16 is expected to offer up to 10% higher performance or 20% lower power consumption [16]. NVIDIA is reportedly positioned to be TSMC's first — and possibly only — customer for A16 during the initial high-volume manufacturing phase [17].

**Silicon Photonics:** Feynman will feature the world's first 1.6T co-packaged optics (CPO) system using micro-ring resonator modulation technology [3]. Instead of transmitting data between chips and across racks using electrical signals through copper traces, Feynman will use light — reducing interconnect power consumption by approximately 3.5x compared to electrical interconnects [18].

This is not a minor improvement. In current-generation data center deployments, a significant fraction of total system power is consumed by electrical data transmission between GPUs, between racks, and between compute and storage. Silicon photonics at the package level could fundamentally alter the power budget of AI data centers.

The system architecture advances as well: Feynman will feature an 8th-generation NVSwitch, next-generation Spectrum 7 Ethernet, and CX10 InfiniBand optical interconnects [18], all leveraging the silicon photonics fabric for dramatically higher bandwidth at lower power.

Feynman will use "next-generation HBM" memory — likely HBM4e or its successor — though exact specifications remain undisclosed [18].

## Supply Chain Implications

The Vera Rubin platform creates enormous downstream demand across the semiconductor supply chain:

**TSMC:** Rubin's N3P process and CoWoS-L packaging place massive demands on TSMC's most advanced fabrication and packaging lines. NVIDIA is expected to command the majority of TSMC's CoWoS-L capacity through 2027 [19]. The shift from Blackwell's simpler packaging to Rubin's combined CoWoS-L + SoIC approach means each GPU consumes more packaging capacity than its predecessor, even as TSMC races to expand.

**HBM4 Memory:** Each Rubin GPU requires eight stacks of HBM4 memory. At 72 GPUs per NVL72 rack, that is 576 HBM4 stacks per rack — an enormous volume. SK Hynix has secured approximately 60% of NVIDIA's total HBM4 requirements for 2026 [20], with Samsung and Micron competing for the remainder. SK Hynix and Micron have partnered with TSMC to manufacture their HBM4 base logic dies, while Samsung is offering an integrated solution using its own 4nm foundry [21].

**16-Hi HBM Push:** NVIDIA has requested all three memory suppliers deliver 16-layer (16-Hi) HBM4 devices by Q4 2026 [22], an acceleration of the memory industry's roadmap. SK Hynix has already unveiled a 16-layer HBM4 device delivering 48GB capacity and over 2 TB/s of bandwidth [22]. The push to 16-Hi stacking will increase per-GPU memory capacity from 288GB to potentially 576GB, a critical enabler for larger model context windows and more efficient inference batching.

**Feynman and A16:** NVIDIA's position as the likely first A16 customer [17] means TSMC must bring A16 to high-volume manufacturing readiness on NVIDIA's timeline — an unusual degree of customer dependency even by semiconductor standards. The silicon photonics integration adds additional packaging complexity that the industry has not yet produced at scale.

## What GTC 2026 Means

GTC 2026 (March 16–19, San Jose) is expected to provide detailed technical specifications for Vera Rubin NVL72 systems, early benchmarks from partner deployments, and the first public showcase of Feynman silicon [3].

Jensen Huang has personally hyped the event, promising to unveil a chip that will "surprise the world" [23]. Given that Rubin is already known and in production, the "surprise" almost certainly refers to Feynman — potentially including first silicon samples manufactured on TSMC's A16 process, which would make them the world's first 1.6nm chips shown publicly.

The broader significance is NVIDIA's cadence. The company has committed to an annual architecture cycle: Blackwell (2024), Rubin (2026), Rubin Ultra (2027), Feynman (2028) [14]. Each generation delivers 3–5x performance improvements, which means the cost per AI operation continues to fall even as the absolute spending on AI infrastructure climbs.

For the AI supply chain, GTC 2026 is less about the chips themselves and more about the cascade of demand they create: more CoWoS-L capacity, more HBM4 production, more liquid cooling infrastructure, more power, more data center square footage. Every Vera Rubin NVL72 rack shipped is a commitment by the buyer to an entire ecosystem of supporting infrastructure.

The $56 billion question from TSMC's capex budget finds its answer in NVIDIA's roadmap. The silicon exists because the demand exists, and the demand exists because the silicon keeps getting better.

---

## References

[1] DataCenterDynamics, "Nvidia CEO announces Vera Rubin chips are in full production during CES keynote," January 2026. [datacenterdynamics.com](https://www.datacenterdynamics.com/en/news/nvidia-ceo-announces-vera-rubin-chips-are-in-full-production-during-ces-keynote/)

[2] NVIDIA Newsroom, "NVIDIA Kicks Off the Next Generation of AI With Rubin — Six New Chips, One Incredible AI Supercomputer," January 2026. [nvidianews.nvidia.com](https://nvidianews.nvidia.com/news/rubin-platform-ai-supercomputer)

[3] TrendForce, "NVIDIA GTC 2026 in Focus: Feynman Reportedly on TSMC A16, Samsung & SK hynix to Showcase HBM4," February 2026. [trendforce.com](https://www.trendforce.com/news/2026/02/25/news-nvidia-gtc-2026-in-focus-feynman-reportedly-on-tsmc-a16-samsung-sk-hynix-to-showcase-hbm4/)

[4] VideoCardz, "NVIDIA Vera Rubin NVL72 Detailed: 72 GPUs, 36 CPUs, 260 TB/s Scale-Up Bandwidth," January 2026. [videocardz.com](https://videocardz.com/newz/nvidia-vera-rubin-nvl72-detailed-72-gpus-36-cpus-260-tb-s-scale-up-bandwidth)

[5] NVIDIA, "NVIDIA Vera Rubin NVL72 | Co-Designed Infrastructure for Agentic AI," product page. [nvidia.com](https://www.nvidia.com/en-us/data-center/vera-rubin-nvl72/)

[6] Tom's Hardware, "Nvidia launches Vera Rubin NVL72 AI supercomputer at CES — promises up to 5x greater inference performance and 10x lower cost per token than Blackwell," January 2026. [tomshardware.com](https://www.tomshardware.com/pc-components/gpus/nvidia-launches-vera-rubin-nvl72-ai-supercomputer-at-ces-promises-up-to-5x-greater-inference-performance-and-10x-lower-cost-per-token-than-blackwell-coming-2h-2026)

[7] Tom's Hardware, "Nvidia's Vera Rubin platform in depth — Inside Nvidia's most complex AI and HPC platform to date," January 2026. [tomshardware.com](https://www.tomshardware.com/pc-components/gpus/nvidias-vera-rubin-platform-in-depth-inside-nvidias-most-complex-ai-and-hpc-platform-to-date)

[8] Semicon Electronics, "NVIDIA Rubin GPU: Advancements in Process and Packaging Technologies." [semicone.com](https://www.semicone.com/article-179.html)

[9] NVIDIA Developer Blog, "Inside the NVIDIA Rubin Platform: Six New Chips, One AI Supercomputer," January 2026. [developer.nvidia.com](https://developer.nvidia.com/blog/inside-the-nvidia-rubin-platform-six-new-chips-one-ai-supercomputer/)

[10] NVIDIA Newsroom, "NVIDIA Kicks Off the Next Generation of AI With Rubin," January 2026. [nvidianews.nvidia.com](https://nvidianews.nvidia.com/news/rubin-platform-ai-supercomputer)

[11] NVIDIA Blog, "Leading Inference Providers Cut AI Costs by up to 10x With Open Source Models on NVIDIA Blackwell." [blogs.nvidia.com](https://blogs.nvidia.com/blog/inference-open-source-models-blackwell-reduce-cost-per-token/)

[12] Microsoft Azure Blog, "Microsoft's strategic AI datacenter planning enables seamless, large-scale NVIDIA Rubin deployments," January 2026. [azure.microsoft.com](https://azure.microsoft.com/en-us/blog/microsofts-strategic-ai-datacenter-planning-enables-seamless-large-scale-nvidia-rubin-deployments/)

[13] DataCenterDynamics, "Nvidia's Rubin Ultra NVL576 rack expected to be 600kW, coming second half of 2027." [datacenterdynamics.com](https://www.datacenterdynamics.com/en/news/nvidias-rubin-ultra-nvl576-rack-expected-to-be-600kw-coming-second-half-of-2027/)

[14] Tom's Hardware, "Nvidia announces Rubin GPUs in 2026, Rubin Ultra in 2027, Feynman also added to roadmap." [tomshardware.com](https://www.tomshardware.com/pc-components/gpus/nvidia-announces-rubin-gpus-in-2026-rubin-ultra-in-2027-feynam-after)

[15] Feynman (microarchitecture), Wikipedia. [en.wikipedia.org](https://en.wikipedia.org/wiki/Feynman_(microarchitecture))

[16] TrendForce, "NVIDIA GTC 2026 in Focus: Feynman Reportedly on TSMC A16," February 2026. [trendforce.com](https://www.trendforce.com/news/2026/02/25/news-nvidia-gtc-2026-in-focus-feynman-reportedly-on-tsmc-a16-samsung-sk-hynix-to-showcase-hbm4/)

[17] Android Headlines, "NVIDIA Could Beat Apple to TSMC's Most Advanced Chip Process," February 2026. [androidheadlines.com](https://www.androidheadlines.com/2026/02/nvidia-could-beat-apple-to-tsmcs-most-advanced-chip-process-and-its-not-even-close-to-ready.html)

[18] Tom's Hardware, "Nvidia enterprise GPU and CPU roadmaps: Rubin, Rubin Ultra, Feynman, and silicon photonics." [tomshardware.com](https://www.tomshardware.com/tech-industry/semiconductors/nvidia-enterprise-roadmap-rubin-rubin-ultra-feynman-and-silicon-photonics)

[19] Financial Content, "TSMC Boosts CoWoS Capacity as NVIDIA Dominates Advanced Packaging Orders through 2027," December 2025. [markets.financialcontent.com](https://markets.financialcontent.com/wral/article/tokenring-2025-12-26-tsmc-boosts-cowos-capacity-as-nvidia-dominates-advanced-packaging-orders-through-2027)

[20] Financial Content, "The 2026 HBM4 Memory War: SK Hynix, Samsung, and Micron Battle for NVIDIA's Rubin Crown," January 2026. [markets.financialcontent.com](https://markets.financialcontent.com/stocks/article/tokenring-2026-1-15-the-2026-hbm4-memory-war-sk-hynix-samsung-and-micron-battle-for-nvidias-rubin-crown)

[21] Financial Content, "The 2026 HBM4 Memory War," January 2026. [markets.financialcontent.com](https://markets.financialcontent.com/stocks/article/tokenring-2026-1-15-the-2026-hbm4-memory-war-sk-hynix-samsung-and-micron-battle-for-nvidias-rubin-crown)

[22] Tweaktown, "SK hynix, Samsung, and Micron fighting for NVIDIA supply contracts for new 16-Hi HBM4 orders." [tweaktown.com](https://www.tweaktown.com/news/109495/sk-hynix-samsung-and-micron-fighting-for-nvidia-supply-contracts-for-new-16-hi-hbm4-orders/index.html)

[23] Neowin, "NVIDIA CEO hypes up GTC 2026, promises to unveil a chip that will 'surprise the world'." [neowin.net](https://www.neowin.net/news/nvidia-ceo-hypes-up-gtc-2026-promises-to-unveil-a-chip-that-will-surprise-the-world/)
