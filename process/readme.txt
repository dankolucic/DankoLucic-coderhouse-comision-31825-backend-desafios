levantar el servidor con "node server.js --PORT 8081"

abrir navegador con la URI: http://localhost:8080/ y navegar en las opciones con los botones incorporados.

en archivo config.js están los llamados a las variables de entorno (mediante dotenv). El llamado se hace al archivo en ".env"

para validar process child, ir a la ruta http://localhost:8080/api/randoms y hacer otro proceso (para validar que este último no se detiene)