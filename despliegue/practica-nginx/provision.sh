apt update -y
apt install -y nginx git


sudo systemctl enable nginx  
sudo systemctl start nginx    

sudo mkdir -p /var/www/daninginx/html


sudo git clone https://github.com/cloudacademy/static-website-example /var/www/daninginx/html

sudo chown -R www-data:www-data /var/www/daninginx/html
sudo chmod -R 755 /var/www/daninginx


cp /vagrant/daninginx.conf /etc/nginx/sites-available/daninginx


sudo nginx -t


sudo systemctl restart nginx
