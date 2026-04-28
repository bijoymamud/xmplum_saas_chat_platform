export default function BackgroundEffects() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-30" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(14,116,144,0.35),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.35),transparent_70%)] blur-3xl" />
    </>
  );
}
