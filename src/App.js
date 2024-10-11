// Encabezado TEI
import { EncabezadoTEI } from "./components/EncabezadoTEI";
// Footer
import { Footer } from "./components/Footer";
// Enlaces de registro de cuenta
import { EnlacesRegistroCuenta } from "./components/EnlacesRegistroCuenta";

export default function PaginaPrincipal() {
    return (
        <div class="row d-flex align-items-center contenedor_principal">
            {/* Encabezado */}
            <div class="col-md-5">
                <EncabezadoTEI />
            </div>
            {/* Enlaces de registro de cuenta, iniciar sesion */}
            <div class="col-md-7">
                <EnlacesRegistroCuenta />
            </div>
            {/* FOOTER */}
            <div class="col-md-12">
                <Footer />
            </div>
        </div>
    );
}