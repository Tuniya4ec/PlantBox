import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import s from './Search.module.scss'
function Search({ details }) {

    const [searchField, setSearchField] = useState("");

    let filteredFlowers = details.filter(
        flower => {
            return (
                flower
                    .name
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                flower
                    .region
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||
            flower
                .soil
                .toLowerCase()
                .includes(searchField.toLowerCase()) ||
            flower
                .FA
                .toLowerCase()
                .includes(searchField.toLowerCase()) ||
                flower
                    .KK
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||
            flower
                .month
                .toLowerCase()
                .includes(searchField.toLowerCase()) ||

                flower
                    .structure
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||

                flower
                    .medical
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||

            flower
                .ImgSrc
                .toLowerCase()
                .includes(searchField.toLowerCase())
            );
        }
    );

    const handleChange = e => {
        setSearchField(e.target.value);
    };

    function searchList() {
        return (
            <Scroll>
                <SearchList filteredFlowers={filteredFlowers} />
            </Scroll>
        );
    }

    return (
        <div>
        <div className={s.wrapperInput}>
            <input className={s.poisk}
                   type = "search"
                   placeholder = "Поиск по растениям"
                   onChange = {handleChange}
            />
        </div>
            <div className={s.wrapper}>
                {searchList()}
            </div>
        </div>
    );
}

export default Search;