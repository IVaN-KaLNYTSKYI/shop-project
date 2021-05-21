import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchProduct, addBOX, removeBOX} from "../../redux";

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
    }
    const remove = (id) => {
        dispatch(removeBOX(id))
    }
    console.log(box)
    return (
        <div>
            <div>basket:{box.length}</div>
            <div>
                {
                    product.map((value) => {
                            return <div key={value.id} style={
                                {
                                    width: "30%",
                                    margin: "20px auto"
                                }
                            }>
                                <button onClick={() => {
                                    isInBox(box, value.id)
                                        ? remove(value.id)
                                        : add(value.id)
                                }}>{
                                    isInBox(box, value.id)
                                    ? "REMOVE"
                                    : "ADD"}
                                </button>
                                <h3>{value.title}</h3>
                                <img src={value.image}
                                     alt={"test"}
                                     style={{width: "100%"}}
                                />
                            </div>
                        }
                    )
                }
            </div>
        </div>
    )
}