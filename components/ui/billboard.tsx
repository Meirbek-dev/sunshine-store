import type { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-xl p-4 sm:p-6 lg:p-8">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="relative aspect-square overflow-hidden rounded-xl bg-cover md:aspect-[2.4/1]"
      >
        {/*<div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">*/}
        {/*    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">*/}
        {/*        {data.label}*/}
        {/*    </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Billboard;
