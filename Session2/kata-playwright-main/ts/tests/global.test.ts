import { test, expect, chromium } from '@playwright/test'

class User {
    name: string;
    email: string;
    address1: string;
    address2: string;
    city: string;
    zip: string;
    contractDate: string;
    JobTitle: string;
    
    constructor(name: string, email: string, address1: string, address2: string, city: string, zip: string, contractDate: string, JobTitle: string) {
        this.name = name;
        this.email = email;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.zip = zip;
        this.contractDate = contractDate;
        this.JobTitle = JobTitle;
    }

}

class Date {
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }


}

class UserPage {

    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async createUser(user: User): Promise<void> {
        await this.page.goto('/add_employee');
        await this.page.fill('input[name="name"]', user.name);
        await this.page.fill('input[name="email"]', user.email);
        await this.page.fill('input[name="address_line1"]', user.address1);
        await this.page.fill('input[name="address_line2"]', user.address2);
        await this.page.fill('input[name="city"]', user.city);
        await this.page.fill('input[name="zip_code"]', user.zip.toString());
        await this.page.fill('input[name="hiring_date"]', user.contractDate.toString());
        await this.page.fill('input[name="job_title"]', user.JobTitle);
        await this.page.click("text='Add'");
    }

    async deleteUser(userName: string): Promise<void> {
      await this.page.goto('/employees');
      await this.page.click(`text='Delete'`);
      await this.page.click(`text='Proceed'`);
  }

  async isUserVisible(userName: string): Promise<boolean> {
      await this.page.goto('/employees');
      return this.page.isVisible(`td:has-text('${userName}')`);
  }

  async updateUserContractDate(userName: string, newContractDate: string): Promise<void> {
      await this.page.goto('/employees');
      await this.page.click(`text='Edit'`);
      await this.page.click(`text=Update contract`);
      const contractDateInput = this.page.locator('input[name="hiring_date"]');
      await contractDateInput.fill(newContractDate);
      await this.page.click(`text='Update'`);
  }

  async updateUserAddressLine2(userName: string, newAddressLine2: string): Promise<void> {
      await this.page.goto('/employees');
      await this.page.click(`text='Edit'`);
      await this.page.click(`text=Update address`);
      await this.page.fill('input[name="address_line2"]', newAddressLine2);
      await this.page.click("text='Update'");
  }
}




test.describe('User management', () => {
    let browser;
    let page;
    let userPage: UserPage;
  
    const userName = 'my user';
    const userMail = 'user@gmail.com'
    const userAddress1 = 'address1'
    const userAddress2 = 'address2'
    const userCity = 'city'
    const userZip = '12345'
    const userContractDate = '2021-11-01'
    const userJobTitle = 'job title 1'

  test.beforeAll(async () => {
    browser = await chromium.launch({ slowMo: 1000 });
  });

  test.beforeEach(async () => {
    page = await browser.newPage();
    userPage = new UserPage(page);
    // Reset database before each test
    await page.goto('/reset_db');
    const proceedButton = page.locator("button:has-text('proceed')");
    await proceedButton.click();
  });

  test.afterEach(async () => {
    await page.close();
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('delete user', async () => {
    // Create a new user
    const user = new User(userName, userMail, userAddress1, userAddress2, userCity, userZip, userContractDate, userJobTitle);
    await userPage.createUser(user);

    // Check the user has been created
    let isVisible = await userPage.isUserVisible(userName);
    expect(isVisible).toBe(true);

    // Delete the user
    await userPage.deleteUser(userName);

    // Check the user has been deleted
    isVisible = await userPage.isUserVisible(userName);
    expect(isVisible).toBe(false);
});

test('modify contract date', async () => {
    // Create a new user
    const user = new User(userName, userMail, userAddress1, userAddress2, userCity, userZip, userContractDate, userJobTitle);
    await userPage.createUser(user);

    // Check the user has been created
    let isVisible = await userPage.isUserVisible(userName);
    expect(isVisible).toBe(true);

    // Modify the contract date
    const newContractDate = '2022-01-01';
    await userPage.updateUserContractDate(userName, newContractDate);

    // Check the user has been updated
    isVisible = await userPage.isUserVisible(newContractDate);
    expect(isVisible).toBe(true);
});

test('modify second address line', async () => {
    // Create a new user
    const user = new User(userName, userMail, userAddress1, userAddress2, userCity, userZip, userContractDate, userJobTitle);
    await userPage.createUser(user);

    // Modify the second address line
    const newAddressLine2 = 'Apt 4B';
    await userPage.updateUserAddressLine2(userName, newAddressLine2);

    // Check the address line has been updated
    const isUpdated = await userPage.isUserVisible(newAddressLine2);
    expect(isUpdated).toBe(true);
});

// test('future contract date', async ()=>{
//   // Create a new user
//   const user = new User(userName, userMail, userAddress1, userAddress2, userCity, userZip, userContractDate, userJobTitle);
//   await userPage.createUser(user);

//   // Put a future date
//   const newDate = "2026-01-01";
//   await userPage.updateUserContractDate(userName, newDate);

//   // Check if date passed
//   const isAdded = await userPage.isUserVisible(newDate);
//   expect(isAdded).toBe(false);
// })


});





