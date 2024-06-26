export function annualizeHourlyRate(hourlyRatePercentage: number): number {
    // Convert percentage to decimal
    const hourlyRate = hourlyRatePercentage / 100;
    
    // Calculate number of hours in a year
    const hoursInYear = 365 * 24;
    
    // Calculate annualized rate
    const annualizedRate = Math.pow(1 + hourlyRate, hoursInYear) - 1;
    
    // Convert back to percentage
    const annualizedRatePercentage = annualizedRate * 100;
    
    return annualizedRatePercentage;
  }