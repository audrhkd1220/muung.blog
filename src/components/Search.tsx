import SearchIcon from '@/components/icons/SearchIcon';

const Search = () => {
  return (
    <div className="px-3 py-2 flex bg-[#EDEDED] rounded-2xl">
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none"
      />
      <button>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
