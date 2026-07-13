// Función principal para procesar las reglas de negocio y los descuentos
function procesarPago() {
    // 1. Capturar el monto bruto ingresado por el usuario en el HTML
    const inputMonto = document.getElementById("montoBase");
    const montoBase = parseFloat(inputMonto.value);

    // Validación básica: Si no es un número o es menor o igual a cero, detenerse
    if (isNaN(montoBase) || montoBase <= 0) {
        alert("Por favor, ingrese un monto total bruto válido y mayor a 0.");
        return;
    }

    // 2. Regla de Negocio 1: Descuento automático del 10% por Fidelidad
    const porcentajeFidelidad = 0.10;
    const descuentoFidelidad = montoBase * porcentajeFidelidad;

    // 3. Capturar la pasarela de pago seleccionada en el HTML
    const pasarelaSeleccionada = document.getElementById("pasarela").value;

    // Variables para las reglas específicas de las pasarelas
    let beneficioCupon = 0;
    let porcentajeComision = 0;

    // 4. Regla de Negocio 2: Aplicación de beneficios y comisiones según la pasarela
    if (pasarelaSeleccionada === "wm") {
        // Cartera Móvil (WM): Regala cupón de $5 y cobra 0% comisión
        beneficioCupon = 5.00;
        porcentajeComision = 0.00;
    } else if (pasarelaSeleccionada === "cc") {
        // Tarjeta de Crédito (CC): No da cupón ($0) y cobra 2% de comisión
        beneficioCupon = 0.00;
        porcentajeComision = 0.02;
    }

    // Calcular la comisión sobre el monto bruto
    const comisionProcesamiento = montoBase * porcentajeComision;

    // 5. Regla de Negocio 3: Cálculo del Valor Neto Final a facturar
    // Fórmula: Monto Base - Descuento Fidelidad - Cupón Pasarela + Comisión
    let valorNeto = montoBase - descuentoFidelidad - beneficioCupon + comisionProcesamiento;

    // Control de seguridad: El total neto no puede ser un número negativo
    if (valorNeto < 0) {
        valorNeto = 0;
    }

    // 6. Renderizar y mostrar los resultados dinámicamente en la interfaz HTML
    document.getElementById("resOriginal").innerText = `$${montoBase.toFixed(2)}`;
    document.getElementById("resFidelidad").innerText = `-$${descuentoFidelidad.toFixed(2)}`;
    document.getElementById("resCupon").innerText = `-$${beneficioCupon.toFixed(2)}`;
    document.getElementById("resComision").innerText = `+$${comisionProcesamiento.toFixed(2)}`;
    document.getElementById("resNeto").innerText = `$${valorNeto.toFixed(2)}`;
}