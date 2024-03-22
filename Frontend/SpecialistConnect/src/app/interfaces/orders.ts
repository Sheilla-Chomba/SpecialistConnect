export interface specOrders {
  user_fname: string;
  user_lname: string;
  order_desc: string;
  status: string;
}
export interface createOrder{
  spec_id:string;
  user_id:string;
  order_desc:string;
}
export interface userOrders {
  spec_fname: string;
  spec_lname: string;
  order_desc: string;
  status: string;
}