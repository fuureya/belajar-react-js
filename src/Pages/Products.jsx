import { Fragment, useState } from "react";
import CardProducts from "../Components/Fragments/CardProducts";
import Button from "../Components/Elements/Button/Index";

const products = [
    {
        id: 2,
        title: "Baju Kemeja Flanel",
        price: 10000,
        image: "../public/img/mio.jpg",
        description: "lorem ipsum dolor sit amet consecterur adipisicing elit. nulla euius rem voluptas assumenda dolorum, quaerat a vel aperiam! sunt doloribus quo, minima quibusdam necessitatibus magni facilis in quia delectus quas!"
    },
    {
        id: 1,
        title: "Baju Sekolah",
        price: 10000,
        image: "../public/img/mio2.jpg",
        description: "lorem ipsum dolor sit amet consecterur adipisicing elit. nulla euius rem voluptas assumenda dolorum, quaerat a vel aperiam! sunt doloribus quo, minima quibusdam necessitatibus magni facilis in quia delectus quas!"
    },
    {
        id: 3,
        title: "Baju Mio",
        price: 10000,
        image: "../public/img/mio.jpg",
        description: "lorem ipsum dolor sit amet consecterur adipisicing elit. nulla euius rem voluptas assumenda dolorum, quaerat a vel aperiam! sunt doloribus quo, minima quibusdam necessitatibus magni facilis in quia delectus quas!"
    },
    {
        id: 4,
        title: "Baju Sekolah Jepang",
        price: 10000,
        image: "../public/img/mio2.jpg",
        description: "lorem ipsum dolor sit amet consecterur adipisicing elit. nulla euius rem voluptas assumenda dolorum, quaerat a vel aperiam! sunt doloribus quo, minima quibusdam necessitatibus magni facilis in quia delectus quas!"
    },

];

const Products = () => {

    const [cart, setCart] = useState([

    ]);

    const handleAddToCart = (id) => {
        if (cart.find(item => item.id === id)) {
            setCart(cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item))
        } else {
            setCart([...cart, { id, qty: 1 }])
        }
    }

    const HandleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = "/login"
    }

    const email = localStorage.getItem('email');
    return (
        <Fragment>
            <div className="flex justify-end h-10 bg-blue-600 text-white items-center px-10 py-7">
                <div>
                    {email}
                    <Button variant="bg-slate-600 ml-3" onClick={HandleLogout} type="button">Logout</Button>
                </div>
            </div>
            <div className="flex justify-center max-w-full">
                <div className="w-4/6 h-auto flex flex-wrap pl-5 pt-5">
                    {products.map((item) =>
                        <CardProducts key={item.id}>
                            <CardProducts.Header image={item.image} />
                            <CardProducts.Body title={item.title}>
                                {item.description}
                            </CardProducts.Body>
                            <CardProducts.Footer price={item.price} id={item.id} HandleAddToCart={handleAddToCart} />
                        </CardProducts>
                    )
                    }
                </div>
                <div className="w-2/6 h-auto">
                    <h1 className="text-xl font-bold text-blue-600 pt-5"> Cart : </h1>
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr class="bg-gray-50">
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            {cart.map((item) => {
                                const product = products.find(product => product.id === item.id);
                                console.log(product);
                                return (
                                    <tr key={item.id}>
                                        <td class="px-4 py-4 whitespace-nowrap">{product.title}</td>
                                        <td class="px-4 py-4 whitespace-nowrap">{product.price}</td>
                                        <td class="px-4 py-4 whitespace-nowrap">{item.qty}</td>
                                        <td class="px-4 py-4 whitespace-nowrap">{item.qty * product.price}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>


                </div>
            </div >
        </Fragment >
    );
};

export default Products;