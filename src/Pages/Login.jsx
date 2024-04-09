import { Link } from "react-router-dom";
import FormLogin from "../Components/Fragments/FormLogin";
import AuthLayout from "../Components/Layouts/AuthLayout";

const Login = () => {
    return (
        <AuthLayout title="Login" text="Silahkan Login Jika Kamu Punya Akun" type="login" >
            <FormLogin />
        </AuthLayout>

    )
}

export default Login;