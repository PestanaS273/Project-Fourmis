import { test, expect, chromium } from '@playwright/test'

class User {
    name: string;
    email: string;
    address1: string;
    address2: string;
    city: string;
    zip: number;
    contractDate: Date;
    JobTitle: string;
    
    constructor(name: string, email: string, address1: string, address2: string, city: string, zip: number, contractDate: Date, JobTitle: string) {
        this.name = name;
        this.email = email;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.zip = zip;
        this.contractDate = contractDate;
        this.JobTitle = JobTitle;
    }

    async createUser(page: Page): Promise<void> {
        await page.goto('/add_employee');
        const nameInput = page.locator('input[name="name"]');
        await nameInput.fill(this.name);
        const emailInput = page.locator('input[name="email"]');
        await emailInput.fill(this.email);
        const address1Input = page.locator('input[name="address_line1"]');
        await address1Input.fill(this.address1);
        const address2Input = page.locator('input[name="address_line2"]');
        await address2Input.fill(this.address2);
        const cityInput = page.locator('input[name="city"]');
        await cityInput.fill(this.city);
        const zipInput = page.locator('input[name="zip_code"]');
        await zipInput.fill(this.zip);
        const contractDateInput = page.locator('input[name="hiring_date"]');
        await contractDateInput.fill(this.contractDate);
        const jobTitleInput = page.locator('input[name="job_title"]');
        await jobTitleInput.fill(this.JobTitle);
        await page.click("text='Add'");
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




test.describe('User management', () => {
    let browser;
    let page;
  
    const userName = 'my user';
    const userMail = 'user@gmail.com'
    const userAddress1 = 'address1'
    const userAddress2 = 'address2'
    const userCity = 'city'
    const userZip = 12345
    const userContractDate = new Date(2021, 11, 1)
    const userJobTitle = 'job title 1'

  test.beforeAll(async () => {
    browser = await chromium.launch({ slowMo: 1000 });
  });

  test.beforeEach(async () => {
    page = await browser.newPage();
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
    await user.createUser(page);

    // Check the user has been created
    await page.goto('/users');
    const isVisible = await page.isVisible(`td:has-text('${userName}')`);
    expect(isVisible).toBe(true);

    // Delete the user
    await page.click(`text='Delete'`);
    await page.click(`text='Proceed'`);
    const isDeleted = await page.isVisible(`td:has-text('${userName}')`);
    expect(isDeleted).toBe(false);
  });
});