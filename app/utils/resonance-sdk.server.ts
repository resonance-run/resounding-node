import Resonance from '@resonance-run/resonance-node';

const amplifierStoreUrl = process.env.AMPLIFIER_STORE_URL || 'https://resonance-client-cache.fly.dev';
const resonanceClientId = process.env.RES_CLIENT_ID ?? '';
const resonanceApiKey = process.env.RES_API_KEY ?? '';
const resonance = new Resonance(amplifierStoreUrl, { clientId: resonanceClientId, apiKey: resonanceApiKey });
if (process.env.GA_TRACKING_ID && process.env.GA_API_SECRET) {
  resonance.initGA(process.env.GA_TRACKING_ID, process.env.GA_API_SECRET);
}
export const getResonanceInstance = () => {
  if (process.env.GA_TRACKING_ID && process.env.GA_API_SECRET) {
    resonance.initGA(process.env.GA_TRACKING_ID, process.env.GA_API_SECRET);
  }
  return resonance;
};
