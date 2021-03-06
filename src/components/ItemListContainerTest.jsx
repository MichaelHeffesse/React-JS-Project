mport React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../AsyncMock';
import ItemList from './ItemList';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    //Este id proviene de la url
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        if(!categoryId) {

            {
                getProducts().then(prods => {
                    setProducts(prods)
                }).catch(error => {
                    console.log(error)
                }).finally(() => {
                    setLoading(false)
                })
            } else {
                getProductsByCategory(categoryId).then(prods => {
                    setProducts(prods)
                }).catch(error => {
                    console.log(error)
                }).finally(() => {
                    setLoading(false)
                })
            }


        }, [categoryId])

        if(loading) {
            return <h1>Cargando...</h1>
        }

        return(
            <div className="ILC">
                <h1>{props.greeting}</h1>
                {products.length > 0
                    ? <ItemList products={products}/>
                    : <h1>No hay productos</h1>
                }
            </div>
        )
    }

    export default ItemListContainerTest