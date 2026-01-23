// Facebook Pixel Event Tracking Utilities

declare global {
  interface Window {
    fbq: any;
  }
}

/**
 * Track a purchase event
 * Fires when user clicks a buy button
 */
export const trackPurchase = (
  value: number = 3500,
  currency: string = "NGN",
) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Purchase", {
      value: value,
      currency: currency,
      content_name: "Speak AI - Mastering Prompting Book",
      content_type: "product",
    });
  }
};

/**
 * Track when user initiates checkout
 * Fires when user clicks buy button (before leaving site)
 */
export const trackInitiateCheckout = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "InitiateCheckout", {
      content_name: "Speak AI - Mastering Prompting Book",
      content_category: "Books",
      value: 3500,
      currency: "NGN",
    });
  }
};

/**
 * Track lead generation
 * Fires when user downloads sample or signs up
 */
export const trackLead = (contentName: string = "Book Download") => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      content_name: contentName,
    });
  }
};

/**
 * Track when user views specific content
 * Fires when important sections come into view
 */
export const trackViewContent = (contentName: string) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "ViewContent", {
      content_name: contentName,
      content_type: "product",
    });
  }
};
