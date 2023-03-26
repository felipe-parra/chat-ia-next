import { loginWithGoogle } from "@/services/auth.service";

function LoginPage() {
  const handleSignInWithGoogle = () => {
    loginWithGoogle()
      .then((userCredential) => {
        // El usuario ha iniciado sesión correctamente
      })
      .catch((error) => {
        // Manejo del error de inicio de sesión
      });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleSignInWithGoogle}>Login with Google</button>
    </div>
  );
}

export default LoginPage;
