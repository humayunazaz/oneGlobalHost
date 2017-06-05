import { Component, OnInit } from '@angular/core';
import {COUNTRIES} from '../../../shared/forms/common/countries';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'checkout-custom',
  templateUrl: './checkout-custom.component.html',
  styleUrls: ['./checkout-custom.component.css']
})
export class CheckoutCustomComponent implements OnInit {
  checkoutForm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.checkoutForm = fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      country: [''],
      city: [''],
      zip: [''],
      address: [''],
      card: [''],
      cardName: ['', Validators.required],
      cardNo: [''],
      cvv: ['', Validators.required],
      expMonth: ['', Validators.required],
      expYear: ['', Validators.required],
      news: [''],
      terms: ['', Validators.required]
    })
  }
  

  public countries: Array<any>

  public validationOptions = {
    rules : {
      fname : {
        required : true
      },
      lname : {
        required : true
      },
      email : {
        required : true,
        email : true
      },
      phone : {
        required : true
      },
      country : {
        required : true
      },
      city : {
        required : true
      },
      code : {
        required : true,
        digits : true
      },
      address : {
        required : true
      },
      name : {
        required : true
      },
      card : {
        required : true,
        creditcard : true
      },
      cvv : {
        required : true,
        digits : true
      },
      month : {
        required : true
      },
      year : {
        required : true,
        digits : true
      },
      terms: {
        required: true
      }
    },

    // Messages for form validation
    messages : {
      fname : {
        required : 'Please enter your first name'
      },
      lname : {
        required : 'Please enter your last name'
      },
      email : {
        required : 'Please enter your email address',
        email : 'Please enter a VALID email address'
      },
      phone : {
        required : 'Please enter your phone number'
      },
      country : {
        required : 'Please select your country'
      },
      city : {
        required : 'Please enter your city'
      },
      code : {
        required : 'Please enter code',
        digits : 'Digits only please'
      },
      address : {
        required : 'Please enter your full address'
      },
      name : {
        required : 'Please enter name on your card'
      },
      card : {
        required : 'Please enter your card number'
      },
      cvv : {
        required : 'Enter CVV2',
        digits : 'Digits only'
      },
      month : {
        required : 'Select month'
      },
      year : {
        required : 'Enter year',
        digits : 'Digits only please'
      },
      terms: {
        required: 'You must agree with Terms and Conditions'
      }
    },

  };

  onSubmit(){
    console.log(JSON.stringify(this.checkoutForm.value));
  }

  ngOnInit() {
    this.countries = COUNTRIES;
  }

}
