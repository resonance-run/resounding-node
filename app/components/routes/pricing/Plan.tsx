import { Link } from '@remix-run/react';

export namespace Plan {
  export interface Content {
    name: string;
    description: string;
    bulletPoints: string[];
    ctaText: string;
    ctaUrl: string;
    imageUrl: string;
    ctaTextColor: string;
    ctaBorderColor: string;
    ctaBgColor: string;
  }
  export interface Props {
    plan: Content;
  }
}
export function Plan({ plan }: Plan.Props) {
  return (
    <div className="bg-white w-full sm:w-4/5 border-b border-black/25 sm:border-b-0 sm:border-r last:border-0 grow px-8 py-12 text-black/80 hover:text-black/90 transition-all duration-500 hover:bg-slate-100 rounded-xl group">
      {plan.imageUrl ? (
        <div className="w-full flex items-center h-52 relative">
          <img src={plan.imageUrl} alt={plan.name} />
          <div className=" transition-all duration-500 absolute top-0 left-0 right-0 bottom-0 bg-white/40 group-hover:bg-transparent"></div>
        </div>
      ) : null}
      <h2 className="font-semibold text-3xl mb-1 h-10 overflow-clip" dangerouslySetInnerHTML={{ __html: plan.name }} />
      <p className="text-black/60 mb-6 h-12" dangerouslySetInnerHTML={{ __html: plan.description }} />
      <Link
        to={plan.ctaUrl}
        className="block rounded-full font-semibold border-2 border-[#31a8f7] text-xl py-4 text-center w-full sm:w-auto text-black/90"
        style={{
          borderColor: plan.ctaBorderColor ?? '#31a8f7',
          backgroundColor: plan.ctaBgColor ?? 'transparent',
          color: plan.ctaTextColor ?? 'rgba(0,0,0,0.9)',
        }}
        dangerouslySetInnerHTML={{ __html: plan.ctaText }}
      />
      <ul className="list-disc list-inside text-black/60 mt-4 min-h-32">
        {plan.bulletPoints.map(bulletPoint => (
          <li className="mt-3" key={bulletPoint} dangerouslySetInnerHTML={{ __html: bulletPoint }} />
        ))}
      </ul>
    </div>
  );
}
