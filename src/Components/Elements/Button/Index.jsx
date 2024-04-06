const Button = (props) => {
    const { warna = 'bg-black', children = 'Kosong!' } = props
    return (
        <button className={`h-10 px-6 mx-1 font-semibold rounded-md ${props.warna} text-white`} type='submit'>
            {props.children}
        </button>
    )
}

export default Button;