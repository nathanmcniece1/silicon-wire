# Alphabet Loses TPU Production Slots as NVIDIA Locks Up CoWoS Capacity

**Beat:** Chips & Architecture
**Format:** Wire Dispatch
**Published:** March 9, 2026
**Read time:** 5 min

**Excerpt:** Google has cut its 2026 TPU production target from four million to three million units after NVIDIA secured over 50% of TSMC's CoWoS advanced packaging capacity through 2027. The allocation conflict reveals packaging — not fabrication — as the binding constraint in AI chip supply.

---

Alphabet's Google has reduced its 2026 TPU production target by 25% — from four million to three million units — due to insufficient access to TSMC's Chip-on-Wafer-on-Substrate (CoWoS) advanced packaging capacity, according to a DigiTimes report from December 2025 [1].

The cause is not a shortage of transistors but a shortage of packaging. NVIDIA has secured over 50% of TSMC's CoWoS capacity through 2026–2027, leaving insufficient production slots for other customers — including the world's second-largest buyer of AI accelerators [2].

## The CoWoS Bottleneck

CoWoS is the advanced packaging technology that integrates AI chips with high-bandwidth memory (HBM) on a silicon interposer. Every major AI accelerator — NVIDIA's Blackwell GPUs, Google's TPUs, AMD's Instinct series — relies on CoWoS or equivalent packaging to achieve the terabytes-per-second memory bandwidth that AI workloads demand.

TSMC holds more than 50% of the global CoWoS market, and its capacity stood at 75,000 to 80,000 wafers per month in late 2025 [3]. Global demand for 2026 is projected at approximately one million wafers — substantially exceeding supply even after TSMC's planned expansion to 120,000–130,000 wafers per month by year-end [3].

NVIDIA's priority access is a function of both volume and willingness to commit. NVIDIA reportedly secured these allocations through multi-year contracts with TSMC, effectively pre-purchasing packaging capacity years in advance [2]. Google, despite being a major TSMC customer, was unable to secure sufficient slots against NVIDIA's dominant position.

## The Strategic Implications

The TPU production cut has cascading effects. Google's TPU accelerators power both internal AI training workloads and cloud-based AI services for external customers. A 25% reduction in production volume constrains Google Cloud's ability to compete with AWS and Azure on AI compute availability.

Supply chain sources indicate that TSMC is planning a sevenfold increase in CoWoS capacity for Google-related projects by 2027 — a recognition that Google's allocation must grow substantially to support its AI ambitions [4]. MediaTek has reportedly secured design contracts for Google's next-generation TPU v7e and v8e variants, suggesting that Google is also diversifying its chip design partnerships to secure broader access to TSMC's ecosystem.

The broader lesson is that advanced packaging has become the semiconductor industry's most consequential bottleneck. Fabrication capacity for leading-edge logic nodes (3nm, 2nm) is expanding aggressively. HBM memory production is ramping across SK Hynix, Samsung, and Micron. But packaging — the step that integrates logic and memory into a functioning AI accelerator module — remains constrained, and the customer with the largest checkbook gets priority.

For Google, the short-term fix is to accept lower TPU volumes while waiting for TSMC's packaging expansion. The long-term fix may involve exploring alternative packaging providers — including Intel's EMIB technology for future TPU generations [1].

---

## References

[1] DigiTimes, "Google TPU demand remains strong, but CoWoS and memory cap 2026 production," December 9, 2025. https://www.digitimes.com/news/a20251209PD215/google-tpu-demand-production-cowos.html

[2] Yahoo Finance, "Why Taiwan Semiconductor Manufacturing Holds the Keys to AI's Growth," January 3, 2026. https://finance.yahoo.com/news/why-taiwan-semiconductor-manufacturing-holds-151024917.html

[3] TrendForce, "TSMC Speeds Advanced Packaging: AP7 Targets 2026 Output," December 4, 2025. https://www.trendforce.com/news/2025/12/04/news-tsmc-speeds-advanced-packaging-ap7-targets-2026-output-arizona-p6-eyed-for-u-s-packaging-hub/

[4] TrendForce, "MediaTek Reportedly Secures Google v7e, v8e TPU Orders, Requests 7-Fold CoWoS Increase from TSMC," December 15, 2025. https://www.trendforce.com/news/2025/12/15/news-mediatek-reportedly-secures-google-v7e-v8e-tpu-orders-requests-7-fold-cowos-increase-from-tsmc/
