# Portafolio Web de Valentina Ramírez

Sitio personal construido con Astro y Tailwind CSS que muestra una presentación profesional, proyectos destacados, stack técnico y formas de contacto.

## Qué incluye

- **Hero**: introducción con fotografía, roles principales y botones para descargar el CV y visitar redes.
- **Proyectos**: sección de portafolio con trabajos en vivo, en desarrollo y laboratorio, mostrando problema, solución y tecnologías usadas.
- **Stack favorito**: categorías como Backend, Seguridad, IA & Automatización y Frontend.
- **Sobre mí**: historia personal, formación autodidacta, intereses adicionales y una cita destacada.
- **Contacto**: llamada a la acción para recibir mensajes por correo.

## Tecnologías

- Astro
- Tailwind CSS
- `@astrojs/tailwind`
- JavaScript/TypeScript para lógica de componentes Astro

## Estructura principal

- `src/pages/index.astro`: página principal que ensambla secciones.
- `src/layouts/Layout.astro`: layout global con navbar, footer y metadatos.
- `src/components/sections/`: secciones de Hero, Projects, Stack, About y Contact.
- `src/components/ui/`: componentes reutilizables como `Button`, `Link`, `NavBar` y `Footer`.
- `src/styles/`: estilos globales y tokens CSS.
- `astro.config.mjs`: configuración de Astro, sitio y alias de importación.

## Datos del portafolio

El contenido del sitio está definido en los componentes, con proyectos que usan tecnologías como:

- Python, Django, PostgreSQL
- OWASP, Burp Suite, Nmap, MITRE ATT&CK
- Claude API, n8n
- Astro, React, Tailwind CSS, TypeScript

## Desarrollo

Instala dependencias y ejecuta el sitio en local:

```bash
npm install
npm run dev
```

Para compilar la versión de producción:

```bash
npm run build
```

Para previsualizar la versión construida:

```bash
npm run preview
```

## Deploy

El proyecto está configurado para un sitio base en `https://wavival.github.io` a través de `astro.config.mjs`.

## Notas

- El portafolio está diseñado en español.
- El sitio tiene enfoque en backend, seguridad y productos con IA.
- El contenido es modular y fácil de actualizar desde los archivos de sección.
