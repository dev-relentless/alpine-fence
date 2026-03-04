import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Composite Fence & Gate Cost Estimator | Alpine Fence & Deck',
  description:
    'Get an estimated price range for your composite fence and gate project. Compare composite vs. wood costs. Free on-site estimates available from Utah\'s Compozen® composite experts.',
  openGraph: {
    title: 'Composite Fence & Gate Cost Estimator | Alpine Fence & Deck',
    description:
      'Estimate your composite fence and gate project cost. Compare composite vs. wood pricing in Utah.',
    url: 'https://alpinefenceanddeck.com/calculator',
  },
  alternates: {
    canonical: 'https://alpinefenceanddeck.com/calculator',
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
