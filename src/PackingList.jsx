import React, { useState } from "react";
import { Luggage, Wand2, Sparkles, Laugh } from "lucide-react";

const TRIP_TYPES = {
  business: {
    name: "Corporate Warrior",
    icon: "💼",
    defaultItems: [
      "Boring suit (pressed and corporate-ready) ✔️",
      "Laptop charger (lifeline) ✔️",
      "Emergency coffee survival kit ✔️",
      "Networking smile practice mirror 😬",
      "Backup tie (for unexpected spills) ✔️",
      "Business cards (aka networking ammunition) ✔️",
      "Portable phone charger ✔️",
      "Wrinkle-release spray ✔️",
      "Travel-size deodorant (stay fresh) ✔️",
      "Presentation clicker (looks professional) ✔️",
    ],
  },
  casual: {
    name: "Chill Explorer",
    icon: "🌴",
    defaultItems: [
      "Comfy oversized hoodie ✔️",
      "Dad sneakers (maximum comfort) ✔️",
      "Sunglasses (even indoors) ✔️",
      "Snack emergency kit 🍫",
      "Bluetooth speaker for impromptu dance parties ✔️",
      "Portable hammock for random naps ✔️",
      "Hydration bottle with motivational quotes ✔️",
      "Multipurpose jacket (fashion + function) ✔️",
      "Portable phone charger ✔️",
      "Extra comfy socks (because comfort is king) ✔️",
    ],
  },
  roadtrip: {
    name: "Road Warrior",
    icon: "🚗",
    defaultItems: [
      "Aux cord (music is life) ✔️",
      "Weird gas station snacks collection ✔️",
      "Car karaoke playlist 🎤",
      "Emergency car maintenance skills handbook ✔️",
      "Inflatable travel pillow ✔️",
      "Roadside emergency kit ✔️",
      "Spotify/Apple Music subscription ✔️",
      "Sunglasses for epic road movie vibes ✔️",
      "Portable cooler for drinks ✔️",
      "Travel games for passenger entertainment ✔️",
    ],
  },
  anime: {
    name: "Otaku Adventure",
    icon: "🍜",
    defaultItems: [
      "Cosplay backup outfit ✔️",
      "Convention survival kit 🎮",
      "Energy drinks arsenal ✔️",
      "Emergency pocky stash 🥢",
      "Portable battery pack for devices ✔️",
      "Camera for cosplay photos ✔️",
      "Manga/light novel reading material ✔️",
      "Collectible trading cards ✔️",
      "Comfortable walking shoes ✔️",
      "Autograph book and permanent marker ✔️",
    ],
  },
  hiking: {
    name: "Mountain Trekker",
    icon: "🏔️",
    defaultItems: [
      "Hiking boots (trail-ready) ✔️",
      "Lightweight hiking backpack ✔️",
      "Hydration pack or water bottles ✔️",
      "Portable water filter ✔️",
      "Multi-tool survival kit ✔️",
      "Lightweight quick-dry layers ✔️",
      "Hiking poles for stability ✔️",
      "Emergency first aid kit ✔️",
      "Compact sleeping bag ✔️",
      "Trail mix and energy bars ✔️",
    ],
  },
  beach: {
    name: "Beach Bum",
    icon: "🏖️",
    defaultItems: [
      "Oversized beach towel ✔️",
      "Waterproof sunscreen (SPF 50+) ✔️",
      "Portable bluetooth speaker ✔️",
      "Beach umbrella or pop-up tent ✔️",
      "Cooler with ice packs ✔️",
      "Snorkeling gear ✔️",
      "Beach games (frisbee, volleyball) ✔️",
      "Waterproof phone case ✔️",
      "Flip flops and beach sandals ✔️",
      "Portable fan or misting bottle ✔️",
    ],
  },
  camping: {
    name: "Wild Adventurer",
    icon: "⛺",
    defaultItems: [
      "Lightweight tent ✔️",
      "Sleeping bag and sleeping pad ✔️",
      "Portable camping stove ✔️",
      "Multi-tool and pocket knife ✔️",
      "Headlamp with extra batteries ✔️",
      "Waterproof matches/lighter ✔️",
      "Portable water filter ✔️",
      "Compact first aid kit ✔️",
      "Warm layers and rain jacket ✔️",
      "Compact camping chairs ✔️",
    ],
  },
  festival: {
    name: "Music Fest Warrior",
    icon: "🎸",
    defaultItems: [
      "Comfortable festival outfit ✔️",
      "Portable phone charger ✔️",
      "Hydration backpack ✔️",
      "Earplugs for noise protection ✔️",
      "Fanny pack or small crossbody bag ✔️",
      "Bandana or dust mask ✔️",
      "Portable fan or misting bottle ✔️",
      "Sunscreen and lip balm ✔️",
      "Comfortable walking shoes ✔️",
      "Emergency cash stash ✔️",
    ],
  },
  ski: {
    name: "Snow Shredder",
    icon: "⛷️",
    defaultItems: [
      "Ski jacket and snow pants ✔️",
      "Thermal base layers ✔️",
      "Ski goggles ✔️",
      "Waterproof gloves ✔️",
      "Ski helmet ✔️",
      "Hand and toe warmers ✔️",
      "Ski pass and ID ✔️",
      "Hydration backpack ✔️",
      "Neck gaiter or face mask ✔️",
      "Portable boot/glove dryer ✔️",
    ],
  },
  photography: {
    name: "Visual Storyteller",
    icon: "📷",
    defaultItems: [
      "Professional camera body ✔️",
      "Multiple camera lenses ✔️",
      "Lightweight travel tripod ✔️",
      "Extra camera batteries ✔️",
      "Multiple SD cards ✔️",
      "Lens cleaning kit ✔️",
      "Portable hard drive for backups ✔️",
      "Camera rain cover ✔️",
      "Laptop for photo editing ✔️",
      "Versatile camera backpack ✔️",
    ],
  },
  backpacking: {
    name: "Wanderlust Explorer",
    icon: "🌍",
    defaultItems: [
      "Lightweight backpack ✔️",
      "Passport and travel documents ✔️",
      "Universal travel adapter ✔️",
      "Compact travel towel ✔️",
      "Portable water filter ✔️",
      "Lightweight sleeping bag ✔️",
      "Multi-tool with various functions ✔️",
      "First aid kit ✔️",
      "Portable battery pack ✔️",
      "Quick-dry travel clothes ✔️",
    ],
  },
  conference: {
    name: "Knowledge Seeker",
    icon: "🤓",
    defaultItems: [
      "Professional presentation outfit ✔️",
      "Laptop and charger ✔️",
      "Business cards ✔️",
      "Notebook and multiple pens ✔️",
      "Portable phone charger ✔️",
      "Comfortable dress shoes ✔️",
      "Water bottle for hydration ✔️",
      "Conference schedule printout ✔️",
      "Breath mints ✔️",
      "Professional tote or messenger bag ✔️",
    ],
  },
  visitFriend: {
    name: "Friendly Explorer",
    icon: "🤝",
    defaultItems: [
      "Gift for your friend ✔️",
      "Casual outfit ✔️",
      "Phone with your friend’s address saved ✔️",
      "Snacks to share ✔️",
      "Charged portable speaker ✔️",
      "Board games or cards for fun ✔️",
      "Travel pillow for the journey ✔️",
      "Comfortable walking shoes ✔️",
      "Camera to capture memories ✔️",
      "Emergency charger ✔️",
    ],
  },
  visitParallelWorld: {
    name: "Dimensional Traveler",
    icon: "🌌",
    defaultItems: [
      "Dimensional portal key ✔️",
      "Multiverse survival guide ✔️",
      "Portable translator (languages unknown) ✔️",
      "Lightweight armor ✔️",
      "Energy packs ✔️",
      "Gadget toolkit ✔️",
      "Memory capsule to document findings ✔️",
      "Cloaking device ✔️",
      "Snacks (universal hunger remedies) ✔️",
      "Emergency teleport beacon ✔️",
    ],
  },
  visitJujutsuKaisenHigh: {
    name: "Sorcerer’s Journey",
    icon: "🌀",
    defaultItems: [
      "Cursed energy handbook ✔️",
      "Combat uniform ✔️",
      "Protective talismans ✔️",
      "Cursed tool (properly sealed) ✔️",
      "Healing salves ✔️",
      "Portable charm kit ✔️",
      "Notebook for learning techniques ✔️",
      "Compact weapon holster ✔️",
      "Friendship bracelet (for Yuji and friends) ✔️",
      "Map of the school’s cursed zones ✔️",
    ],
  },
};

