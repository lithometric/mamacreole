// Remounts on every route change, replaying the page enter animation.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main id="main" className="page-enter flex flex-1 flex-col">
      {children}
    </main>
  );
}
