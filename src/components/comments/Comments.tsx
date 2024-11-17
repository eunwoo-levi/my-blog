'use client';
import { lazy, Suspense } from 'react';
const Giscus = lazy(() => import('@/components/comments/Giscus'));

export default function Comments() {
  return (
    <Suspense fallback={<div>Loading comments...</div>}>
      <Giscus />
    </Suspense>
  );
}
