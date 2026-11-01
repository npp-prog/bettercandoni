/**
 * This portal's configuration: the only file a fork needs to edit.
 * What each field means: src/config.ts. Check it against the live API with
 * `npm run check`; regenerate it with `npm run setup`.
 *
 * The Municipality of Candoni, Negros Occidental. Candoni has no DPWH district
 * engineering office of its own, so the portal finds its projects by name:
 * every line in the four 2027 programs (DPWH, farm-to-market roads, health
 * facilities, irrigation) and every 2020–2026 enacted program whose title
 * names "Candoni". The name is not shared with another town, so no region
 * filter is set; that also keeps the search working whether the API files
 * Negros Occidental under Region VI or the Negros Island Region (NIR).
 *
 * Verify before deploying (the ids below were written by hand):
 *   npm run setup -- --list-districts | grep -i negros
 *   npm run check -- --verbose
 */
import { defineConfig } from './src/config';

export default defineConfig({
  id: 'candoni',
  kind: 'municipality',
  name: 'Municipality of Candoni, Negros Occidental',
  shortName: 'Candoni',
  operator: { name: 'MGO Candoni' },
  // Where this portal is deployed (for link previews).
  siteUrl: 'https://bettercandoni.netlify.app',
  scope: {
    places: [{ label: 'Candoni', q: 'Candoni' }],
    // Candoni is in the 6th legislative district of Negros Occidental.
    districts: ['leg:negros-occidental:6th'],
    exclude: [],
  },
  reporting: { enabled: false },
});
