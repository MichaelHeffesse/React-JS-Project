import React from "react";
import Item from "./Item";

const ItemList = ({serv}) => {
    return (
        <div style={{display:"flex", flexwrap:"wrap"}}>
            {serv?.map(serv => <Item serv={serv}/>)}
        </div>
    );
}

export default ItemList;