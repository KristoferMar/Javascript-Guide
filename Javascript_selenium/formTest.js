require('chromedriver');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By
    until = webdriver.until;

var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

driver.get('https://www.seleniumeasy.com/test/basic-first-form-demo.html');

// Insert text in form field using id.
driver.findElement(By.id('user-message')).sendKeys('webdriver');

// Press a button to submit form.
driver.findElement(By.className('btn btn-default')).click();

// driver.quit()