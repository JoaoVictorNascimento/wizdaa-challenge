"use client";

import { useMemo, useState } from "react";
import CardList from "@/components/CardList";
import { CARS_LIST } from "@/constants/list";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";

export default function CarsListWithSearch() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query, 300);

  const filteredCars = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    if (!q) return CARS_LIST;

    return CARS_LIST.filter((car) => car.name.toLowerCase().includes(q));
  }, [debouncedQuery]);

  return (
    <div className="w-full max-w-xl space-y-4">
      <div className="space-y-2">
        <label htmlFor="car-search" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Search
        </label>
        <input
          id="car-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a car (ex.: Honda)"
          className="w-full rounded border border-zinc-200 bg-white px-3 py-2 text-zinc-900 outline-none focus:ring-2 focus:ring-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:ring-zinc-700"
        />
      </div>

      <div className="space-y-2">
        {filteredCars.length === 0 ? (
          <div className="rounded border border-dashed border-zinc-300 p-4 text-sm text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
            No results for “{debouncedQuery.trim()}”.
          </div>
        ) : (
          filteredCars.map((car) => <CardList key={car.id} description={car.name} />)
        )}
      </div>
    </div>
  );
}

