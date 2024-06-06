import { $ } from '@wdio/globals'

class SingUp {

    async Clicar() {
   
     const botaoSignUp = await $('//android.widget.Button[@text="Sign up"]');
   
     await botaoSignUp.waitForDisplayed({ timeout: 5000 });
   
     await botaoSignUp.click();
   
    }
   
   }

export default new SingUp();
