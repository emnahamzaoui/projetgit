import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/shared/services/feedback.service';
import { feedback } from 'src/app/shared/models/Feedback';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  listFeedback:feedback[]=[];//////////////////
  feedback: FormGroup;
  Feedback: feedback;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.feedback = this.formBuilder.group({
      id: ['', Validators.required],
      description: ['', Validators.required],
      screen_type: ['', Validators.required],
      dislike: ['', Validators.required],
      likes: ['', Validators.required],
      rating: ['', Validators.required]
    });
  }
    onSubmit() {
      if (this.feedback.valid) {
        this.feedback = this.feedback.value;
        console.log(this.feedback);
      }
    }
  }


