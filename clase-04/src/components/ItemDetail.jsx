import "./itemDetail.css"

function ItemDetail({item}) {
  return (
    <div className="item-detail">
        <h2 className="item-title">{item.title}</h2>
        <img className="item-image" src={item.image} alt={item.description} />
        <p className="item-description">{item.description}</p>
        <p className="item-price">{item.price}</p>
    </div>
  )
}

export default ItemDetail