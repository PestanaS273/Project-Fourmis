import { test, expect, chromium } from '@playwright/test'

test('delete user', async () => {
    const browser = await chromium.launch({ slowMo: 1000 })
    const page = await browser.newPage()

    // Reset database
    await page.goto('/reset_db')
    const proceedButton = page.locator("button:has-text('proceed')")
    await proceedButton.click()

    // Create a new user
    await page.goto('/add_employee')
    const nameInput = page.locator('input[name="name"]')
    const userName = 'my user'
    await nameInput.fill(userName)
    await page.click("text='Add'")

    // Check the user has been created
    await page.goto('/users')
    const isVisible = await page.isVisible(`td:has-text('${userName}')`)
    expect(isVisible).toBe(true)

    // Delete the user
    await page.click(`text='Delete'`)
    await page.click(`text='Proceed'`)
    const isDeleted = await page.isVisible(`td:has-text('${userName}')`)
    expect(isDeleted).toBe(true)
})