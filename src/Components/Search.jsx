import React from 'react';
import '../Styles/Search.css';

const Search = ({ searchValue, setSearchValue, loading }) => {

    // const [] = useState('');

    const onSearchValueChange = (event) => {
        // console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <div className="form-floating mb-3 Search">
            <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Search"
                value={searchValue}
                onChange={onSearchValueChange}
                disabled={loading} />
            <label className="floatingInput">Search</label>
        </div>
    )
}

export default Search
