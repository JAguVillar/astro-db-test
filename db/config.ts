import { defineDb, defineTable, column } from 'astro:db';

const Item = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    isRead: column.boolean({default:false}),
  }
})

export default defineDb({
  tables: { Item },
})