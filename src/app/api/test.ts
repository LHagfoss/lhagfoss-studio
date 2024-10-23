import { NextResponse } from 'next/server';

const CACHE_TIME = 60 * 60; // Cache for 1 time

export async function GET() {
  const cacheKey = 'externalData';
  const cachedData = await getCache(cacheKey);

  if (cachedData) {
    return NextResponse.json(cachedData);
  }

  const response = await fetch('https://api.example.com/data');
  const data = await response.json();

  // Lgrer fetched data i cache
  await setCache(cacheKey, data, CACHE_TIME);

  return NextResponse.json(data);
}

// Easy in-memory cache (for demonstration purposes)
const cache = new Map<string, { data: any; expiry: number }>();

async function getCache(key: string) {
  const cached = cache.get(key);
  if (cached && cached.expiry > Date.now()) {
    return cached.data;
  }
  return null;
}

async function setCache(key: string, data: any, ttl: number) {
  cache.set(key, { data, expiry: Date.now() + ttl * 1000 });
}