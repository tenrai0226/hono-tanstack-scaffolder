import { db } from '@/db'
import { regions } from '@/db/schema/regions'

// 区域数据
const regionsData = [
  { sourceId: 'tokyo', name: '東京' },
  { sourceId: 'osaka', name: '大阪' },
  { sourceId: 'kyoto', name: '京都' },
  { sourceId: 'hokkaido', name: '北海道' },
  { sourceId: 'aichi', name: '愛知' },
  { sourceId: 'fukuoka', name: '福岡' },
  { sourceId: 'hyogo', name: '兵庫' },
  { sourceId: 'kanagawa', name: '神奈川' },
  { sourceId: 'kagawa', name: '香川' },
  { sourceId: 'east', name: '東日本' },
  { sourceId: 'west', name: '西日本' },
  { sourceId: 'all', name: '全日本' }
]

async function seedRegions() {
  console.log('插入区域数据...')
  try {
    const result = await db
      .insert(regions)
      .values(regionsData)
      .onConflictDoNothing({
        target: [regions.sourceId]
      })
      .returning()
    console.log(`成功插入 ${result.length} 条区域数据`)
  }
  catch (error) {
    console.error('区域数据插入失败:', error)
    throw error
  }
}

export async function seed() {
  console.log('🌱 开始填充种子数据...')
  try {
    await seedRegions()
    console.log('✅ 种子数据填充完成')
  }
  catch (error) {
    console.error('❌ 种子数据填充失败:', error)
    throw error
  }
}

seed().catch((error) => {
  console.error('❌ 种子数据填充失败:', error)
  process.exit(1)
})