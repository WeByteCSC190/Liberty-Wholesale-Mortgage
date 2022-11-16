FROM python:3.10-alpine
ENV PYTHONBUFFERED 1
WORKDIR /app
ADD requirements.txt /app/

RUN pip install --upgrade pip
RUN pip install -r /app/requirements.txt

COPY . /app/