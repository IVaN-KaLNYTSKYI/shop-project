import './ShopItem.css'

export default function ShopItem({value, add}) {
    return (
            <div className={"box-shop-item"}>
                <img src={value.image}
                     alt={"test"}
                />
                <div className={"box-shop-item-title"}>
                    <span>{value.title}</span>
                    <div>
                        <button>DETAIL</button>
                        <button onClick={() => {
                            add(value.id)
                        }}>ADD
                        </button>
                    </div>
                </div>
            </div>
    )
}