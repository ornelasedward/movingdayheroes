import Layout from "@/components/Layout";
import { SITE } from "@/lib/site";

const LAST_UPDATED = "August 3, 2026";

const Privacy = () => {
  return (
    <Layout
      title={`Privacy Policy | ${SITE.name}`}
      description={`How ${SITE.name} collects, uses, and protects your information, including SMS opt-in data.`}
      canonical={`${SITE.domain}/privacy`}
    >
      <section className="bg-gradient-soft pt-16 pb-10 md:pt-24">
        <div className="container-tight text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display text-5xl md:text-6xl text-ink text-balance tracking-wide">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="mt-6 text-sm text-muted-foreground">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-tight max-w-3xl mx-auto prose prose-neutral prose-headings:font-display prose-headings:tracking-wide prose-headings:text-ink prose-a:text-primary">
          <p>
            {SITE.name} ("we," "us," or "our") operates the website
            <a href={SITE.domain}> movingdayheroes.com</a> and
            provides professional moving services. This policy explains what
            information we collect, how we use it, and your choices.
          </p>

          <h2>Information we collect</h2>
          <ul>
            <li>
              <strong>Contact details</strong> you provide when requesting a
              quote, booking a move, or contacting us — name, email, phone
              number, move details (date, locations, home size, type), and
              billing address.
            </li>
            <li>
              <strong>Communication content</strong> — the text of emails,
              SMS messages, and form submissions you send us, plus our
              replies.
            </li>
            <li>
              <strong>Payment information</strong> — handled by our payment
              processor (Stripe). We never store full card numbers; we only
              receive a confirmation that payment succeeded.
            </li>
            <li>
              <strong>Website usage</strong> — basic analytics (pages
              visited, referrer, approximate location, device type) collected
              by standard server logs and analytics tools.
            </li>
          </ul>

          <h2>How we use your information</h2>
          <ul>
            <li>To respond to quote requests and answer questions.</li>
            <li>
              To schedule, perform, and follow up on the move you booked,
              including coordinating arrival times and logistics.
            </li>
            <li>To send invoices, receipts, and payment reminders.</li>
            <li>
              To send service-related text messages (ETAs, arrival
              confirmations, follow-ups about your specific move) when
              you have asked us to or have texted us first.
            </li>
            <li>
              To improve our website and the quality of our customer service.
            </li>
            <li>To comply with our legal and accounting obligations.</li>
          </ul>

          <h2>SMS / text messaging</h2>
          <p>
            We use SMS only for service-related communication tied to a quote
            request, booking, or active move. You may opt in by:
          </p>
          <ul>
            <li>Texting us first at {SITE.phone};</li>
            <li>
              Submitting our website quote form with a phone number and
              checking the box authorizing us to text you about your
              request; or
            </li>
            <li>Verbally agreeing during a phone call.</li>
          </ul>
          <p>
            Standard message and data rates may apply. Message frequency
            varies and is tied to your specific inquiry or booking. You can
            opt out at any time by replying <strong>STOP</strong> to any
            message; reply <strong>HELP</strong> for assistance, or contact
            us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
          <p>
            <strong>
              All the above categories exclude text messaging originator
              opt-in data and consent; this information will not be shared
              with any third parties.
            </strong>{" "}
            Phone numbers and SMS opt-in consent collected for the purpose
            of receiving messages from {SITE.name} are never sold, rented,
            or shared with third parties or affiliates for their own
            marketing or promotional purposes.
          </p>

          <h2>How we share information</h2>
          <p>
            We share personal information only with the service providers
            we need to operate the business, and only for the purposes
            described above (payment processing, phone/SMS, email, hosting,
            and legal requirements). We do <strong>not</strong> sell your
            personal information, and we do not share it with third parties
            for their own marketing purposes.
          </p>

          <h2>Your choices</h2>
          <ul>
            <li>
              <strong>Access or correct</strong> the information we hold
              about you by emailing{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </li>
            <li>
              <strong>Delete</strong> your information (subject to our legal
              retention obligations) by emailing the address above.
            </li>
            <li>
              <strong>Opt out of SMS</strong> at any time by replying{" "}
              <strong>STOP</strong>.
            </li>
          </ul>

          <h2>Contact us</h2>
          <ul>
            <li>
              Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              Phone: <a href={SITE.phoneLink}>{SITE.phone}</a>
            </li>
            <li>{SITE.name}</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
