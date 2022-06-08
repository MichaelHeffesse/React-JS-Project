import React from "react";


const ItemList = ({coins}) => {
    return (
        <div style={{display:"flex", flexwrap:"wrap"}}>
            {coins?.map(coins => <Item key={coins.symbol} personaje={coins}/>)}
        </div>
    );
}

export {ItemList};