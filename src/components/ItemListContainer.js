import ItemList from "./ItemList"
import products from "./products.json"
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

// Galería de Libros

const ItemListContainer = ({}) => {

    const[prods,setProds]=useState([])

// Filtro los productos

    const {prodDescription} = useParams();

     useEffect(() => {

        let promesa 
        
         if(prodDescription){
             console.log("Acá hago el pedido de productos filtrando por categoría", prodDescription);

            promesa = new Promise((resolve,reject)=>{
                 setTimeout(()=>{
                     resolve(products.filter(productos => productos.description === prodDescription))
                 },1000)
             })

         }else{
             console.log("Acá hago el pedido de productos sin filtrar");

             promesa = new Promise((resolve,reject)=>{
                 setTimeout(()=>{
                     resolve(products)
                 },1000)
             })
         }
         
            promesa.then(resolve => {
            
                setProds(resolve)
            })
     }, [prodDescription])  

    return (
            
        <>

        <div>
            {prods.length===0?<p>Cargando...</p>:<ItemList items={prods}/>}
        </div>

        
        
        </>
    )
}

    
export default ItemListContainer;