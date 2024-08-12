import { LoaderFunctionArgs } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { Plan } from '~/components/routes/pricing/Plan';
import { getResonanceInstance } from '~/utils/resonance-sdk.server';

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  const resonance = getResonanceInstance(context.cloudflare.env);

  // Example default values
  // You only need this one time for each surfaceId
  // TODO: Change these values!
  const planOneDefault = {
    name: 'Garage band',
    description: 'Small venues, big dreams',
    imageUrl:
      'https://image1.masterfile.com/getImage/NjEyOC0wODc2Njc5NmVuLjAwMDAwMDAw=AC-0Ua/6128-08766796en_Masterfile.jpg',
    bulletPoints: ['Quality equipment', 'Low cost', 'No storage'],
    ctaText: 'Start jamming',
    ctaBgColor: 'white',
    ctaBorderColor: 'black',
    ctaTextColor: 'black',
    ctaUrl: '/signup',
  };

  // You only need this one time for each surfaceId
  const planOne: Plan.Content = await resonance.loadCustomization({
    type: 'pricing-plan',
    surfaceId: 'planOne',
    userData: { id: 123 },
    request,
    defaultValue: planOneDefault,
  });

  // Example default values
  // You only need this one time for each surfaceId
  // TODO: Change these values!
  const planTwoDefault = {
    name: 'Touring band',
    description: 'Big venues and festivals',
    imageUrl: 'https://britpopreunion.co.uk/90s-festival-band.jpg',
    bulletPoints: ['Pro equipment', 'Big sound', 'Pick up in all major cities'],
    ctaText: 'Rock on',
    ctaBgColor: 'white',
    ctaBorderColor: 'black',
    ctaTextColor: 'black',
    ctaUrl: '/signup',
  };

  // You only need this one time for each surfaceId
  const planTwo: Plan.Content = await resonance.loadCustomization({
    type: 'pricing-plan',
    surfaceId: 'planTwo',
    userData: { id: 123 },
    request,
    defaultValue: planTwoDefault,
  });

  const planThreeDefault: Plan.Content = {
    name: 'Grammy winner',
    description: 'Stadium tours and major events',
    imageUrl:
      'https://www.jsonline.com/gcdn/presto/2018/09/05/PMJS/edcd53f1-640e-4eaf-946f-9ef1d751cb3d-KILLERS_05547.JPG?crop=4199,2346,x0,y0&width=660&height=372&format=pjpg&auto=webp',
    bulletPoints: ['Onsite sound engineers', 'Arena-level sound', 'Concierge service'],
    ctaText: 'Take it to 11',
    ctaBgColor: 'black',
    ctaBorderColor: 'black',
    ctaTextColor: 'white',
    ctaUrl: '/signup',
  };

  // You only need this one time for each surfaceId
  const planThree: Plan.Content = await resonance.loadCustomization({
    type: 'pricing-plan',
    surfaceId: 'planThree',
    userData: { id: 123 },
    request,
    defaultValue: planThreeDefault,
  });

  return { planOne, planTwo, planThree };
};

export default function Pricing() {
  const { planOne, planTwo, planThree } = useLoaderData<typeof loader>();
  return (
    <section className="bg-slate-800 w-screen min-h-screen p-12 font-sans">
      <h1 className="text-5xl text-slate-300">Get the sound your sound needs</h1>
      <div className="my-8 max-w-5xl items-stretch gap-6 rounded-md shadow-lg sm:flex sm:flex-row sm:items-stretch">
        <Plan plan={planOne} />
        <Plan plan={planTwo} />
        <Plan plan={planThree} />
      </div>
    </section>
  );
}
