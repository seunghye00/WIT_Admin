const SearchBox = () => {
    return (
        <div class="searchBox">
            <input
                type="text"
                id="searchInput"
                placeholder="검색"
                name="keyword"
            />
            <button class="searchBtn" type="submit">
                <i class="bx bx-search" />
            </button>
        </div>
    )
}

export default SearchBox
