import { SearchBar } from "@/components/searchbar";
import { Stats } from "@/components/stats"

export default function Home() {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <div className="flex-shrink-0 px-2 pt-2 md:px-4 md:pt-3">
        <Stats />
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center px-4 pb-4">
        <div className="w-full max-w-2xl">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
