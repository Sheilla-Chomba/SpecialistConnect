export interface Order {
  order_id: string;
  spec_id: string;
  user_id: string;
  order_desc: string;
  status: string;
}
export interface Updated_Order {
  order_id: string;
  order_desc: string;
  status: string;
}