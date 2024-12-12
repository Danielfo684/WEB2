sudo apt update -y
sudo apt install -y apache2 software-properties-common
sudo apt install python3 python3-pip -y
sudo apt install certbot python3-certbot-apache -y
sudo apt install ufw -y
sudo apt-get upgrade -y
pip install domain-connect-dyndns

sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo systemctl restart apache2


sudo  chown -R www-data:www-data /var/www/
sudo  chmod -R 775 /var/www/


