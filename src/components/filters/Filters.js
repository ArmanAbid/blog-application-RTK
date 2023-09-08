import { useDispatch, useSelector } from "react-redux";

import { blogFiltered, blogSorted } from "../../features/filter/filterSlice";

export default function Filters() {
  const { sort,isSaved } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    dispatch(blogSorted(e.target.value));
  };
  const handleFilterChange = (value) => {
    dispatch(blogFiltered(value));
  };
  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            onChange={handleSortChange}
            value={sort}
          >
            <option value="" >Default</option>
            <option value="newest" >Newest</option>
            <option value="most_liked" >Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            {/* <!-- handle filter on button click --> */}
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-all"
                checked={!isSaved}
                className="radio"
                onChange={() => handleFilterChange(false)}
              />
              <label for="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-saved"
                checked={isSaved}
                className="radio"
                onChange={() => handleFilterChange(true)}
              />
              <label for="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
