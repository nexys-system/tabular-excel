import * as Multiple from './multiple';

test('to vtt filename', () => {
  expect(Multiple.nameToVtt('blabla.srt')).toEqual('blabla.vtt');
})