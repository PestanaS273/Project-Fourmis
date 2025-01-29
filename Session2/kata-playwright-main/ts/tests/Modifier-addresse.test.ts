import { test, expect, chromium } from '@playwright/test'

test('modify second address line', async () => {
  // TODO: remove 'slowMo' when done debugging
  const browser = await chromium.launch({ slowMo: 1000 })
  const page = await browser.newPage()

  // Navigate to "Add new employee" page
  await page.goto('/add_employee')

  // Fill in the user details
  await page.fill('input[name="first_name"]', 'John')
  await page.fill('input[name="last_name"]', 'Doe')
  await page.fill('input[name="address_line_1"]', '123 Main St')
  
  // Add the same value twice in the "Second Address Line" field
  const secondAddressLine = 'Apt 4B'
  await page.fill('input[name="address_line_2"]', secondAddressLine)
  await page.fill('input[name="address_line_2"]', secondAddressLine)

  // Save the user
  await page.click("text='Save'")

  // Check if the second address line is duplicated
  await page.goto('/employees')
  const isDuplicated = await page.isVisible(`td:has-text('${secondAddressLine}')`)
  expect(isDuplicated).toBe(true)

  await browser.close()
})
