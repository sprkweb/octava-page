export const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export const standardTuning = ['E', 'B', 'G', 'D', 'A', 'E'];

// Feel free to add something here via pull request
export const shapes = {
    'Chord': [
        {
            name: 'Major triad',
            semitones: [0, 4, 7]
        },

        {
            name: 'Minor triad',
            semitones: [0, 3, 7]
        },

        {
            name: 'Fifth chord (power chord)',
            semitones: [0, 7]
        },

        {
            name: 'Augmented triad',
            semitones: [0, 4, 8]
        },

        {
            name: 'Diminished triad',
            semitones: [0, 3, 6]
        },

        {
            name: 'Suspended second chord',
            semitones: [0, 2, 7]
        },

        {
            name: 'Suspended fourth chord',
            semitones: [0, 5, 7]
        },

        {
            name: 'Major sixth chord',
            semitones: [0, 4, 7, 9]
        },

        {
            name: 'Dominant seventh chord',
            semitones: [0, 4, 7, 10]
        },

        {
            name: 'Major seventh chord',
            semitones: [0, 4, 7, 11]
        },

        {
            name: 'Minor sixth chord',
            semitones: [0, 3, 7, 9]
        },

        {
            name: 'Minor seventh chord',
            semitones: [0, 3, 7, 10]
        },

        {
            name: 'Minor-major seventh chord',
            semitones: [0, 3, 7, 11]
        },

        {
            name: 'Augmented seventh chord',
            semitones: [0, 4, 8, 10]
        },

        {
            name: 'Diminished seventh chord',
            semitones: [0, 3, 6, 9]
        },

        {
            name: 'Half-diminished seventh chord',
            semitones: [0, 3, 6, 10]
        },
    ],
    'Scale': [
        {
            name: 'Major (Ionian)',
            semitones: [0, 2, 4, 5, 7, 9, 11]
        },

        {
            name: 'Natural minor (Aeolian)',
            semitones: [0, 2, 3, 5, 7, 8, 10]
        },

        {
            name: 'Dorian',
            semitones: [0, 2, 3, 5, 7, 9, 10]
        },

        {
            name: 'Phrygian',
            semitones: [0, 1, 3, 5, 7, 8, 10]
        },

        {
            name: 'Lydian',
            semitones: [0, 2, 4, 6, 7, 9, 11]
        },

        {
            name: 'Mixolydian',
            semitones: [0, 2, 4, 5, 7, 9, 10]
        },

        {
            name: 'Locrian',
            semitones: [0, 1, 3, 5, 6, 8, 10]
        },

        {
            name: 'Major pentatonic',
            semitones: [0, 2, 4, 7, 9]
        },

        {
            name: 'Egyptian (suspended) pentatonic',
            semitones: [0, 2, 5, 7, 10]
        },

        {
            name: 'Blues minor pentatonic',
            semitones: [0, 3, 5, 8, 10]
        },

        {
            name: 'Blues major pentatonic',
            semitones: [0, 2, 5, 7, 9]
        },

        {
            name: 'Minor pentatonic',
            semitones: [0, 3, 5, 7, 10]
        },
    ]
};
