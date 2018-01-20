import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewChatService } from './new-chat.service';

@Component({
  selector: 'hb-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.css']
})
export class NewChatComponent implements OnInit {

  form: FormGroup;
  hash: string;
  constructor(
    private route: ActivatedRoute,
    private service: NewChatService
  ) { }

  ngOnInit() {

    this.route.params.subscribe(parameters => this.hash = parameters.code );
    this.setupForm();

  }

  get secretHasError(): boolean {
    const control = this.form.get('secret');
    return control.invalid && control.dirty && control.errors.required
  }

  get secretHasErrorMinLength(): boolean {
    const control = this.form.get('secret');
    return control.invalid && control.dirty && control.errors.minlength;
  }

  add() {
    if (this.form.invalid) {
      console.log('Formulário inválido');
      return;
    }
    // const hash = this.form.value.hash;
    // const secret = this.form.value.secret;

    const  {hash, secret} = this.form.value;

    this.service.start( hash, secret )
    .subscribe(
      response => { 
        console.log(response);
      }
    )
  }

  private setupForm() {
    this.form = new FormGroup({
      'hash': new FormControl(this.hash, [ Validators.required] ),
      'secret': new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  }

}
