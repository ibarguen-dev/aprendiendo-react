# React router

Ofrece una forma amigable de manejar la navegación y permite definir diferentes rutas para cada componente, lo que hace que sea más fácil crear aplicaciones con múltiples secciones o páginas.

Entre las ventajas de React Router se encuentran:

Sencillez: Proporciona una interfaz sencilla para manejar las rutas en una aplicación React.
Navegación sin recarga: Permite la navegación entre diferentes vistas de la aplicación sin recargar toda la página.
Compatibilidad con múltiples plataformas: Funciona tanto para aplicaciones web como para aplicaciones móviles desarrolladas con React Native.

# Como funciona

El funcionamiento de este enrutador es muy fácil solo tiene que seguir el siguiente ejemplo.
```javascript
<Router>
	<Route path='/ ' Component={HomePages}/>
<Router/>
```
Si quieres que tenga un 404 personalizados debes hacer los siguiente:

```javascript
      <Router defaultComponent={404Pages}>
        <Route path='/'  Component={HomePage}/>
      </Router>
```

# Creditos 
  midulive
  [Síguelo en su canal de YouTube](https://www.youtube.com/midulive "Síguelo en su canal de YouTube")

# Bages
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)