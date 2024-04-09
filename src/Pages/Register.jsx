import { Link } from "react-router-dom";
import FormLogin from "../Components/Fragments/FormRegister";
import AuthLayout from "../Components/Layouts/AuthLayout";

const Register = () => {
    return (
        <AuthLayout title="Register" text="Silahkan Lakukan Pendaftaran Jika ingin mendaftar" >
            <FormLogin />
            <p>Ingin Login? <Link to="/login">Login</Link></p>
        </AuthLayout>
    )
}

export default Register;