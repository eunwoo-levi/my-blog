import { CATEGORIES } from '@/constants/categories';

export const getCategoryPath = (id: string | number): string => {
    const category = CATEGORIES.find(cat => cat.id.toString() === id.toString());
    return category?.path || '';
  };