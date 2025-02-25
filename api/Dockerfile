
# Utiliza la imagen base de Node.js 20 en Alpine Linux
FROM node:20-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de definición de dependencias
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Instala las dependencias necesarias para Chromium
RUN apk update && apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont

# Establece la variable de entorno para que Puppeteer utilice el ejecutable de Chromium instalado
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# Copia el resto de la aplicación
COPY . .

# Expone el puerto 8080
EXPOSE 8080

# Comando por defecto para iniciar la aplicación
CMD ["node", "index.js"]



# gcloud builds submit --tag southamerica-east1-docker.pkg.dev/pacuco/pacucoserver/pacucoserver D:\Escritorio Franco\pacuco\pacuco-server
# gcloud run deploy pacuco-server --image southamerica-east1-docker.pkg.dev/pacuco/pacucoserver/pacucoserver