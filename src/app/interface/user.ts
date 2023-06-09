export interface Signup {
    id?: string; // Thêm trường id có thể có giá trị hoặc không
    name: string;
    email: string;
    password: string;
  }

  export interface Signin {
    id?: string; // Thêm trường id có thể có giá trị hoặc không
    email: string;
    password: string;
  }
