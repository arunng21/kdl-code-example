export function SearchBar() {   
    return (
            <form className="mx-auto w-full max-w-2xl">
          <div className="flex overflow-hidden rounded-lg border border-white/20 bg-white/10 shadow-lg backdrop-blur-sm">
            <button
              id="dropdown-button"
              type="button"
              className="inline-flex shrink-0 items-center border-r border-white/20 bg-white/10 px-4 py-3 text-sm font-medium text-white hover:bg-white/20 focus:outline-none"
            >
                <label htmlFor="search-dropdown" className="sr-only">
                    Search
                </label>
                <select
                    id="search-dropdown"
                    className="bg-transparent text-white focus:outline-none"
                >
                    <option value="all">All</option>
                    <option value="planets">Planets</option>
                    <option value="stars">Stars</option>
                </select>
       
            </button>

            <label htmlFor="search-dropdown" className="sr-only">
              Search
            </label>
            <input
              type="search"
              id="search-dropdown"
              className="w-full bg-transparent px-4 py-3 text-base text-white placeholder:text-slate-200 focus:outline-none"
              placeholder="Search for Exoplanets or Stars"
              required
            />

            <button
              type="submit"
              className="inline-flex items-center bg-orange-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-orange-400 focus:outline-none"
            >
              <svg
                className="me-1.5 h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
              Search
            </button>
          </div>
        </form>
    );
}