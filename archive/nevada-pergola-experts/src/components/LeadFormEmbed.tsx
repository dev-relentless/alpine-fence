import Script from 'next/script';
import { BRAND } from '@/data/brand';
import { GHL_EMBED_SCRIPT, GHL_FORM } from '@/data/landing';

/**
 * Renders the Go High Level inline form once `GHL_FORM.src` is set;
 * until then, a clearly-marked placeholder with a phone fallback so the
 * page still converts if it goes live early.
 */
export default function LeadFormEmbed() {
  if (!GHL_FORM.src) {
    return (
      <div
        role="status"
        className="border-2 border-dashed border-timber-300 bg-linen-50 px-6 py-14 text-center"
        style={{ minHeight: Math.min(GHL_FORM.height, 420) }}
      >
        <div className="tag mb-3">Form placeholder</div>
        <p className="h-display text-2xl text-timber-800 mb-3">Go High Level form embeds here.</p>
        <p className="text-timber-500 text-[15px] leading-relaxed max-w-xs mx-auto">
          Paste the inline form URL into <code className="text-timber-700">src/data/landing.ts</code> and
          this block becomes the live form.
        </p>
        <div className="mx-auto h-px w-12 bg-timber-300 my-7" aria-hidden />
        <a href={`tel:${BRAND.phoneRaw}`} className="btn-primary w-full sm:w-auto">
          Call or text {BRAND.phone}
        </a>
      </div>
    );
  }

  const formId = GHL_FORM.src.split('/').filter(Boolean).pop() ?? 'lead-form';

  return (
    <>
      <iframe
        src={GHL_FORM.src}
        id={`inline-${formId}`}
        title={GHL_FORM.title}
        style={{ width: '100%', height: GHL_FORM.height, border: 'none' }}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-activation-type="alwaysActivated"
        data-deactivation-type="neverDeactivate"
        data-form-id={formId}
        data-height={GHL_FORM.height}
        data-layout-iframe-id={`inline-${formId}`}
      />
      <Script src={GHL_EMBED_SCRIPT} strategy="lazyOnload" />
    </>
  );
}
