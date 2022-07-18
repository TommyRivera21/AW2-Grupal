# descargo una imagen de node 
FROM node
# declaro el directorio de trabajo de mi docker
WORKDIR /var/www
# copio todos mis archivos dentro de la ruta /var/www de mi docker
COPY . /var/www
# comando que instala todas las dependencias al momento de crear mi docker
RUN npm install --only=production
# declaro las variables de entornos necesarias para la aplicacion
ENV PORT 3000
ENV MONGO_URI "mongodb+srv://Valentinpico:QweQwe23@cluster0.bdqze.mongodb.net/servicioTareas?retryWrites=true&w=majority"
ENV APPLICATION_NAME "Servicio Monolitico"
# expongo el puerto 3000 de mi docker para su posterior uso
EXPOSE 3000
# declaro el comando que se ejecutara al iniciar mi docker
ENTRYPOINT [ "npm","start" ]