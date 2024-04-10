import CardProducts from "../Components/Fragments/CardProducts";

const wanjay = [
    {
        id: 1,
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
        id: 1,
        title: "Baju Tidur",
        price: 10000,
        image: "../public/img/mio.jpg",
        description: "lorem ipsum dolor sit amet consecterur adipisicing elit. nulla euius rem voluptas assumenda dolorum, quaerat a vel aperiam! sunt doloribus quo, minima quibusdam necessitatibus magni facilis in quia delectus quas!"
    }
];

const Products = () => {
    return (
        <div className="flex justify-center">
            {wanjay.map((item) =>
                <CardProducts>
                    <CardProducts.Header image={item.image} />
                    <CardProducts.Body title={item.title}>
                        {item.description}
                    </CardProducts.Body>
                    <CardProducts.Footer price={item.price} />
                </CardProducts>
            )}


        </div>
    );
};

export default Products;