export default function listOctave(firstNote, notes, startWith = 1) {
    let octave = [];
    let start = notes.indexOf(firstNote);
    if (start == -1) start = 0;
    for (let i = startWith; i < notes.length; i++) {
        let index = (start + i) % notes.length;
        octave.push(notes[index]);
    }
    return octave;
}