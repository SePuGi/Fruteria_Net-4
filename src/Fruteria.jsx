import { useState } from "react";

function Fruteria(props){

    const productes = [
        {
            "id" : 1,
            "nom" : "Plàtan",
            "preu" : 0.5
        },
        {
            "id" : 2,
            "nom" : "Poma",
            "preu": 0.8
        },
        {
            "id" : 3,
            "nom" : "Pinya",
            "preu": 5
        },
        {
            "id" : 4,
            "nom" : "Meló",
            "preu": 6
        },
    ];

    //formato de la lista productesSeleccionats
    // [{id: 1, nom: "xxx", preu: 2, unitats: 1}] si no esta en la lista lo guardamos asi. si ya existe sumamos 1 a unitats
    const [productesSeleccionats, setProductesSeleccionats] = useState([])
    
    function handleOnClickAñadir(e){
        
        //buscar por id en la lista de productos el seleccionado
        let tmpProducte = productes.find(x => x.id == e.target.name)
        
        //añadir producto seleccionado
        if(!SumarUnidad(tmpProducte))
        {
            tmpProducte = {...tmpProducte, unitats: 1}
            setProductesSeleccionats([...productesSeleccionats,tmpProducte])
        }
    }

    function SumarUnidad(producto){

        if(productesSeleccionats.find(x => x.id == producto.id))
        {
            const newList = productesSeleccionats.map(x => x.id === producto.id ? {...x, unitats: x.unitats + 1} : {...x, unitats: x.unitats })
            setProductesSeleccionats(newList)
            return true;
        }
        //el producto no esta en la lista, no se suma +1
        return false;
    }

    function RestarUnidad(producto){

        if(productesSeleccionats.find(x => x.id == producto.id))
        {
            const newList = productesSeleccionats.map(x => x.id === producto.id ? {...x, unitats: x.unitats - 1} : {...x, unitats: x.unitats })

            //comprobar si hay 0 unidades, si es asi, quitar de la lista
            setProductesSeleccionats(newList.filter(x => x.unitats > 0))
            return true;
        }
        //el producto no esta en la lista, no se resta -1
        return false;
    }

    function handleOnClickQuitar(e)
    {
        //buscar por id en la lista de productos el seleccionado
        let tmpProducte = productes.find(x => x.id == e.target.name)
        
        //añadir producto seleccionado
        if(!RestarUnidad(tmpProducte))
        {
            tmpProducte = {...tmpProducte, unitats: 1}
            setProductesSeleccionats([...productesSeleccionats,tmpProducte])
        }
    }

    return (
        <div className="supermercado">
            <ul>
                {productes.map(p => 
                <li className="product"> 
                    {p.nom} ({p.preu} /u)
                    <button name={p.id} onClick={handleOnClickAñadir}>Añadir</button>
                </li>)}
            </ul>
            <ul>
                <li className="containerSelectedProducts">
                    {/* Items seleccionats */}
                    {productesSeleccionats.map(ps =>
                        <li className="selectedProduct">
                            {ps.nom} ({ps.preu}€ /u) <br />
                            {ps.unitats} * {ps.preu} = {(ps.preu * ps.unitats).toFixed(2)}€
                            <button name={ps.id} onClick={handleOnClickQuitar}>Quitar</button>
                        </li>
                    )}
                </li>
                <div className="total">
                    Total: {productesSeleccionats.reduce((t, ps) => (t*1 + (ps.preu * ps.unitats)).toFixed(2), 0)}€
                </div>
            </ul>
            
        </div>
    )
}


export default Fruteria;