sudo apt update -y
sudo apt install -y nginx git

sudo  systemctl enable nginx  
sudo  systemctl start nginx    


#sitio web inicial
sudo  mkdir -p /var/www/daninginx/html

sudo  git clone https://github.com/cloudacademy/static-website-example /var/www/daninginx/html

sudo  chown -R www-data:www-data /var/www/daninginx/html
sudo  chmod -R 775 /var/www/daninginx


sudo cp /vagrant/daninginx /etc/nginx/sites-available/daninginx
sudo ln -s /etc/nginx/sites-available/daninginx /etc/nginx/sites-enabled/


sudo  nginx -t

sudo  systemctl restart nginx
