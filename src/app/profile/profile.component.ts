import { Component, OnInit } from '@angular/core';
import {ProfileService} from "./profile.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'ud-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  profileInfo:any;

  profileForm:FormGroup;

  constructor(private profileInfoService: ProfileService, private formBuilder: FormBuilder) {
    this.profileInfo = profileInfoService.getProfileInfo();
    this.profileForm = formBuilder.group({
      'email': [this.profileInfo.email, Validators.required],
      'language':[this.profileInfo.language, Validators.required],
      'location':[this.profileInfo.location, Validators.required],
      'mobile':[this.profileInfo.mobile, Validators.required],
      'invite':[this.profileInfo.invite, Validators.required]
    });
  }

  ngOnInit() {
  }

}
