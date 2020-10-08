import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(4), Validators.required]),
  });

  constructor(private authScv: AuthService,
              private router: Router) {}

  ngOnInit(): void {}

  async onRegister() {
    const{email, password} = this.registerForm.value;
    try {
      const user = await this.authScv.register(email, password);
      if (user !== null){
        //Redirecciona al login
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
