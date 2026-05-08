import type { CreateUserProfile, UpdateUserProfile, UserPreferences } from '@/shared/schemas/user-profile'

import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { userProfiles } from '@/db/schema/user-profiles'

export class UserProfileService {
  async getProfile(userId: string) {
    return await db.query.userProfiles.findFirst({
      where: fields => eq(fields.userId, userId),
    })
  }

  async createProfile(data: CreateUserProfile) {
    const result = await db.insert(userProfiles)
      .values(data as any)
      .returning()

    return result[0]
  }

  async updateProfile(userId: string, data: Partial<UpdateUserProfile>) {
    const result = await db.update(userProfiles)
      .set({ ...data, updatedAt: new Date() } as any)
      .where(eq(userProfiles.userId, userId))
      .returning()

    return result[0]
  }

  async updateLocalePreference(userId: string, locale: string) {
    const profile = await this.getProfile(userId)
    const preferences = (profile?.preferences as UserPreferences) || { theme: 'light' }
    preferences.locale = locale

    return this.updateProfile(userId, {
      preferences,
    })
  }
}
