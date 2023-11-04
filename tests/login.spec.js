const { test, expect } = require('@playwright/test')
import * as OTP from 'one-time-password'

test('test', async ({ page }) => {
// const script = process.env.SCRIPT || 'invoicedetails';
const script = process.env.SCRIPT || 'salesreps';
const password = process.env.MY_PASS || 'cxb*hna!jur4ntf9ZER'

await page.goto('https://vpn.bradyindustries.com/remote/login?lang=en')

await page.getByPlaceholder('Username').fill('chris.carson@bradyindustries.com')
await page.getByPlaceholder('Password').fill(password)
await page.getByRole('button', { name: 'Login' }).click()

const dummyKey = 'YGKNDUED5L3X34X4'
const token = OTP.generate(dummyKey)

await page.getByPlaceholder('Answer').fill(token)
await page.getByRole('button', { name: 'Login' }).click()

const page1Promise = page.waitForEvent('popup')
  await page.getByRole('button', { name: ' BIRDS' }).click()
  const page1 = await page1Promise

// Wait for the element to be visible
await page1.waitForSelector('#c_pass', { state: 'visible' })

await page1.locator('#c_pass').fill(password)
await page1.getByRole('button', { name: 'Login' }).click()
await page1.waitForTimeout(5000)

await page1.locator('#canvas').click({
    position: {
      x: 100,
      y: 100
    }
  })
await page1.keyboard.press('Enter')

await page1.waitForTimeout(30000)

// This is just an example and will not actually press the Windows key in the OS context
await page1.keyboard.press('Meta')
await page1.waitForTimeout(1000)

// First type the text up to the double quote
await page1.keyboard.type(`cscript \\\\snapfs\\users\\Chris.Carson\\Querys\\SENDER.vbs ${script}`);

await page1.waitForTimeout(1000)
await page1.keyboard.press('Enter')

await page1.waitForTimeout(7 * 60 * 1000)

// You can add more assertions here if needed
});
