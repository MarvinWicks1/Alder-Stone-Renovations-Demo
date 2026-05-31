const projectTypes = [
  "Kitchen renovation",
  "Bathroom fitting",
  "Property refurbishment",
  "Garage conversion",
  "Bespoke joinery",
  "Project management",
];

export function ContactForm() {
  return (
    <form
      className="premium-card grid gap-5 rounded-3xl p-6"
      aria-label="Demo renovation enquiry form"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Name
          <input
            required
            name="name"
            className="rounded-2xl border border-soft-taupe bg-white px-4 py-3 font-normal"
            autoComplete="name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Email
          <input
            required
            name="email"
            type="email"
            className="rounded-2xl border border-soft-taupe bg-white px-4 py-3 font-normal"
            autoComplete="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Phone
          <input
            name="phone"
            type="tel"
            className="rounded-2xl border border-soft-taupe bg-white px-4 py-3 font-normal"
            autoComplete="tel"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Project type
          <select
            name="project-type"
            className="rounded-2xl border border-soft-taupe bg-white px-4 py-3 font-normal"
            defaultValue=""
          >
            <option value="" disabled>
              Select a demo option
            </option>
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Location
          <input
            name="location"
            className="rounded-2xl border border-soft-taupe bg-white px-4 py-3 font-normal"
            placeholder="e.g. Cheshire"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Estimated budget
          <input
            name="budget"
            className="rounded-2xl border border-soft-taupe bg-white px-4 py-3 font-normal"
            placeholder="e.g. £25,000 - £40,000"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Message
        <textarea
          required
          name="message"
          rows={6}
          className="rounded-2xl border border-soft-taupe bg-white px-4 py-3 font-normal"
          placeholder="Tell us about your example project brief."
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-charcoal px-7 py-4 text-sm font-semibold text-white transition hover:bg-bronze"
      >
        Submit demo enquiry
      </button>
      <p className="text-xs leading-5 text-muted-slate">
        This form is frontend-only for demonstration and does not send data.
      </p>
    </form>
  );
}
