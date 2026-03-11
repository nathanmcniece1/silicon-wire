# War in Iran, the $119 Oil Spike, and What It Actually Means for AI Infrastructure

**Beat:** Infrastructure
**Format:** Deep Dive
**Published:** March 10, 2026
**Read time:** 14 min

**Excerpt:** The US-Israeli strikes on Iran sent crude to $119 per barrel and shut down 90% of tanker traffic through the Strait of Hormuz. Prices have since retreated to $85. The conventional wisdom — that expensive oil threatens AI by raising electricity costs — is mostly wrong. Only 0.6% of US electricity comes from petroleum. The real threat is more subtle and more dangerous: oil shocks don't hurt the data centers already running. They hurt the ones being built. And when the next 100 GW of AI capacity requires an estimated $870 billion in debt financing, every basis point of inflation-driven interest rate increases matters more than the price at the pump.

---

On February 28, 2026, the United States and Israel launched a coordinated military campaign against Iran. Nearly 900 strikes hit Iranian missile systems, air defenses, military infrastructure, and government leadership in the first twelve hours. Supreme Leader Ali Khamenei was killed. Iran retaliated with over 500 ballistic missiles and 2,000 drones targeting US military bases, Israeli territory, and regional allies. By March 8, Mojtaba Khamenei had been elected as the new Supreme Leader, Israel had authorized a ground invasion of Lebanon, and at least 1,230 people were reported killed [1].

The geopolitics are beyond the scope of this publication. The energy consequences are not — but they are more nuanced than most analysis has acknowledged.

Within one week, US crude experienced a 35.63% price jump — the largest weekly gain in the history of crude futures contracts dating back to 1983 [2]. Brent crude peaked at $119.50 per barrel during intraday trading. WTI touched $119.48. Tanker traffic through the Strait of Hormuz — the chokepoint through which one-fifth of the world's oil supply transits — dropped approximately 90% [3]. Iraq shut down 1.5 million barrels per day of production. Kuwait curtailed output after running out of storage capacity. Maersk, MSC, Hapag-Lloyd, and CMA CGM suspended shipping operations through the strait entirely [4].

Prices have since retreated. As of March 10, Brent trades near $85 per barrel as Saudi reserves entered the market and Hormuz shipping began to cautiously resume. The acute spike was short-lived. But the episode exposed a set of vulnerabilities in the AI infrastructure buildout — and the most important ones are not the ones people are talking about.

## What Didn't Break: Existing Data Centers

The instinctive reaction to $119 oil was alarm about AI electricity costs. The concern is understandable but largely misplaced — at least for existing operations.

Only 0.6% of US electricity generation comes from petroleum [5]. The overwhelming majority — approximately 40% — comes from natural gas, with the remainder split between nuclear, coal, renewables, and hydro [5]. Oil could go to $200 per barrel and the direct effect on the electricity powering live GPU clusters would be negligible.

Natural gas is the relevant commodity, and here the picture is more resilient than the panic suggested. US natural gas production has ramped significantly over the past several years, driven in part by data center demand growth. The EIA forecast Henry Hub averaging $4.30 per MMBtu in 2026, rising to $4.40 in 2027 [7]. While oil and gas prices share some transmission channels — LNG export competition, general commodity pressure, correlated geopolitical disruption — a crude oil spike does not mechanically increase natural gas prices. The Iran spike briefly pushed gas futures above $5 per MMBtu before settling back. The correlation exists but is loose.

More importantly, data centers still consume only single-digit percentages of total US electricity generation. The IEA projects global data center electricity consumption will roughly double from 415 TWh in 2024 to 945 TWh by 2030 [12], but even at the higher figure, data centers represent a fraction of total grid load. The existing fleet of hyperscaler data centers — the ones currently running inference on Blackwell GPUs and training frontier models — experienced minimal direct cost impact from the Iran oil spike.

The hyperscalers that have signed nuclear power purchase agreements enjoy even greater insulation. Microsoft's 20-year PPA with Constellation Energy for Three Mile Island Unit 1 (835 MW, restarting 2027) [15], Google's deal with Kairos Power for 500 MW of SMRs by 2035 [16], and Amazon's 1,920 MW Susquehanna nuclear PPA [17] — the largest in history — all lock in fixed energy costs independent of fossil fuel markets. These deals, signed in 2024 and 2025, were motivated by carbon commitments and supply security. But their practical effect is identical: existing and near-term compute infrastructure is substantially insulated from oil price volatility.

