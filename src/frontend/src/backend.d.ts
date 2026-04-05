import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BookingInquiry {
    serviceType: string;
    name: string;
    message: string;
    preferredDate: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export interface Testimonial {
    name: string;
    text: string;
    timestamp: Time;
    rating: bigint;
}
export interface backendInterface {
    getAllBookingInquiries(): Promise<Array<BookingInquiry>>;
    getAllTestimonials(): Promise<Array<Testimonial>>;
    submitBookingInquiry(name: string, phone: string, serviceType: string, preferredDate: string, message: string): Promise<void>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
    submitTestimonial(name: string, rating: bigint, text: string): Promise<void>;
}
