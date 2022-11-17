FROM python:3.10-alpine
ENV PYTHONBUFFERED 1
WORKDIR /
ADD requirements.txt /

RUN pip install --upgrade pip
RUN pip install -r /requirements.txt

COPY . /