from django.test import LiveServerTestCase
from django.test import TestCase

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time


class AccountsTest(TestCase):
  	
	def start(self):
		driver = webdriver.Chrome('./chromedriver')
		driver.get('http://127.0.0.1:8000/')
		# try driver.get(self.live_server_url) if driver.get('http://127.0.0.1:8000/') does not work
		
		assert "Dashboard!" in driver.Page-Title