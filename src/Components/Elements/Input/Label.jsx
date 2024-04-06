const Label = (props) => {
    const { id, text } = props
    return (
        <label htmlFor={id} className="block text-slate-700 text-sm font-bold mb-2">{text} </label>
    )
}

export default Label;
