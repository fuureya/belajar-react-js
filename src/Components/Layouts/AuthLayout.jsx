import { Link } from "react-router-dom";
const AuthLayout = (props) => {
    const { children, title, text, type } = props;
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="w-full max-w-xs">
                <h1 className="text-blue-600 text-3xl font-bold mb-2 ">{title}</h1>
                <p className="font-medium text-slate-500">
                    {text}
                </p>
                {children}
                {type === 'register' && <p>Ingin Login? <Link to="/login">Login</Link></p>}
                {type === 'login' && <p>Tidak Punya Akun?? <Link to="/register">Register</Link></p>}
            </div>
        </div>
    );
}

export default AuthLayout;