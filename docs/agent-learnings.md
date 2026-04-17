# Agent Working Notes — Landing Pages + GHL + Vercel

A short reference of issues we ran into and the exact instructions to give the agent next time so we don't repeat them.

---

## 1. Vercel routing for SPA URLs

**Problem:** Routes like `/thank-you`, `/home-step`, `/home-step-1` returned 404 on Vercel even though they worked locally. Vercel treats unknown paths as missing files and never serves the SPA `index.html`.

**Fix:** A `vercel.json` rewrite rule must send all non-API, non-asset requests to `index.html` so the React router can take over:

```json
{
  "rewrites": [
    { "source": "/((?!api/|.*\\..*).*)", "destination": "/index.html" }
  ]
}
```

**What to tell the agent next time:**
> "We deploy on Vercel. Make sure `vercel.json` has a rewrite that routes every non-API, non-static path to `/index.html` so client-side routes don't 404."

---

## 2. Where third-party tracking scripts must live

**Problem:** The GHL/LeadConnector scripts (`number_pool.js`, `user_session.js`) were originally in `index.html`. They ran **before** React mounted, so they couldn't find the phone numbers or form fields and silently did nothing.

**Fix:** Move them into `client/src/main.tsx` and load them **after** React renders, with a small delay (~800ms) so the DOM is fully populated:

```ts
setTimeout(() => {
  const s1 = document.createElement("script");
  s1.src = "https://.../number_pool.js";
  document.body.appendChild(s1);
  // same for user_session.js
}, 800);
```

**What to tell the agent next time:**
> "Tracking scripts that need to read the rendered DOM (GHL number replacement, form trackers, etc.) must be injected from `main.tsx` AFTER React renders, with a short delay. Never put them in `index.html` — they'll run too early and find nothing."

---

## 3. GHL form fields: never use `type="hidden"`

**Problem:** Quiz answers were sent as `<input type="hidden">`. Standard fields (name, email, phone) arrived in GHL but **custom fields never did**. The GHL tracking script ignores hidden inputs.

**Fix:** Use a normal `<input type="text">` and hide it visually with CSS (`sr-only`, off-screen, etc.) — the input is still "real" to the script:

```tsx
<div className="sr-only" aria-hidden="true">
  <input type="text" name="who_is_this_stairlift_for" value={answer} readOnly />
</div>
```

**What to tell the agent next time:**
> "GHL's tracking script does NOT pick up `type='hidden'` inputs. For any field that isn't visually shown to the user, use `type='text'` and hide it with CSS (e.g. `sr-only`). Never use `type='hidden'` for GHL submissions."

---

## 4. Field naming: snake_case, not camelCase

**Problem:** The agent defaulted to `phoneNumber`, `firstName`, `postalCode`, etc. GHL custom fields are configured with `snake_case` keys (`phone_number`, `first_name`, `postal_code`), so nothing matched and the data was dropped.

**Fix:** Always use `snake_case` for the `name` attribute of every form input that maps to GHL.

**What to tell the agent next time:**
> "All form field `name` attributes must be `snake_case` (e.g. `full_name`, `postal_code`, `who_is_this_stairlift_for`). Never use camelCase — it won't match the GHL custom field keys."

---

## 5. Click-to-call buttons + GHL dynamic number replacement

**Problem:** Two requirements were fighting each other:
- The phone number must be a **clickable `tel:` link** with the `+1` prefix (`tel:+16789099558`) so it dials correctly on mobile.
- GHL's `number_pool.js` rewrites the displayed number for tracking, but if the script runs at the wrong moment, it either (a) doesn't replace the number, or (b) breaks the `tel:` link.

**Fix:** Two things together:
1. Hardcode the canonical number in the link as `tel:+1XXXXXXXXXX` (E.164 format with country code).
2. Load `number_pool.js` from `main.tsx` AFTER React renders (see point 2). The script will swap the visible text/href but keep the link valid.

**What to tell the agent next time:**
> "Phone links must use `tel:+1XXXXXXXXXX` (full E.164 with country code). The GHL `number_pool.js` script must be loaded post-React from `main.tsx` so it can rewrite the link without breaking the `tel:` format."

---

## TL;DR — Copy-paste prompt for next time

> "This project deploys to Vercel and submits to GoHighLevel. Please follow these rules:
> 1. Add a Vercel rewrite in `vercel.json` so all non-API, non-static paths fall back to `/index.html`.
> 2. Inject GHL tracking scripts (`number_pool.js`, `user_session.js`) from `main.tsx` with an ~800ms delay AFTER React renders. Do not put them in `index.html`.
> 3. Never use `type='hidden'` for form inputs sent to GHL. Use `type='text'` hidden via CSS (`sr-only`).
> 4. Use `snake_case` for every form field `name` (e.g. `full_name`, `phone`, `postal_code`, `who_is_this_stairlift_for`). Never camelCase.
> 5. Phone links use `tel:+1XXXXXXXXXX` (E.164). The GHL number-pool script must be the one to swap the displayed number at runtime."
