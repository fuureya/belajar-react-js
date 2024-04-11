import { Fragment } from "react";
import CardProducts from "../Components/Fragments/CardProducts";
import Button from "../Components/Elements/Button/Index";

const wanjay = [
    {
        id: Math.random(),
        title: "Baju Kemeja Flanel",
        price: 10000,
        image: "../public/img/mio.jpg",
        description: "lorem ipsum dolor sit amet consecterur adipisicing elit. nulla euius rem voluptas assumenda dolorum, quaerat a vel aperiam! sunt doloribus quo, minima quibusdam necessitatibus magni facilis in quia delectus quas!"
    },
    {
        id: Math.random(),
        title: "Baju Sekolah",
        price: 10000,
        image: "../public/img/mio2.jpg",
        description: "lorem ipsum dolor sit amet consecterur adipisicing elit. nulla euius rem voluptas assumenda dolorum, quaerat a vel aperiam! sunt doloribus quo, minima quibusdam necessitatibus magni facilis in quia delectus quas!"
    },
    {
        id: Math.random(),
        title: "Baju Tidur",
        price: 10000,
        image: "../public/img/mio.jpg",
        description: "lorem ipsum dolor sit amet consecterur adipisicing elit. nulla euius rem voluptas assumenda dolorum, quaerat a vel aperiam! sunt doloribus quo, minima quibusdam necessitatibus magni facilis in quia delectus quas!"
    }
];

const Products = () => {

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
            <div className="flex justify-center">
                {wanjay.map((item) =>
                    <CardProducts key={item.id}>
                        <CardProducts.Header image={item.image} />
                        <CardProducts.Body title={item.title}>
                            {item.description}
                        </CardProducts.Body>
                        <CardProducts.Footer price={item.price} />
                    </CardProducts>
                )
                }
            </div >
        </Fragment>
    );
};

export default Products;