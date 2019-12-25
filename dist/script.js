var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

function listOctave(note) {
  var octave = [];
  var start = notes.indexOf(note);
  if (start == -1) start = 0;
  for (var i = 0; i < notes.length; i++) {
    var index = (start + i) % notes.length;
    octave.push(notes[index]);
  }
  return octave;
}

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      rootNote: 'E'
    };

    _this.setRootNote = _this.setRootNote.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'setRootNote',
    value: function setRootNote(event) {
      this.setState({ rootNote: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { 'class': 'form-inline' },
          React.createElement(
            'div',
            { 'class': 'form-group root-note-form' },
            React.createElement(
              'label',
              { 'for': 'rootNote' },
              'Root: '
            ),
            React.createElement('input', { type: 'text', id: 'rootNote',
              value: this.state.rootNote, onChange: this.setRootNote,
              'class': 'form-control form-control-sm' })
          )
        ),
        React.createElement(
          'div',
          { 'class': 'container guitar' },
          React.createElement(Row, { list: [].concat(_toConsumableArray(Array(notes.length).keys())) }),
          React.createElement(Row, { list: listOctave(this.state.rootNote) })
        )
      );
    }
  }]);

  return App;
}(React.Component);

function Row(params) {
  list = params.list;
  return React.createElement(
    'div',
    { 'class': 'row' },
    list.map(function (note) {
      return React.createElement(
        'div',
        { 'class': 'col' },
        React.createElement(
          'span',
          null,
          note
        )
      );
    })
  );
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));