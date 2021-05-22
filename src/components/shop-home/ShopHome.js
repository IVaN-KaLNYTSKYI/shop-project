import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchProduct, addBOX} from "../../redux";

import './ShopHome.css'
import ShopItem from "../shop-item/ShopItem";

export default function ShopHome() {
    const dispatch = useDispatch()
    const {product, isLoading, box} = useSelector(({product}) => (product))

    const isInBox = (boxs, id) => !!boxs.find(el => el.id === id)
    useEffect(() => {
        dispatch(fetchProduct())
    }, [])
    console.log(product)

    if (isLoading) {
        return <div>Loading!!!</div>
    }
    const add = (id) => {
        dispatch(addBOX(id))
        localStorage.setItem("box", JSON.stringify(box))
    }
    return (
        <div>
            <div>basket:{box.length}</div>
            <div className={"box-shop"}>
                {
                    product.map((value) => {
                            return <ShopItem key={value.id}
                                             value={value}
                                             add={add}
                                             isInBox={isInBox}
                                             box={box}
                            />
                        }
                    )
                }
            </div>
        </div>
    )
}