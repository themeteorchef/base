import { setBrowserPolicies } from './set-browser-policies';
import { seedDatabase } from './seed-database';

export function startup() {
  setBrowserPolicies();
  seedDatabase();
}