For the data centers already running, the Iran war was a non-event.

## What Did Break: The Construction Pipeline

The real vulnerability is not in operating existing data centers. It is in building new ones.

The five largest US hyperscalers — Microsoft, Amazon, Google, Meta, and Oracle — have collectively committed $660 to $690 billion in capital expenditure for 2026 [10]. This is nearly double 2025's $380 billion and represents approximately 75% AI-related infrastructure spending. The industry needs to build the next 100 gigawatts of data center capacity to meet demand. Microsoft alone has disclosed an $80 billion backlog of Azure AI orders it cannot fulfill because it lacks the electricity to power GPUs already sitting in inventory [11].

This construction pipeline is massively exposed to oil prices in ways that operating data centers are not.

**Diesel.** Data center construction is heavy industrial work. Excavation equipment, cranes, concrete trucks, generators, heavy haulers — all run on diesel. A 500 MW campus buildout requires years of continuous heavy machinery operation. When diesel prices spike with crude oil, construction costs increase directly and immediately.

**Petroleum-derived materials.** Modern data centers are not just steel and concrete. They require enormous quantities of plastics, synthetic insulation, cable sheathing, coolant lines, and composite materials — all petroleum derivatives. The liquid cooling systems that NVIDIA's Blackwell and Vera Rubin architectures demand use specialized fluids and polymer tubing that track crude oil pricing. Higher oil means higher materials costs across the entire bill of materials.

**Component supply chain disruption.** The more insidious effect is schedule delay. When oil spikes, it disrupts global shipping and logistics — as the Strait of Hormuz closure demonstrated in real time. Specialized electrical equipment, transformers, switchgear, and cooling infrastructure are manufactured globally and shipped by sea. Maersk, MSC, Hapag-Lloyd, and CMA CGM all suspended strait operations [4]. Even brief shipping disruptions cascade through construction timelines. A transformer that arrives three months late delays an entire campus energization. And in an environment where Microsoft's unfulfillable backlog grows by billions per quarter, schedule delays are not inconveniences — they are revenue losses.

The distinction is critical: the Iran oil spike barely touched the AI infrastructure that exists. It threatened the AI infrastructure being built to meet the demand that is already here.

## The Semiconductor Construction Paradox

The same dynamic applies to semiconductor fabrication — with even greater intensity.

Large semiconductor fabrication facilities consume as much as 100 megawatt-hours per hour in operation [13]. But the construction of a new fab is itself an enormous petroleum-intensive undertaking. TSMC's Arizona complex — where Fab 21 is producing N4 chips and Fab 22 is under construction — requires years of heavy construction in the desert, consuming diesel, petroleum-derived chemicals, and materials shipped from across the Pacific.

TSMC's $52 to $56 billion 2026 capex budget — the largest in semiconductor history — was set when Brent crude traded in the $70 to $80 range. The 95.8% of fab energy that comes from grid electricity and fossil fuels [14] represents the operating cost. The construction cost is a separate line item, and it is far more oil-sensitive than the operating cost.

There is a particularly cruel paradox: as chip manufacturing advances to smaller nodes (3nm, 2nm), energy consumption per square millimeter of silicon increases. The most advanced chips — the ones AI depends on — are the most energy-intensive to both produce and build the facilities to produce. The CHIPS Act subsidies that made US fab construction viable were calculated against pre-shock energy and materials costs. If construction costs rise 10 to 15% and stay elevated, the subsidy math changes — not because of higher electricity bills at the fab, but because of higher diesel and materials costs to build it.

## The Macro Problem: Interest Rates and Capital Formation

The most significant threat the Iran oil spike posed to AI infrastructure has nothing to do with energy costs at all. It is macroeconomic.

The mechanism is straightforward: oil price spikes feed directly into inflation. Higher oil means higher transportation costs, higher manufacturing costs, and higher consumer prices across the economy. The Federal Reserve responds to sustained inflation by raising interest rates. And the AI infrastructure buildout is the most capital-intensive construction program in modern history.

JLL estimates that the next 100 gigawatts of data center capacity requires approximately $870 billion in debt financing [21]. This is not equity — it is borrowed money, sensitive to every basis point of interest rate movement. Every 50 basis points of rate increase adds approximately $4.35 billion per year in interest costs across the AI infrastructure debt stack.

