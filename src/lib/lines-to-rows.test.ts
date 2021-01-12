import * as LineToRows from './lines-to-rows';

const lines = [
    'd1',
    'd2',
    'd3',
    'd4',
    'd5',
    'd6',
    'd7',
    'd8',
    'd9',
    'd10'
]

test('line to rows', () => {
  const mapAttributes = {1: 'd1', 2: 'd2', 3: 'd3', 4: 'd4'};

  const a = LineToRows.lineToRows(lines, mapAttributes, 5);
  const e = [
    {'d1': 'd1', 'd2': 'd2', 'd3': 'd3', 'd4': 'd4'},
    {'d1': 'd6', 'd2': 'd7', 'd3': 'd8', 'd4': 'd9'}
  ];

  expect(a).toEqual(e);
})