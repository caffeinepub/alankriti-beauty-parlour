import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";

const services = [
  "Bridal Makeup",
  "Hair Styling",
  "Skin Treatment",
  "Facial & Cleanup",
  "Nail Art",
  "Threading & Waxing",
  "Mehndi",
];

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export function BookingModal({ open, onClose }: BookingModalProps) {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleClose = () => {
    onClose();
    setSuccess(false);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setError("");
    setLoading(true);
    try {
      await actor.submitBookingInquiry(name, phone, service, date, message);
      setSuccess(true);
    } catch (_err) {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="sm:max-w-md rounded-3xl border-border/60 p-0 overflow-hidden"
        data-ocid="booking.modal"
      >
        {/* Header */}
        <div
          className="px-6 pt-6 pb-4"
          style={{
            background:
              "linear-gradient(135deg, oklch(94% 0.03 30), oklch(92% 0.05 20))",
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="font-script text-2xl text-gold">Alankriti</span>
          </div>
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-charcoal text-left">
              Book an Appointment
            </DialogTitle>
            <DialogDescription className="font-sans text-sm text-muted-foreground text-left">
              Fill in your details and we'll confirm your booking shortly.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6 pb-6">
          {success ? (
            <div
              className="flex flex-col items-center text-center py-8 gap-3"
              data-ocid="booking.success_state"
            >
              <CheckCircle2 className="w-14 h-14 text-gold" />
              <h3 className="font-serif text-xl font-bold text-charcoal">
                Booking Received! 🎉
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                Thank you, {name}! We'll contact you at <strong>{phone}</strong>{" "}
                to confirm your appointment.
              </p>
              <Button
                onClick={handleClose}
                className="btn-gold rounded-full px-8 mt-2 border-0"
                data-ocid="booking.close_button"
              >
                Done
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="b-name"
                    className="font-sans text-xs font-semibold text-charcoal"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="b-name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="rounded-xl border-border/80 font-sans text-sm"
                    data-ocid="booking.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="b-phone"
                    className="font-sans text-xs font-semibold text-charcoal"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="b-phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    type="tel"
                    className="rounded-xl border-border/80 font-sans text-sm"
                    data-ocid="booking.input"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="font-sans text-xs font-semibold text-charcoal">
                  Service *
                </Label>
                <Select value={service} onValueChange={setService} required>
                  <SelectTrigger
                    className="rounded-xl border-border/80 font-sans text-sm"
                    data-ocid="booking.select"
                  >
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    {services.map((s) => (
                      <SelectItem
                        key={s}
                        value={s}
                        className="font-sans text-sm"
                      >
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="b-date"
                  className="font-sans text-xs font-semibold text-charcoal"
                >
                  Preferred Date *
                </Label>
                <Input
                  id="b-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="rounded-xl border-border/80 font-sans text-sm"
                  data-ocid="booking.input"
                />
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="b-msg"
                  className="font-sans text-xs font-semibold text-charcoal"
                >
                  Message (optional)
                </Label>
                <Textarea
                  id="b-msg"
                  placeholder="Any special requests or details..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="rounded-xl border-border/80 font-sans text-sm resize-none"
                  data-ocid="booking.textarea"
                />
              </div>

              {error && (
                <p
                  className="font-sans text-sm text-destructive bg-destructive/10 rounded-xl px-4 py-2"
                  data-ocid="booking.error_state"
                >
                  {error}
                </p>
              )}

              <Button
                type="submit"
                disabled={loading || !actor}
                className="w-full btn-gold rounded-full font-semibold text-base border-0 py-3"
                data-ocid="booking.submit_button"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Booking...
                  </>
                ) : (
                  "Confirm Booking"
                )}
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