The $690 billion in 2026 hyperscaler capex is being deployed into a rate environment that was already uncertain. The Fed had been signaling potential rate cuts through late 2025, creating favorable conditions for the massive debt issuance required to finance data center construction. An oil-driven inflation spike that forces the Fed to hold rates steady — or worse, hike — would directly increase the cost of capital for every data center project in the pipeline.

This is not a hypothetical risk. Oil spiked to $119 and has since retreated to $85 — but the inflation data from the spike period has not yet fully flowed through to CPI prints. If March and April inflation readings come in hot due to the oil shock's lagging effects, the Fed's rate path changes, and the cost of financing AI infrastructure increases for years regardless of where oil trades on any given day.

For the hyperscalers with the strongest balance sheets — Microsoft, Google, Amazon — the rate impact is manageable. They can self-fund much of their capex from operating cash flow. But the broader AI infrastructure ecosystem — colocation providers, independent power producers, cooling system manufacturers, fiber network builders — depends heavily on debt financing. Higher rates don't just make projects more expensive. They kill marginal projects entirely.

## The Capital Flight Risk

There is a second macroeconomic channel: investor behavior.

The AI infrastructure buildout has attracted enormous capital flows from institutional investors, sovereign wealth funds, and retail markets. When oil spikes and geopolitical uncertainty rises, capital flows shift. Retail investors rotate into oil and gas equities, defense stocks, and commodities — away from technology and infrastructure. Institutional investors reassess risk in regions adjacent to conflict.

The Middle Eastern dimension is particularly relevant. Abu Dhabi's MGX — a $100 billion AI fund — completed the $40 billion acquisition of Aligned Data Centres and has invested in OpenAI [20]. G42 is building a 1-gigawatt compute cluster in Abu Dhabi [18]. Stargate UAE's first phase targets completion in Q3 2026 with costs exceeding $30 billion [19]. These are among the largest AI infrastructure commitments outside the United States.

Regional instability — even instability that does not directly affect the UAE — creates uncertainty that can slow investment decisions, delay construction timelines, and redirect capital. Middle Eastern sovereign wealth funds that might otherwise deploy billions into AI infrastructure may pull back toward domestic priorities or safer asset classes during periods of regional conflict. The chips flowing into these facilities — NVIDIA Blackwell GPUs, AMD Instinct accelerators — are the same chips US hyperscalers are fighting over domestically. Any disruption to Middle Eastern capital flows ripples through the entire global AI investment ecosystem.

## The Nuclear Hedge — Now Existential

The hyperscalers' nuclear power purchase agreements, already strategically valuable before the Iran conflict, now look existential for long-term competitive positioning.

**Microsoft's** Three Mile Island Unit 1 restart (835 MW, 2027) provides fixed-rate electricity costs immune to both oil and gas price volatility [15]. **Google's** Kairos Power SMR deal (500 MW by 2035) [16] and **Amazon's** Susquehanna PPA (1,920 MW by 2032) [17] offer the same strategic insulation.

But these deals protect operating costs, not construction costs. And they don't come online fast enough. TMI-1 restarts in 2027. Kairos Power's first reactor reaches commercial operation around 2030. Amazon's PPA reaches full volume by 2032. Between now and then, the hyperscalers remain exposed — not primarily to electricity prices for running data centers, but to the macroeconomic environment for building them.

The Iran conflict has likely accelerated nuclear deal-making across the industry. Every hyperscaler without a nuclear PPA now faces a clear strategic disadvantage. The calculus has shifted from "nuclear is expensive but clean" to "nuclear is the only way to decouple AI infrastructure economics from geopolitical energy volatility."

## Reading the Signal

Oil is back at $85. Markets have calmed. The temptation is to treat the spike as an aberration — a two-week disruption absorbed and forgotten.

The correct reading is more specific than that. The Iran oil spike revealed that the AI infrastructure buildout has two fundamentally different risk profiles:

**Existing operations** are substantially insulated. Data centers running on the US grid consume electricity generated overwhelmingly from natural gas, nuclear, and renewables — not oil. Nuclear PPAs provide additional insulation. The 0.6% petroleum share of US electricity generation means that even a sustained oil price increase has minimal direct impact on the cost of running inference or training models.

**New capacity construction** is heavily exposed. The next 100 gigawatts of data center capacity, the next generation of semiconductor fabs, the cooling infrastructure, the power transmission upgrades — all of this depends on diesel, petroleum-derived materials, global shipping, and most critically, debt financing at rates determined by an inflation environment that oil prices directly influence. An $870 billion debt stack is sensitive to every basis point. Every month of construction delay costs billions in deferred revenue.

