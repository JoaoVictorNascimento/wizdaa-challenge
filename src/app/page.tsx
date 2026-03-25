import CarsListWithSearch from "@/components/CarsListWithSearch";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full px-6 py-10 flex flex-col items-center gap-6">
        <div className="w-full max-w-xl space-y-1">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Cars list
          </h1>
        </div>
        <CarsListWithSearch />
      </main>
    </div>
  );
}
