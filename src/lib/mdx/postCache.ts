export const CACHE_DURATION = 1000 * 60 * 5; // 5분

export class PostCache {
  private cache = new Map<string, { data: any; timestamp: number }>();
  private maxSize = 100;

  get<T>(key: string): T | null {
    const cached = this.cache.get(key);
    if (!cached) return null;

    if (Date.now() - cached.timestamp > CACHE_DURATION) {
      this.cache.delete(key);
      return null;
    }

    return cached.data as T;
  }

  set(key: string, data: any): void {
    if (this.cache.size >= this.maxSize) {
      // 가장 오래된 항목 삭제
      const firstKey = Array.from(this.cache.keys())[0];
      if (firstKey) this.cache.delete(firstKey);
    }
    this.cache.set(key, { data, timestamp: Date.now() });
  }

  clear(): void {
    this.cache.clear();
  }
}

export const postCache = new PostCache();