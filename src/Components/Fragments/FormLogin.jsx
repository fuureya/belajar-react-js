import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormLogin = () => {
    return (
        <form action="">
            <InputForm text="Email" type="email" id="email" idForm="email" placeholder="Masukkan Email" />
            <InputForm text="Password" type="password" id="password" idForm="password" placeholder="The Secret!" />
            <Button variant="bg-blue-600 w-full">Submit</Button>
        </form>
    )
}

export default FormLogin;