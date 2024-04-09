import { Link } from "react-router-dom";
import FormLogin from "../Components/Fragments/FormLogin";
import AuthLayout from "../Components/Layouts/AuthLayout";

const Login = () => {
    return (
        <AuthLayout title="Login" text="Silahkan Login Jika Kamu Punya Akun" >
            <FormLogin />
            <p>Belum punya akun? <Link to="/register">Register</Link></p>
        </AuthLayout>

    )
}

export default Login;