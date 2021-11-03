import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import productsMain_Json from "./productsMain.json"


const ItemDetailContainer = ({contador}) => {
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
        resolve(productsMain_Json)
        reject("error")
    })
    return(
        <div>
            {productos.length===0?<p></p>:<ItemDetail items={productos}/>}
        </div>
    )}

export default ItemDetailContainer