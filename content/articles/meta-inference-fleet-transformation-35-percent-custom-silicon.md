# Meta's Inference Fleet Transformation: 35% Custom Silicon by Year-End

**Beat:** Software & Models
**Format:** Deep Dive
**Published:** March 9, 2026
**Read time:** 12 min

**Excerpt:** Meta is executing the most aggressive custom silicon transition in tech history. MTIA v2 (Artemis) is deployed across 16 data center regions. MTIA v3 (Iris) — built on TSMC 3nm with HBM3E — entered broad deployment in February 2026. The target: 35% of Meta's inference fleet running on custom chips by year-end, with a 44% reduction in total cost of ownership compared to GPUs. Here's how the economics work, and what it means for NVIDIA.

---

Meta Platforms is doing what most hyperscalers have only talked about: systematically replacing NVIDIA GPUs with custom silicon for its largest AI workload category. The company's Meta Training and Inference Accelerator (MTIA) program has moved from research prototype to production deployment across four chip generations in under three years, and the pace is accelerating.

The numbers tell the story. MTIA v2 (Artemis) is deployed across 16 data center regions. MTIA v3 (Iris) — manufactured on TSMC's 3nm process with eight HBM3E memory stacks — entered broad deployment in February 2026 [1]. MTIA v4 (Santa Barbara), the first generation to incorporate HBM4 and require liquid cooling, is in the sampling phase with deployment planned for the second half of 2026 [2].

The target is explicit: more than 35% of Meta's total inference fleet running on MTIA hardware by the end of 2026 [2]. For a company that spent $72 billion on capital expenditures in fiscal 2025 — with $115 to $135 billion guided for 2026 — this represents a structural shift in how AI infrastructure dollars flow through the semiconductor supply chain [3].

## The Four Generations

Meta's MTIA roadmap reveals a company that has learned to iterate silicon at startup speed while deploying at hyperscaler scale.

**MTIA v1 (Freya)**, publicly announced in May 2023, was Meta's proof of concept. Built on TSMC's 7nm process, it delivered 102.4 TOPS at INT8 and 51.2 TFLOPS at FP16 within a 25-watt thermal envelope [4]. The chip featured 64 processing elements with 128 MB SRAM each and 128 GB LPDDR5 memory. It was modest by industry standards — but it validated that Meta could design, tape out, and deploy custom inference silicon.

**MTIA v2 (Artemis)** moved to TSMC's 5nm process and delivered 3.5x improvement in dense compute and 7x improvement in sparse compute over v1 [5]. Memory bandwidth increased 16.4% to 204.8 GB/s with doubled SRAM capacity. At the platform level — accounting for doubled devices and a 2-socket CPU configuration — Artemis achieved 6x model serving throughput over v1 with 1.5x improvement in performance per watt [5].

The headline metric: a 44% average reduction in total cost of ownership compared to GPUs for production models [5]. TCO encompasses chip price, electricity, cooling, operating expenses, and space — and at Meta's scale, a 44% reduction translates to billions in annual savings.

**MTIA v3 (Iris)**, designed in collaboration with Broadcom, represents the generation where MTIA becomes a credible data-center-scale platform [1]. Built on TSMC's cutting-edge 3nm process with back-end processing by GUC (a TSMC affiliate), Iris integrates eight HBM3E 12-high memory stacks delivering more than 3.5 TB/s aggregate bandwidth. Its 8×8 matrix computing architecture with a dedicated sparse computing pipeline is optimized specifically for Deep Learning Recommendation Models (DLRM) — the workload category that dominates Meta's inference costs [1].

**MTIA v4 (Santa Barbara)** is the first generation designed for the liquid cooling era. Expected to exceed 180 kW per rack, it requires highly customized rack designs and SideCARS configurations [2]. Santa Barbara will be Meta's first MTIA variant with HBM4 memory, and the company plans to deploy approximately 6,000 racks [2].

## Why Inference, Not Training

Meta's custom silicon strategy is deliberately focused on inference rather than training — a distinction that shapes every architectural decision.

Training frontier models like Llama requires dense, general-purpose compute with massive floating-point throughput. NVIDIA's GPUs, with their mature CUDA ecosystem and decades of optimization for matrix multiplication, remain the best tool for this job. Meta continues to use NVIDIA hardware extensively for Llama frontier model training [3].

