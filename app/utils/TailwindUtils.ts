import {clsx, type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';

/**
 *  Utility function: merge tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};
