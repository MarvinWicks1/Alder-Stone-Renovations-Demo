const projectTypes = [
  "Kitchen renovation",
  "Bathroom fitting",
  "Full refurbishment",
  "Garage conversion",
  "Joinery",
  "Not sure yet",
];

const budgets = [
  "Under £5,000",
  "£5,000–£10,000",
  "£10,000–£25,000",
  "£25,000+",
  "Not sure yet",
];

const fieldClass = "rounded-2xl border border-soft-taupe bg-white px-4 py-3 font-normal text-charcoal outline-none transition focus:border-bronze focus:ring-4 focus:ring-bronze/10";

export function ContactForm() {
  return (
    <form className="premium-card grid gap-5 rounded-[2rem] p-6 md:p-8" aria-label="Demo renovation enquiry form">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Name
          <input required name="name" className={fieldClass} autoComplete="name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Email
          <input required name="email" type="email" className={fieldClass} autoComplete="email" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Phone
          <input name="phone" type="tel" className={fieldClass} autoComplete="tel" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Project type
          <select name="project-type" className={fieldClass} defaultValue="">
            <option value="" disabled>Select a project type</option>
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Location
          <input name="location" className={fieldClass} placeholder="e.g. Cheshire" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Estimated budget
          <select name="budget" className={fieldClass} defaultValue="">
            <option value="" disabled>Select a budget range</option>
            {budgets.map((budget) => (
              <option key={budget}>{budget}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Message
        <textarea required name="message" rows={6} className={fieldClass} placeholder="Tell us about your demo project brief, timescale and what you would like to change." />
      </label>
      <p className="rounded-2xl bg-warm-stone p-4 text-xs leading-5 text-muted-slate">
        Demo form only. On a live client site, this would connect to email, CRM or a booking workflow.
      </p>
      <button type="submit" className="rounded-full bg-bronze px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-bronze/20 transition hover:bg-charcoal">
        Send project enquiry
      </button>
    </form>
  );
}
