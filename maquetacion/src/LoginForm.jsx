import LogoGo from "./LogoGo";

function LoginForm() {
    return (
        <form>
            <button><LogoGo /> Registrarse con Google</button>
            <button>Registrarse con Apple</button>
            <p >o</p>

            <button className="create-account-button">Crear cuenta</button>
            <p>Al registrarte, aceptas los <span class="special-letter">T</span>érminos de servicio y la Política de privacidad, incluida la política de uso de Cookies.</p>
<p>¿Ya tienes una cuenta? <a href="/login">Iniciar sesión</a></p>
        </form>
    );
};

export default LoginForm;