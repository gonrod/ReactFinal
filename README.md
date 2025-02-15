# ReactPreEntrega2

# Proyecto Final - E-commerce

## Descripción del Proyecto
Este proyecto es un e-commerce que permite a los usuarios explorar un catálogo de productos, agregarlos a un carrito de compras y proceder al checkout. El proyecto está desarrollado con React y utiliza Firebase para la gestión de datos.

## Requisitos Cumplidos a la Fecha

### Navegabilidad Básica
- Un usuario puede ingresar a la app, navegar por los productos y ver sus detalles.
- Los productos tienen una descripción, foto y precio, y se pueden agregar al carrito.
- El carrito tiene un listado compacto de la orden con el precio total.

### Componente NavBar
- Incluye un menú desplegable de categorías.
- Acceso al carrito desde cualquier parte de la app con un widget que indica la cantidad de productos.

### Flujo del Producto
- Se puede navegar a la ruta `/item/:id` para ver los detalles del producto.
- Mensaje de error mostrado cuando un producto no existe en Firebase.

### Firebase
- Implementadas las colecciones `items` y `orders` para manejar el catálogo y las órdenes.
- Se guarda la orden en la base de datos después de la compra.

### Carrito
- Accesible durante toda la experiencia y muestra la cantidad de ítems agregados.
- Permite añadir, eliminar y modificar cantidades de productos.

### Checkout
- Muestra los ítems con sus cantidades y el total de la orden.
- Inputs para nombre, apellido, teléfono, y dos campos para confirmar el email.
- Se muestra el `orderId` al finalizar la compra.

### Persistencia del Carrito
- Uso de `localStorage` para almacenar el carrito y mantenerlo entre sesiones.

### Componentes Implementados
- Se han implementado los siguientes componentes: `NavBar`, `CartWidget`, `ItemListContainer`, `ItemDetailContainer`, `ItemQuantitySelector`, `AddItemButton` y `Checkout`.

## Requisitos Pendientes

### Detalle de Usuario en el Checkout
- Añadir validación para que el botón 'Realizar compra' se active solo cuando todos los datos del usuario estén ingresados correctamente.

### Documentación
- Crear un archivo `README.md` en el root del proyecto con una introducción, explicando las ideas y el enfoque del proyecto, junto con un resumen de las dependencias adicionales y sus justificaciones.

### Detalles de las Categorías en Firebase
- Utilizar categorías desde Firebase (opcional) para hidratar el menú y usar los id’s para linkear a sus ítems de manera dinámica.

### Mis Órdenes (Funcionalidad Extra)
- Implementar la funcionalidad para que el usuario pueda buscar su orden y ver el detalle usando el `orderId`.

### Adicionales (Opcionales)
- **Autenticación**: Implementar autenticación con Firebase.
- **Wishlist**: Añadir una lista de deseos para guardar productos que el usuario quiere comprar más tarde.
- **Customización del Producto**: Posibilidad de agregar características seleccionables como talla o color sin afectar el precio.
- **Verificación de Stock**: Validar el stock al momento de generar la orden.
- **Carrito Persistente en API**: Llevar la persistencia del carrito a una API externa en lugar de solo `localStorage`.

## Justificación de Dependencias Adicionales

### Dependencias Instaladas y su Justificación
1. **`bootstrap`**: Utilizado para el diseño de la interfaz de usuario y para crear componentes visuales ya estilizados, lo que ha ayudado a crear una aplicación visualmente atractiva y responsive sin la necesidad de diseñar desde cero.

2. **`firebase`**: Utilizado para gestionar la base de datos de productos y el almacenamiento de las órdenes de los usuarios. Firebase es una solución robusta y escalable que permite integrar la funcionalidad backend sin necesidad de implementar un servidor propio.

3. **`@mui/material`**, **`@mui/icons-material`**, **`@emotion/react`**, **`@emotion/styled`**:
   - **`@mui/material`**: Se utilizó para facilitar el diseño de la interfaz con componentes predefinidos de Material UI.
   - **`@mui/icons-material`**: Añadió íconos a la interfaz, como el ícono del carrito, mejorando la experiencia de usuario.
   - **`@emotion/react`** y **`@emotion/styled`**: Necesarias para aplicar estilos a los componentes de Material UI de manera coherente.

4. **`react-router-dom`**: Esta biblioteca facilita la navegación entre las diferentes rutas de la aplicación (catálogo, carrito, checkout), mejorando significativamente la experiencia del usuario.

5. **`@vitejs/plugin-react`**: Utilizado para integrar React con Vite y mejorar el entorno de desarrollo.

6. **`@popperjs/core`**: Soporte necesario para los elementos interactivos del menú (como el dropdown). Fue instalado automáticamente junto con Bootstrap o Material UI.
