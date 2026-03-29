export default function Home() {
  const products = [
    {
      name: "Page Holder",
      description: "Keeps your book open, hands-free. Minimal footprint.",
      price: "$12",
      tag: "Bestseller",
    },
    {
      name: "Guitar Stand",
      description: "Sturdy, foldable, fits acoustic & electric guitars.",
      price: "$22",
      tag: null,
    },
    {
      name: "Desk Organizer",
      description: "Modular slots for pens, tools, and small parts.",
      price: "$18",
      tag: "New",
    },
    {
      name: "Phone Holder",
      description: "Adjustable desk stand with clean lines and solid grip.",
      price: "$10",
      tag: null,
    },
    {
      name: "Custom Ring",
      description: "925 silver, designed in Rhino and cast from resin prints.",
      price: "From $45",
      tag: "Made to order",
    },
    {
      name: "Earring Set",
      description: "Geometric studs. Lightweight PLA or silver cast.",
      price: "From $8",
      tag: null,
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-400 selection:text-neutral-950">
      {/* NAV */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-neutral-800/60 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold uppercase tracking-[0.25em] text-amber-400">
            ivebeen3d
          </span>

          <a
            href="https://www.instagram.com/ivebeen3d/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-neutral-400 transition-colors hover:text-amber-400"
          >
            Instagram
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="mx-auto w-full max-w-6xl px-6 pb-14 pt-32">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-500">
          Bogotá, Colombia
        </p>
        <h1 className="text-5xl font-black leading-none tracking-tight sm:text-7xl">
          <span className="text-amber-400">3D</span> printed,
          <br />
          designed by hand.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
          Functional objects and jewelry made with care — from concept to final
          print, one layer at a time.
        </p>
      </header>

      {/* PRODUCTS */}
      <main className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="group relative flex flex-col justify-between rounded-sm border border-neutral-800 p-6 transition-colors hover:border-amber-400/40"
            >
              {p.tag ? (
                <span className="absolute right-4 top-4 rounded-full border border-amber-400/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-amber-400">
                  {p.tag}
                </span>
              ) : null}

              <div className="mb-6 flex h-40 items-center justify-center rounded-sm bg-neutral-900">
                <svg
                  className="h-12 w-12 text-neutral-700 transition-colors group-hover:text-amber-400/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                </svg>
              </div>

              <h2 className="text-xl font-semibold tracking-tight">{p.name}</h2>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                {p.description}
              </p>
              <p className="mt-4 text-lg font-bold text-amber-400">{p.price}</p>
            </article>
          ))}

          <article className="flex min-h-[260px] flex-col items-center justify-center rounded-sm border border-dashed border-neutral-700 text-neutral-600">
            <svg
              className="mb-2 h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path d="M12 4v16m8-8H4" />
            </svg>
            <span className="text-xs uppercase tracking-widest">More coming</span>
          </article>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800/60 px-6 py-8 text-center text-xs tracking-wide text-neutral-600">
        <p>
          © {new Date().getFullYear()} ivebeen3d · Bogotá, Colombia ·{" "}
          <a
            href="https://www.instagram.com/ivebeen3d/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-amber-400"
          >
            @ivebeen3d
          </a>
        </p>
      </footer>
    </div>
  );
}
