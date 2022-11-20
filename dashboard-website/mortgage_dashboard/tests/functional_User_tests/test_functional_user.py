from django.test import LiveServerTestCase
from selenium import webdriver
import time
import os

def take_screenshot(driver,name):
    time.sleep(3)
    os.makedirs(os.path.join("screenshots",os.path.dirname(name)), exist_ok=True)
    driver.save_screenshot(os.path.join("screenshots",name))

def test_open_url(live_server):
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")


class TestBrowser1(LiveServerTestCase):
    def test_example(self):
        driver = webdriver.Chrome("./chromedriver")
        driver.get(("%s%s" % (self.live_server_url, "/admin/")))
        assert "Log in | Django site admin" in driver.title

class TestBrowser2(LiveServerTestCase):
    def test_example(self):
        options = webdriver.ChromeOptions()
        options.add_argument("--headless")
        driver = webdriver.Chrome(executable_path=r"./chromedriver", options=options)
        driver.get(("%s%s" % (self.live_server_url, "/admin/")))
        assert "Log in | Django site admin" in driver.title

    