import { useRef } from "react";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;

function getToken(action: string): Promise<string> {
  return new Promise((resolve) => {
    if (!SITE_KEY || !window.grecaptcha) {
      resolve("");
      return;
    }
    window.grecaptcha.ready(() => {
      window.grecaptcha!
        .execute(SITE_KEY, { action })
        .then((t) => resolve(t))
        .catch(() => resolve(""));
    });
  });
}

export function useRecaptchaSubmit(action = "submit") {
  const submittedRef = useRef(false);

  return async (e: React.FormEvent<HTMLFormElement>) => {
    if (submittedRef.current) return;
    e.preventDefault();
    const form = e.currentTarget;
    const tokenInput = form.elements.namedItem(
      "g-recaptcha-response"
    ) as HTMLInputElement | null;
    const token = await getToken(action);
    if (tokenInput) tokenInput.value = token;
    submittedRef.current = true;
    form.requestSubmit();
  };
}
