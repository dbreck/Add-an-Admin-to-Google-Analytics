import { SiteEntry } from './types';

// The email address the client needs to add
export const ADMIN_EMAIL_TO_ADD = "danny@clearph.com";
export const COMPANY_NAME = "ClearPH";

// Google Analytics Link
export const GA_URL = "https://analytics.google.com/";

// Sites that need GA4 properties
export const INITIAL_SITES: SiteEntry[] = [
  { website: "viaterrafl.com", gaPropertyCreated: false, gaId: "", notes: "New GA4 setup needed.", createdBy: "Jacob B.", date: "" },
  { website: "btipartners.com", gaPropertyCreated: false, gaId: "", notes: "New GA4 setup needed.", createdBy: "", date: "" },
  { website: "crossprairiefl.com", gaPropertyCreated: false, gaId: "", notes: "New GA4 setup needed.", createdBy: "", date: "" },
  { website: "tohotracefl.com", gaPropertyCreated: false, gaId: "", notes: "New GA4 setup needed.", createdBy: "", date: "" },
  { website: "laureltonfl.com", gaPropertyCreated: false, gaId: "", notes: "New GA4 setup needed.", createdBy: "", date: "" },
  { website: "pinewalkfl.com", gaPropertyCreated: false, gaId: "", notes: "New GA4 setup needed.", createdBy: "", date: "" },
];
