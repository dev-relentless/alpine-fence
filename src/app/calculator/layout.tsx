import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refinish vs. Replace Calculator | Alpine Fence & Deck',
  description:
    'Calculate the true 10-year cost of refinishing your wood fence or deck vs. upgrading to Compozen® composite. See your potential savings instantly.',
  openGraph: {
    title: 'Refinish vs. Replace Calculator | Alpine Fence & Deck',
    description:
      'Calculate the true 10-year cost of refinishing vs. upgrading to Compozen® composite.',
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
