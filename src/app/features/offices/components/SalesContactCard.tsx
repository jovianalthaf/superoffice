import Image from "next/image";
import { Contact } from "../types/OfficeSpace.types";
export default function SalesContactCard({ contact }: { contact: Contact }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-4">
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative">
          <Image
            fill
            src={contact.photo}
            className="w-full h-full object-cover "
            alt={contact.name}
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <p className="font-bold">{contact.name}</p>
          <p className="text-sm leading-[21px]">{contact.role}</p>
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
  );
}
