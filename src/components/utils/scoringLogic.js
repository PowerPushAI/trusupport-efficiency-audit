export const calculateSLA = (data) => {
  const { firstResponse, resolutionTime, supportHours } = data;

  // Weights (Simplified for MVP)
  // Industry standard: First Response < 1 hour is 'A', > 24 hours is 'F'
  let scoreValue = 100;
  if (firstResponse > 60) scoreValue -= 20;
  if (firstResponse > 240) scoreValue -= 30;
  if (resolutionTime > 1440) scoreValue -= 20; // > 24 hours

  let grade = "A";
  if (scoreValue < 90) grade = "B";
  if (scoreValue < 75) grade = "C";
  if (scoreValue < 60) grade = "D";
  if (scoreValue < 40) grade = "F";

  // Estimated Revenue/User Loss Logic
  // Slow support leads to churn (Industry avg: ~15-20% higher churn for slow response)
  const lossPercentage =
    firstResponse > 60 ? ((firstResponse / 60) * 1.5).toFixed(1) : 0.5;

  return { grade, scoreValue, lossPercentage };
};

export const analyzeMetrics = (minutes) => {
  const { frt, resolution } = minutes;

  // 1. Scoring (Lower is better, so we subtract from 100)
  let score = 100;

  // Deduct for First Response Time (FRT)
  if (frt > 15) score -= 10;
  if (frt > 60) score -= 20;
  if (frt > 240) score -= 30;

  // Deduct for Resolution Time
  if (resolution > 120) score -= 10;
  if (resolution > 480) score -= 20;

  // 2. Determine Grade
  let grade, color;
  if (score >= 90) {
    grade = "A";
    color = "text-emerald-500";
  } else if (score >= 75) {
    grade = "B";
    color = "text-blue-500";
  } else if (score >= 60) {
    grade = "C";
    color = "text-yellow-500";
  } else {
    grade = "F";
    color = "text-red-500";
  }

  // 3. Loss Calculation (Hypothetical ROI logic)
  // Industry rule: Every hour of delay increases churn by ~1.2%
  const churnRisk = ((frt / 60) * 1.2).toFixed(1);
  const potentialSavings = (frt * 0.85).toFixed(0); // Minutes saved with AI

  return { grade, score, color, churnRisk, potentialSavings };
};
