# Liberty-Wholesale-Mortgage
Create a website for Liberty Wholesale Mortgage to have their clients view their application progress

# Build Instructions
Before anything, ensure that you install all of the python dependencies with the command
python3 -m pip install -r requirements.txt
Node.js side, you will need to install quite a few packages, navigate into the Docker file and you will see the installed Node dependencies.

You will need to run two processes at the same time, so either use tmux to run them in the same terminal window, run it in two terminals, or run them in the background by adding '&' to the end of the commands.


In the directory with the manage.py file, run python3 ./manage.py runserver
In the frontend directory, run the command npm run dev

# Docker Instructions
Install Docker and Docker Compose

In the directory with the docker-compose.yaml file, run docker-compose build to build the image,
and then once the image is built it can be run with docker-compose up -d. To kill the process after running it, simply do docker-compose kill

Currently Hot Reload is not enabled, so you will need to rebuild every time you change the code, so currently use the Build Instructions, however Hot Reload is currently in development
