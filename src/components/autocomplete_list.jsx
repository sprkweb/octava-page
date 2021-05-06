import React from 'react';

export default function AutocompleteList(p) {
    return <datalist id={p.id}>
        {p.list.map((note) =>
            <option value={note} key={note} />
        )}
    </datalist>;
}