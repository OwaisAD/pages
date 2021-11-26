# Deploy React Router App to nginx
[See context here](https://stackoverflow.com/questions/53207059/react-nginx-routing-to-subdirectory)  
[See demo project here](https://github.com/HartmannDemoCode/react2021fall) with a script.sh file to deploy to droplet. If on windows, then run the scriptfile from git bash.

### Assumptions:

1. Your React App is based on create-react-app package (you are using react-router-dom).
2. You are using Nginx and the root path is being used by another service
3. You want to deploy the React App on a subdirectory and be able to serve all statics of your React App from that subdirectory.

### React App Changes:
Based on official documentation.

1. Update your BrowserRouter by adding a basename. Example: `<BrowserRouter basename="/webapp">`.
2. Specify a homepage on first line of your package.json. Example: `"homepage": "/webapp"`.
3.If you are referencing a static file by its relative path, you should add the subdirectory to that reference. 
  - Example: `src="/static/logo/logo.png"` becomes `src="/webapp/static/logo/logo.png"`.
  - Example with react-bootstrap Nav.Link: `<Nav.Link href="/webapp/about">About</Nav.Link>` **different** from using react-router NavLink: `NavLink activeClassName="active" to="/about">About</NavLink>`

### Nginx Changes:

```location ^~ /webapp {
   alias /var/www/myapp/build;
   try_files $uri $uri/ /webapp/index.html;
}
```

### Full example of nginx config file
`/etc/nginx/sites-enabled/default`:

```
upstream tomcat {
    server 127.0.0.1:8081 fail_timeout=0;
}

server {
        root /var/www;
        index index.html index.htm index.nginx-debian.html;

        server_name example.com;

        location ^~ /webapp {
            alias /var/www/webapp/build;
            try_files $uri $uri/ /webapp/index.html;
        }

        location /test {
            root /var/www/;
        }
        location / {
            # First attempt to serve request as file, then
            # as directory, then fall back to displaying a 404.
            # try_files $uri $uri/ =404;
            include proxy_params;
            proxy_pass http://tomcat/;

        }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/edu.bugelhartmann.dk/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/edu.bugelhartmann.dk/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {
    if ($host = example.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

        server_name example.com;
    listen 80;
    return 404; # managed by Certbot
}
```
### Deploy script
```sh
npm run build
scp -r ./build root@myamazingdomain.com:/var/www/webapp
```