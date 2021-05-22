import {removeBOX} from "../../redux";
import {useDispatch, useSelector} from "react-redux";

export default function ShopBasket () {
    const {box} = useSelector(({product}) => (product))
    const dispatch = useDispatch()
    const remove = (id) => {
        dispatch(removeBOX(id))
    }
    localStorage.setItem("box", JSON.stringify(box))
  return(
      <div>
          {
             box.map((value)=>{
                 return <div key={value.id} className={"box-shop-item"}>
                     <img src={value.image}
                          alt={"test"}
                     />
                     <div className={"box-shop-item-title"}>
                         <span>{value.title}</span>
                         <div>
                             <button>DETAIL</button>
                             <button onClick={()=>
                                 remove(value.id)
                             }>REMOVE
                             </button>
                         </div>
                     </div>
                 </div>
             })
          }
      </div>
  )
}