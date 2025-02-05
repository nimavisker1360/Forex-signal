declare namespace JSX {
  interface IntrinsicElements {
    "gecko-coin-price-marquee-widget": {
      locale?: string;
      "dark-mode"?: string;
      "coin-ids"?: string;
      "initial-currency"?: string;
    } & React.HTMLAttributes<HTMLElement>;
  }
}
