# E-commerce con React

Este es un proyecto de E-commerce desarrollado con React. Permite visualizar una lista de productos obtenidos desde Firebase, filtrarlos por categoría, agregarlos o eliminarlos del carrito y finalizar la compra mediante un formulario.

## Tecnologías utilizadas

- [React 19](https://react.dev/) - Biblioteca principal para la interfaz de usuario.
- [React DOM 19](https://react.dev/) - Renderizado en el DOM.
- [React Router 7](https://reactrouter.com/) - Manejo de rutas en la aplicación.
- [Firebase 11](https://firebase.google.com/docs) - Base de datos en la nube para almacenamiento de productos y pedidos.
- [Bootstrap 5](https://getbootstrap.com/docs/5.3/getting-started/introduction/) - Estilos y diseño responsivo.
- [React Bootstrap 2](https://react-bootstrap.github.io/) - Componentes de Bootstrap adaptados para React.
- [SweetAlert2](https://sweetalert2.github.io/) - Alertas personalizadas.
- [SweetAlert2 React Content](https://github.com/sweetalert2/sweetalert2-react-content) - Integración de SweetAlert2 con React.
- [History 5](https://github.com/remix-run/history) - Manejo del historial de navegación.

## Funcionalidades

- **Visualización de productos:** Obtención y muestra de productos almacenados en Firebase.
- **Filtrado por categoría:** Los productos pueden filtrarse según su categoría.
- **Carrito de compras:** Se pueden agregar y eliminar productos del carrito.
- **Finalización de compra:** Formulario para ingresar nombre, correo y número de teléfono antes de completar la compra.

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```
2. Ingresa al directorio del proyecto:
   ```sh
   cd tu-repositorio
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```sh
   npm start
   ```

## Configuración

Para conectar con Firebase, crea un archivo `.env` en la raíz del proyecto con las credenciales de tu proyecto Firebase:

```
REACT_APP_FIREBASE_API_KEY=tu_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=tu_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=tu_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
REACT_APP_FIREBASE_APP_ID=tu_app_id
```

## Contribución

Si deseas contribuir, por favor abre un issue o un pull request con mejoras o correcciones.

## Licencia

Este proyecto está bajo la licencia MIT.