const InteractivePacking = () => {
  const [tripType, setTripType] = useState(null);
  const [customItems, setCustomItems] = useState("");
  const [packingList, setPackingList] = useState([]);
  const [audio] = useState(new Audio("/audio.mp3"));

  const handleAudioPlay = () => {
    audio.play();
  };

  const generateAIRecommendations = () => {
    const aiMagicLines = [
      "✨ AI says: Don't forget your main character energy!",
      "🔮 Mystical packing recommendation incoming...",
      "🧙‍♀️ Unlocking secret packing wisdom...",
    ];
    return aiMagicLines[Math.floor(Math.random() * aiMagicLines.length)];
  };

  const handleTripSelection = (type) => {
    setTripType(type);
    setPackingList(TRIP_TYPES[type].defaultItems);
  };

  const addCustomItem = () => {
    if (customItems.trim()) {
      setPackingList([...packingList, `${customItems} ✔️`]);
      setCustomItems("");
    }
  };

  const removeItem = (indexToRemove) => {
    setPackingList(packingList.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 flex items-center">
        <Luggage className="mr-2" /> Meme Packing Wizard 🧳
      </h1>

      {!tripType ? (
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(TRIP_TYPES).map(([type, details]) => (
            <button
              key={type}
              onClick={() => handleTripSelection(type)}
              className="p-4 bg-blue-100 hover:bg-blue-200 rounded-lg flex flex-col items-center"
            >
              <span className="text-4xl mb-2">{details.icon}</span>
              <span>{details.name}</span>
            </button>
          ))}
        </div>
      ) : (
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              {TRIP_TYPES[tripType].icon} {TRIP_TYPES[tripType].name} Packing
              List
            </h2>
            <button
              onClick={() => setTripType(null)}
              className="text-sm text-blue-600 hover:underline"
            >
              Change Trip
            </button>
          </div>

          <div className="mb-4 flex">
            <input
              type="text"
              value={customItems}
              onChange={(e) => setCustomItems(e.target.value)}
              placeholder="What else are you packing?"
              className="flex-grow p-2 border rounded-l-lg"
            />
            <button
              onClick={addCustomItem}
              className="bg-blue-500 text-white p-2 rounded-r-lg"
            >
              <Wand2 size={20} />
            </button>
          </div>

          <div className="mb-4 p-3 bg-yellow-50 rounded-lg">
            <p className="flex items-center">
              <Sparkles className="mr-2 text-yellow-500" />
              {generateAIRecommendations()}
            </p>
          </div>

          <ul className="space-y-2">
            {packingList.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-lg"
              >
                {item}
                {/* <button 
                  onClick={() => removeItem(index)} 
                  className="text-red-500 hover:bg-red-100 rounded-full p-1"
                >
                  <Laugh size={20} />
                </button> */}
              </li>
            ))}
          </ul>
          <div>
            <button
              onClick={handleAudioPlay}
              class="bg-brown-500 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-brown-600"
            >
              I Love My SootCase
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractivePacking;
