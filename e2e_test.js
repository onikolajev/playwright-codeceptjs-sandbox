const LoginPage = require("./pages/LoginPage");

Feature("Zero Bank Application - e2e tests");

Before(({ I }) => {
  I.amOnPage("https://www.saucedemo.com/");
});

Scenario("Sauce demo - login successful", ({ I }) => {
  LoginPage.login("standard_user", "secret_sauce");
  LoginPage.assertInventoryIsVisible();
});

Scenario("Sauce demo - login", ({ I }) => {
  LoginPage.login("standard_user", "wrong_password");
  I.waitForText(
    "Epic sadface: Username and password do not match any user in this service",
    'h3[data-test="error"]'
  );
  LoginPage.assertErrorMessage('')
});
