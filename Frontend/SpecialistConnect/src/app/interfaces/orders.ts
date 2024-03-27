export interface specOrders {
  order_id: string;
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
  order_id:string;
  spec_fname: string;
  spec_lname: string;
  order_desc: string;
  status: string;
}
export interface updateOrders {
  order_desc: string;
  status: string;
}
export interface updateOrdersStatus {
  status: string;
}