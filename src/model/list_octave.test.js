import listOctave from './list_octave';

test('correctly lists all notes starting from A', () => {
    expect(listOctave('A'))
        .toEqual(['A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']);
});

test('correctly lists all notes starting from C', () => {
    expect(listOctave('C'))
        .toEqual(['C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']);
});

test('correctly lists all notes starting from (and including) C', () => {
    expect(listOctave('C', 0))
        .toEqual(['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']);
});
