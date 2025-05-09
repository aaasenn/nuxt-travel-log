import { int, real, sqliteTable, text } from 'drizzle-orm/sqlite-core';

import { user } from './auth';

export const location = sqliteTable('location', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  slug: text().notNull().unique(), // уникальное имя, например, "moscow" оно описывает местоположение
  description: text(),
  userId: int().notNull().references(() => user.id), // id пользователя, которому принадлежит локация
  lat: real().notNull(), // широта
  long: real().notNull(), // долгота
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
