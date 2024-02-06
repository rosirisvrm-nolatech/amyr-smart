# Establecer la imagen base
FROM node:18.17.0-alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json
COPY package.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Copiar la carpeta next que es en donde se construye la aplicación 
COPY .next ./.next

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]