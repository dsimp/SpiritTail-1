export const getColorForIngredient = (ingredient) => {
  const name = ingredient.toLowerCase();
  
  // Spirits
  if (name.includes('vodka') || name.includes('gin') || name.includes('tequila') || name.includes('rum') || name.includes('water')) return 'rgba(255, 255, 255, 0.2)'; // Clear
  if (name.includes('whiskey') || name.includes('bourbon') || name.includes('scotch') || name.includes('brandy') || name.includes('cognac')) return 'rgba(196, 113, 53, 0.8)'; // Amber
  if (name.includes('vermouth')) return 'rgba(230, 230, 210, 0.4)'; // Pale yellow
  if (name.includes('kahlua') || name.includes('coffee')) return 'rgba(77, 44, 32, 0.9)'; // Dark Brown
  if (name.includes('baileys') || name.includes('irish cream')) return 'rgba(219, 195, 160, 0.9)'; // Creamy

  // Mixers/Juices
  if (name.includes('lime') || name.includes('mint')) return 'rgba(50, 205, 50, 0.7)'; // Green
  if (name.includes('lemon') || name.includes('sour')) return 'rgba(255, 250, 205, 0.8)'; // Yellow
  if (name.includes('orange') || name.includes('cointreau') || name.includes('triple sec')) return 'rgba(255, 165, 0, 0.7)'; // Orange
  if (name.includes('blue') || name.includes('curacao')) return 'rgba(0, 191, 255, 0.7)'; // Blue
  if (name.includes('grenadine') || name.includes('cranberry') || name.includes('cherry') || name.includes('wine') || name.includes('port')) return 'rgba(220, 20, 60, 0.8)'; // Red
  if (name.includes('cola')) return 'rgba(40, 10, 10, 0.9)'; // Dark Cola
  if (name.includes('milk') || name.includes('cream')) return 'rgba(255, 255, 255, 0.95)'; // White

  // Default
  return 'rgba(200, 200, 200, 0.3)';
};
