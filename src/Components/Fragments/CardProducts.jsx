import Button from "../Elements/Button/Index";

const CardProducts = (props) => {
    const { children } = props;
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-xs  h-auto bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">

                {children}

            </div>
        </div>
    )
}

const Header = (props) => {
    const { image } = props;
    return (
        <a href="#" className="flex justify-center">
            <img src={image} alt="akiyama mio" className="rounded-lg" />
        </a>
    )
}

const Body = (props) => {
    const { title, children } = props;
    return (
        <div className="px-5 pb-5 h-full">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white mt-4">{title}</h5>
                <p className="text-m text-white">
                    {children}
                </p>
            </a>
        </div>
    )
}

const Footer = (props) => {
    const { price = 5000, HandleAddToCart, id } = props;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">Rp. {price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })} </span>
            <Button variant="bg-blue-600" onClick={() => HandleAddToCart(id)} >Add To Cart</Button>
        </div >
    )
}

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;