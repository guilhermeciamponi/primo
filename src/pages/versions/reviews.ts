// Real customer reviews for Al Primo Piano (Volendam), gathered from Google &
// TripAdvisor. Verbatim; the 4- and 5-star ones are used for the social-proof
// section. Aggregates as shown on each platform.
export const reviewAggregate = {
  google: {
    rating: 4.8,
    count: 136,
    url: "https://www.google.com/maps/search/?api=1&query=Al%20Primo%20Piano%2C%20Zuideinde%205%2C%20Volendam",
  },
  tripadvisor: {
    rating: 4.7,
    count: 39,
    url: "https://www.tripadvisor.com/Restaurant_Review-g188599-d33007026-Reviews-Al_Primo_Piano-Volendam_North_Holland_Province.html",
  },
};

export type Review = { name: string; rating: number; text: string; date: string; source: "Google" | "TripAdvisor" };

export const reviews: Review[] = [
  { name: "Margo K", rating: 5, source: "Google", date: "Oct 2025", text: "We had dinner here with my family, and everything was absolutely delicious! Every dish was perfectly cooked, fresh, and full of natural flavors. The presentation of the food was beautiful — you can see how much attention and care goes into every plate." },
  { name: "Alice A", rating: 5, source: "Google", date: "Mar 2025", text: "The food was amazing!!! Everyone was super nice, you can tell everything is fresh and the chef is a true Italian. Definitely the most authentic Italian restaurant I've been to in NL. I suggest getting the pistachio lasagna or the pistachio strozzapreti!" },
  { name: "STEN-ERIK G", rating: 5, source: "Google", date: "Jul 2025", text: "A hidden gem in Volendam! Real Italian! Skip the touristy waterfront spots. This gem is run by three Italians serving real, heartfelt cuisine. Every dish is made with care, the wine is outstanding. Best Italian food I've had in Holland." },
  { name: "Ethan S", rating: 5, source: "Google", date: "Aug 2025", text: "Great restaurant. The food was super fresh and simple with great flavor. Our server was very kind and attentive. Prices super reasonable. The pastas were all great and we raved about the panelle. Highly recommend." },
  { name: "Paula P", rating: 5, source: "Google", date: "Dec 2025", text: "Amazing! The food incredible. Long time I don't eat such an amazing pasta. The lasagna also amazing. It's worth the drive there just to eat 👏🏻" },
  { name: "Andres G", rating: 5, source: "TripAdvisor", date: "Jun 2026", text: "The food was outstanding, and the service was amazing. Combined with the beautiful lake view and Italian music playing in the background, it truly felt like a trip to Italy." },
  { name: "Mila M", rating: 5, source: "TripAdvisor", date: "Sep 2025", text: "This restaurant is just the cutest! The food is absolutely amazing and the twist of flavors added to each dish is phenomenal. The service was excellent — the waiters are super nice, super helpful and speak multiple languages." },
  { name: "Vittorio B", rating: 5, source: "TripAdvisor", date: "Aug 2025", text: "My wife and I went to dinner three consecutive nights because we found the true taste of Italian cuisine. Excellent and tasty dishes with a warm welcome. Congratulations to chef Giuseppe and Antonella for the courtesy." },
  { name: "TripAdvisor guest", rating: 5, source: "TripAdvisor", date: "May 2026", text: "I wanted to try their Bolognese lasagna. I was left speechless by the lightness and the right crispness where necessary. I sincerely thank Chef Alfredo, a young Neapolitan chef. Highly recommended." },
  { name: "Sarah", rating: 5, source: "TripAdvisor", date: "Sep 2025", text: "We made a reservation due to the good reviews and were not disappointed. On the menu you'll find dishes not every Italian offers, e.g. strozzapreti with pistachio cream. The food was delicious and plentiful, the service friendly." },
  { name: "Salvatore", rating: 5, source: "TripAdvisor", date: "Aug 2025", text: "Excellent Italian restaurant in the village of Volendam. We tried an excellent caponata, scialatielli aglio e olio and scialatielli with mussels, Sicilian cannolo for dessert. Authentic Italian taste in a cozy setting. Highly recommended." },
  { name: "Michele R", rating: 5, source: "TripAdvisor", date: "Jan 2026", text: "Really nice experience. Friendly atmosphere, friendly staff and really good food. And you can't miss a good Illy coffee, Italian style. If I return to Holland, I will definitely stay there again." },
  { name: "Paola M", rating: 5, source: "TripAdvisor", date: "Oct 2025", text: "Authentic Italian atmosphere, excellent raw materials cooked and presented with love and experience. Nice people and flawless service." },
  { name: "Patty V", rating: 5, source: "TripAdvisor", date: "Jul 2025", text: "Great food, lovely people, good wine and good atmosphere. Quiet restaurant of an Italian family. Especially the panelle as an appetizer was something special! It was delicious and worth repeating." },
  { name: "Alessio R", rating: 5, source: "TripAdvisor", date: "Jul 2025", text: "Very friendly staff, interesting menu and reasonable prices. The pasta with tomato really excellent as that with Bolognese ragù. A great restaurant for those who want to eat well Italian in Volendam." },
  { name: "Joop G", rating: 5, source: "TripAdvisor", date: "Jan 2026", text: "The restaurant now sits in a beautiful spot overlooking the water — delicious traditional Italian dishes, everything prepared with love and nice service." },
  { name: "game69", rating: 5, source: "TripAdvisor", date: "Aug 2025", text: "A simple, welcoming Italian restaurant with attention to detail, where you can breathe a warm and serene atmosphere right from the entrance. The staff was friendly, helpful and attentive." },
  { name: "Silvana Z", rating: 5, source: "TripAdvisor", date: "Dec 2025", text: "We felt at home — warm and welcoming location, tasty and well presented food, very kind service!" },
  { name: "Valentina F", rating: 5, source: "TripAdvisor", date: "Apr 2025", text: "Italian restaurant really excellent. First quality raw materials and friendly staff. Cozy place where you can feel at home. I highly recommend it." },
  { name: "Tom", rating: 5, source: "TripAdvisor", date: "Nov 2025", text: "Top Italian! Super good food! The real Italian cuisine with super ingredients! We will definitely be back here." },
  { name: "Anja M", rating: 5, source: "TripAdvisor", date: "Sep 2025", text: "By chance, we came across the restaurant on the internet. Super delicious, authentic food and very attentive and friendly service." },
  { name: "Rofre F", rating: 5, source: "TripAdvisor", date: "Sep 2025", text: "Great food, perfect service with great staff that is welcoming and professional. I liked everything — watching the chef cook was amazing." },
  { name: "Joke v", rating: 5, source: "TripAdvisor", date: "Aug 2025", text: "What a wonderful authentic Italian family restaurant. If you want something other than fish and chips or eel, highly recommended." },
  { name: "Jessica D", rating: 5, source: "TripAdvisor", date: "Apr 2025", text: "I discovered this restaurant by chance walking through the streets of Volendam. Great food. Simple flavors as the Italian tradition wants." },
  { name: "matteo p", rating: 5, source: "TripAdvisor", date: "Jul 2025", text: "Great food, very welcoming, typical Italian atmosphere. You'll be greeted with great courtesy. Congratulations to the cook for the food." },
  { name: "iknerf", rating: 5, source: "TripAdvisor", date: "Sep 2025", text: "Such an amazing service with great food quality — the service is excellent and the place is comfortable and nice, lovely staff." },
  { name: "Piermattei V", rating: 5, source: "TripAdvisor", date: "Dec 2025", text: "High quality cuisine with refined products — pure, quality and outside the usual standards. Great exporters of Italian cuisine abroad." },
  { name: "TripAdvisor guest", rating: 5, source: "TripAdvisor", date: "Jun 2026", text: "Friendly Italians, very good food, cozy atmosphere and lovely outside on the terrace on the dike." },
  { name: "TripAdvisor guest", rating: 4, source: "TripAdvisor", date: "Apr 2026", text: "Very good food for a correct price! A great little spot near the harbour to eat authentic Italian." },
];
