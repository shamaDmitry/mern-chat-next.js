export const revenueData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 4000 },
  { name: "May", revenue: 7000 },
  { name: "Jun", revenue: 6000 },
  { name: "Jul", revenue: 8000 },
  { name: "Aug", revenue: 9000 },
  { name: "Sep", revenue: 8500 },
  { name: "Oct", revenue: 10000 },
  { name: "Nov", revenue: 11000 },
  { name: "Dec", revenue: 12000 },
];

export const userActivityData = [
  { name: "Mon", active: 500 },
  { name: "Tue", active: 600 },
  { name: "Wed", active: 800 },
  { name: "Thu", active: 1200 },
  { name: "Fri", active: 1000 },
  { name: "Sat", active: 400 },
  { name: "Sun", active: 300 },
];

export const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export const generateColors = (count: number) => {
  const baseColors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
    "#82CA9D",
    "#F06292",
    "#4CAF50",
    "#9C27B0",
    "#FF5722",
  ];

  if (count <= baseColors.length) {
    return baseColors.slice(0, count);
  }

  const colors = [...baseColors];

  for (let i = baseColors.length; i < count; i++) {
    const hue = (i * 137.508) % 360; // Golden angle approximation

    colors.push(`hsl(${hue}, 70%, 50%)`);
  }

  return colors;
};
