import { OfficeSpace } from "../types/OfficeSpace.types";

export const officeSpaces: OfficeSpace[] = [
  {
    id: 1,
    title: "Jovian Super Office A",
    slug: "jovian-super-office-a",
    price: 2500000,
    duration: "20 days",
    location: "Jakarta Selatan",
    rating: 4.5,
    address: "Jl. Jend. Sudirman No. Kav 52-53, Jakarta Selatan",
    image: "/assets/images/thumbnails/thumbnails-1.png",
    images: [
      "/assets/images/thumbnails/thumbnail-details-2.png",
      "/assets/images/thumbnails/thumbnail-details-3.png",
    ],
    tags: ["Test"],
    about:
      "Jovian Super Office A is a premium office space located in the heart of Jakarta Selatan. Equipped with modern amenities and designed for productivity, it's the perfect place for your business to thrive.",
    features: [
      "Global Event",
      "Privacy",
      "Free Move",
      "Sustainability",
      "Extra Snacks",
      "Compact",
    ],
    isFullyBooked: false,
    salesContacts: [
      {
        name: "Masayoshi",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-1.png",
      },
      {
        name: "Fuji Ovina",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Pondok Pekerja Remote Surabaya",
    slug: "pondok-pekerja-remote-surabaya",
    price: 7650000,
    duration: "20 days",
    location: "Surabaya",
    rating: 4.8,
    address: "Dekat gedung BWA HQ di SBY no 102939",
    image: "/assets/images/thumbnails/thumbnails-2.png",
    images: [
      "/assets/images/thumbnails/thumbnail-details-2.png",
      "/assets/images/thumbnails/thumbnail-details-3.png",
    ],
    tags: ["Popular"],
    about:
      "Whether you need quiet private space away from distractions or collaborate in person...",
    features: ["Global Event", "Privacy", "Extra Snacks", "Compact"],
    isFullyBooked: false,
    salesContacts: [
      {
        name: "Rinda",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-1.png",
      },
      {
        name: "Amara Ovina",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-2.png",
      },
    ],
  },
];
