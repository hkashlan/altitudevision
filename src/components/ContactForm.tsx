import { useForm } from "@tanstack/react-form";
import { useId } from "react";

const styles = {
	rightSide:
		"bg-base-200 p-8 md:p-12 rounded-3xl border border-base-300 shadow-xl",
	formGrid: "grid grid-cols-1 md:grid-cols-2 gap-6",
	fieldGroup: "form-control w-full",
	label: "label pb-2 font-semibold text-sm",
	input:
		"input input-bordered bg-base-100 focus:input-primary transition-all duration-300 w-full",
	select:
		"select select-bordered bg-base-100 focus:select-primary transition-all duration-300 w-full",
	textarea:
		"textarea textarea-bordered bg-base-100 focus:textarea-primary transition-all duration-300 w-full min-h-[120px]",
	radioGroup: "grid grid-cols-1 md:grid-cols-2 gap-3 mt-2",
	radioItem:
		"flex items-center gap-3 cursor-pointer hover:bg-base-300/50 p-2 rounded-lg transition-colors",
	radio: "radio radio-primary radio-sm",
	checkboxItem: "flex items-center gap-3 mt-6 cursor-pointer",
	checkbox: "checkbox checkbox-primary checkbox-sm",
	submitBtn:
		"btn btn-primary btn-lg w-full mt-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-500",
};

export default function ContactForm() {
	const sectionId = useId();
	const form = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			topic: "",
			area: "",
			message: "",
			acceptedTerms: false,
		},
		onSubmit: async ({ value }) => {
			console.log(value);
			alert("Vielen Dank! Ihre Nachricht wurde gesendet.");
		},
	});

	return (
		<div className={styles.rightSide}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
			>
				<div className={styles.formGrid}>
					<form.Field name="firstName">
						{(field) => (
							<div className={styles.fieldGroup}>
								<label
									className={styles.label}
									htmlFor={`${sectionId}-firstName`}
								>
									Vorname
								</label>
								<input
									id={`${sectionId}-firstName`}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									className={styles.input}
									required
								/>
							</div>
						)}
					</form.Field>
					<form.Field name="lastName">
						{(field) => (
							<div className={styles.fieldGroup}>
								<label
									className={styles.label}
									htmlFor={`${sectionId}-lastName`}
								>
									Nachname
								</label>
								<input
									id={`${sectionId}-lastName`}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									className={styles.input}
									required
								/>
							</div>
						)}
					</form.Field>
				</div>

				<div className={`${styles.formGrid} mt-6`}>
					<form.Field name="email">
						{(field) => (
							<div className={styles.fieldGroup}>
								<label className={styles.label} htmlFor={`${sectionId}-email`}>
									E-Mail
								</label>
								<input
									type="email"
									id={`${sectionId}-email`}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									className={styles.input}
									required
								/>
							</div>
						)}
					</form.Field>
					<form.Field name="phone">
						{(field) => (
							<div className={styles.fieldGroup}>
								<label className={styles.label} htmlFor={`${sectionId}-phone`}>
									Telefonnummer
								</label>
								<input
									type="tel"
									id={`${sectionId}-phone`}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									className={styles.input}
									required
								/>
							</div>
						)}
					</form.Field>
				</div>

				<form.Field name="topic">
					{(field) => (
						<div className={`${styles.fieldGroup} mt-6`}>
							<label className={styles.label} htmlFor={`${sectionId}-topic`}>
								Worum geht es bei Ihrer Anfrage?
							</label>
							<select
								id={`${sectionId}-topic`}
								name={field.name}
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={(e) => field.handleChange(e.target.value)}
								className={styles.select}
								required
							>
								<option value="">Bitte wählen...</option>
								<option value="AI-Sprachassistent">
									AI-Sprachassistent (Telefon / Hotline / Kundenservice)
								</option>
								<option value="Automatisierung">
									Automatisierung von Geschäftsprozessen
								</option>
								<option value="Data-Analytics">Daten & Analytics</option>
								<option value="Beratung">Beratung & Konzeptentwicklung</option>
							</select>
						</div>
					)}
				</form.Field>

				<form.Field name="area">
					{(field) => (
						<div className={`${styles.fieldGroup} mt-6`}>
							<span className={styles.label}>
								Für welchen Bereich suchen Sie Lösungen?
							</span>
							<div className={styles.radioGroup}>
								{[
									{
										id: "real-estate",
										label: "Wohnungsverwaltung / Immobilienunternehmen",
									},
									{ id: "customer-service", label: "Kundenservice" },
									{
										id: "crafts",
										label:
											"Handwerks- oder Servicedienstleister (z. B. Sanitär, Elektro)",
									},
									{ id: "doctors", label: "Praxen" },
									{ id: "fifth", label: "Fifth choice" },
									{ id: "other", label: "Weitere" },
								].map((opt) => (
									<label
										key={opt.id}
										className={styles.radioItem}
										htmlFor={`${sectionId}-radio-${opt.id}`}
									>
										<input
											type="radio"
											id={`${sectionId}-radio-${opt.id}`}
											name={field.name}
											value={opt.label}
											checked={field.state.value === opt.label}
											onChange={(e) => field.handleChange(e.target.value)}
											className={styles.radio}
										/>
										<span className="text-sm">{opt.label}</span>
									</label>
								))}
							</div>
						</div>
					)}
				</form.Field>

				<form.Field name="message">
					{(field) => (
						<div className={`${styles.fieldGroup} mt-6`}>
							<label className={styles.label} htmlFor={`${sectionId}-message`}>
								Nachricht
							</label>
							<textarea
								id={`${sectionId}-message`}
								name={field.name}
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={(e) => field.handleChange(e.target.value)}
								className={styles.textarea}
								placeholder="Ihre Nachricht..."
								required
							/>
						</div>
					)}
				</form.Field>

				<form.Field name="acceptedTerms">
					{(field) => (
						<label
							className={styles.checkboxItem}
							htmlFor={`${sectionId}-acceptedTerms`}
						>
							<input
								type="checkbox"
								id={`${sectionId}-acceptedTerms`}
								name={field.name}
								checked={field.state.value}
								onChange={(e) => field.handleChange(e.target.checked)}
								className={styles.checkbox}
								required
							/>
							<span className="text-sm">
								Ich akzeptiere die{" "}
								<a
									href="/terms"
									className="underline hover:text-primary transition-colors"
								>
									Nutzungsbedingungen
								</a>
							</span>
						</label>
					)}
				</form.Field>

				<form.Subscribe
					selector={(state) => [state.canSubmit, state.isSubmitting]}
				>
					{([canSubmit, isSubmitting]) => (
						<button
							type="submit"
							disabled={!canSubmit}
							className={styles.submitBtn}
						>
							{isSubmitting ? (
								<span className="loading loading-spinner"></span>
							) : (
								"Senden"
							)}
						</button>
					)}
				</form.Subscribe>
			</form>
		</div>
	);
}
