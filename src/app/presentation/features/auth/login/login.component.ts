import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ILogin } from 'src/app/core/models/auth.model';
import { AuthFacade } from 'src/app/facades/auth.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loadingLogin$: Observable<boolean>;

  constructor(private _fb: FormBuilder, private _authFacade: AuthFacade) {
    this.loadingLogin$ = this._authFacade.isLoading$;
    this.loginForm = this._initForm();
  }

  ngOnInit(): void {}

  onSubmitForm() {
    if (this.loginForm.invalid) {
      return;
    }
    this._authFacade.login(<ILogin>this.loginForm.value);
  }

  private _initForm() {
    return this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
