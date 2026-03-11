# Meta's Custom Silicon Roadmap: From MTIA to Full Inference Stack

**Beat:** Chips & Architecture
**Format:** Deep Dive
**Published:** March 9, 2026
**Read time:** 12 min

**Excerpt:** Meta is building the most aggressive custom silicon program outside of Google. MTIA v2 delivers 44% lower TCO than GPUs for inference. Iris (v3) is in broad deployment on TSMC 3nm with HBM3E. Arke targets inference-only workloads. The goal: 35% of Meta's inference fleet on custom silicon by year-end 2026 — while still buying millions of NVIDIA GPUs for training.

---

In January 2026, Mark Zuckerberg established Meta Compute — a new top-level division responsible for the company's AI data center buildout, custom silicon program, and long-range capacity planning [1]. The organizational move formalized what Meta's engineering decisions had been signaling for two years: the company is vertically integrating its AI infrastructure at a scale that only Google has previously attempted.

Meta's custom silicon roadmap now spans three chip generations in production or deployment, a fourth in development, and an inference fleet target that would shift more than a third of the company's AI workloads off NVIDIA hardware within the year. The economics driving this transition are straightforward: Meta's MTIA chips deliver 44% lower total cost of ownership than GPUs for the inference workloads that account for the bulk of daily operational compute [2].

The paradox is that Meta is simultaneously one of NVIDIA's largest customers — deploying hundreds of thousands of H100 GPUs for training and signing a multiyear partnership for millions of Blackwell and Rubin GPUs [3]. Meta's custom silicon strategy is not a replacement for NVIDIA. It is a carve-out: moving the high-volume, cost-sensitive inference workloads to purpose-built hardware while keeping training on NVIDIA's general-purpose GPUs.

## MTIA v1 (Freya): The Foundation

Meta announced its first-generation MTIA chip — codenamed Freya — in 2023, after designing it internally starting in 2020 [4].

Freya was fabricated on TSMC's 7nm process and occupied 373 mm² of silicon. It delivered 102.4 TOPS at INT8 precision and 51.2 TFLOPS at FP16, within a 25-watt thermal envelope [4]. The chip featured 64 processing elements arranged in an 8x8 grid, with 128 MB of shared on-chip SRAM and up to 128 GB of LPDDR5 memory at 176 GB/s bandwidth.

The design reflected Meta's workload profile. Rather than optimizing for the matrix multiplication throughput that training requires, Freya targeted Deep Learning Recommendation Models (DLRMs) — the neural networks that power ad ranking, content recommendation, and the algorithmic feeds behind Facebook Reels and Instagram. These workloads involve enormous embedding table lookups and ranking computations that are memory-bandwidth-bound rather than compute-bound, making them poorly suited to GPU architectures optimized for dense linear algebra.

Freya was a proof of concept. It demonstrated that Meta could design and deploy custom AI accelerators for its specific workload profile, but it lacked the performance to displace GPUs at scale.

## MTIA v2 (Artemis): The Economic Argument

MTIA v2 — codenamed Artemis — moved to TSMC's 5nm process and represented the leap from proof of concept to production silicon [5].

The performance improvements were substantial: 354 TOPS at INT8 (3.5x over v1), 177 TFLOPS at FP16, with 7x improvement on sparse compute operations [5]. Power consumption increased to 90 watts, but performance per watt improved dramatically. On-chip SRAM doubled to 256 MB with 2.7 TB/s bandwidth. Local PE storage tripled to 384 KB per processing element with 1 TB/s bandwidth [5].

Artemis went from first silicon to production deployment across 16 regions in less than nine months [5] — an aggressive timeline that reflected Meta's confidence in the chip's production readiness.

The economic headline was the 44% TCO reduction versus GPUs for inference workloads [2]. This figure, published in Meta's ISCA 2025 paper, encompasses not just chip cost but the full stack: power, cooling, rack density, and operational overhead. The savings derive from two architectural choices: MTIA uses LPDDR5 memory instead of expensive HBM, and its processing elements are purpose-built for the embedding lookups and sparse operations that dominate recommendation inference.

The 44% figure carries a critical caveat. MTIA outperforms GPUs on the low-complexity ranking and recommendation models it was designed for. For high-complexity models and general-purpose LLM inference, NVIDIA GPUs remain 30–40% more efficient [2]. Meta's strategy is workload-specific optimization, not general-purpose replacement.

