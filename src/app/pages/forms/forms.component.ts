import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public genderOptions = [{id: 1, name: 'Masculino'}, {id: 2, name: 'Feminino'}, {id: 3, name: 'Prefiro não informar'}];

  public personalForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', Validators.required],
    gender: ['', Validators.required],
    status: ['', Validators.required],
    engineer: [false],
    developer: [false],
  })

  constructor(
    private formBuilder: FormBuilder,
    private activedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe(
      res => console.log(res['title'])

    );
  }

  public submitForm() {
    if(this.personalForm.valid) {
      console.log(this.personalForm);
      console.log(this.personalForm.value.firstName);
      console.log(this.personalForm.value.lastName);
    }
  }
}
