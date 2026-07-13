## 1. Definición de Requisito
Un requisito es una condición, característica o capacidad que el sistema de software debe cumplir obligatoriamente para resolver un problema real del usuario. Es la descripción de lo que el sistema debe hacer y cómo debe comportarse para cumplir con los objetivos del negocio.

---

## 2. Requisitos Funcionales vs. No Funcionales

| Tipo de Requisito | ¿Qué define? | Ejemplo en el Carrito de Compras |
| :--- | :--- | :--- |
| **Funcional** | El **QUÉ** hace el sistema (funciones y acciones directas). | El sistema debe permitir al usuario agregar productos al carrito y calcular el total dinámicamente con JavaScript. |
| **No Funcional** | El **CÓMO** lo hace (propiedades de calidad y restricciones). | La interfaz debe ser completamente responsiva (adaptable a celulares y PC) usando CSS y HTML semántico. |

---

## 3. Estructura de un Caso de Uso
* **Nombre del Caso de Uso:** Agregar Producto al Carrito.
* **Actor Principal:** Cliente / Usuario Web.
* **Precondición:** El usuario debe estar visualizando la lista de productos disponibles en el sitio web.
* **Flujo Principal (Paso a Paso):**
  1. El usuario navega por la tienda y selecciona un producto.
  2. El usuario hace clic en el botón "Agregar al carrito".
  3. El script de JavaScript captura el evento del clic y procesa el ID y precio del producto.
  4. El sistema actualiza el estado del carrito internamente y suma el precio al total.
  5. El sistema actualiza la vista HTML mostrando el nuevo producto en la lista del carrito.
* **Postcondición:** El carrito muestra el producto seleccionado y el total actualizado de la compra.

---

## 4. Historia de Usuario
* **Título:** Selección y Acumulación de Productos.
* **Como** cliente de la tienda en línea,
* **Quiero** hacer clic en un botón para agregar un producto a mi carrito de compras,
* **Para** poder acumular los artículos que deseo comprar y ver el total antes de pagar.

---

## 5. Criterios de Aceptación (Formato BDD)
* **Escenario:** Agregar un producto con éxito.
  * **Dado que** el cliente está en la sección de productos y el carrito está vacío ($0.00),
  * **Cuando** hace clic en el botón "Agregar al carrito" de un artículo que cuesta $15.00,
  * **Entonces** el sistema debe incluir el artículo en la lista y el total reflejado en el HTML debe cambiar a $15.00.
