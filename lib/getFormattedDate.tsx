import React from 'react';

export default function getFormattedDate(dateString: string): JSX.Element {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
  const year = date.getFullYear();

  // Get the ordinal suffix for the day
  const ordinalSuffix = getOrdinalSuffix(day);

  // Return formatted date with ordinal suffix in a <sup> tag
  return (
    <>
      {month} {day}<sup>{ordinalSuffix}</sup>, {year}
    </>
  );
}

// Helper function to get the ordinal suffix for a given day
function getOrdinalSuffix(day: number): string {
  if (day > 3 && day < 21) return 'th'; // covers 11th - 19th
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}
