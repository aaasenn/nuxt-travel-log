import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

import { locationLog } from './location-log';

export const locationLogImage = sqliteTable('locationLogImage', {
  id: int().primaryKey({ autoIncrement: true }),
  locationLogId: int().notNull().references(() => locationLog.id),
  key: text().notNull(), // ключ изображения, например, "moscow.jpg" для хранения в S3
  description: text(),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
