(() => {
  const STORAGE_KEY = "cookieChoice"; // "accepted" | "rejected"

  function showBanner(banner) {
    banner.style.display = "block";
  }

  function hideBanner(banner) {
    banner.style.display = "none";
  }

  // Real-world behavior: only load analytics after consent
  function loadAnalytics() {
    // Example: dynamically inject Google Analytics / any tracking script
    // Replace with your real analytics snippet.
    console.log("Analytics enabled");

    // Example dynamic script injection:
    // const s = document.createElement("script");
    // s.async = true;
    // s.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX";
    // document.head.appendChild(s);
    //
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){ dataLayer.push(arguments); }
    // gtag("js", new Date());
    // gtag("config", "G-XXXXXXX");
  }

  // Optional: if user rejects, make sure analytics isn’t running
  function disableAnalytics() {
    console.log("Analytics disabled");
    // If you had already loaded tracking earlier (you shouldn't), you’d disable here.
  }

  document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("reject-cookies");

    // Safety checks (helps you instantly spot ID/DOM issues)
    if (!banner || !acceptBtn || !rejectBtn) {
      console.error("Cookie banner elements not found. Check your IDs:", {
        bannerFound: !!banner,
        acceptFound: !!acceptBtn,
        rejectFound: !!rejectBtn
      });
      return;
    }

    const choice = localStorage.getItem(STORAGE_KEY);

    if (!choice) {
      showBanner(banner);
    } else {
      hideBanner(banner);
      if (choice === "accepted") loadAnalytics();
      if (choice === "rejected") disableAnalytics();
    }

    acceptBtn.addEventListener("click", () => {
      localStorage.setItem(STORAGE_KEY, "accepted");
      hideBanner(banner);
      loadAnalytics();
    });

    rejectBtn.addEventListener("click", () => {
      localStorage.setItem(STORAGE_KEY, "rejected");
      hideBanner(banner);
      disableAnalytics();
    });

    // Optional helper: expose a reset for testing in DevTools
    window.__resetCookieConsent = () => {
      localStorage.removeItem(STORAGE_KEY);
      showBanner(banner);
      console.log("Consent reset");
    };
  });
})();