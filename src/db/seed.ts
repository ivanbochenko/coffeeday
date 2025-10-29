import { db } from "./db";
import { articles } from "./schema";

const articlesSeedValues = [
  {
    title: "The Perfect Morning Brew: How to Make Coffee Like a Pro",
    content:
      "Brewing the perfect cup of coffee starts with fresh beans, the right grind size, and water temperature around 93°C. Learn how to use pour-over or French press methods to elevate your morning ritual.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  {
    title: "Arabica vs Robusta: What’s the Real Difference?",
    content:
      "Arabica beans are known for their smooth, aromatic flavor, while Robusta packs more caffeine and bitterness. Discover which one fits your taste and how blends balance both worlds.",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
  },
  {
    title: "Why Freshly Ground Coffee Matters",
    content:
      "Grinding coffee right before brewing preserves delicate oils and aromas that vanish within minutes. Invest in a burr grinder for the best flavor extraction possible.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e",
  },
  {
    title: "Exploring Espresso: The Heart of Coffee Culture",
    content:
      "Espresso is the foundation for lattes, cappuccinos, and macchiatos. Learn the science of pressure, grind, and timing that creates that perfect golden crema on top.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
  },
  {
    title: "Cold Brew vs Iced Coffee: The Ultimate Showdown",
    content:
      "Cold brew is steeped slowly in cold water, creating a smooth and low-acid flavor. Iced coffee, brewed hot then chilled, offers brightness and aroma — both have their fans.",
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096",
  },
  {
    title: "The Hidden Health Benefits of Coffee",
    content:
      "Beyond the caffeine kick, coffee is packed with antioxidants that may help reduce inflammation, improve metabolism, and even protect against certain diseases.",
    image: "https://images.unsplash.com/photo-1510626176961-4b37d6c1f9b8",
  },
  {
    title: "From Bean to Cup: The Journey of Coffee",
    content:
      "Every cup of coffee travels a long way — from tropical farms to your mug. Learn about harvesting, washing, roasting, and how origin impacts flavor profiles.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  {
    title: "Sustainable Coffee: How to Drink Responsibly",
    content:
      "Look for Rainforest Alliance and Fair Trade certifications to ensure your coffee supports ethical farming and environmental sustainability.",
    image: "https://images.unsplash.com/photo-1523942839745-7848d4a7aa46",
  },
];

async function seed() {
  await db.insert(articles).values(articlesSeedValues);

  console.log("✅ Database seeded with example articles!");
  process.exit(0);
}

await seed();
