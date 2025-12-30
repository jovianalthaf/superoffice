import { City } from "../types/city.types";

const cityNames = [
  "Jakarta Pusat",
  "Jakarta Selatan",
  "Bandung",
  "Surabaya",
  "Yogyakarta",
  "Medan",
  "Semarang",
  "Makasar",
  "Bekasi",
  "Depok",
];

export const cities: City[] = cityNames.map((name, i) => {
  //   const officeCount = officeSpaces.filter(
  //     (space) => space.Location == name
  //   ).length;
  //   console.log(`/assets/image/thumbnails/thumbnails-${(i % 3) + 1}.png`);

  return {
    id: i + 1,
    name,
    officeCount: 1,
    image: `/assets/images/thumbnails/thumbnails-${(i % 3) + 1}.png`,
    slug: name.toLowerCase().replace(/ /g, "-"),
  };
});
