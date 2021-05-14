import {UserLogged} from '@core/state/UserLogged';

export class UserBuilder {

  private userHelper: UserLogged = {id: 0, token: '', username: ''};

  public static builder(): UserBuilder {
    return new UserBuilder();
  }

  public id(id: number): UserBuilder {
    this.userHelper.id = id;
    return this;
  }

  public token(token: string): UserBuilder {
    this.userHelper.token = token;
    return this;
  }

  public username(username: string): UserBuilder {
    this.userHelper.username = username;
    return this;
  }

  public build(): UserLogged {
    return this.userHelper;
  }

}
