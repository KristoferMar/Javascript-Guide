require('chromedriver');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By
    until = webdriver.until;

var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

driver.get('https://jenkins.kombitbuildcluster.eu-de.containers.appdomain.cloud/view/CI-Pipelines/job/SP_CI%20DeploymentTest%20One/job/feature%252Fcr-065_DUPLA_Aarsopgoerelse_Hent/build?delay=0sec');

driver.findElement(By.id('j_username')).sendKeys('kris');
driver.findElement(By.name('j_password')).sendKeys('your password', webdriver.Key.ENTER);

var inputField = driver.wait(until.elementLocated(By.xpath('//*[@id="main-panel"]/form/div[1]/div[1]/div[2]/div/input[2]'), 10000));
inputField.sendKeys('optional/SKAT/DUPLA/Aarsopgoerelse/integrationtests');


driver.wait(until.elementLocated(By.xpath('//*[@id="yui-gen1-button"]'), 10000)).click();

driver.quit()
