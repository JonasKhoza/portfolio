// import React, { useEffect, useState } from "react";
// import styles from "./styles/nav_header.module.css";

// type NavItem = { id: string; label: string };

// const NAV_ITEMS: NavItem[] = [
//   { id: "experience", label: "Experience" },
//   { id: "background", label: "Background" },
//   { id: "projects", label: "Projects" },
//   { id: "contact", label: "Contact" },
// ];

// export function NavHeader() {
//   const [active, setActive] = useState<string | null>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActive(entry.target.id);
//           }
//         });
//       },
//       {
//         root: null,
//         rootMargin: "-20% 0px -60% 0px",
//         threshold: 0,
//       }
//     );

//     NAV_ITEMS.forEach((item) => {
//       const el = document.getElementById(item.id);
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   function onClick(id: string) {
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth", block: "start" });
//       // update active immediately for snappy feedback
//       setActive(id);
//     }
//   }

//   return (
//     <header className={styles.header} role="banner">
//       <div className={styles.container}>
//         <div className={styles.brand}>
//           <a
//             href="#"
//             onClick={(e) => {
//               e.preventDefault();
//               window.scrollTo({ top: 0, behavior: "smooth" });
//             }}
//             className={styles.logo}
//           >
//             Jonas&nbsp;Khoza
//           </a>
//         </div>

//         <nav className={styles.nav} aria-label="Primary">
//           <ul className={styles.navList}>
//             {NAV_ITEMS.map((item) => (
//               <li key={item.id}>
//                 <button
//                   className={`${styles.navLink} ${
//                     active === item.id ? styles.active : ""
//                   }`}
//                   onClick={() => onClick(item.id)}
//                   aria-current={active === item.id ? "page" : undefined}
//                 >
//                   {item.label}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         <div className={styles.rightActions}>
//           <a className={styles.cta} href="mailto:jonaskhoza18@gmail.com">
//             Contact
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }

// // export default function NavAndFooter({ githubUrl, linkedinUrl }: { githubUrl: string; linkedinUrl: string }) {
// //   return (
// //     <>
// //       <NavHeader />
// //       <Footer githubUrl={githubUrl} linkedinUrl={linkedinUrl} />
// //     </>
// //   );
// // }

// /*

// Place the following CSS into NavFooter.module.css (CSS Modules):

// :root {
//   --bg: #f6f9fc;
//   --muted: rgba(0,0,0,0.6);
//   --card: #fff;
//   --border: rgba(0,0,0,0.06);
// }

// */

import React, { useEffect, useState, useRef } from "react";
import styles from "./styles/nav_header.module.css";

type NavItem = { id: string; label: string };

/**
 * Behaviour:
 * - Automatically discovers page sections to build the navigation. It looks for
 *   elements with `data-nav` first. If none found, it falls back to
 *   `section[id]`, `[role="region"][id]`, and any element with `data-section-id`.
 * - On desktop the nav is horizontal. On small screens it collapses into an
 *   accessible animated hamburger that slides a panel from the right.
 * - Uses IntersectionObserver to highlight the active section while scrolling.
 */
export function NavHeader() {
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLButtonElement | null>(null);

  // Discover sections dynamically on client
  useEffect(() => {
    if (typeof window === "undefined") return;

    const discover = () => {
      const byDataNav = Array.from(
        document.querySelectorAll<HTMLElement>("[data-nav][id]")
      );
      const nodes: HTMLElement[] = byDataNav.length
        ? byDataNav
        : Array.from(
            document.querySelectorAll<HTMLElement>(
              'section[id], [role="region"][id], [data-section-id]'
            )
          );

      const items = nodes
        .filter((el) => el.id)
        .map((el) => {
          const label = (el.getAttribute("data-nav") ||
            el.getAttribute("data-section-label") ||
            (() => {
              const heading = el.querySelector("h1,h2,h3,h4,h5");
              return heading ? heading.textContent?.trim() || el.id : el.id;
            })()) as string;
          return { id: el.id, label };
        })
        .filter((v, i, arr) => arr.findIndex((x) => x.id === v.id) === i);

      // If no nav items found at all, fallback to a default set
      if (items.length === 0) {
        setNavItems([
          { id: "experience", label: "Experience" },
          { id: "background", label: "Background" },
          { id: "projects", label: "Projects" },
          { id: "contact", label: "Contact" },
        ]);
      } else {
        setNavItems(items);
      }
    };

    discover();

    // Observe DOM changes in case sections load later (e.g. async content)
    const mo = new MutationObserver(() => discover());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => mo.disconnect();
  }, []);

  // IntersectionObserver for active section
  useEffect(() => {
    if (!navItems.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    const toObserve = navItems
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as Element[];
    toObserve.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [navItems]);

  // Close mobile menu when navigating
  const onClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
      setOpen(false);
    }
  };

  // Manage focus when menu opens
  useEffect(() => {
    if (open) {
      // focus the first nav button in the mobile panel for accessibility
      setTimeout(() => firstLinkRef.current?.focus(), 120);
      // prevent background from scrolling
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>
        <div className={styles.brand}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={styles.logo}
          >
            Jonas&nbsp;Khoza
          </a>
        </div>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`${styles.navLink} ${
                    active === item.id ? styles.active : ""
                  }`}
                  onClick={() => onClick(item.id)}
                  aria-current={active === item.id ? "page" : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.rightActions}>
          <a className={styles.cta} href="mailto:jonaskhoza18@gmail.com">
            Contact
          </a>

          {/* Mobile hamburger */}
          <button
            className={`${styles.mobileToggle} ${open ? styles.open : ""}`}
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
              <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path className={styles.lineTop} d="M3 6h18" />
                <path className={styles.lineMiddle} d="M3 12h18" />
                <path className={styles.lineBottom} d="M3 18h18" />
              </g>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile sliding panel */}
      <div
        className={`${styles.mobilePanel} ${open ? styles.mobileOpen : ""}`}
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
      >
        <div className={styles.mobileInner}>
          <nav aria-label="Mobile Primary">
            <ul className={styles.mobileList}>
              {navItems.map((item, idx) => (
                <li key={item.id}>
                  <button
                    ref={idx === 0 ? firstLinkRef : undefined}
                    className={`${styles.mobileLink} ${
                      active === item.id ? styles.active : ""
                    }`}
                    onClick={() => onClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.mobileFooter}>
            <a
              className={styles.mobileCta}
              href="mailto:jonaskhoza18@gmail.com"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
