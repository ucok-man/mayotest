import { XIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/common/dialog";
import Icons from "~/components/common/icons";
import { HOME_NAV_MOBILE_ITEMS } from "~/lib/constant";
import { cn } from "~/lib/utils";

type Props = {
  className?: string;
};

export default function ContentMobile({ className }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("flex items-center justify-between w-full", className)}>
      {/* Left Burger Icon */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="focus-within:outline-0">
          <Icons.burger className="stroke-primary size-6" />
        </DialogTrigger>
        <DialogContent className="data-[state=open]:animate-in data-[state=open]:slide-in-from-top-full top-[38%] data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top-full duration-200! border-gradient-primary border-g-1 bg-white rounded-3xl">
          <div className="py-8 px-6 flex flex-col items-center justify-center gap-8">
            {HOME_NAV_MOBILE_ITEMS.map((item, idx) => (
              <Link
                key={idx}
                to={item.href}
                className="font-chillax-link-large-mobile font-semibold text-primary cursor-pointer hover:text-primary/70 transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <DialogClose className="absolute top-4 right-4 cursor-pointer text-primary hover:text-primary/75">
            <XIcon className="size-5" />
          </DialogClose>
        </DialogContent>
      </Dialog>

      {/* Logo */}
    </div>
  );
}
