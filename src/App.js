import { EncabezadoTEI } from "./components/EncabezadoTEI";

export default function PaginaPrincipal() {
    return (
        <div class="row d-flex align-items-center contenedor_principal">
            {/* Encabezado */}
            <EncabezadoTEI />
            <div class="col-md-7">
                <div class="contenedor_enlaces_index">
                    <div class="contenedor_titulos">
                        <h3 class="subtitulo_h3">Una imagen vale más que mil palabras</h3>
                        <h4 class="subtitulo_h4">Únete Hoy</h4>
                    </div>
                    <div class="contenedor_enlaces">
                        <div class="boton boton_registrarse_google">
                            <a class="a_links" href=""><img class="google_icon" src="assets/img/index/google-icone-symbole-logo-png.ico" alt="Google Icon" />Registrarse con Google</a>
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
            </div>
            <div class="col-md-12">
                <div class="pie_pagina_index fixed-bottom">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link pie_pagina_links tad active" aria-current="page" href="#">Tlaxcala Al Descubierto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link pie_pagina_links" href="#">Información</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link pie_pagina_links" href="#">Política de Privacidad</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link pie_pagina_links" href="#">Condiciones de Servicio</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}