levantar el servidor con "node server.js"

GZIP - Compression
    (Se agregan mas caracteres al response para evidenciar la diferencia entre una ruta con compression y sin compression)
    http://localhost.com/info --> ruta info normal
    http://localhost.com/infozip --> ruta info con middleware compression()

Loggers - Winston
    log/config.js --> configuración de transportes de winston.
    log/loggersFunctions --> se realizan funciones de loggers categorizados por niveles y/o por el proceso al cual está seteando el logger.

ruta /info modo fork agregando y extranyendo console.log():

ARTILLERY
2)Utilizaremos como test de carga Artillery en línea de comandos, emulando 50 conexiones concurrentes con 20 request por cada una. Extraer un reporte con los resultados en archivo de texto.
artillery quick --count 50 -n 20 http://localhost:8080?max=100000 > result_fork.txt

PROFILING
1) El perfilamiento del servidor, realizando el test con --prof de node.js. Analizar los resultados obtenidos luego de procesarlos con --prof-process. 


