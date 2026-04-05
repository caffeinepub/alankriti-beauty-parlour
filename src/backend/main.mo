import Array "mo:core/Array";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Order "mo:core/Order";
import List "mo:core/List";

actor {
  // Booking Inquiry
  type BookingInquiry = {
    name : Text;
    phone : Text;
    serviceType : Text;
    preferredDate : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module BookingInquiry {
    public func compare(booking1 : BookingInquiry, booking2 : BookingInquiry) : Order.Order {
      Int.compare(booking2.timestamp, booking1.timestamp);
    };
  };

  let bookingInquiries = List.empty<BookingInquiry>();

  public shared ({ caller }) func submitBookingInquiry(
    name : Text,
    phone : Text,
    serviceType : Text,
    preferredDate : Text,
    message : Text,
  ) : async () {
    let inquiry = {
      name;
      phone;
      serviceType;
      preferredDate;
      message;
      timestamp = Time.now();
    };
    bookingInquiries.add(inquiry);
  };

  public query ({ caller }) func getAllBookingInquiries() : async [BookingInquiry] {
    bookingInquiries.toArray().sort();
  };

  // Contact Form Submission
  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Testimonial {
    public func compare(testimonial1 : Testimonial, testimonial2 : Testimonial) : Order.Order {
      Int.compare(testimonial2.timestamp, testimonial1.timestamp);
    };
  };

  let contactSubmissions = List.empty<ContactSubmission>();

  public shared ({ caller }) func submitContactForm(
    name : Text,
    email : Text,
    message : Text,
  ) : async () {
    let submission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    contactSubmissions.add(submission);
  };

  // Testimonial
  type Testimonial = {
    name : Text;
    rating : Nat;
    text : Text;
    timestamp : Time.Time;
  };

  let testimonials = List.empty<Testimonial>();

  public shared ({ caller }) func submitTestimonial(
    name : Text,
    rating : Nat,
    text : Text,
  ) : async () {
    if (rating > 5) {
      return;
    };
    let testimonial = {
      name;
      rating;
      text;
      timestamp = Time.now();
    };
    testimonials.add(testimonial);
  };

  public query ({ caller }) func getAllTestimonials() : async [Testimonial] {
    testimonials.toArray().sort();
  };
};
