export interface User {
  userName: string;
  password: string;
  mail: string;
}

export interface LoginDTO {
  userName: string;
  password: string;
}

class login {
  login(loginInfo: LoginDTO): boolean {
    return Http2ServerRequest.get(userName, password); //true yada false doner
  }
  //logınde true false controlu yap ona gore sayfa gorunumunu degıstır
  register(user: User): void {
    const respose = Http2ServerRequest.get(user);
    console.log(response);
  }

  //sweetaler alır response,u goster
}
