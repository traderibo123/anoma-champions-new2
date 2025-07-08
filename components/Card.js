
import Image from "next/image";

export default function Card({ data }) {
  return (
    <div className="relative mt-10 w-[380px] h-[540px]">
      <Image
        src="/card-template.png"
        alt="Card Template"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-6 w-full text-center text-xl font-bold uppercase">
        {data.username}
      </div>
      <div className="absolute bottom-6 left-6 text-sm">
        <p>7 Days: {data["7d"].title}</p>
        <p>30 Days: {data["30d"].title}</p>
        <p>3 Months: {data["90d"].title}</p>
        <p>6 Months: {data["180d"].title}</p>
      </div>
    </div>
  );
}
