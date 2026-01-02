import { Poppins, Cairo } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '600', '700'],
});
