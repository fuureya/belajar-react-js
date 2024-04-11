import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormLogin = () => {
    const HandleLogin = (event) => {
        event.preventDefault();

        localStorage.setItem('email', event.target.email.value);
        localStorage.setItem('password', event.target.password.value);

        window.location.href = "/products"
    }
    return (
        <form onSubmit={HandleLogin}>
            <InputForm text="Email" type="email" id="email" idForm="email" placeholder="Masukkan Email" />
            <InputForm text="Password" type="password" id="password" idForm="password" placeholder="The Secret!" />
            <Button variant="bg-blue-600 w-full" type="submit" >Submit</Button>
        </form>
    )
}

export default FormLogin;