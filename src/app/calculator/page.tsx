'use client';

import { useState } from 'react';
import Link from 'next/link';

interface CalcResults {
  fenceLow: number;
  fenceHigh: number;
  gateLow: number;
  gateHigh: number;
  totalLow: number;
  totalHigh: number;
}

const FENCE_PRICE_PER_FOOT = 80;
const GATE_PRICE_PER_FOOT = 150;
const RANGE_FACTOR_LOW = 0.85;
const RANGE_FACTOR_HIGH = 1.15;

function calculateEstimate(fenceFeet: number, gateCount: number, gateWidthFt: number): CalcResults {
  const fenceBase = fenceFeet * FENCE_PRICE_PER_FOOT;
  const totalGateFeet = gateCount * gateWidthFt;
  const gateBase = totalGateFeet * GATE_PRICE_PER_FOOT;

  const fenceLow = Math.round(fenceBase * RANGE_FACTOR_LOW);
  const fenceHigh = Math.round(fenceBase * RANGE_FACTOR_HIGH);
  const gateLow = Math.round(gateBase * RANGE_FACTOR_LOW);
  const gateHigh = Math.round(gateBase * RANGE_FACTOR_HIGH);

  return {
    fenceLow,
    fenceHigh,
    gateLow,
    gateHigh,
    totalLow: fenceLow + gateLow,
    totalHigh: fenceHigh + gateHigh,
  };
}

export default function CalculatorPage() {
  const [fenceFeet, setFenceFeet] = useState(100);
  const [gateCount, setGateCount] = useState(1);
  const [gateWidth, setGateWidth] = useState(4);
  const [results, setResults] = useState<CalcResults | null>(null);

  const handleCalculate = () => {
    setResults(calculateEstimate(fenceFeet, gateCount, gateWidth));
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient text-white">
        <div className="section-container py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Fence &amp; Gate Cost Estimator
            </h1>
            <p className="text-lg text-stone-200 leading-relaxed">
              Get a quick price range for your fence and gate project. Enter your measurements
              below to see an estimated cost. For a precise quote, request a free on-site estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input */}
            <div className="bg-alpine-50 rounded-2xl p-8 border border-alpine-200">
              <h2 className="text-2xl font-heading font-bold text-alpine-900 mb-6">Your Project Details</h2>
              <div className="space-y-6">
                {/* Fence Linear Feet */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Fence Length (linear feet): <strong className="text-alpine-700">{fenceFeet} ft</strong>
                  </label>
                  <input
                    type="range"
                    min={20}
                    max={500}
                    step={5}
                    value={fenceFeet}
                    onChange={(e) => setFenceFeet(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-alpine-600"
                  />
                  <div className="flex justify-between text-xs text-stone-400 mt-1">
                    <span>20 ft</span>
                    <span>500 ft</span>
                  </div>
                </div>

                {/* Gate Count */}
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Number of Gates: <strong className="text-alpine-700">{gateCount}</strong>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={6}
                    step={1}
                    value={gateCount}
                    onChange={(e) => setGateCount(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-alpine-600"
                  />
                  <div className="flex justify-between text-xs text-stone-400 mt-1">
                    <span>0</span>
                    <span>6</span>
                  </div>
                </div>

                {/* Gate Width */}
                {gateCount > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Average Gate Width: <strong className="text-alpine-700">{gateWidth} ft</strong>
                    </label>
                    <input
                      type="range"
                      min={3}
                      max={16}
                      step={1}
                      value={gateWidth}
                      onChange={(e) => setGateWidth(Number(e.target.value))}
                      className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-alpine-600"
                    />
                    <div className="flex justify-between text-xs text-stone-400 mt-1">
                      <span>3 ft (walk gate)</span>
                      <span>16 ft (double drive)</span>
                    </div>
                  </div>
                )}

                <button onClick={handleCalculate} className="btn-primary w-full text-lg">
                  Get Estimated Range →
                </button>
              </div>
            </div>

            {/* Results */}
            <div>
              {!results ? (
                <div className="h-full flex items-center justify-center bg-stone-50 rounded-2xl border-2 border-dashed border-stone-200 p-8">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-stone-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                    </svg>
                    <h3 className="text-lg font-heading font-bold text-stone-400 mb-2">Your Estimate</h3>
                    <p className="text-sm text-stone-400">Adjust the inputs and click the button to see your estimated price range.</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-heading font-bold text-alpine-900">Estimated Price Range</h2>

                  {/* Fence cost */}
                  <div className="bg-alpine-50 rounded-xl p-6 border border-alpine-200">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-heading font-bold text-stone-900">Fence ({fenceFeet} linear ft)</h3>
                      <span className="text-xl font-bold text-alpine-700">
                        ${results.fenceLow.toLocaleString()} – ${results.fenceHigh.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-stone-500">
                      Based on ~${FENCE_PRICE_PER_FOOT}/ft, actual price depends on material, terrain, and style.
                    </p>
                  </div>

                  {/* Gate cost */}
                  {gateCount > 0 && (
                    <div className="bg-alpine-50 rounded-xl p-6 border border-alpine-200">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-heading font-bold text-stone-900">
                          {gateCount} Gate{gateCount > 1 ? 's' : ''} ({gateWidth} ft wide each)
                        </h3>
                        <span className="text-xl font-bold text-alpine-700">
                          ${results.gateLow.toLocaleString()} – ${results.gateHigh.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-sm text-stone-500">
                        Based on ~${GATE_PRICE_PER_FOOT}/ft, actual price depends on hardware and style.
                      </p>
                    </div>
                  )}

                  {/* Total */}
                  <div className="bg-alpine-100 rounded-xl p-6 border-2 border-alpine-300">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-heading font-bold text-alpine-900">Estimated Total</h3>
                      <span className="text-2xl font-bold text-alpine-800">
                        ${results.totalLow.toLocaleString()} – ${results.totalHigh.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-stone-600">
                      This is a rough estimate. Final pricing varies based on materials chosen, site conditions,
                      terrain, post depth, and other project-specific factors.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="rounded-xl p-6 bg-compozen-50 border-2 border-compozen-300">
                    <h3 className="text-xl font-heading font-bold text-alpine-800 mb-2">
                      Want an Exact Price?
                    </h3>
                    <p className="text-stone-600 text-sm mb-4">
                      Request a free on-site estimate and we&apos;ll measure everything, discuss materials,
                      and give you a firm quote — no obligation.
                    </p>
                    <Link href="/quote" className="btn-primary">
                      Get a Free On-Site Estimate →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing info */}
      <section className="section-padding bg-alpine-50">
        <div className="section-container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-4">
            What Affects Your Final Price?
          </h2>
          <p className="text-stone-600 mb-12">
            Every project is unique. Here are the main factors that determine your final cost.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 text-left">
            {[
              { title: 'Material Choice', desc: 'Wood, vinyl, composite, metal — each material has different costs. We\'ll help you pick the best option for your budget and style.', icon: '🪵' },
              { title: 'Terrain & Access', desc: 'Slopes, rocky soil, and tight access can affect labor. We assess your property during the free on-site estimate.', icon: '⛰️' },
              { title: 'Style & Height', desc: 'Privacy fences, decorative styles, and taller builds affect pricing. Gates with specialty hardware adjust cost as well.', icon: '📐' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-stone-200">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="font-heading font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
