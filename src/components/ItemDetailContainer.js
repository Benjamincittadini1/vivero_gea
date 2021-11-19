import ItemDetail from "./ItemDetail";
import products from "./products.json";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { firestore } from "./firebase";

const ItemDetailContainer = () => {
    
    const [producto,setProducto]=useState([])
    const {id} = useParams();

    const results = products.filter(product => product.id == id);

    const getItem = () => {
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                resolve(results)
            },1000  );
        });
    }


        useEffect(()=>{
            const db = firestore
            const collection = db.collection("products")
            const query = collection.doc(id)
            const promesa = query.get()

            promesa
                .then((documento)=>{
                    console.log("consulta exitosa")
                    const data = documento.data()
                    setProducto(data)
                })
        }, [id]);


    return (
        <section className={`div${producto.id}`}>
            <div className="productCatalog">
                <ItemDetail key={producto.id} plants={producto} />
            </div>
        </section>
        )
    }

export default ItemDetailContainer;