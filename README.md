## 1. Definición de Requisito
Un requisito es una condición, característica o capacidad que el sistema de software debe cumplir obligatoriamente para resolver un problema real del usuario o del negocio. Funciona como el puente que traduce las necesidades del cliente en instrucciones técnicas claras y medibles para el equipo de desarrollo.

---

## 2. Requisitos Funcionales vs. No Funcionales

| Tipo de Requisito | ¿Qué define? | Ejemplo aplicado a nuestro Módulo de Descuentos |
| :--- | :--- | :--- |
| **Funcional** | El **QUÉ** hace el sistema (acciones directas, cálculos, funciones y servicios ante las interacciones del usuario). | El sistema debe capturar el monto bruto en el HTML, calcular automáticamente una reducción del 10% por fidelidad y restar un cupón de $5.00 si se selecciona la pasarela "WM" (Cartera Móvil). |
| **No Funcional** | El **CÓMO** lo hace (propiedades de calidad del sistema como rendimiento, seguridad, usabilidad o restricciones técnicas). | Las operaciones lógicas de descuento programadas en `PASARELAS DE PAGO.JS` deben procesarse de forma inmediata en el navegador al hacer clic en el botón. |

---

## 3. Estructura de un Caso de Uso
* **Nombre del Caso de Uso:** Calcular Descuento por Fidelidad y Procesar Pasarela de Pago.
* **Actor Principal:** Cliente / Usuario Web.
* **Precondición:** El usuario debe ingresar un monto total bruto válido (mayor a 0) en el campo de texto del archivo `COMERCIO ELECTRONICO.HTML`.
* **Flujo Principal (Paso a Paso):**
  1. El usuario digita el monto original de su compra.
  2. El usuario selecciona la pasarela de pago deseada en el menú desplegable (ej. Cartera Móvil o Tarjeta de Crédito).
  3. El usuario hace clic en el botón "Calcular Totales".
  4. La función `procesarPago()` en JavaScript se activa y descuenta el 10% fijo por fidelidad sobre el monto bruto.
  5. El script evalúa la pasarela elegida: si es "wm" resta un cupón de $5.00; si es "cc" suma una comisión del 2%.
  6. El sistema calcula matemáticamente el Valor Neto a Facturar.
  7. JavaScript inyecta los resultados actualizados directamente en las etiquetas correspondientes del documento HTML.
* **Postcondición:** La interfaz gráfica muestra con total transparencia el desglose completo del cobro y el precio neto final.

---

## 4. Historia de Usuario
* **Título:** Aplicación Automatizada de Descuentos por Fidelidad y Métodos de Pago.
* **Como** cliente frecuente del comercio electrónico,
* **Quiero** que la plataforma calcule automáticamente mi reducción por fidelidad del 10% y los beneficios o recargos de mi pasarela de pago,
* **Para** visualizar de manera clara e inmediata mi ahorro real y el valor neto exacto que voy a pagar antes de procesar mi transacción.

---

## 5. Criterios de Aceptación (Formato BDD)
* **Escenario:** Cálculo de cobro exitoso aplicando descuento por fidelidad y pago con Cartera Móvil (WM).
  * **Dado que** el cliente digita un monto base de $100.00 en la pantalla de cobro,
  * **Cuando** selecciona la opción "Cartera Móvil (WM)" y presiona el botón "Calcular Totales",
  * **Entonces** el sistema debe restar $10.00 de fidelidad (10%), restar $5.00 del cupón beneficio, aplicar $0.00 de comisión y mostrar dinámicamente en el HTML que el Valor Neto a Facturar es de $85.00.
