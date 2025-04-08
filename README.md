# AI Lawyer

## Descripción
AI Lawyer es un agente conversacional especializado en asesoría legal enfocada en la ley colombiana. Este repositorio contiene el frontend de la aplicación, diseñado para ser moderno, dinámico y escalable.

## Características

- **Interfaz moderna y profesional**: Diseño minimalista con una paleta de colores que transmite profesionalismo, confianza y seriedad.
- **Chat interactivo**: Ventana de conversación donde los usuarios pueden interactuar con el agente legal a través de texto o voz.
- **Diseño responsivo**: La interfaz se adapta a dispositivos de escritorio y móviles.
- **Visualización de referencias legales**: Las respuestas del agente pueden incluir citas de leyes, referencias a artículos y enlaces relevantes.
- **Preparado para integraciones**: El diseño contempla futuras integraciones con servicios como Livekit, Agora, Deepgram, OpenAI, Cartesia y LangChain/Langgraph.

## Tecnologías utilizadas

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion (para animaciones)
- React Icons

## Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/AI-Lawyer.git
cd AI-Lawyer
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del proyecto

```
AI-Lawyer/
├── src/
│   ├── app/              # Páginas de Next.js
│   ├── components/       # Componentes reutilizables
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Funciones de utilidad y configuraciones
│   ├── styles/           # Estilos globales
│   ├── types/            # Definiciones de tipos TypeScript
│   └── utils/            # Funciones utilitarias
├── public/               # Archivos estáticos
├── package.json
└── README.md
```

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.