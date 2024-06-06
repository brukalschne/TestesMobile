import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'
import cadastroPage from '../pageobjects/cadastro.page.js'
import signup from '../pageobjects/signup.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await homePage.openMenu('profile')
        await signup.Clicar()
        //await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
        //await homePage.openMenu('profile')
        //expect((await profilePage.profileName('EBAC Cliente')).isDisplayed()).toBeTruthy()

        await cadastroPage.cadastro('Bruna', 'Daniela', '35351234', 'bruna@ebac.com.br', '1234', '1234')
    })
})