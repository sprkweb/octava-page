import React from "../../_snowpack/pkg/react.js";
export default function AutocompleteList(p) {
  return /* @__PURE__ */ React.createElement("datalist", {
    id: p.id
  }, p.list.map((note) => /* @__PURE__ */ React.createElement("option", {
    value: note,
    key: note
  })));
}
