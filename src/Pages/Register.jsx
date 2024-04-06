import FormLogin from "../Components/Fragments/FormRegister";
import AuthLayout from "../Components/Layouts/AuthLayout";

const Register = () => {
    return (
        <AuthLayout title="Register" text="Silahkan Lakukan Pendaftaran Jika ingin mendaftar" > <FormLogin /> </AuthLayout>
    )
}

export default Register;