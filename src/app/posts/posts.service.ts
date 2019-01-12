import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";

import { Post } from './post.model';

@Injectable({providedIn: 'root'})

export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    // this.http.get("http://localhost:3000/api/posts")
    // .subscribe(data=>{
    //   console.log(data);
    // })
    this.http.get<{message:"string", posts: Post[]}>("http://localhost:3000/api/posts")
      .subscribe((postData)=> {
        console.log(postData);
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(statementDate: string,
          divorceDate: string,
          priorStatement:string,
          birthdate: string,
          otherBirthDate: string,
          marriageDate: string,
          separationDate: string,
           causeAction: string,
           custody: string,
           parentingTime: string,
           alimony: string,
           childSupport: string,
           equitableDistribution: string,
           counselFees: string,
           college: string,
           other: string,
           yourName: string,
           streetAddress: string,
           city: string,
           state: string,
           secondParty: string,
           secondAddress: string,
           secondCity: string,
           secondState: string,
           childOne: string,
           addressOne: string,
           birthOne: string,
           personOne: string,
           childTwo: string,
           addressTwo: string,
           birthTwo: string,
           personTwo: string,
           employerName:string,
           employerAddress:string,
           employerNameTwo:string,
           employerTwoAddress:string,
        ) {
    const post: Post =
    {
          statementDate: statementDate,
          divorceDate: divorceDate,
          priorStatement:  priorStatement,
          birthdate: birthdate,
          otherBirthDate: otherBirthDate,
          marriageDate:  marriageDate,
          separationDate: separationDate,
           causeAction: causeAction,
           custody: custody,
           parentingTime: parentingTime,
           alimony: alimony,
           childSupport: childSupport,
           equitableDistribution: equitableDistribution,
           counselFees: counselFees,
           college: college,
           other: other,
           yourName:yourName,
           streetAddress:streetAddress,
           city:city,
           state: state,
           secondParty: secondParty,
           secondAddress:secondAddress,
           secondCity: secondCity,
           secondState: secondState,
           childOne: childOne,
           addressOne:addressOne,
           birthOne: birthOne,
           personOne:personOne,
           childTwo:childTwo,
           addressTwo: addressTwo,
           birthTwo:birthTwo,
           personTwo: personTwo,
           employerName:employerName,
           employerAddress: employerAddress,
           employerNameTwo: employerNameTwo,
           employerTwoAddress:employerTwoAddress,

    };

    this.http
      .post<{ message: string }>("http://localhost:3000/api/posts", post)
      .subscribe(responseData => {
        console.log(responseData.message);
        console.log(responseData);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }
}
