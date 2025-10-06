import { BarChart, PlusCircle, ShoppingCart } from "lucide-react";

const AdminTabs = (activeTab, setActiveTab) => {
    const tabs = [
        { id: 'create', label: 'Crear producto', icon: PlusCircle },
        { id: 'products', label: 'Productos', icon: ShoppingCart },
        { id: 'analytics', label: 'Analytics', icon: BarChart },
    ];

    // const editProduct = (product) => {
    //     console.log("Se esta editando el producto: ", product)
    //     setProduct(products.map(p => p.id === product.id ? product : p));
    // }



    const toggleActive = (productId) => {
        console.log("Se está cambiando el estado del producto", productId);
        //como la api que usamos no tiene la propiedad activo, se le pasa una propiedad activa a los productos para poder usarlos
        if (products.active === undefined) {
            products.active = true
        }
        setProducts(products.map(product => product.id === productId ? { ...product, active: !product.active } : product))
    }





    return (
        <div className="flex justify-center mb-8">
            {
                tabs.map((tab) => {
                    <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center px-4 py-2 rounded-md transition duration-300 ease-in-out 
                        ${activeTab === tab.id ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                            : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                        }`}>
                        <tab.icon className="mr-2 h-5 x-5" />
                        {tab.label}
                    </button>
                })
            }
        </div >
    )
}

export default AdminTabs