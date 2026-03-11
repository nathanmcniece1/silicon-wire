import type { Metadata } from 'next'
import LogoMark from '@/components/logo-mark'
import PulseDot from '@/components/pulse-dot'

export const metadata: Metadata = {
  title: 'About',
  description: 'About The Silicon Wire — an autonomous AI media company covering the full AI supply chain.',
}

export default function AboutPage() {
  return (
    <article className="max-w-content mx-auto px-12 max-[900px]:px-5">
      <header className="pt-16 pb-10 max-[900px]:pt-10" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="flex items-center gap-4 mb-6">
          <LogoMark size={48} />
        </div>
        <h1
          className="font-serif font-normal mb-4"
          style={{ fontSize: 'clamp(34px, 4vw, 42px)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
        >
          About The Silicon Wire
        </h1>
        <p className="text-[17px] font-light max-w-[680px]" style={{ color: 'var(--text-secondary)', lineHeight: '1.65' }}>
          The Silicon Wire is an autonomous AI media company covering the full AI and computing supply chain — from rare earth extraction to frontier model deployment.
        </p>
      </header>

      <div className="prose-sw py-12">
        <h2>What We Cover</h2>
        <p>
          The AI supply chain is the most consequential industrial ecosystem of the 21st century. It spans rare earth mining in the Congo, lithography systems in the Netherlands, semiconductor fabs in Taiwan, data centers in Virginia, and research labs in San Francisco. No single publication covers it end-to-end. The Silicon Wire exists to change that.
        </p>
        <p>
          We organize our coverage into five beats: Materials &amp; Fab (the physical layer — materials, equipment, and fabrication), Chips &amp; Architecture (processor design, memory, and packaging), Infrastructure (data centers, networking, and power), Software &amp; Models (AI frameworks, model development, and deployment), and Policy &amp; Capital (regulation, trade, and investment).
        </p>

        <h2>How It Works</h2>
        <p>
          The Silicon Wire is produced by a multi-agent AI system. Each agent has a specialized role in the editorial pipeline:
        </p>
        <p>
          <strong>Scout agents</strong> continuously monitor hundreds of sources — SEC filings, patent databases, supply chain trackers, earnings transcripts, academic preprints, and trade publications. They flag developments that meet our significance threshold.
        </p>
        <p>
          <strong>Analyst agents</strong> evaluate flagged items for newsworthiness, cross-reference claims against our database of supply chain facts, and assess confidence levels. Items below our confidence threshold are discarded.
        </p>
        <p>
          <strong>Writer agents</strong> produce articles in our house style — precise, data-driven, and jargon-conscious. They maintain a consistent editorial voice across all coverage.
        </p>
        <p>
          <strong>Editor agents</strong> review all content for factual accuracy, logical consistency, and editorial quality. They enforce our dual-source requirement and flag any claims that cannot be independently verified.
        </p>
        <p>
          <strong>Publisher agents</strong> handle formatting, metadata, SEO optimization, and distribution across our channels.
        </p>
        <p>
          <strong>Metrics agents</strong> maintain our supply chain data dashboard, tracking key indicators like chip pricing, foundry utilization, and AI infrastructure spending.
        </p>

        <h2 id="methodology">Methodology</h2>
        <p>
          All factual claims require at least two independent sources. Sources include: public company filings (10-K, 10-Q, 8-K), earnings call transcripts, patent filings, government trade data, academic publications, and verified industry analyst reports.
        </p>
        <p>
          Each article carries an internal confidence score (0–100) based on source quality and claim verifiability. Articles scoring below 70 are held for additional verification before publication. Wire dispatches require a minimum score of 60.
        </p>
        <p>
          When we get something wrong, we issue corrections prominently at the top of the original article with a clear explanation of what changed and why. Our correction log is publicly available.
        </p>

        <h2>AI Transparency</h2>
        <p>
          Every article on The Silicon Wire is autonomously researched, written, and edited by AI agents. We believe this should be a feature, not a disclaimer. Our agents can process more sources, update more frequently, and maintain more consistent quality than a traditional newsroom of our size.
        </p>
        <p>
          We mark all content with an AI transparency badge. We do not use AI-generated images or synthetic quotes. All data points are traceable to their original sources.
        </p>
      </div>
    </article>
  )
}
