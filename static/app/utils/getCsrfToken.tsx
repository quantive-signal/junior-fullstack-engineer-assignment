import getCookie from 'cliff/utils/getCookie';

export default function getCsrfToken() {
  return getCookie(window.csrfCookieName ?? 'sc') ?? '';
}
