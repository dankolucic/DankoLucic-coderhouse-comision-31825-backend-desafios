levantar el servidor con "node server.js --PORT 8080"

abrir navegador con la URI: http://localhost:8080/ y navegar en las opciones con los botones incorporados.

para validar process child, ir a la ruta http://localhost:8080/api/randoms y hacer otro proceso (para validar que este último no se detiene)

si se requiere levantar el servidor con cluster, ejecutar "node server.js --PORT 8080 --CLUSTER"
si se requiere levantar el servidor con fork, ejecutar "node server.js --PORT 8080"

levantar servidor con forever
forever
forever start server.js --PORT 8080
forever start server.js --PORT 8081
forever list
forever stopall

levantar servidor con pm2
pm2
pm2 --> fork
    pm2 start server.js --name="ServerFork" --watch -- 8080
pm2 --> cluster
    pm2 start server.js --name="Cluster" --watch -i max
pm2 list
pm2 delete all

NGINX
sudo nginx --> para levantar servidor
sudo nginx -s stop --> para para bajar servidor

Configurar NGINX para balancear cargar: /api/randoms --> cluster (8082,8083,8084,8085).

Levantar servidores en pm2:

    pm2 start server.js --name="server8080" --watch -- --PORT 8080 
    pm2 start server.js --name="server8082" --watch -i 1 -- --PORT 8082
    pm2 start server.js --name="server8082" --watch -i 1 -- --PORT 8083
    pm2 start server.js --name="server8082" --watch -i 1 -- --PORT 8084
    pm2 start server.js --name="server8082" --watch -i 1 -- --PORT 8085

Configurar rutas y servidores en NGINX, archivo nginx.config:

    http{

        upstream fork { 
        server 127.0.0.1:8080;
        }
        upstream cluster2 { 
        server 127.0.0.1:8082;
        server 127.0.0.1:8083;
        server 127.0.0.1:8084;
        server 127.0.0.1:8085;
        }

        server {
            listen       80;
            server_name  localhost;

            location / {
                proxy_pass http://fork/;
            }
            location /api/randoms/ {
                proxy_pass http://cluster/api/randoms/;
            } 
        }

    }