The AI industry has spent three years solving chip shortages, packaging bottlenecks, and power procurement challenges. The Iran conflict exposed a vulnerability at a different layer of the stack: the macroeconomic conditions that determine whether the $690 billion in planned 2026 capex can be deployed on schedule and on budget.

Oil is back at $85. The construction equipment still runs on diesel. The debt still needs to be serviced. The next shock — whether from the Strait of Hormuz, a hurricane in the Gulf of Mexico, or a pipeline dispute in Eastern Europe — will test the same vulnerabilities. The war in Iran will end. The AI industry's dependence on favorable macroeconomic conditions to build its future will not.

---

## References

[1] House of Commons Library, "US-Israel strikes on Iran: February/March 2026," March 2026. https://commonslibrary.parliament.uk/research-briefings/cbp-10521/

[2] CNBC, "Oil surges 35% this week for biggest gain in futures trading history," March 6, 2026. https://www.cnbc.com/2026/03/06/iran-us-war-oil-prices-brent-wti-barrel-futures.html

[3] NPR, "How traffic dried up in the Strait of Hormuz," March 4, 2026. https://www.npr.org/2026/03/04/nx-s1-5736104/iran-war-oil-trump-israel-strait-hormuz-closed-energy-crisis

[4] CNBC, "Maersk suspends two key shipping services due to Iran war," March 6, 2026. https://www.cnbc.com/2026/03/06/iran-war-shipping-maersk-middle-east-strait-of-hormuz-gulf.html

[5] EIA, "Electricity explained: Electricity in the United States." https://www.eia.gov/energyexplained/electricity/electricity-in-the-us.php

[7] Argus Media, "Data centers set to raise east US gas prices," 2026. https://www.argusmedia.com/en/news-and-insights/latest-market-news/2770694-viewpoint-data-centers-set-to-raise-east-us-gas-prices

[10] Futurum Group, "AI Capex 2026: The $690B Infrastructure Sprint." https://futurumgroup.com/insights/ai-capex-2026-the-690b-infrastructure-sprint/

[11] WebProNews, "Microsoft's $80 Billion Cloud Computing Backlog." https://www.webpronews.com/microsofts-80-billion-cloud-computing-backlog-signals-unprecedented-ai-infrastructure-strain/

[12] S&P Global, "Global data center power demand to double by 2030 on AI surge: IEA," April 2025. https://www.spglobal.com/energy/en/news-research/latest-news/electric-power/041025-global-data-center-power-demand-to-double-by-2030-on-ai-surge-iea

[13] McKinsey, "Bringing energy efficiency to semiconductor manufacturing." https://www.mckinsey.com/~/media/mckinsey/dotcom/client_service/operations/pdfs/bringing_fabenergyefficiency.ashx

[14] PatentPC, "Semiconductor Manufacturing Energy Consumption." https://patentpc.com/blog/semiconductor-manufacturing-energy-consumption-how-green-is-the-chip-industry-latest-stats/

[15] ANS Nuclear Newswire, "Constellation announces TMI-1 restart, power purchase agreement with Microsoft." https://www.ans.org/news/article-6402/constellation-announces-tmi1-restart-power-purchase-agreement-with-microsoft/

[16] Google Blog, "Google signs advanced nuclear clean energy agreement with Kairos Power." https://blog.google/outreach-initiatives/sustainability/google-kairos-power-nuclear-energy-agreement/

[17] Power Magazine, "Talen, Amazon Launch $18B Nuclear PPA." https://www.powermag.com/talen-amazon-launch-18b-nuclear-ppa-a-grid-connected-ipp-model-for-the-data-center-era/

[18] Data Center Dynamics, "G42 CEO says company will receive first AI chip shipments within months." https://www.datacenterdynamics.com/en/news/g42-ceo-says-company-will-receive-first-ai-chip-shipments-within-months-to-support-initial-200mw-of-capacity-for-planned-stargate-cluster/

[19] The National, "Stargate UAE's first phase to be completed in third quarter of 2026." https://www.thenationalnews.com/business/2025/12/05/stargate-uaes-first-phase-to-be-completed-in-third-quarter-of-2026/

[20] The National, "MGX and US Partners Acquire data center operator." https://www.thenationalnews.com/future/technology/2026/02/13/mgx-anthropic-investment-ai/

[21] JLL, "Data center outlook 2026: Capital requirements for AI infrastructure expansion." https://www.jll.com/en/trends-and-insights/research/data-center-outlook
