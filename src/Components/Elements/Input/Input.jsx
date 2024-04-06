const Input = (props) => {
    const { type, placeholder, idForm } = props;
    return (
        <input type={type} id={idForm} className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity:50"
            placeholder={placeholder} />
    )
}

export default Input