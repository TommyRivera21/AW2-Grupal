# descargo una imagen de node
FROM node

# copio todos mis archivos dentro de la ruta /var/www de mi docker
COPY . /app

# declaro el directorio de trabajo de mi docker
WORKDIR  /app

# comando que instala todas las dependencias al momento de crear mi docker
RUN npm install

# Valor de la ruta 
ENV PORT 3000

# Valor de el enlace de la conexion a la base de datos 
ENV MONGO_URI "mongodb://mongo:27017/test"

ENV APPLICATION_NAME "Microservicio Usuarios"

# expongo el puerto 3000 de mi docker para su posterior uso
EXPOSE 3000

# declaro el comando que se ejecutara al iniciar mi docker
ENTRYPOINT [ "npm","start" ]