import React from 'react';
import {Card} from "./Card/Card";
function SearchList({ filteredFlowers }) {
    const filtered = filteredFlowers.map(flower =>  <Card key={flower.id} flower={flower} />);
    return (
        <div>
            {filtered}
        </div>
    );
}

export default SearchList;