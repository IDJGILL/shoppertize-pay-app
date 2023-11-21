import Image from "next/image";
import Link from "next/link";
import Logo from "~/assets/brand/logo.svg";

export default function BrandLogo({
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const {} = props;

  return (
    <div className="max-w-max pr-2">
      <Link href="/">
        <Image
          src={Logo as unknown as string}
          alt="Shoppertize"
          className="w-32 px-1 pb-[7px] pt-1 md:w-[180px]"
        />
      </Link>
    </div>
  );
}
