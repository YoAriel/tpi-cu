import { useEffect, useState } from "react";
import AdminTabs from "../components/AdminTabs"
import CreateProductForm from "../components/CreateProductForm";
import ProductList from "../components/ProductList";


const AdminPage = () => {
    const [activeTab, setActiveTab] = useState('create');
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchAllProducts();
    }, []);

    const addProduct = (product) => {
        console.log("Se está agregando producto", product);
        setProducts([...products, product]);
    }

    const removeProduct = (productId) => {
        console.log("Se esta removiendo producto", productId);
        setProducts(products.filter(product => product.id !== productId))//retorna todo menos el coincida 
    }

    const toggleActive = (productId) => {
        console.log("Se está cambiando el estado del producto", productId);
        //como la api que usamos no tiene la propiedad activo, se le pasa una propiedad activa a los productos para poder usarlos
        if (products.active === undefined) {
            products.active = true
        }
        setProducts(products.map(product => product.id === productId ? { ...product, active: !product.active } : product))
    }

    async function fetchAllProducts() {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.log('Error al obtener los productos', error)
        }
    }


    return (
        <div className="min-h-screen relative overflow-hidden">

            <div className="relative z-10 container mx-auto px-4 py-16 ">
                <h1 className="text-4xl font-bold mb-8 text-emerald-400 text-center">Admin Panel</h1>
                <AdminTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                {activeTab === 'create' && (<CreateProductForm addProduct={addProduct} />)}
                {activeTab === 'products' && (
                    <ProductList products={products} removeProduct={removeProduct} toggleActive={toggleActive} />
                )}
            </div>
        </div>
    )
}

export default AdminPage