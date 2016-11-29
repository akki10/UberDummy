export class ProfileService {
  myProfileInfo = {
    dp:"assets/img/akul.jpg",
    name:"Akul Narang",
    email: "akul.narang1011@gmail.com",
    language:"English",
    location: "Bengaluru",
    mobile:"*******190",
    invite:"akuln2ue"
  };

  getProfileInfo():any{
    return this.myProfileInfo;
  }
}
