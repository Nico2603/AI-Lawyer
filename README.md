# AI-Lawyer - Estructura del Proyecto

AI-Lawyer es una aplicación web para asesoría legal inteligente especializada en leyes colombianas.

## Estructura de Carpetas

```
/src
  /app                   # Páginas de Next.js
    contacto.tsx         # Página de contacto
    integraciones.tsx    # Página de integraciones
    recursos.tsx         # Página de recursos legales
    layout.tsx           # Layout principal de la aplicación
    page.tsx             # Página principal
  
  /components            # Componentes React
    /layout              # Componentes de estructura
      Header.tsx         # Encabezado de la aplicación con navegación
      Footer.tsx         # Pie de página
    /ui                  # Componentes de UI reutilizables
    AgentAvatar.tsx      # Avatar del asistente legal
    ChatWindow.tsx       # Ventana de chat
    ChatMessage.tsx      # Componente para mensajes de chat
  
  /lib                   # Funciones de utilidad
    utils.ts             # Funciones generales
  
  /styles                # Estilos globales
    globals.css          # CSS global de la aplicación
```

## Componentes Principales

### Layout
- **Header.tsx**: Barra de navegación principal con enlaces a Inicio, Recursos Legales, Integraciones y Contacto
- **Footer.tsx**: Pie de página con información de contacto y enlaces

### Funcionalidad Principal
- **ChatWindow.tsx**: Componente principal para la interacción con el asistente legal
- **AgentAvatar.tsx**: Avatar visual del asistente
- **ChatMessage.tsx**: Representación visual de los mensajes

## Convenciones de Desarrollo

1. Todos los componentes de estructura (Header, Footer, etc.) deben estar en `/components/layout`
2. Todos los componentes de UI reutilizables deben estar en `/components/ui`
3. Las páginas principales deben importar los componentes de layout correctos
4. Las páginas se organizan como archivos individuales en la carpeta `/app` (ej. `recursos.tsx`) en lugar de carpetas anidadas
