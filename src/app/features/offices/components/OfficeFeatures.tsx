import Image from "next/image";

export default function OfficeFeatures({ features }: { features: string[] }) {
  const FEATURES_MAP = [
    {
      label: "Global Event",
      description: "Stable & high-speed internet",
      icon: "/assets/images/icons/3dcube.svg",
    },
    {
      label: "Extra Snacks",
      description: "Stable & high-speed internet",
      icon: "/assets/images/icons/coffee.svg",
    },
    {
      label: "Sustainability",
      description: "Stable & high-speed internet",
      icon: "/assets/images/icons/3dcube.svg",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-x-5 gap-y-[30px]">
      {features.map((feature) => {
        console.log(feature);
        const matched = FEATURES_MAP.find((f) => f.label === feature);
        if (!matched) return null;
        return (
          <div key={feature} className="flex items-center gap-4">
            <Image
              src={matched.icon}
              className="w-[34px] h-[34px]"
              alt="icon"
              width={34}
              height={34}
            />
            <div className="flex flex-col gap-[2px]">
              <p className="font-bold text-lg leading-[24px]">
                {matched.label}
              </p>
              <p className="text-sm leading-[21px]">{matched.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
