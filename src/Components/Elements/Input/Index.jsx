import Label from "./Label";
import Input from "./Input";

const InputFrom = (props) => {
    const { id, idForm, text, placeholder, type } = props;
    return (
        <div className="mb-6">
            <Label id={id} text={text} />
            <Input idForm={id} type={type} placeholder={placeholder} />
        </div>
    )
}

export default InputFrom;