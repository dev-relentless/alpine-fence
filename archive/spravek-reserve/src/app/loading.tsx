import VMark from '@/components/VMark';

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center pt-24">
      <VMark id="ld" className="h-10 w-auto animate-pulse" />
    </div>
  );
}
