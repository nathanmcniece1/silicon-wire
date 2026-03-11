export default function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect x="1" y="1" width="26" height="26" rx="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7.5,8.4 L16.8,8.4 L16.8,13.1 L11.2,13.1 L11.2,17.8 L20.5,17.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="7.5" cy="8.4" r="1.8" fill="var(--accent)"/>
      <circle cx="20.5" cy="17.8" r="1.8" fill="var(--accent)"/>
      <circle cx="16.8" cy="8.4" r="1" fill="var(--accent)" opacity="0.5"/>
      <circle cx="16.8" cy="13.1" r="1" fill="var(--accent)" opacity="0.5"/>
      <circle cx="11.2" cy="13.1" r="1" fill="var(--accent)" opacity="0.5"/>
      <circle cx="11.2" cy="17.8" r="1" fill="var(--accent)" opacity="0.5"/>
    </svg>
  )
}
