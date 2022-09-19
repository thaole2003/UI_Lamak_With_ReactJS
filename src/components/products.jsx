import React from 'react'
import styled from "styled-components";
import { popularProducts } from '../data'
import Product from './product';
const Products = () => {
    return (
        <div className='flex p-5 flex-wrap'>
            {popularProducts.map(item => (
                item.img ? <Product key={item.id} item={item} /> : <div />
            ))}
        </div>
    )
}

export default Products
