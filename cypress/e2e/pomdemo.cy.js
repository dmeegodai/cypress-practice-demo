import { LoginPage } from "./pages/loginpage.cy";
const adminLogin = new LoginPage();
beforeEach(() => {
  cy.visit("https://opensource-demo.orangehrmlive.com/");
});
describe("All Login Tests", () => {
  it("HRM Login Test One", () => {
    adminLogin.enterUsername("Admin");
    adminLogin.enterPassword("admin123");
    adminLogin.adminLogin();
    adminLogin.userDetailsClick();
  });

  it("HRM Login Test Two", () => {
    adminLogin.enterUsername("Admin2");
    adminLogin.enterPassword("admin123");
    adminLogin.adminLogin();
    adminLogin.userDetailsClick();
  });
});
it("HRM Login Test Three", () => {
  adminLogin.enterUsername("Admin");
  adminLogin.enterPassword("admin1234");
  adminLogin.adminLogin();
  adminLogin.userDetailsClick();
});
