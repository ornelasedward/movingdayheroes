-- Rebrand SMS AI business context from Pretty Potty → Moving Day Heroes.

ALTER TABLE public.sms_business_context
  ALTER COLUMN greeting SET DEFAULT 'Thanks for reaching out to Moving Day Heroes!';

UPDATE public.sms_business_context
SET
  greeting = 'Thanks for reaching out to Moving Day Heroes!',
  services_md = 'Moving Day Heroes is a professional moving company based in Austin, TX. We handle residential moves, commercial/office moves, packing services, specialty items, and long-distance moves across Central Texas and nationwide.',
  pricing_md = 'Local moves are typically based on crew size, truck, and time. Long-distance depends on distance and volume. Specialty items and packing add to the quote. We do not quote firm prices over text without move details.',
  policy_md = 'We service Austin and surrounding Central Texas (Round Rock, Cedar Park, Georgetown, Pflugerville, Leander, San Marcos, Dripping Springs) plus long-distance moves nationwide. Book 2–4 weeks ahead when possible; peak season (May–September) fills faster. A clear inventory and access details help us give an accurate quote.',
  faq_md = E'Q: Are you licensed and insured?\nA: Yes — fully licensed and insured.\n\nQ: Do you offer packing?\nA: Yes — full packing, partial packing, or supplies only.\n\nQ: How do I get a quote?\nA: Share your move date, from/to areas, home size, and any specialty items, or use the quote form at movingdayheroes.com/get-a-quote.',
  updated_at = now()
WHERE id = 1;
