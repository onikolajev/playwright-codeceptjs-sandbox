const { I } = inject();

module.exports = {
  // insert your locators and methods herec
  loginForm: "#login_form",
  username: "#user-name",
  password: "#password",
  loginBtn: "#login-button",
  inventoryElem: ".inventory_item",
  errorPopup:  'h3[data-test="error"]',

  login(username, password) {
    I.fillField(this.username, username);
    I.fillField(this.password, password);
    I.click(this.loginBtn);
  },

  assertInventoryIsVisible() {
    I.seeElement(this.inventoryElem);
  },

  assertErrorMessage(errorMessage) {
    I.waitForText(errorMessage,this.errorPopup);
  },
};