## Iris (MTIA v3): HBM Arrives

Iris, Meta's third-generation MTIA chip, represents a significant architectural leap. Fabricated on TSMC's 3nm process, Iris incorporates eight HBM3E 12-high memory stacks providing over 3.5 TB/s of memory bandwidth [6].

The addition of HBM is notable. MTIA v1 and v2 deliberately avoided HBM, using LPDDR5 to reduce cost. Iris's move to HBM3E signals that Meta's custom silicon ambitions have expanded beyond recommendation inference to workloads that require the memory bandwidth that only HBM can provide — potentially including LLM inference, which was previously an NVIDIA-only workload at Meta.

Iris retains the specialized 8x8 matrix computing architecture optimized for DLRM workloads but with the bandwidth to handle larger and more complex models [6]. As of February 2026, Iris has moved into broad deployment across Meta's data center fleet [6], marking the first time Meta's custom silicon operates at a scale that meaningfully impacts the company's overall inference cost structure.

The Arke variant — an inference-only derivative of Iris developed in collaboration with Marvell Technology — is designed for workloads that don't require training capability [6]. By stripping out training-specific circuitry, Arke can optimize die area and power for pure inference throughput, further reducing cost-per-inference for high-volume workloads.

## The 35% Target

Meta's stated goal is to have over 35% of its total inference fleet running on MTIA hardware by the end of 2026 [6]. This is an aggressive target that, if achieved, would represent the largest deployment of custom AI inference silicon outside of Google's TPU fleet.

The workload division is clear: MTIA handles the recommendation and ranking inference that represents the bulk of Meta's daily AI compute. This includes the algorithms that determine what appears in Facebook News Feed, Instagram Explore, Reels recommendations, and ad targeting. These workloads run billions of inference operations per day, and even modest per-inference cost reductions translate to hundreds of millions of dollars in annual savings at Meta's scale.

NVIDIA GPUs retain the training workloads — the months-long runs that produce new Llama model versions — and complex inference tasks that MTIA's specialized architecture cannot efficiently handle. Zuckerberg has described this as a "tandem" approach: custom silicon for the bulk inference workload, NVIDIA for training and general-purpose compute [3].

## The NVIDIA Relationship

Meta's custom silicon investment has not reduced its NVIDIA spending. If anything, the opposite is true.

Meta has approximately 600,000 H100-equivalent GPUs deployed [3]. The company used over 100,000 H100s to train Llama 4 alone [7]. In February 2026, Meta announced a multiyear, multigenerational partnership with NVIDIA for millions of Blackwell and Rubin GPUs [3], making Meta one of NVIDIA's largest customers by volume.

The Rubin GPUs Meta is acquiring represent the next generation of NVIDIA's architecture: approximately 50 petaflops of FP4 inference per GPU, 288 GB of HBM4 across eight stacks, 22 TB/s of memory bandwidth, and 3.6 TB/s of NVLink bandwidth. A single Rubin NVL72 rack — 72 Rubin GPUs paired with 36 Vera CPUs — delivers computing power that would have ranked among the world's fastest supercomputers just a few years ago [3].

The scale of Meta's GPU procurement reflects the distinction between inference (which custom silicon can handle) and training (which requires NVIDIA's general-purpose architecture). Training a frontier language model is a fundamentally different computational problem than running recommendation inference. Training requires flexible hardware that can efficiently execute diverse operations across thousands of synchronized GPUs. MTIA's specialized architecture excels at narrow inference workloads but cannot efficiently support the heterogeneous compute patterns of model training.

Meta's long-term ambition is to expand custom silicon into training — starting with simpler models, then eventually large models [7]. The company is reportedly developing a RISC-V-based AI training chip [8], which would use open-source instruction set architecture to avoid royalty payments and enable deep hardware-software co-design. But training on custom silicon remains years away from production scale.

## Meta Compute: The Organizational Bet

The creation of Meta Compute in January 2026 elevated AI infrastructure from a support function to a core business unit [1].

The division is led by two co-heads with complementary responsibilities. Santosh Janardhan oversees technical strategy: system architecture, the MTIA silicon program, software stack development, and day-to-day operation of Meta's global data center fleet. Daniel Gross manages long-range capacity planning, supply chain development, and the strategic supplier relationships required to build at multi-gigawatt scale [1].

