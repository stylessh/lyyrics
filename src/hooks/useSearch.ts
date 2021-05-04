import { useContext } from "react";
import { SearchContext } from "store/search.context";

const useSearch = () => {
  return useContext(SearchContext);
};

export default useSearch;
