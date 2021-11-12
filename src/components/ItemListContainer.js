import ItemList from "./ItemList"
import products from "./products.json"
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

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

     if (prods.length === 0) {
        return (
          <div className="loading">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Loader.gif" alt="Cargando" width="100px" />
          </div>
        );
      } else {
        return (
          <>
            <div>
              <h2 className="sales">Vivero online</h2>
              <main className="productCatalog">
                <ItemList items={prods} />
              </main>
            </div>
    
            <h4 className="cartview">
              CartVIEW
            </h4>
          </>
        );
      }
}

    
export default ItemListContainer;