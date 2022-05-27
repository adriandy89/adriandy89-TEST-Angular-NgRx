import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ILogin } from 'src/app/core/models/auth.model';
import { IUser } from 'src/app/core/models/user.model';
import { AuthFacade } from 'src/app/facades/auth.facade';
import { UserFacade } from 'src/app/facades/user.facade';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  newUserForm: FormGroup;
  isLoading$: Observable<boolean>;
  isMessage$: Observable<string | null>;
  isError$: Observable<string | null>;

  constructor(private _fb: FormBuilder, private _userFacade: UserFacade) {
    this.isLoading$ = this._userFacade.isLoading$;
    this.isMessage$ = this._userFacade.isMessage$;
    this.isError$ = this._userFacade.isError$;
    this.newUserForm = this._initForm();
  }

  ngOnInit(): void {
    this._userFacade.initialState()
  }

  onSubmitForm() {
    if (this.newUserForm.invalid) {
      return;
    }
    this._userFacade.newUser(<IUser>this.newUserForm.value);
  }

  private _initForm() {
    return this._fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
