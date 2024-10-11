// imagen logo de google
import logoGoogle from '../assets/img/index/google-icone-symbole-logo-png.ico';

export function EnlacesRegistroCuenta() {
    return (
        <div class="contenedor_enlaces_index">
            <div class="contenedor_titulos">
                <h3 class="subtitulo_h3">Una imagen vale más que mil palabras</h3>
                <h4 class="subtitulo_h4">Únete Hoy</h4>
            </div>
            <div class="contenedor_enlaces">
                <div class="boton boton_registrarse_google">
                    <a class="a_links" href=""><img class="google_icon" src={logoGoogle} alt="Google Icon" />Registrarse con Google</a>
                </div>
                <div class="boton boton_crear_cuenta">
                    <a class="a_links" href="">Crear una cuenta</a>
                </div>
                <span class="span_o">O</span>
                <div class="boton boton_inciar_sesion">
                    <a class="a_links" href="">Iniciar sesión</a>
                </div>
            </div>
        </div>
    );
}