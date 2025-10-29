import { db } from "./db";
import { eq } from 'drizzle-orm';
import { articles } from "./schema";

export const articleSeedValues = [
  {
    id: 1,
    title: "The Perfect Morning Brew: How to Make Coffee Like a Pro",
    content: "Specialty coffee has transformed from a niche trend into a global movement. Today’s consumers seek traceable origins, fair trade sourcing, and nuanced flavor profiles that rival fine wine. Cafes now act as cultural hubs where baristas educate customers about processing methods and tasting notes. As awareness grows, sustainability and craftsmanship are driving the future of coffee.",
    createdAt: "2025-10-28 14:20:34",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  {
    id: 2,
    title: "Arabica vs Robusta: What’s the Real Difference?",
    content: "Cold brew is no longer just a seasonal drink—it’s a lifestyle choice. Brewed over 12 to 24 hours, it delivers a naturally sweet, smooth flavor with lower acidity. Millennials and Gen Z helped fuel the craze with social media-ready visuals and on-the-go packaging. The innovation now continues with nitro infusions and canned cold brews redefining convenience coffee.",
    createdAt: "2025-10-28 14:20:34",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
  },
  {
    id: 3,
    title: "Why Freshly Ground Coffee Matters",
    content: "The Third Wave coffee movement redefined what quality means in a cup. It celebrates transparency, single-origin beans, and small-batch roasting techniques. Enthusiasts often compare it to the craft beer renaissance—personal, ethical, and deeply experiential. This wave challenges big brands by reminding us that coffee is an artisanal product worthy of respect.",
    createdAt: "2025-10-28 14:20:34",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e",
  }, {
    id: 4,
    title: "Exploring Espresso: The Heart of Coffee Culture",
    content: "Coffee is one of the crops most vulnerable to climate change. Rising temperatures and unpredictable rainfall are threatening traditional growing regions like Ethiopia and Colombia. Farmers are responding with new resilient varieties and shade-growing methods. Industry experts warn that without sustainable practices, our favorite morning ritual could become a luxury.",
    createdAt: "2025-10-28 14:20:34",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
  }, {
    id: 5,
    title: "Cold Brew vs Iced Coffee: The Ultimate Showdown",
    content: "Behind every great cup of coffee is a skilled barista balancing science and creativity. From grind size to milk texture, every variable shapes flavor and aroma. Training programs now teach sensory skills and customer experience as much as brewing mechanics. The best baristas see themselves as storytellers connecting people to origin and process.",
    createdAt: "2025-10-28 14:20:34",
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096",
  }, {
    id: 6,
    title: "The Hidden Health Benefits of Coffee",
    content: "Home brewing has become more accessible than ever thanks to compact espresso machines and smart scales. Whether you prefer a V60, AeroPress, or Moka pot, the key is understanding extraction and consistency. With a little curiosity, any kitchen can transform into a personal coffee lab delivering café-level results daily.",
    createdAt: "2025-10-28 14:20:34",
    image: "",
  }, {
    id: 7,
    title: "From Bean to Cup: The Journey of Coffee",
    content: "Sustainability is now a selling point rather than an afterthought. Coffee brands are racing to adopt compostable cups, plant-based lids, and recyclable bags. Beyond materials, many are experimenting with refill systems and closed-loop supply chains. Consumers are rewarding these efforts, pushing the industry toward meaningful environmental accountability.",
    createdAt: "2025-10-28 14:20:34",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  }, {
    id: 8,
    title: "Sustainable Coffee: How to Drink Responsibly",
    content: "Coffee tourism is booming as enthusiasts seek to experience farms and roasteries firsthand. From Colombia’s lush hills to Japan’s minimalist kissaten, each destination offers a unique cultural lens. Travelers learn about cultivation, roasting, and brewing right at the source—turning every sip into a story of place and people.",
    createdAt: "2025-10-28 14:20:34",
    image: "",
  }
];

(async () => {
  const result = await db.select().from(articles);
  console.log(result);
})();

