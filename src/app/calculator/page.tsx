'use client';

import { useState } from 'react';
import Link from 'next/link';

interface CalcResults {
  refinishTotal: number;
  refinishCycles: number;
  compozenTotal: number;
  savings: number;
  breakEvenYear: number;
}

function calculateCosts(
  sqft: number,
  currentAge: number,
  type: 'fence' | 'deck'
): CalcResults {
  const refinishCostPerSqft = type === 'fence' ? 4.5 : 6;
  const refinishInterval = 2.5; // years
  const compozenCostPerSqft = type === 'fence' ? 35 : 50;
  const yearsToCompare = 10;
  const refinishCycles = Math.ceil(yearsToCompare / refinishInterval);
  // Costs increase each cycle as wood degrades
  let refinishTotal = 0;
  for (let i = 0; i < refinishCycles; i++) {
    refinishTotal += sqft * refinishCostPerSqft * (1 + i * 0.15);
  }
  // Add eventual replacement cost (likely needed in years 8-12)
  if (currentAge > 5) {
    refinishTotal += sqft * (type === 'fence' ? 20 : 30); // replacement
  }

  const compozenTotal = sqft * compozenCostPerSqft;
  const savings = refinishTotal - compozenTotal;
  const annualRefinishCost = refinishTotal / yearsToCompare;
  const breakEvenYear = annualRefinishCost > 0 ? Math.ceil(compozenTotal / annualRefinishCost) : 10;

  return {
    refinishTotal: Math.round(refinishTotal),
    refinishCycles,
    compozenTotal: Math.round(compozenTotal),
    savings: Math.round(savings),
    breakEvenYear: Math.min(breakEvenYear, 10),
  };
}

