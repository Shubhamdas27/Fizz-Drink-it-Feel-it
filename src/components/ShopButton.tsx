import Link from "next/link";
import clsx from "clsx";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function ShopButton({ href, children, className }: Props) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-block rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl relative z-10 cursor-pointer",
        className,
      )}
      style={{ pointerEvents: 'auto' }}
    >
      {children}
    </Link>
  );
}