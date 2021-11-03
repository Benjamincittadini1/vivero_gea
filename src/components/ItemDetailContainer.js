import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import productsMain_Json from "./productsMain.json"


const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const getItem = () => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(productsMain_Json)
            }, 2000)
          })
        }
        getItem()
          .then((data_json) => {
            setProductos(data_json)
          })
      },[])

    return(
        <div>
            <ItemDetail items={productos}/>
        </div>
    )}

export default ItemDetailContainer