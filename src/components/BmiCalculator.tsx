import React, { useState, useMemo } from "react";
import { Calculator, RotateCcw, AlertCircle, Shield, CheckCircle, Info, MessageSquare, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "../data/gymData";

type UnitSystem = "metric" | "imperial";

export const BmiCalculator: React.FC = () => {
  const [unitSystem, setUnitSystem] = useState<UnitSystem>("metric");

  // Metric states
  const [heightCm, setHeightCm] = useState<string>("172");
  const [weightKg, setWeightKg] = useState<string>("68");

  // Imperial states
  const [heightFeet, setHeightFeet] = useState<string>("5");
  const [heightInches, setHeightInches] = useState<string>("8");
  const [weightLbs, setWeightLbs] = useState<string>("150");

  const resetCalculator = () => {
    if (unitSystem === "metric") {
      setHeightCm("172");
      setWeightKg("68");
    } else {
      setHeightFeet("5");
      setHeightInches("8");
      setWeightLbs("150");
    }
  };

  // Convert inputs to metric for exact formula calculation:
  // Formula: BMI = weight in kilograms / (height in metres × height in metres)
  const calculation = useMemo(() => {
    let weightInKg = 0;
    let heightInMeters = 0;

    if (unitSystem === "metric") {
      const h = parseFloat(heightCm);
      const w = parseFloat(weightKg);
      if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
        return null;
      }
      heightInMeters = h / 100;
      weightInKg = w;
    } else {
      const ft = parseFloat(heightFeet);
      const inches = parseFloat(heightInches);
      const lbs = parseFloat(weightLbs);
      if (isNaN(ft) || isNaN(lbs) || ft < 0 || lbs <= 0) {
        return null;
      }
      const totalInches = ft * 12 + (isNaN(inches) ? 0 : inches);
      if (totalInches <= 0) return null;
      // 1 inch = 0.0254 meters
      heightInMeters = totalInches * 0.0254;
      // 1 lb = 0.45359237 kg
      weightInKg = lbs * 0.45359237;
    }

    if (heightInMeters <= 0 || weightInKg <= 0) return null;

    const bmi = weightInKg / (heightInMeters * heightInMeters);
    const roundedBmi = parseFloat(bmi.toFixed(1));

    // Ideal healthy weight range (BMI 18.5 to 24.9)
    const minHealthyKg = 18.5 * (heightInMeters * heightInMeters);
    const maxHealthyKg = 24.9 * (heightInMeters * heightInMeters);

    let category = "";
    let categoryColor = "";
    let categoryBadgeBg = "";
    let description = "";

    if (roundedBmi < 18.5) {
      category = "Underweight";
      categoryColor = "text-sky-400";
      categoryBadgeBg = "bg-sky-500/15 border-sky-500/40 text-sky-400";
      description = "Your BMI suggests you may be under typical healthy weight. Focus on nutrient-rich fuel and progressive resistance strength training.";
    } else if (roundedBmi <= 24.9) {
      category = "Normal Weight";
      categoryColor = "text-emerald-400";
      categoryBadgeBg = "bg-emerald-500/15 border-emerald-500/40 text-emerald-400";
      description = "Great job! Your BMI falls within the standard healthy adult weight range. Maintain strength, cardio conditioning, and healthy habits.";
    } else if (roundedBmi <= 29.9) {
      category = "Overweight";
      categoryColor = "text-[#ff5500]";
      categoryBadgeBg = "bg-[#ff5500]/15 border-[#ff5500]/40 text-[#ff5500]";
      description = "Your BMI is in the overweight range. Regular workouts and cardiovascular activity can support healthy recomposition.";
    } else {
      category = "Obesity";
      categoryColor = "text-rose-400";
      categoryBadgeBg = "bg-rose-500/15 border-rose-500/40 text-rose-400";
      description = "Your BMI is in the obesity category. Consistent physical movement and guided training can greatly enhance long-term metabolic health.";
    }

    // Gauge needle percentage (clamp 10 to 40 scale)
    const gaugePercent = Math.min(Math.max(((roundedBmi - 15) / (35 - 15)) * 100, 2), 98);

    return {
      bmi: roundedBmi,
      category,
      categoryColor,
      categoryBadgeBg,
      description,
      gaugePercent,
      heightInMeters,
      idealMinWeight: unitSystem === "metric" ? `${minHealthyKg.toFixed(1)} kg` : `${(minHealthyKg * 2.20462).toFixed(1)} lbs`,
      idealMaxWeight: unitSystem === "metric" ? `${maxHealthyKg.toFixed(1)} kg` : `${(maxHealthyKg * 2.20462).toFixed(1)} lbs`,
    };
  }, [unitSystem, heightCm, weightKg, heightFeet, heightInches, weightLbs]);

  return (
    <section id="bmi-calculator" className="py-24 bg-[#0d0e12] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff5500]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff5500]/15 border border-[#ff5500]/30 text-[#ff5500] rounded-sm text-xs font-black uppercase tracking-wider font-heading mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Health Tool</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4">
            KNOW YOUR <span className="text-[#ff5500]">BMI</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Body Mass Index (BMI) is a practical screening metric calculated from height and weight. Use this interactive calculator to understand where you stand and set realistic workout goals.
          </p>
        </div>

        {/* Calculator Card Container */}
        <div className="max-w-4xl mx-auto bg-[#14151c] border border-[#272935] rounded-xl shadow-2xl overflow-hidden">
          {/* Top Control Bar: Unit Toggle & Reset */}
          <div className="px-6 py-4 bg-[#181a23] border-b border-[#272935] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Measurement System:
              </span>
              <div className="flex items-center bg-[#101116] p-1 rounded-md border border-[#2b2d39]">
                <button
                  type="button"
                  onClick={() => setUnitSystem("metric")}
                  className={`px-3 py-1 text-xs font-bold rounded transition-colors ${
                    unitSystem === "metric"
                      ? "bg-[#ff5500] text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Metric (cm, kg)
                </button>
                <button
                  type="button"
                  onClick={() => setUnitSystem("imperial")}
                  className={`px-3 py-1 text-xs font-bold rounded transition-colors ${
                    unitSystem === "imperial"
                      ? "bg-[#ff5500] text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Imperial (ft/in, lbs)
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={resetCalculator}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white bg-[#1f212b] hover:bg-[#272936] rounded transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Values</span>
            </button>
          </div>

          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls Column */}
            <div className="lg:col-span-6 space-y-6">
              {unitSystem === "metric" ? (
                <>
                  {/* Height (cm) */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="height-cm" className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                        Height (Centimetres)
                      </label>
                      <span className="text-sm font-bold text-[#ff5500]">{heightCm || 0} cm</span>
                    </div>
                    <input
                      id="height-cm"
                      type="number"
                      min="90"
                      max="250"
                      value={heightCm}
                      onChange={(e) => setHeightCm(e.target.value)}
                      placeholder="e.g. 172"
                      className="w-full px-4 py-3 bg-[#0e0f14] border border-[#2b2d39] focus:border-[#ff5500] focus:outline-none rounded text-white text-base font-semibold"
                    />
                    <input
                      type="range"
                      min="120"
                      max="220"
                      value={heightCm || 170}
                      onChange={(e) => setHeightCm(e.target.value)}
                      className="w-full mt-2 accent-[#ff5500] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                      <span>120 cm</span>
                      <span>170 cm</span>
                      <span>220 cm</span>
                    </div>
                  </div>

                  {/* Weight (kg) */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="weight-kg" className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                        Weight (Kilograms)
                      </label>
                      <span className="text-sm font-bold text-[#ff5500]">{weightKg || 0} kg</span>
                    </div>
                    <input
                      id="weight-kg"
                      type="number"
                      min="30"
                      max="250"
                      value={weightKg}
                      onChange={(e) => setWeightKg(e.target.value)}
                      placeholder="e.g. 68"
                      className="w-full px-4 py-3 bg-[#0e0f14] border border-[#2b2d39] focus:border-[#ff5500] focus:outline-none rounded text-white text-base font-semibold"
                    />
                    <input
                      type="range"
                      min="40"
                      max="140"
                      value={weightKg || 70}
                      onChange={(e) => setWeightKg(e.target.value)}
                      className="w-full mt-2 accent-[#ff5500] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                      <span>40 kg</span>
                      <span>80 kg</span>
                      <span>140 kg</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Height (feet and inches) */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                      Height (Feet & Inches)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-[11px] text-neutral-400 mb-1">Feet</div>
                        <input
                          type="number"
                          min="3"
                          max="8"
                          value={heightFeet}
                          onChange={(e) => setHeightFeet(e.target.value)}
                          placeholder="Feet"
                          className="w-full px-4 py-3 bg-[#0e0f14] border border-[#2b2d39] focus:border-[#ff5500] focus:outline-none rounded text-white text-base font-semibold"
                        />
                      </div>
                      <div>
                        <div className="text-[11px] text-neutral-400 mb-1">Inches</div>
                        <input
                          type="number"
                          min="0"
                          max="11"
                          value={heightInches}
                          onChange={(e) => setHeightInches(e.target.value)}
                          placeholder="Inches"
                          className="w-full px-4 py-3 bg-[#0e0f14] border border-[#2b2d39] focus:border-[#ff5500] focus:outline-none rounded text-white text-base font-semibold"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Weight (lbs) */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="weight-lbs" className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                        Weight (Pounds)
                      </label>
                      <span className="text-sm font-bold text-[#ff5500]">{weightLbs || 0} lbs</span>
                    </div>
                    <input
                      id="weight-lbs"
                      type="number"
                      min="60"
                      max="400"
                      value={weightLbs}
                      onChange={(e) => setWeightLbs(e.target.value)}
                      placeholder="e.g. 150"
                      className="w-full px-4 py-3 bg-[#0e0f14] border border-[#2b2d39] focus:border-[#ff5500] focus:outline-none rounded text-white text-base font-semibold"
                    />
                    <input
                      type="range"
                      min="80"
                      max="300"
                      value={weightLbs || 150}
                      onChange={(e) => setWeightLbs(e.target.value)}
                      className="w-full mt-2 accent-[#ff5500] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                      <span>80 lbs</span>
                      <span>180 lbs</span>
                      <span>300 lbs</span>
                    </div>
                  </div>
                </>
              )}

              {/* Formula & Privacy Guarantee */}
              <div className="pt-4 border-t border-[#20222c] space-y-2 text-xs text-neutral-400">
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <Info className="w-3.5 h-3.5 text-[#ff5500]" />
                  <span>Formula: <code>BMI = weight(kg) / (height(m))²</code></span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Calculated 100% locally in your browser. Zero data transmission.</span>
                </div>
              </div>
            </div>

            {/* Results Display Column */}
            <div className="lg:col-span-6 bg-[#0e0f14] border border-[#282a36] rounded-lg p-6 flex flex-col justify-between">
              {calculation ? (
                <div className="space-y-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center justify-between">
                    <span>Your Calculated BMI Result</span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-black uppercase font-heading bg-[#1c1d27] border border-[#2e303d] text-neutral-200">
                      Standard Adult Scale
                    </span>
                  </div>

                  {/* Main Value Display */}
                  <div className="flex items-baseline gap-3">
                    <span className="font-heading text-6xl sm:text-7xl font-black text-white tracking-tight">
                      {calculation.bmi}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs text-neutral-400 uppercase tracking-wider">Category</span>
                      <span
                        className={`inline-block px-3 py-1 rounded text-xs font-extrabold uppercase font-heading border ${calculation.categoryBadgeBg}`}
                      >
                        {calculation.category}
                      </span>
                    </div>
                  </div>

                  {/* Visual BMI Gauge Meter */}
                  <div>
                    <div className="flex justify-between text-[10px] font-bold text-neutral-400 uppercase mb-1">
                      <span>Under (&lt;18.5)</span>
                      <span>Normal (18.5-24.9)</span>
                      <span>Over (25-29.9)</span>
                      <span>Obese (30+)</span>
                    </div>
                    {/* Visual bar segments */}
                    <div className="relative h-3 w-full rounded-full overflow-hidden bg-[#1e202a] flex">
                      <div className="w-[17.5%] bg-sky-400" title="Underweight (< 18.5)" />
                      <div className="w-[32%] bg-emerald-500" title="Normal (18.5 - 24.9)" />
                      <div className="w-[25%] bg-[#ff5500]" title="Overweight (25 - 29.9)" />
                      <div className="w-[25.5%] bg-rose-500" title="Obese (30+)" />
                    </div>
                    {/* Needle Indicator */}
                    <div className="relative h-4 w-full">
                      <div
                        className="absolute -top-1 transform -translate-x-1/2 flex flex-col items-center transition-all duration-300"
                        style={{ left: `${calculation.gaugePercent}%` }}
                      >
                        <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[6px] border-b-white" />
                        <span className="text-[10px] font-black text-white bg-neutral-800 px-1 rounded shadow">
                          ▲ {calculation.bmi}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description & Target Guidance */}
                  <p className="text-xs text-neutral-300 leading-relaxed bg-[#15161f] p-3.5 rounded border border-[#252733]">
                    {calculation.description}
                  </p>

                  <div className="p-3 bg-[#171822] rounded border border-[#262835] text-xs">
                    <span className="text-neutral-400 block mb-1">Healthy Weight Range for your height:</span>
                    <span className="text-white font-bold text-sm">
                      {calculation.idealMinWeight} – {calculation.idealMaxWeight}
                    </span>
                  </div>

                  {/* Action CTA to consult gym */}
                  <div className="pt-2">
                    <a
                      href={getWhatsAppUrl(
                        `Hello Lucky Gym! I used your website BMI calculator. My BMI is ${calculation.bmi} (${calculation.category}). I would like guidance on training at your gym.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#ff5500] hover:bg-[#ff6a1a] text-white text-xs font-black uppercase tracking-wider font-heading rounded transition-all shadow-[0_0_15px_rgba(255,85,0,0.3)]"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Discuss Your Fitness Plan On WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center text-neutral-400">
                  <AlertCircle className="w-8 h-8 text-[#ff5500] mb-2" />
                  <p className="text-sm font-semibold text-white mb-1">Please enter valid measurements</p>
                  <p className="text-xs">Height and weight must be greater than zero.</p>
                </div>
              )}
            </div>
          </div>

          {/* Health Disclaimer Notice (Mandatory requirement) */}
          <div className="px-6 py-4 bg-[#111218] border-t border-[#22242e] flex items-start gap-2.5 text-neutral-400 text-xs">
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-neutral-300">Health Disclaimer:</strong> BMI is a general screening measure, not a diagnosis. Adult BMI categories should not be used to interpret BMI in children and teenagers. Athletic muscle mass, bone density, and individual health factors are not fully captured by BMI alone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
