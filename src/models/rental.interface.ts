export interface Rental {
  id: String;
  rentee: String;
  timeOut: Date;
  timeIn?: Date;
  rentalStatus: String;
}