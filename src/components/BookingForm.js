import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const BookingForm = ({ availableTimes, dispatch, submitForm, onDone }) => {
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [time, setTime] = useState("");

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const times = Array.isArray(availableTimes?.availableTimes)
    ? availableTimes.availableTimes
    : Array.isArray(availableTimes)
    ? availableTimes
    : [];

  const handleDateChange = (val) => {
    setDate(val);
    if (typeof dispatch === "function") dispatch(val);
    setTime("");
  };

  const canGoNext = Boolean(date && guests && (times.length ? time : true));

  const handleNext = (e) => {
    e.preventDefault();
    if (canGoNext) setStep(2);
  };

  const handleBack = () => setStep(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      date,
      time: time || null,
      guests: Number(guests),
      first,
      last,
      email,
      phone,
      comment,
    };
    if (typeof submitForm === "function") submitForm(payload);
    setConfirmed(true);
  };

  useEffect(() => {
    if (!confirmed) return;
    const t = setTimeout(() => {
      if (typeof onDone === "function") onDone();
    }, 3500);
    return () => clearTimeout(t);
  }, [confirmed, onDone]);

  return (
    <div className="booking">
      <div className="brand">
        <div className="brand-name">Little Lemon</div>
        <div className="brand-city">Chicago</div>
      </div>

      <div className="booking-hero" />

      {step === 1 && !confirmed && (
        <form className="booking-card" onSubmit={handleNext}>
          <h1 className="booking-title">Reserve a Table</h1>

          <div className="booking-row">
            <div className="field">
              <label htmlFor="book-date">Date</label>
              <input
                id="book-date"
                type="date"
                value={date}
                onChange={(e) => handleDateChange(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="book-guests">Guests</label>
              <select
                id="book-guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
              >
                <option value="">Guests</option>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {times.length > 0 && (
            <>
              <h2 className="times-heading">Available Times</h2>
              <div
                className="times-grid"
                role="radiogroup"
                aria-label="Available times"
              >
                {times.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`time-pill ${time === t ? "selected" : ""}`}
                    onClick={() => setTime(t)}
                    role="radio"
                    aria-checked={time === t}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </>
          )}

          <button className="cta" type="submit" disabled={!canGoNext}>
            Next Step
          </button>
        </form>
      )}

      {/* STEP 2 */}
      {step === 2 && !confirmed && (
        <form className="booking-card" onSubmit={handleSubmit}>
          <h1 className="booking-title booking-title--script">
            Contact Information
          </h1>

          <div className="field">
            <label htmlFor="first">First Name</label>
            <input
              id="first"
              type="text"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              required
              autoComplete="given-name"
            />
          </div>

          <div className="field">
            <label htmlFor="last">Last Name</label>
            <input
              id="last"
              type="text"
              value={last}
              onChange={(e) => setLast(e.target.value)}
              required
              autoComplete="family-name"
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="field">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              inputMode="tel"
              autoComplete="tel"
            />
          </div>

          <div className="field">
            <label htmlFor="comment">Comment</label>
            <textarea
              id="comment"
              rows="5"
              className="textarea"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleBack}
            >
              Back
            </button>
            <button type="submit" className="btn btn-primary">
              Book
              <br />
              Reservation
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

BookingForm.propTypes = {
  availableTimes: PropTypes.oneOfType([
    PropTypes.shape({ availableTimes: PropTypes.arrayOf(PropTypes.string) }),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  dispatch: PropTypes.func,
  submitForm: PropTypes.func,
  onDone: PropTypes.func,
};

BookingForm.defaultProps = {
  availableTimes: [],
  dispatch: undefined,
  submitForm: undefined,
  onDone: undefined,
};

export default BookingForm;
