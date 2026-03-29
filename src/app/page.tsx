export default function Home() {
  const products = [
    {
      name: "Page Holder",
      description: "Holds your book open while you work, cook, or study.",
      price: "$12",
      tag: "BESTSELLER",
    },
    {
      name: "Guitar Stand",
      description: "Minimal footprint stand for acoustic & electric guitars.",
      price: "$18",
      tag: "NEW",
    },
    {
      name: "Phone Holder",
      description: "Adjustable angle desk mount. Clean lines, solid grip.",
      price: "$10",
      tag: null,
    },
    {
      name: "Custom Ring",
      description: "925 silver, designed in Rhino, cast from resin prints.",
      price: "From $45",
      tag: "MADE TO ORDER",
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
      {/* ——— NAV ——— */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/50">
        <span className="text-lg font-bold tracking-[0.25em] uppercase text-amber-400">
          ivebeen3d
        </span>
        <div className="flex gap-5 text-xs tracking-widest uppercase text-neutral-400">
          <a
            href="https://www.instagram.com/ivebeen3d/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/message/YOUR_WHATSAPP_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* ——— HERO (minimal) ——— */}
      <header className="pt-32 pb-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-none">
          <span className="text-amber-400">3D</span> printed,
          <br />
          designed by hand.
        </h1>
        <p className="mt-4 text-neutral-500 text-lg max-w-md">
          Functional objects & jewelry — designed in Bogotá, printed layer by
          layer.
        </p>
      </header>

      {/* ——— PRODUCT GRID ——— */}
      <main className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, i) => (
            <article
              key={i}
              className="group relative flex flex-col bg-neutral-900 border border-neutral-800 rounded-sm overflow-hidden hover:border-amber-400/40 transition-colors duration-300"
            >
              {/* Placeholder image area */}
              <div className="aspect-square bg-neutral-800 flex items-center justify-center relative overflow-hidden">
                {/* Grid pattern background */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #fbbf24 1px, transparent 1px), linear-gradient(to bottom, #fbbf24 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                {/* Placeholder icon */}
                <svg
                  className="w-16 h-16 text-neutral-600 group-hover:text-amber-400/30 transition-colors duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={0.8}
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
                {/* Tag badge */}
                {product.tag && (
                  <span className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase bg-amber-400 text-neutral-950 px-2 py-0.5">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-base font-semibold tracking-tight text-neutral-100">
                    {product.name}
                  </h2>
                  <span className="text-sm font-mono text-amber-400 whitespace-nowrap">
                    {product.price}
                  </span>
                </div>
                <p className="mt-1 text-sm text-neutral-500 leading-relaxed flex-1">
                  {product.description}
                </p>
              </div>
            </article>
          ))}

          {/* "More coming" card */}
          <article className="flex flex-col items-center justify-center aspect-square border border-dashed border-neutral-700 rounded-sm text-neutral-600">
            <svg
              className="w-10 h-10 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path d="M12 4v16m8-8H4" />
            </svg>
            <span className="text-xs tracking-widest uppercase">
              More coming
            </span>
          </article>
        </div>
      </main>

      {/* ——— FOOTER ——— */}
      <footer className="border-t border-neutral-800/50 px-6 py-8 text-center text-xs text-neutral-600 tracking-wide">
        <p>
          © {new Date().getFullYear()} ivebeen3d · Bogotá, Colombia ·{" "}
          <a
            href="https://www.instagram.com/ivebeen3d/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            @ivebeen3d
          </a>
        </p>
      </footer>
    </div>
  );
}