Inference is different. Meta's inference fleet handles hundreds of billions of daily requests for content ranking, ad targeting, recommendation feeds (Reels, Instagram Explore, Facebook News Feed), and increasingly, Llama-powered generative features. These workloads are characterized by sparse embedding lookups, high-throughput batch processing, and relatively predictable computational patterns [6].

DLRM architectures — Meta's bread-and-butter inference workload — process categorical features through embedding tables with billions of entries, compute feature interactions, and feed results through multilayer perceptrons to predict click probability [6]. The computation is embedding-dominated with sparse features — a pattern that general-purpose GPUs handle adequately but not efficiently.

MTIA's architecture is specifically designed for these access patterns. The 7x improvement in sparse compute from v1 to v2, the dedicated sparse computing pipeline in Iris, and the "butterfly shuffle" primitive for efficient all-to-all communication during distributed embedding lookups are all optimizations that a general-purpose GPU cannot match for this specific workload [5].

The result: MTIA is approximately 30 to 40% less efficient than Google's TPU v6 for general LLM inference, but it achieves a 44% TCO reduction over GPUs for Meta's recommendation workloads [2]. This isn't a contradiction — it's specialization. Meta is not building a general-purpose AI accelerator. It's building the best possible chip for the workloads that drive its revenue.

## The Broadcom and Marvell Partnerships

Meta's chip development relies on two external design partners, each serving a distinct role.

**Broadcom** is the primary compute and I/O design services provider, serving as the lead design partner for both MTIA v2 (Artemis) and MTIA v3 (Iris) [7]. Broadcom's expertise in custom ASIC design — honed through partnerships with Google, and other hyperscalers — provides Meta with the engineering capacity to iterate silicon generations on an annual cadence.

**Marvell Technology** developed **Arke**, an inference-only variant within the MTIA v3 generation [2]. Built on 2nm process technology and focused on cost-effectiveness, Arke represents Meta's strategy of diversifying its design partnerships while optimizing specific chip variants for narrow workload categories.

The dual-partnership model gives Meta both breadth and resilience. If either design partner faces capacity constraints or execution delays, the other can absorb additional design work. It also creates competitive tension that benefits Meta's negotiating position.

## Meta Compute: The Organizational Signal

In January 2026, Meta formalized its infrastructure ambitions by creating **Meta Compute** — a dedicated division for AI infrastructure [8].

The leadership structure reveals the scale of Meta's ambitions. Santosh Janardhan continues managing technical architecture, silicon, and data center operations. Daniel Gross, formerly co-founder of Safe Superintelligence Inc., leads long-term capacity planning, supplier partnerships, and business modeling. Dina Powell McCormick, a former Trump advisor and Goldman Sachs executive, manages government and sovereign partnerships, deployment, investment, and financing [8].

The division's mandate: secure over 5 gigawatts of new capacity in 2025–2026, with a long-term target of tens of gigawatts this decade and hundreds of gigawatts beyond [8]. Meta has committed $600 billion to AI infrastructure in the US through 2028, with custom silicon forming a core pillar alongside data center construction and power procurement [3].

The appointment of a government affairs executive to co-lead an infrastructure division signals that Meta views power procurement and sovereign partnerships — not chip design — as the binding constraint on its AI scaling plans.

## The NVIDIA Relationship: Competition and Dependence

Meta's custom silicon push is often framed as a direct challenge to NVIDIA, but the reality is more nuanced. Meta remains one of NVIDIA's largest customers and will continue to purchase GPUs in volume for training workloads, generative AI features, and any inference task that doesn't map efficiently to MTIA's specialized architecture.

The 35% custom silicon target for inference implies that 65% of Meta's inference fleet will still run on NVIDIA hardware (or other merchant silicon) at year-end 2026. And MTIA handles zero training workloads. In absolute dollar terms, Meta's NVIDIA spend may actually increase in 2026 even as the custom silicon share of inference grows.

What MTIA changes is the marginal unit economics. Every inference request that moves from a GPU to MTIA at 44% lower TCO improves Meta's operating margins on its core revenue-generating workloads. At Meta's scale — processing inference for 3.9 billion monthly active users — the aggregate savings compound into material financial impact.

