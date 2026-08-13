// Shared Moving Day Heroes branding for edge-function emails/SMS.

export const BRAND_NAME = "Moving Day Heroes";
export const BRAND_TAGLINE = "Moving Made Simple";
export const BRAND_PHONE = "(737) 418-1707";
export const BRAND_PHONE_E164 = "+17374181707";
export const BRAND_EMAIL = "hello@movingdayheroes.com";
export const BRAND_DOMAIN = "movingdayheroes.com";
export const BRAND_SITE_URL = "https://movingdayheroes.com";
export const BRAND_CITY = "Austin, TX";

export const FROM_EMAIL = `${BRAND_NAME} <${BRAND_EMAIL}>`;
export const REPLY_TO = BRAND_EMAIL;

export const SIGNATURE_TEXT = `--
${BRAND_NAME} · ${BRAND_TAGLINE}
${BRAND_PHONE} · ${BRAND_SITE_URL}
${BRAND_CITY} & Central Texas`;

export const SIGNATURE_HTML = `
<p style="margin-top:24px;color:#666;font-size:13px;line-height:1.5;border-top:1px solid #eee;padding-top:12px;">
  <strong style="color:#222;">${BRAND_NAME}</strong> · ${BRAND_TAGLINE}<br/>
  <a href="tel:${BRAND_PHONE_E164}" style="color:#666;text-decoration:none;">${BRAND_PHONE}</a> ·
  <a href="${BRAND_SITE_URL}" style="color:#666;text-decoration:none;">${BRAND_DOMAIN}</a><br/>
  ${BRAND_CITY} &amp; Central Texas
</p>`;

export const FOOTER_HTML = `
  <p style="margin-top:32px;color:#666;font-size:13px;line-height:1.5;border-top:1px solid #eee;padding-top:12px;">
    <strong style="color:#222;">${BRAND_NAME}</strong> &middot; ${BRAND_TAGLINE}<br/>
    ${BRAND_PHONE} &middot; ${BRAND_DOMAIN}<br/>
    ${BRAND_CITY} &amp; Central Texas
  </p>`;
