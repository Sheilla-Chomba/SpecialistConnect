export interface User {
  user_id: string;
  f_name: string;
  l_name: string;
  email: string;
  role: string;
  password: string;
}

export interface loginUserDetails {
  user_id: string;
  f_name: string;
  l_name: string;
  email: string;
  role: string;
  isWelcomed: boolean;
}
// export interface loginUserDetails{
//     user_id: string,
//     name: string,
//     email: string,
//     phone_number: string,
//     role: string,
//     isWelcomed: boolean,
// }