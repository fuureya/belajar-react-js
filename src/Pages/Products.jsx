import Button from "../Components/Elements/Button/Index";
import CardProducts from "../Components/Fragments/CardProducts";

const Products = () => {
    return (
        <div className="flex justify-center">
            <CardProducts>
                <CardProducts.Header image="../public/img/mio.jpg" />
                <CardProducts.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eius rem voluptas assumenda dolorum, quaerat a vel aperiam! Sunt doloribus quo, minima quibusdam necessitatibus magni facilis in quia delectus quas!
                </CardProducts.Body>
                <CardProducts.Footer />
            </CardProducts>

        </div>



    )
}

export default Products;