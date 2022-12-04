from django.test import LiveServerTestCase
from selenium import webdriver
import time
import os
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import page
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

def take_screenshot(driver,name):
    time.sleep(3)
    os.makedirs(os.path.join("screenshots",os.path.dirname(name)), exist_ok=True)
    driver.save_screenshot(os.path.join("screenshots",name))

def test_open_url(live_server):
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    options.add_argument("--window-size=900,900")


class test_driver_example(LiveServerTestCase):
    def test_signin(self):
        path = ("./chromedriver")
        s = Service(path)
        driver = webdriver.Chrome(service = s)
        driver.get("http://localhost:3000/sign-in")
        
        form_textfield = driver.find_element(By.NAME, 'username')
        form_textfield.send_keys("drake")
        
        form_pwdfield = driver.find_element(By.NAME, 'password')
        form_pwdfield.send_keys("Power888")


        login = driver.find_element(By.XPATH, '//button[text()="Sign In"]')

        take_screenshot(driver,"screenshot/sign-in.png")

        login.click()
        time.sleep(3)
        url = driver.current_url
        self.assertEqual(url, "http://localhost:3000/dashboard")
        
    def test_signin_error(self):
        path = ("./chromedriver")
        s = Service(path)
        driver = webdriver.Chrome(service = s)
        driver.get("http://localhost:3000/sign-in")
        
        form_textfield = driver.find_element(By.NAME, 'username')
        form_textfield.send_keys("error")
        
        form_pwdfield = driver.find_element(By.NAME, 'password')
        form_pwdfield.send_keys("noodles101")

        login = driver.find_element(By.XPATH, '//button[text()="Sign In"]')
        login.click()
        time.sleep(3)
        take_screenshot(driver,"screenshot/sign-in-error.png")

        content = WebDriverWait(driver, 20).until(EC.visibility_of_element_located((By.XPATH, '//h3/text()[contains(.,"Incorrect Username or Password")]/parent::*'))).text
        
        self.assertEqual(content, "Incorrect Username or Password")
        
    def test_user_info(self):
        path = ("./chromedriver")
        s = Service(path)
        driver = webdriver.Chrome(service = s)
        driver.get("http://localhost:3000/sign-in")
        
        form_textfield = driver.find_element(By.NAME, 'username')
        form_textfield.send_keys("drake")
        
        form_pwdfield = driver.find_element(By.NAME, 'password')
        form_pwdfield.send_keys("Power888")

        login = driver.find_element(By.XPATH, '//button[text()="Sign In"]')

        login.click()
        time.sleep(3)

        nav = driver.find_element(By.ID, "NavDropDownButton")
        nav.click()

        time.sleep(2)

        account = driver.find_element(By.LINK_TEXT,"Account")
        account.click()

        time.sleep(2)

        take_screenshot(driver,"screenshot/user-info.png")

        url = driver.current_url

        self.assertEqual(url, "http://localhost:3000/account")    

    def test_leads_add_row(self):
        path = ("./chromedriver")
        s = Service(path)
        driver = webdriver.Chrome(service = s)
        driver.get("http://localhost:3000/sign-in")
        
        form_textfield = driver.find_element(By.NAME, 'username')
        form_textfield.send_keys("drake")
        
        form_pwdfield = driver.find_element(By.NAME, 'password')
        form_pwdfield.send_keys("Power888")

        login = driver.find_element(By.XPATH, '//button[text()="Sign In"]')

        login.click()
        time.sleep(3)

        nav = driver.find_element(By.ID, "NavDropDownButton")
        nav.click()

        time.sleep(2)

        leads = driver.find_element(By.LINK_TEXT,"Leads")
        leads.click()

        time.sleep(2)

        addRow = driver.find_element(By.XPATH, '//button[text()="Add Row"]')
        addRow.click()
        time.sleep(1)
        
        caseID = driver.find_element(By.NAME, 'caseId')
        caseID.send_keys("32131231")

        fName = driver.find_element(By.NAME, 'fName')
        fName.send_keys("Sevan")
        
        lName = driver.find_element(By.NAME, 'lName')
        lName.send_keys("Voski")

        creditScore = driver.find_element(By.NAME, 'creditScore')
        creditScore.send_keys("800")

        email = driver.find_element(By.NAME, 'email')
        email.send_keys("papichulo808@gmail.com")

        phone_num = driver.find_element(By.NAME, 'phone_num')
        phone_num.send_keys("180088800011")

        # status = driver.find_element(By.XPATH,"//select[@name='status']/option[text()='In Progress']")
        # status.click()

        # date = driver.find_element(By.NAME, 'date')
        # date.send_keys("12021111")

        add = driver.find_element(By.XPATH, '//button[text()="Add"]')
        take_screenshot(driver,"screenshot/add-new-lead.png")

        add.click()

        time.sleep(2)

        url = driver.current_url

        self.assertEqual(url, "http://localhost:3000/leads")        

    def test_signout(self):
        path = ("./chromedriver")
        s = Service(path)
        driver = webdriver.Chrome(service = s)
        driver.get("http://localhost:3000/sign-in")
        
        form_textfield = driver.find_element(By.NAME, 'username')
        form_textfield.send_keys("drake")
        
        form_pwdfield = driver.find_element(By.NAME, 'password')
        form_pwdfield.send_keys("Power888")

        login = driver.find_element(By.XPATH, '//button[text()="Sign In"]')
        login.click()

        time.sleep(1)

        nav = driver.find_element(By.ID, "NavDropDownButton")
        nav.click()

        time.sleep(1)

        take_screenshot(driver,"screenshot/sign-out.png")

        signOut = driver.find_element(By.LINK_TEXT,"Sign Out")
        signOut.click()

        time.sleep(2)
        driver.refresh()

        url = driver.current_url
        self.assertEqual(url, "http://localhost:3000/sign-in")        