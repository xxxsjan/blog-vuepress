FROM nginx  
COPY dist/ /usr/share/nginx/html/  
COPY docker/default.conf /etc/nginx/conf.d/default.conf 