HOST=0.0.0.0
PORT=80

install_requirements:
  sudo apt-get update
  sudo apt-get -y upgrade
  sudo apt-get install -y python3.7
  sudo apt install -y python3-pip
  sudo apt-get install -y git
  sudo apt-get install -y curl
  pip3 install -r requirements.txt --user 
  
run:
  python3 manage.py runserver localhost:80

