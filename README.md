# 🎬 Latin Movies

Aplicación web para la gestión y visualización de películas latinoamericanas.

## 📋 Descripción

Latin Movies es una plataforma desarrollada con Node.js y Express que permite explorar y gestionar una colección de películas latinoamericanas. El proyecto utiliza EJS como motor de plantillas para renderizar vistas dinámicas.

## 🚀 Tecnologías

- **Node.js** - Entorno de ejecución de JavaScript
- **Express 5.2.1** - Framework web minimalista y flexible
- **EJS 4.0.1** - Motor de plantillas para generar HTML
- **Morgan 1.10.1** - Middleware para logging de peticiones HTTP
- **dotenv 17.2.3** - Gestión de variables de entorno
- **Nodemon 3.1.11** - Herramienta de desarrollo para reinicio automático

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd Latin_movies
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   
   Crear un archivo `.env` en la raíz del proyecto:
   ```env
   PORT=3000
   NODE_ENV=development
   ```

## 🎯 Uso

### Modo Desarrollo

Para iniciar el servidor en modo desarrollo con recarga automática:

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
Latin_movies/
├── src/
│   └── index.js          # Punto de entrada de la aplicación
├── node_modules/         # Dependencias del proyecto
├── .env                  # Variables de entorno (no incluido en git)
├── package.json          # Configuración del proyecto y dependencias
├── package-lock.json     # Versiones exactas de dependencias
└── README.md            # Documentación del proyecto
```

## 🛠️ Scripts Disponibles

- `npm run dev` - Inicia el servidor en modo desarrollo con Nodemon

## 🔧 Configuración

El proyecto utiliza las siguientes herramientas de configuración:

- **Morgan**: Configurado para logging de peticiones HTTP
- **dotenv**: Para gestión segura de variables de entorno
- **Nodemon**: Para desarrollo con recarga automática

## 📝 Próximas Funcionalidades

- [ ] Configuración de rutas y controladores
- [ ] Integración con base de datos
- [ ] Sistema de autenticación
- [ ] API RESTful para películas
- [ ] Vistas con EJS
- [ ] Sistema de búsqueda y filtrado
- [ ] Panel de administración

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 👤 Autor

**Tu Nombre**

---

⭐️ Si este proyecto te resulta útil, considera darle una estrella en GitHub