import Image from "next/image";
import { Timeline } from "./timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image src="https://source.unsplash.com/500x500/?technology" alt="startup template" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
            <Image src="https://source.unsplash.com/500x500/?coding" alt="startup template" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Integrated lorem ipsum for large copy spaces.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image src="https://source.unsplash.com/500x500/?software" alt="software template" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
            <Image src="https://source.unsplash.com/500x500/?app" alt="app template" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full" />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full">
      <div className="absolute top-0 left-0 w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}
