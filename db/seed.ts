import { Item, db } from 'astro:db';

export default async function seed() {
  await db.insert(Item).values([
    {
      title: 'Agoto',
      isRead: false
    },
    {
      title: 'Agu',
      isRead: true
    },
    {
      title: 'Agustin',
      isRead: true
    }
  ])
}