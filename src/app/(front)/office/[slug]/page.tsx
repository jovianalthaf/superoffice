import Navbar from "@/app/components/Navbar";
import OfficeHeader from "@/app/features/offices/components/OfficeHeader";
import Image from "next/image";
import { officeSpaces } from "@/app/features/offices/data/officeSpaces.mock";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function OfficeSpaceDetailPage({ params }: Props) {
  const { slug } = await params;

  const office = officeSpaces.find((item) => item.slug === slug);
  if (!office) return notFound();
  return (
    <>
      <Navbar />
      <OfficeHeader />
      <section
        id="Details"
        className="relative flex max-w-[1130px] mx-auto gap-[30px] mb-20 z-10"
      >
        <div className="flex flex-col w-full rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
          <p className="w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
            Popular
          </p>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-extrabold text-[32px] leading-[44px]">
                {office.title}
              </h1>
              <div className="flex items-center gap-[6px] mt-[10px]">
                <Image
                  src="/assets/images/icons/location.svg"
                  className="w-6 h-6"
                  alt="icon"
                  width={6}
                  height={6}
                />
                <p className="font-semibold">{office.location}</p>
              </div>
            </div>
            <div className="flex flex-col gap-[6px]">
              <div className="flex items-center gap-1">
                <Image
                  src="/assets/images/icons/Star 1.svg"
                  className="w-5 h-5"
                  width={20}
                  height={20}
                  alt="star"
                />
                <Image
                  src="/assets/images/icons/Star 1.svg"
                  className="w-5 h-5"
                  width={20}
                  height={20}
                  alt="star"
                />
                <Image
                  src="/assets/images/icons/Star 1.svg"
                  className="w-5 h-5"
                  alt="star"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assets/images/icons/Star 1.svg"
                  className="w-5 h-5"
                  width={20}
                  height={20}
                  alt="star"
                />
                <Image
                  src="/assets/images/icons/Star 5.svg"
                  className="w-5 h-5"
                  alt="star"
                  width={20}
                  height={20}
                />
              </div>
              <p className="font-semibold text-right">4.5/5 (19,384)</p>
            </div>
          </div>
          <p className="leading-[30px]">
            Whether you need quite private space away from the distractions of
            an at-times chaotic home office, you’re on a team that needs to
            brainstorm and collaborate in person, or you’re owner meeting with
            prospective hires, clients, and partners, having access to hundreds
            of workspaces can be a game-changing resource.
          </p>
          <hr className="border-[#F6F5FD]" />
          <h2 className="font-bold">You Get What You Need Most</h2>
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
            <div className="flex items-center gap-4">
              <Image
                src="/assets/images/icons/cup.svg"
                className="w-[34px] h-[34px]"
                alt="icon"
                width={34}
                height={34}
              />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[24px]">Global Event</p>
                <p className="text-sm leading-[21px]">Startup Contest</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/assets/images/icons/home-trend-up.svg"
                className="w-[34px] h-[34px]"
                alt="icon"
                width={34}
                height={34}
              />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[24px]">
                  Sustainbility
                </p>
                <p className="text-sm leading-[21px]">Long-term Goals</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/assets/images/icons/coffee.svg"
                className="w-[34px] h-[34px]"
                alt="icon"
                width={34}
                height={34}
              />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[24px]">Extra Snacks</p>
                <p className="text-sm leading-[21px]">Work-Life Balance</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                width={34}
                height={34}
                src="/assets/images/icons/3dcube.svg"
                className="w-[34px] h-[34px]"
                alt="icon"
              />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[24px]">Compact</p>
                <p className="text-sm leading-[21px]">Good for Focus</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/assets/images/icons/group.svg"
                className="w-[34px] h-[34px]"
                alt="icon"
                width={34}
                height={34}
              />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[24px]">Free Move</p>
                <p className="text-sm leading-[21px]">Anytime 24/7</p>
              </div>
            </div>
          </div>
          <hr className="border-[#F6F5FD]" />
          <div className="flex flex-col gap-[6px]">
            <h2 className="font-bold">Office Address</h2>
            <p>Angga Park Central Master Capitalize</p>
            <p>BLDG E16, 13 Xicheng District, Beijing, China, 100000</p>
          </div>
          <div className="overflow-hidden w-full h-[280px]">
            <div
              id="my-map-display"
              className="h-full w-full max-w-[none] bg-none"
            >
              <iframe
                className="h-full w-full border-0"
                frameBorder={0}
                src="https://www.google.com/maps/embed/v1/place?q=Xicheng+District,+Beijing,&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              />
            </div>
            <a
              className="from-embedmap-code"
              href="https://www.bootstrapskins.com/themes"
              id="enable-map-data"
            >
              premium bootstrap themes
            </a>
          </div>
        </div>
        <div className="w-[392px] flex flex-col shrink-0 gap-[30px]">
          <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
            <div>
              <p className="font-extrabold text-[32px] leading-[48px] text-[#0D903A]">
                Rp 18.540.000
              </p>
              <p className="font-semibold mt-1">For 20 days working</p>
            </div>
            <hr className="border-[#F6F5FD]" />
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/images/icons/verify.svg"
                  className="w-[30px] h-[30px]"
                  alt="icon"
                  width={30}
                  height={30}
                />
                <p className="font-semibold leading-[28px]">
                  Mendapatkan akses pembelajaran terbaru terkait dunia startup
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/images/icons/verify.svg"
                  className="w-[30px] h-[30px]"
                  alt="icon"
                  width={30}
                  height={30}
                />
                <p className="font-semibold leading-[28px]">
                  Mendapatkan akses pembelajaran terbaru terkait dunia startup
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/images/icons/verify.svg"
                  className="w-[30px] h-[30px]"
                  alt="icon"
                  width={30}
                  height={30}
                />
                <p className="font-semibold leading-[28px]">
                  Mendapatkan akses pembelajaran terbaru terkait dunia startup
                </p>
              </div>
            </div>
            <hr className="border-[#F6F5FD]" />
            <div className="flex flex-col gap-[14px]">
              <a
                href="booking.html"
                className="flex items-center justify-center w-full rounded-full p-[16px_26px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD]"
              >
                <Image
                  src="/assets/images/icons/slider-horizontal-white.svg"
                  className="w-6 h-6"
                  alt="icon"
                  width={30}
                  height={30}
                />
                <span>Book This Office</span>
              </a>
              <button className="flex items-center justify-center w-full rounded-full border border-[#000929] p-[16px_26px] gap-3 bg-white font-semibold">
                <Image
                  src="/assets/images/icons/save-add.svg"
                  className="w-6 h-6"
                  alt="icon"
                  width={30}
                  height={30}
                />
                <span>Save for Later</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[20px] bg-white">
            <h2 className="font-bold">Contact Our Sales</h2>
            <div className="flex flex-col gap-[30px]">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative">
                    <Image
                      fill
                      src="/assets/images/photos/photo-1.png"
                      className="w-full h-full object-cover "
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Masayoshi</p>
                    <p className="text-sm leading-[21px]">Sales Manager</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a href="#">
                    <Image
                      src="/assets/images/icons/call-green.svg"
                      className="w-10 h-10"
                      alt="icon"
                      width={10}
                      height={10}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/assets/images/icons/chat-green.svg"
                      className="w-10 h-10"
                      alt="icon"
                      width={10}
                      height={10}
                    />
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative">
                    <Image
                      fill
                      src="/assets/images/photos/photo-2.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Fuji Ovina</p>
                    <p className="text-sm leading-[21px]">Sales Manager</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a href="#">
                    <Image
                      src="/assets/images/icons/call-green.svg"
                      className="w-10 h-10"
                      alt="icon"
                      width={10}
                      height={10}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/assets/images/icons/chat-green.svg"
                      className="w-10 h-10"
                      alt="icon"
                      width={10}
                      height={10}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
