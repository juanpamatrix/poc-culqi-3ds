# Culqi 3DS JP

Proyecto de demostración para Culqi 3DS.

## Requisitos

- **Node.js** (recomendado v18+)
- **pnpm** (versión 10.15.1)
- **mkcert** - Necesario para generar certificados SSL locales

## Instalación

1. Instala mkcert:

```bash
# macOS
brew install mkcert
mkcert -install

# Windows
choco install mkcert
mkcert -install

# Linux
sudo apt install libnss3-tools
mkcert -install
```

2. Genera los certificados SSL:

```bash
cd mkcert
mkcert localhost
```

3. Instala las dependencias del proyecto:

```bash
pnpm install
```

4. Configura las variables de entorno:

```bash
cp .env.example .env
```

Edita el archivo `.env` y reemplaza el valor de `VITE_CULQI_PUBLIC_KEY` con tu llave pública de Culqi.

## Desarrollo

```bash
pnpm dev
```

El servidor se ejecutará en modo HTTPS gracias a los certificados generados con mkcert.
