# Liberty-Wholesale-Mortgage
Create a website for Liberty Wholesale Mortgage to have their clients view their application progress

# Tools

Visual Studio Code (IDE)

The "requirements.txt" file includes the following: 
Babel==2.9.1, Django==4.0.3, django-bootstrap-v5==1.0.11, djangorestframework==3.13.1 

Also install seperately: Node.js, Docker, Docker Compose, 

# Build Instructions
Before anything, ensure that you install all of the python dependencies using the following command:

python -m pip install -r requirements.txt or python3 -m pip install -r requirements.txt

This would install the programs needed for this software.

On the Node.js side, you will need to install quite a few packages, navigate into the Docker file and you will see the installed Node dependencies.


# Docker Instructions
Install Docker and Docker Compose

In the directory with the docker-compose.yaml file, run docker-compose build to build the image,
and then once the image is built it can be run with docker-compose up -d. To kill the process after running it, simply do docker-compose kill

Currently, Hot Reload is not enabled, so you will need to rebuild every time you change the code, so currently use the Build Instructions. 
However, Hot Reload is currently in development. 

# Testing 

In the directory with the manage.py file, run the command: python ./manage.py runserver (for Windows) or  python3 ./manage.py runserver (for macOS)

In the frontend directory, run the command: npm run dev


Note that you will need to run two processes at the same time, so either use "tmux" to run them in the same terminal window, run it in two terminals, or run them in the background by adding '&' to the end of the commands.

