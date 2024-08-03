import Resonance from '@resonance-run/resonance-node';

let resonance: Resonance;
export const getResonanceInstance = (env: any) => {
  if (!resonance) {
    const amplifierStoreUrl = env.AMPLIFIER_STORE_URL || 'https://resonance-client-cache.fly.dev';
    const resonanceClientId = env.RES_CLIENT_ID ?? '';
    const resonanceApiKey = env.RES_API_KEY ?? '';
    resonance = new Resonance(amplifierStoreUrl, { clientId: resonanceClientId, apiKey: resonanceApiKey });
    if (env.GA_TRACKING_ID && env.GA_API_SECRET) {
      resonance.initGA(env.GA_TRACKING_ID, env.GA_API_SECRET);
    }
  }
  return resonance;
};
