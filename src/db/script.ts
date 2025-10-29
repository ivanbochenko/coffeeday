import { db } from "./db";
import { eq } from 'drizzle-orm';
import { articles as articlesTable } from "./schema";

export const articles = [
  {
    id: 1,
    title: "The Rise of Specialty Coffee",
    image: "/images/specialty.jpg",
    content: "Specialty coffee has transformed from a niche trend into a global movement. Today’s consumers seek traceable origins, fair trade sourcing, and nuanced flavor profiles that rival fine wine. Cafes now act as cultural hubs where baristas educate customers about processing methods and tasting notes. As awareness grows, sustainability and craftsmanship are driving the future of coffee."
  },
  {
    id: 2,
    title: "Why Cold Brew Took Over Summers",
    image: "/images/coldbrew.jpg",
    content: "Cold brew is no longer just a seasonal drink—it’s a lifestyle choice. Brewed over 12 to 24 hours, it delivers a naturally sweet, smooth flavor with lower acidity. Millennials and Gen Z helped fuel the craze with social media-ready visuals and on-the-go packaging. The innovation now continues with nitro infusions and canned cold brews redefining convenience coffee."
  },
  {
    id: 3,
    title: "Exploring the Third Wave Movement",
    image: "/images/thirdwave.jpg",
    content: "The Third Wave coffee movement redefined what quality means in a cup. It celebrates transparency, single-origin beans, and small-batch roasting techniques. Enthusiasts often compare it to the craft beer renaissance—personal, ethical, and deeply experiential. This wave challenges big brands by reminding us that coffee is an artisanal product worthy of respect."
  },
  {
    id: 4,
    title: "How Climate Change Impacts Coffee Farms",
    image: "/images/climate.jpg",
    content: "Coffee is one of the crops most vulnerable to climate change. Rising temperatures and unpredictable rainfall are threatening traditional growing regions like Ethiopia and Colombia. Farmers are responding with new resilient varieties and shade-growing methods. Industry experts warn that without sustainable practices, our favorite morning ritual could become a luxury."
  },
  {
    id: 5,
    title: "Barista Techniques: The Art Behind the Cup",
    image: "/images/barista.jpg",
    content: "Behind every great cup of coffee is a skilled barista balancing science and creativity. From grind size to milk texture, every variable shapes flavor and aroma. Training programs now teach sensory skills and customer experience as much as brewing mechanics. The best baristas see themselves as storytellers connecting people to origin and process."
  },
  {
    id: 6,
    title: "Home Brewing Essentials for 2025",
    image: "/images/homebrew.jpg",
    content: "Home brewing has become more accessible than ever thanks to compact espresso machines and smart scales. Whether you prefer a V60, AeroPress, or Moka pot, the key is understanding extraction and consistency. With a little curiosity, any kitchen can transform into a personal coffee lab delivering café-level results daily."
  },
  {
    id: 7,
    title: "Sustainable Packaging in Coffee Industry",
    image: "/images/sustainability.jpg",
    content: "Sustainability is now a selling point rather than an afterthought. Coffee brands are racing to adopt compostable cups, plant-based lids, and recyclable bags. Beyond materials, many are experimenting with refill systems and closed-loop supply chains. Consumers are rewarding these efforts, pushing the industry toward meaningful environmental accountability."
  },
  {
    id: 8,
    title: "Coffee Tourism: Traveling for Taste",
    image: "/images/tourism.jpg",
    content: "Coffee tourism is booming as enthusiasts seek to experience farms and roasteries firsthand. From Colombia’s lush hills to Japan’s minimalist kissaten, each destination offers a unique cultural lens. Travelers learn about cultivation, roasting, and brewing right at the source—turning every sip into a story of place and people."
  }
];

(async () => {
  for (const a of articles) {
    await db.update(articlesTable)
      .set({ image: '' })
      .where(eq(articlesTable.id, 8));
  }
  console.log("✅ Updated article contents");
})();

