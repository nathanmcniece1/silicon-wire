# NVIDIA's Blackwell NVL72: 10x MoE Performance Changes the Inference Math

**Beat:** Software & Models
**Format:** Wire Dispatch
**Published:** March 9, 2026
**Read time:** 5 min

**Excerpt:** NVIDIA's GB200 NVL72 delivers 10x faster inference for Mixture-of-Experts models at one-tenth the cost per token — a performance leap that fundamentally changes the economics of deploying frontier AI. Meanwhile, Vera Rubin promises to extend this advantage by another 5x when it ships in H2 2026.

---

Mixture-of-Experts (MoE) has become the dominant architecture for frontier AI models. DeepSeek V3.2, Mistral Large 3, Llama 4, and reportedly GPT-4 all use MoE to achieve frontier-scale knowledge capacity while keeping per-token compute costs manageable. NVIDIA's Blackwell NVL72 rack-scale system was designed specifically for this architectural moment — and the performance numbers confirm it.

## The 10x Claim

NVIDIA's GB200 NVL72 delivers a 10x improvement in MoE inference performance and a 10x reduction in cost per token compared to the previous Hopper generation [1]. The system connects 72 Blackwell GPUs via fifth-generation NVLink with 1,800 GB/s bidirectional bandwidth between all chips in the rack — a critical specification for MoE workloads where different expert subnetworks must be accessed dynamically.

Real-world validation comes from DeepInfra, a cloud inference provider that reported reducing per-million-token costs from 20 cents on Hopper to 10 cents on Blackwell for MoE model serving [2]. NVIDIA and Mistral AI jointly demonstrated 10x faster inference for the Mistral 3 model family on NVL72 systems [2].

The performance gain is architectural, not just brute-force. MoE models activate only a fraction of their parameters for each token — DeepSeek V3.2 activates 37 billion of its 685 billion total parameters. This creates a unique computational pattern: the model must rapidly route tokens to the correct expert subnetworks and load expert weights from memory, making memory bandwidth and inter-GPU communication more important than raw floating-point throughput.

NVLink 5's rack-scale connectivity ensures that expert weights can be distributed across all 72 GPUs and accessed with minimal latency, regardless of which GPU handles the routing. This turns the entire rack into a unified inference engine rather than 72 independent processors — a design philosophy that aligns perfectly with MoE's distributed expert architecture.

## Vera Rubin: The Next Step

If Blackwell's MoE performance is transformative, Vera Rubin — announced at CES 2026 and entering full-scale mass production — promises to extend the advantage further [3].

NVIDIA's specifications for the Vera Rubin NVL72 include 5x greater inference performance and 10x lower cost per token compared to Blackwell. Peak inference performance reaches 50 petaflops in NVFP4, compared to Blackwell's roughly 10 petaflops. NVLink 6 delivers 3.6 TB/s bidirectional GPU-to-GPU bandwidth per GPU — double Blackwell's specification [3].

Vera Rubin is also NVIDIA's first 100% liquid-cooled system, featuring a modular, cable-free tray design that enables 18x faster assembly and servicing than Blackwell [3]. Partner products are expected in the second half of 2026.

## The Economic Impact

The cost-per-token compression from Hopper to Blackwell to Vera Rubin has profound implications for AI deployment economics.

A 10x reduction in inference cost means that applications previously uneconomical to deploy — real-time AI assistants, continuous code review, personalized education at scale — become financially viable. It means that frontier models with hundreds of billions of parameters can serve consumer-facing products at costs comparable to what much smaller models cost a generation ago.

For cloud providers and inference startups, the implication is that infrastructure built on Hopper-generation hardware is becoming uncompetitive. The performance gap between NVL72 and previous-generation systems for MoE workloads is large enough to drive a rapid refresh cycle — which is exactly what NVIDIA's business model depends on.

For MoE model developers, including DeepSeek, Meta, and Mistral, the message is that NVIDIA's hardware roadmap is co-evolving with the architectural direction of frontier AI. The 10x performance per watt improvement for MoE models is not incidental — it is a deliberate design choice that reinforces the MoE paradigm and, by extension, NVIDIA's position at the center of frontier AI infrastructure.

---

## References

[1] NVIDIA Blog, "How Mixture of Experts Powers the Most Intelligent Frontier AI Models." https://blogs.nvidia.com/blog/mixture-of-experts-frontier-models/

[2] NVIDIA Developer Blog, "Delivering Massive Performance Leaps for Mixture-of-Experts Inference on NVIDIA Blackwell." https://developer.nvidia.com/blog/delivering-massive-performance-leaps-for-mixture-of-experts-inference-on-nvidia-blackwell/

[3] Tom's Hardware, "NVIDIA Launches Vera Rubin NVL72 AI Supercomputer at CES, Promises Up to 5x Greater Inference Performance," January 2026. https://www.tomshardware.com/pc-components/gpus/nvidia-launches-vera-rubin-nvl72-ai-supercomputer-at-ces-promises-up-to-5x-greater-inference-performance-and-10x-lower-cost-per-token-than-blackwell-coming-2h-2026
