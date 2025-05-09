import { int, real, sqliteTable, text } from 'drizzle-orm/sqlite-core';

import { user } from './auth';
import { location } from './location';

export const locationLog = sqliteTable('locationLog', {
  id: int().primaryKey({ autoIncrement: true }),
  locationId: int().notNull().references(() => location.id),
  name: text().notNull(),
  slug: text().notNull().unique(), // уникальное имя, например, "moscow" оно описывает местоположение
  description: text(),
  userId: int().notNull().references(() => user.id), // id пользователя, которому принадлежит лог локации
  lat: real().notNull(), // широта
  long: real().notNull(), // долгота
  startedAt: int().notNull(), // время начала
  endedAt: int().notNull(), // время окончания
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