Zuckerberg's stated ambition for Meta Compute is "tens of gigawatts this decade, and hundreds of gigawatts or more over time" [1]. This is not hyperbole — Meta's 2026 capex of $115–135 billion, combined with signature projects like the 5-gigawatt Hyperion campus in Louisiana and the 1-gigawatt Lebanon, Indiana facility, suggests the company is planning for data center capacity that would rival the electrical consumption of medium-sized countries.

Custom silicon is central to this vision. At multi-gigawatt scale, the difference between NVIDIA GPU power consumption and MTIA's optimized inference performance-per-watt translates to gigawatt-hours of annual energy savings. In a power-constrained world where every megawatt of data center capacity is contested, Meta's ability to do more inference with less power is a structural competitive advantage.

## The Custom Silicon Landscape

Meta's program exists in a broader context of hyperscaler custom silicon investment.

Google's TPU program is the most mature, with six generations of Tensor Processing Units deployed across Google's internal workloads and offered commercially through Google Cloud. Google's approach is the most commercially aggressive: TPUs are available to external customers and tightly integrated into TensorFlow and JAX frameworks.

Amazon's Trainium (training) and Inferentia (inference) chips are offered through AWS, with claims of up to 50% cost savings over equivalent GPU instances. Amazon's strategy emphasizes customer-facing commercialization — making custom silicon a competitive advantage for AWS against Azure and Google Cloud.

Microsoft's Maia chips are deployed as Azure infrastructure, supporting OpenAI workloads and enterprise AI services. Microsoft's approach positions custom silicon as an enterprise enabler rather than a standalone product.

Meta's approach is the most internally focused. MTIA chips serve only Meta's own workloads — there is no commercial offering for external customers. This reflects Meta's business model: unlike Google, Amazon, and Microsoft, Meta is not a cloud provider. Its AI infrastructure exists to serve its advertising, social media, and AI products, not to sell compute to third parties.

The common thread across all four programs is the same economic logic: hyperscalers with sufficient scale can justify the billions in R&D required to design custom silicon, because the per-unit savings at their volume of inference operations quickly exceed the fixed design cost. The question is not whether custom silicon makes economic sense for hyperscalers — it clearly does. The question is how far each company pushes the boundary between custom and general-purpose compute.

---

## References

[1] DataCenterDynamics, "Meta establishes 'Meta Compute,' plans multiple gigawatt-plus scale AI data centers." [datacenterdynamics.com](https://www.datacenterdynamics.com/en/news/meta-establishes-meta-compute-plans-multiple-gigawatt-plus-scale-ai-data-centers/)

[2] Meta / ISCA 2025, "Meta's Second Generation AI Chip: Model-Chip Co-Design and Productionization Experiences." [acm.org](https://dl.acm.org/doi/10.1145/3695053.3731409)

[3] CNBC, "Meta expands Nvidia deal to use millions of AI chips in data center build-out." [cnbc.com](https://www.cnbc.com/2026/02/17/meta-nvidia-deal-ai-data-center-chips.html)

[4] Meta AI Blog, "MTIA v1: Meta's first-generation AI inference accelerator." [ai.meta.com](https://ai.meta.com/blog/meta-training-inference-accelerator-AI-MTIA/)

[5] Meta AI Blog, "Our next generation Meta Training and Inference Accelerator." [ai.meta.com](https://ai.meta.com/blog/next-generation-meta-training-inference-accelerator-AI-MTIA/)

[6] FinancialContent, "Silicon Sovereignty: Meta Charges Into 2026 with 'Iris' MTIA Rollout and Rapid Custom Chip Roadmap." [financialcontent.com](https://www.financialcontent.com/article/tokenring-2026-2-5-silicon-sovereignty-meta-charges-into-2026-with-iris-mtia-rollout-and-rapid-custom-chip-roadmap)

[7] Tom's Hardware, "Meta is using more than 100,000 Nvidia H100 AI GPUs to train Llama-4." [tomshardware.com](https://www.tomshardware.com/tech-industry/artificial-intelligence/meta-is-using-more-than-100-000-nvidia-h100-ai-gpus-to-train-llama-4-mark-zuckerberg-says-that-llama-4-is-being-trained-on-a-cluster-bigger-than-anything-that-ive-seen)

[8] Tom's Hardware, "Meta is reportedly testing its first RISC-V based AI chip for AI training." [tomshardware.com](https://www.tomshardware.com/tech-industry/artificial-intelligence/meta-is-reportedly-testing-its-first-rsic-v-based-ai-chip-for-ai-training)
