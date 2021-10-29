import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import products_Json from "./products.json"

const ItemListContainer = ({contador}) => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
            promesa
                .then((data_json)=>{
                    setTimeout(()=>{
                        setProductos(data_json)
                    },2000)
                })
                .catch(()=>{
                    console.log("Error")
                    
                })
    },[])
    const promesa= new Promise((resolve, reject) => {
        resolve(products_Json)
        reject("error")
    })

    return (
        <div>
            <span className="count">{contador}</span>
            {productos.length===0?<p>Cargando...</p>:<ItemList items={productos}/>}

        </div>
    )
}

export default ItemListContainer