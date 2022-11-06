FROM python:3.10-alpine

WORKDIR /app
ADD requirements.txt /app/

RUN pip install --upgrade pip
RUN pip install gunicorn
RUN pip install -r /app/requirements.txt
# CMD gunicorn ./mortgage_dashboard.wsgi --bind 0.0.0.0:8000
# ADD ./mortgage_dashboard /app/backend
# ADD ./api /app/api
# ADD ./accounts /app/accounts
# ADD ./users /app/users
COPY . /app/