export default function CalculatorPage() {
  const [sqft, setSqft] = useState(200);
  const [age, setAge] = useState(5);
  const [type, setType] = useState<'fence' | 'deck'>('fence');
  const [results, setResults] = useState<CalcResults | null>(null);

  const handleCalculate = () => {
    setResults(calculateCosts(sqft, age, type));
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient text-white">
        <div className="section-container py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Refinish vs. Replace Calculator
            </h1>
            <p className="text-lg text-stone-200 leading-relaxed">
              See the real 10-year cost comparison between repeated refinishing and a single 
              Compozen® composite installation. The numbers might surprise you.
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
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Project Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setType('fence')}
                      className={`p-4 rounded-xl border-2 text-center font-medium transition-all ${
                        type === 'fence'
                          ? 'border-alpine-600 bg-alpine-100 text-alpine-800'
                          : 'border-stone-200 bg-white text-stone-600 hover:border-alpine-300'
                      }`}
                    >
                      🏗️ Fence
                    </button>
                    <button
                      onClick={() => setType('deck')}
                      className={`p-4 rounded-xl border-2 text-center font-medium transition-all ${
                        type === 'deck'
                          ? 'border-alpine-600 bg-alpine-100 text-alpine-800'
                          : 'border-stone-200 bg-white text-stone-600 hover:border-alpine-300'
                      }`}
                    >
                      🏠 Deck
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Approximate Size (sq ft): <strong className="text-alpine-700">{sqft}</strong>
                  </label>
                  <input
                    type="range"
                    min={50}
                    max={1000}
                    step={10}
                    value={sqft}
                    onChange={(e) => setSqft(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-alpine-600"
                  />
                  <div className="flex justify-between text-xs text-stone-400 mt-1">
                    <span>50 sq ft</span>
                    <span>1,000 sq ft</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Current {type} age (years): <strong className="text-alpine-700">{age}</strong>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={25}
                    step={1}
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-alpine-600"
                  />
                  <div className="flex justify-between text-xs text-stone-400 mt-1">
                    <span>New</span>
                    <span>25+ years</span>
                  </div>
                </div>

                <button onClick={handleCalculate} className="btn-primary w-full text-lg">
                  Calculate 10-Year Costs →
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
                    <h3 className="text-lg font-heading font-bold text-stone-400 mb-2">Calculator Results</h3>
                    <p className="text-sm text-stone-400">Adjust the inputs and click calculate to see your 10-year comparison.</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-2xl font-heading font-bold text-alpine-900">10-Year Cost Comparison</h2>

                  {/* Refinishing cost */}
                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-heading font-bold text-stone-900">Repeated Refinishing</h3>
                      <span className="text-2xl font-bold text-red-600">${results.refinishTotal.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-red-200 rounded-full h-3 mb-3">
                      <div
                        className="bg-red-500 h-3 rounded-full transition-all"
                        style={{ width: `${Math.min(100, (results.refinishTotal / Math.max(results.refinishTotal, results.compozenTotal)) * 100)}%` }}
                      />
                    </div>
                    <ul className="text-sm text-stone-600 space-y-1">
                      <li>• {results.refinishCycles} refinishing cycles over 10 years</li>
                      <li>• Costs increase as {type} deteriorates</li>
                      {age > 5 && <li>• Includes likely replacement cost for aging {type}</li>}
                      <li>• Plus annual maintenance time</li>
                    </ul>
                  </div>

                  {/* Compozen cost */}
                  <div className="bg-compozen-50 rounded-xl p-6 border border-compozen-200">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-heading font-bold text-stone-900">One Compozen® Installation</h3>
                      <span className="text-2xl font-bold text-alpine-700">${results.compozenTotal.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-compozen-200 rounded-full h-3 mb-3">
                      <div
                        className="bg-compozen-500 h-3 rounded-full transition-all"
                        style={{ width: `${Math.min(100, (results.compozenTotal / Math.max(results.refinishTotal, results.compozenTotal)) * 100)}%` }}
                      />
                    </div>
                    <ul className="text-sm text-stone-600 space-y-1">
                      <li>• One-time installation cost</li>
                      <li>• $0 maintenance forever</li>
                      <li>• Lifetime material warranty</li>
                      <li>• Increases property value 70-80%</li>
                    </ul>
                  </div>

                  {/* Summary */}
                  <div className={`rounded-xl p-6 border-2 ${results.savings > 0 ? 'bg-alpine-50 border-alpine-300' : 'bg-compozen-50 border-compozen-300'}`}>
                    {results.savings > 0 ? (
                      <>
                        <h3 className="text-xl font-heading font-bold text-alpine-800 mb-2">
                          🎉 Compozen® Saves You ${results.savings.toLocaleString()} Over 10 Years
                        </h3>
                        <p className="text-stone-600 text-sm">
                          Break-even point: approximately year {results.breakEvenYear}. After that, 
                          every year is pure savings with zero maintenance.
                        </p>
                      </>
                    ) : (
                      <>
                        <h3 className="text-xl font-heading font-bold text-compozen-800 mb-2">
                          Compozen® Pays for Itself by Year {results.breakEvenYear}
                        </h3>
                        <p className="text-stone-600 text-sm">
                          While the upfront cost is higher, Compozen® eliminates all future refinishing 
                          costs and dramatically increases your property value.
                        </p>
                      </>
                    )}
                    <Link href="/quote?service=compozen" className="btn-compozen mt-4">
                      Get a Free Compozen® Estimate →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why upgrade */}
      <section className="section-padding bg-alpine-50">
        <div className="section-container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-4">
            The Hidden Costs of Refinishing
          </h2>
          <p className="text-stone-600 mb-12">
            The true cost of maintaining a wood fence or deck goes beyond the contractor&apos;s bill.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 text-left">
            {[
              { title: 'Time Lost', desc: 'Each refinishing cycle means 2-4 days of disruption, furniture moving, and drying time. Over 10 years, that\'s 8-16 days of your life.', cost: 'Priceless' },
              { title: 'Diminishing Returns', desc: 'Wood deteriorates with each cycle. By year 8-10, refinishing barely holds for a season, and stain costs increase.', cost: '+15%/cycle' },
              { title: 'Property Value', desc: 'Aging wood decreases home value. Compozen® composite adds 70-80% of installation cost to your property value.', cost: '-$5K-15K' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-stone-200">
                <h3 className="font-heading font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-600 mb-3">{item.desc}</p>
                <span className="text-xs font-bold text-red-600">{item.cost}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
