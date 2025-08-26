import LoginForm from '../../features/auth/LoginForm';

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <LoginForm />
            <p className="mt-4">
                Don&apos;t have an account? <a href="/register" className="text-blue-600 underline">Register</a>
            </p>
        </div>
    );
}
