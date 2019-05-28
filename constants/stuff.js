const scales = [
  { name: 'Major', pattern: [2, 2, 1, 2, 2, 2, 1] },
  { name: 'Natural Minor', pattern: [2, 1, 2, 2, 1, 2, 2] },
  { name: 'Harmonic Minor', pattern: [2, 1, 2, 2, 1, 3, 1] },
  { name: 'Melodic Minor', pattern: [2, 1, 2, 2, 2, 2, 1] },
  { name: 'Melodic Minor Descending', pattern: [2, 1, 2, 2, 1, 2, 2] },
  { name: 'Blues', pattern: [3, 2, 1, 1, 3, 2] }
]

const tunings = [
  { name: 'Standard', notes: ['E', 'A', 'D', 'G', 'B', 'E'] },
  { name: 'DADGAD', notes: ['D', 'A', 'D', 'G', 'A', 'D'] }
]

const notes = ['Ab', 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G']

export { scales, tunings, notes }
