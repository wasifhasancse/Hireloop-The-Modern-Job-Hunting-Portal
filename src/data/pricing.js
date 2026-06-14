const pricingTiers = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Start building your insights hub:",
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    highlighted: false,
    badge: null,
    buttonText: "Choose This Plan",
  },
  {
    id: "growth",
    monthlyPrice: 17,
    yearlyPrice: 204,
    name: "Growth",
    description: "Start building your insights hub:",
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    highlighted: true,
    badge: "Popular",
    buttonText: "Choose This Plan",
  },
  {
    id: "premium",
    monthlyPrice: 99,
    yearlyPrice: 1188,
    name: "Premium",
    description: "Start building your insights hub:",
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
    highlighted: false,
    badge: null,
    buttonText: "Choose This Plan",
  },
];

export default pricingTiers;
