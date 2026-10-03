type StatsResponse = {
  num_stars: number;
  num_planets: number;
  num_measurements: number;
  num_references: number;
};


async function getStats(): Promise<StatsResponse> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!base) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
  }
  const res = await fetch(`${base}/api/serve/stats`, {
    next: { revalidate: 60 },
    headers: {
      "Content-Type": "application/json",
    },
  });


  if (!res.ok) {
    throw new Error(`Failed to fetch stats: ${res.statusText}`);
  }


  return res.json();
}


export async function Stats() {
    let stats: StatsResponse;
    try {
    stats = await getStats();
  } catch (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
        {`Error fetching stats: ${error instanceof Error ? error.message : String(error)}`}
      </div>
    );
  }
  const cards = [
    { label: "Stars", value: stats.num_stars, description: "Total stars in the catalogue" },
    { label: "Exoplanets", value: stats.num_planets, description: "Known exoplanets in the catalogue" },
    { label: "Measurements", value: stats.num_measurements, description: "Measurement entries recorded" },
    { label: "References", value: stats.num_references, description: "Bibliographic references linked" },
  ]
    return (
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <p className="text-sm font-medium text-slate-500">{card.label}</p>
          <p className="mt-3 text-3xl font-bold text-slate-900">
            {new Intl.NumberFormat().format(card.value)}
          </p>
          <p className="mt-2 text-sm text-slate-600">{card.description}</p>
        </div>
      ))}
    </section>
       
    );
}
