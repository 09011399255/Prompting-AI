import { useEffect } from "react";

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

const PIXEL_ID = "1373231481159280";

export default function FacebookPixel() {
  useEffect(() => {
    // Prevent duplicate initialization
    if (window.fbq) return;

    // Initialize Facebook Pixel
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-nocheck
    (function (f: any, b: any, e: any, v: any) {
      let n: any, t: any, s: any;
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js",
    );

    // Initialize with Pixel ID
    window.fbq("init", PIXEL_ID);

    // Track initial page view
    window.fbq("track", "PageView");
  }, []);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}
