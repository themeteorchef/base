import { Seed } from '../seeder';

export function seedDatabase() {
  Seed( 'users', {
    data: [{
      email: 'admin@admin.com',
      password: 'password'
    }]
  });
}
