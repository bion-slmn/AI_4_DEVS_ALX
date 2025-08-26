import RegisterForm from '../../features/auth/RegisterForm';

export default function RegisterPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <RegisterForm />
            <p className="mt-4">
                Already have an account? <a href="/login" className="text-blue-600 underline">Login</a>
            </p>
        </div>
    );
}
