import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home page.js';
import loginPage from '../pageobjects/login.page.js';

Given('user is on Login Page', async() => {
    await LoginPage.open()    
})
  
When('user login using {string} as username and {string} as a password', async(username, password) => {
    await LoginPage.inputUsername(username)
    await LoginPage.inputPassword(password)
    await LoginPage.clickLoginButton()
})

When('user click login buton', async() => {
    await LoginPage.clickLoginButton()
})

Then('user should be directed to homepage', async() => {
    await HomePage.validateOnHomePage
})

Given('user input {string} as username', async(username) => {
    await LoginPage.inputUsername(username)
})

Given('user input {string} as password', async(password) => {
    await LoginPage.inputPassword(password)
})

Then('user should see error message {string}', async(errorMessage) => {
    await LoginPage.validateWrongPasswordDisplayed(errorMessage)
})