import React, { useState } from "react";

export default function CodeBlock({
  className,
  children,
}: {
  className?: string;
  children: any;
}) {
  const code = String(children).replace(/\n$/, "");
  const [copied, setCopied] = useState(false);
  // const lang = className ? className.replace("language-", "") : "";

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 900);
    } catch {
      // ignore
    }
  }

  return (
    <div style={{ position: "relative", margin: "1rem 0" }}>
      <pre
        className={className}
        style={{ overflowX: "auto", padding: "1rem", borderRadius: 8 }}
      >
        <code>{code}</code>
      </pre>
      <button
        onClick={onCopy}
        aria-label="Copy code"
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          padding: "0.25rem 0.5rem",
          fontSize: 12,
          borderRadius: 6,
          border: "none",
          background: "#111827",
          color: "white",
          opacity: 0.9,
          cursor: "pointer",
        }}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
