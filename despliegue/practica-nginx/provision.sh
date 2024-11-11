apt update -y
apt install -y nginx git

 systemctl enable nginx  
 systemctl start nginx    

 mkdir -p /var/www/daninginx/html

 git clone https://github.com/cloudacademy/static-website-example /var/www/daninginx/html

 chown -R www-data:www-data /var/www/daninginx/html
 chmod -R 755 /var/www/daninginx


cp /vagrant/daninginx.conf /etc/nginx/sites-available/daninginx


 nginx -t

 systemctl restart nginx
