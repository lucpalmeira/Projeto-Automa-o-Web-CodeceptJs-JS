Feature("login");

Scenario("login com sucesso", ({ I }) => {
  I.amOnPage("http://automationpratice.com.br/");
  I.click("Login");
  I.waitForText("Login", 10);
  I.fillField("#user", "lucianopalmeira26@gmail.com");
  I.fillField("#password", "123456");
  I.click("#btnLogin");
  I.waitForText("Login realizado", 10);
}).tag("@sucesso");

Scenario("Tentando Logar digitando apenas o e-mail", ({ I }) => {
  I.amOnPage("http://automationpratice.com.br/");
  I.click("Login");
  I.waitForText("Login", 10);
  I.fillField("#user", "lucianopalmeira26@gmail.com");
  I.click("#btnLogin");
  I.waitForText("Login realizado", 10);
});

Scenario("Tentando logar sem digitar e-mail e senha", ({ I }) => {
  I.amOnPage("http://automationpratice.com.br/");
  I.click("Login");
  I.waitForText("Login", 10);
  I.click("#btnLogin");
  I.waitForText("Login realizado", 10);
});

Scenario("Tentando Logar digitando apenas a senha", ({ I }) => {
  I.amOnPage("http://automationpratice.com.br/");
  I.click("Login");
  I.waitForText("Login", 10);
  I.fillField("#password", "123456");
  I.click("#btnLogin");
  I.waitForText("Login realizado", 10);
});