## The Competitive Landscape

Meta is not the only hyperscaler building custom inference silicon, but it is the most aggressive in targeting specific workload categories.

**Google's TPU** program is more mature, having shipped its first chips in 2015. The latest Ironwood (TPU v7) is generally available and purpose-built for the "age of inference," with 10x peak performance improvement over the previous generation [2]. But Google's TPUs are general-purpose AI accelerators designed for both training and inference across diverse workloads. They are not workload-specialized in the way MTIA is.

**Amazon's Trainium** offers both training and inference capabilities with 30 to 40% better price-performance compared to GPUs, available to external customers through AWS [2]. Trainium's strategy is cloud-first commercialization — the opposite of Meta's internal-only deployment.

Meta's differentiation is ruthless workload specificity. By optimizing for the exact compute patterns of recommendation ranking — sparse embeddings, feature interactions, batch inference — MTIA can deliver savings that a general-purpose chip cannot match for these specific use cases.

The trade-off is flexibility. If Meta's inference workloads evolve toward more LLM-like compute patterns — as the company's adoption of Hierarchical Sequential Transduction Units (HSTU) for generative recommendations suggests [6] — MTIA's architectural assumptions may need to adapt. The move to HBM in Iris and HBM4 in Santa Barbara hints that Meta's chip architects are already preparing for this shift.

## What 35% Means for the Supply Chain

If Meta achieves its 35% target, the implications extend beyond Meta's own balance sheet.

NVIDIA loses volume in one of its largest inference accounts, though it retains the training business and the majority of inference. More significantly, the success of MTIA at scale validates the economic case for workload-specialized inference ASICs — a signal that could accelerate custom silicon programs at other hyperscalers and large enterprises.

Broadcom and Marvell benefit directly as MTIA design partners, with MTIA representing a growing share of their custom ASIC revenue. TSMC benefits from MTIA fabrication on its most advanced nodes, though the volume is smaller than what it produces for NVIDIA.

The broader message is that the era of GPU-only AI inference is ending. Not because GPUs are inadequate — they remain the most versatile AI accelerators available — but because at hyperscaler scale, the economics of workload-specialized silicon are simply too compelling to ignore.

---

## References

[1] TrendForce, "Meta's MTIA-3 AI Chip Tipped for H2 2026 Debut on TSMC 3nm with GUC Support," January 30, 2026. https://www.trendforce.com/news/2026/01/30/news-metas-mtia-3-ai-chip-reportedly-tipped-for-2h26-debut-built-on-tsmc-3nm-with-guc-support/

[2] GlobeNewswire, "Meta Platforms Global MTIA AI Processor Deployment Analysis Report 2026," February 5, 2026. https://www.globenewswire.com/news-release/2026/02/05/3233241/28124/en/Meta-Platforms-Global-MTIA-AI-Processor-Deployment-Analysis-Report-2026

[3] Seeking Alpha, "Meta Confirms $72B CapEx for 2025; $600B US Infrastructure Build Through 2028." https://seekingalpha.com/news/4518816-meta-confirms-600b-capex-build-ai-infrastructure-us

[4] Meta AI Blog, "MTIA v1: Meta's First-Generation AI Inference Accelerator." https://ai.meta.com/blog/meta-training-inference-accelerator-AI-MTIA/

[5] Meta AI Blog, "Next Generation Meta Training and Inference Accelerator." https://ai.meta.com/blog/next-generation-meta-training-inference-accelerator-AI-MTIA/

[6] Meta AI Blog, "DLRM: An Advanced, Open Source Deep Learning Recommendation Model." https://ai.meta.com/blog/dlrm-an-advanced-open-source-deep-learning-recommendation-model/

[7] TrendForce, "Meta Reportedly Teams Up with Broadcom, Taps Quanta for Next-Gen ASIC-Powered AI Servers," August 4, 2025. https://www.trendforce.com/news/2025/08/04/news-meta-reportedly-teams-up-with-broadcom-taps-quanta-for-next-gen-asic-powered-ai-servers/

[8] SiliconANGLE, "Meta Platforms Creates New Organization to Lead AI Infrastructure Buildout," January 12, 2026. https://siliconangle.com/2026/01/12/meta-platforms-creates-new-organization-lead-ai-infrastructure-buildout/
