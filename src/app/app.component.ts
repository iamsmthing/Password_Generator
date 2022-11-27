import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // isActive = false;
  error: string = '';
  length: number = 0;
  password: any = '';
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  onChangeLength(val: any) {
    const parsedValue = parseInt(val);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClicked(val: any) {
    const numbers = '1234567890';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()?';
    let validChars = '';
    // let errorVal =
    //   'Please select at least one check Box from above to generate password';

    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      // if (validChars.length == 0) {
      //   console.log('length', validChars.length);
      //   this.error = errorVal;
      //   this.password = '';
      //   this.isActive =
      //     !this.includeLetters || !this.includeNumbers || !this.includeSymbols;
      //   break;
      // }
      // this.isActive = false;
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
