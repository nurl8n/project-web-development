export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface User {
  username: string;
  password: string;
  retypedPassword: string;
  firstName: string;
  lastName: string;
}
