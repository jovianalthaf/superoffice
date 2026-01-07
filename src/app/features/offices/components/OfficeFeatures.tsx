import Image from "next/image";

export default function OfficeFeatures() {
  return (
    <div className="grid grid-cols-3 gap-x-5 gap-y-[30px]">
      <div className="flex items-center gap-4">
        <Image
          src="/assets/images/icons/security-user.svg"
          className="w-[34px] h-[34px]"
          alt="icon"
          width={34}
          height={34}
        />
        <div className="flex flex-col gap-[2px]">
          <p className="font-bold text-lg leading-[24px]">Privacy</p>
          <p className="text-sm leading-[21px]">For Yourself</p>
        </div>
      </div>
    </div>
  );
}
