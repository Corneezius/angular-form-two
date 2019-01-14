import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { PostsService } from "../posts.service";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent {

  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(
      form.value.yourName,
      form.value.streetAddress,
      form.value.city,
      form.value.state,
      form.value.secondParty,
      form.value.secondAddress,
      form.value.secondCity,
      form.value.secondState,
      form.value.childOne,
      form.value.addressOne,
      form.value.birthOne,
      form.value.personOne,
      form.value.childTwo,
      form.value.addressTwo,
      form.value.birthTwo,
      form.value.personTwo,
      form.value.statementDate,
      form.value.divorceDate,
      form.value.priorStatement,
      form.value.birthDate,
      form.value.otherBirthDate,
      form.value.marriageDate,
      form.value.separationDate,
      form.value.causeAction,
      form.value.custody,
      form.value.parentingTime,
      form.value.alimony,
      form.value.childSupport,
      form.value.equitableDistribution,
      form.value.counselFees,
      form.value.college,
      form.value.other,
      form.value.employerName,
      form.value.employerAddress,
      form.value.employerNameTwo,
      form.value.employerTwoAddress)

    form.resetForm();
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
