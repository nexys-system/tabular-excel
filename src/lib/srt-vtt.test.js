import fs from 'fs';
import * as SrtToVtt from './srt-vtt';

test('lineToRows', () => {
  const t = `1
00:00:10,800 --> 00:00:13,160
TSS ACADEMY
Introduction

2
00:00:14,800 --> 00:00:18,280
Hello and welcome to the TSS Academy.

3
00:00:18,360 --> 00:00:23,800
My name is Beat Erb and I'm the world-wide
leader of the TSS business partner channel.

4
00:00:23,880 --> 00:00:27,080
This is the first module of the TSS Academy`;

  const lines = t.split('\n');

  const e = [
    {
      timestamp: '00:00:10,800 --> 00:00:13,160',
      content: ['TSS ACADEMY', 'Introduction'],
      idx: 1
    },
    {
      timestamp: '00:00:14,800 --> 00:00:18,280',
      content: ['Hello and welcome to the TSS Academy.'],
      idx: 2
    },
    {
      timestamp: '00:00:18,360 --> 00:00:23,800',
      content: ['My name is Beat Erb and I\'m the world-wide', 'leader of the TSS business partner channel.'],
      idx: 3
    },
    {
      timestamp: '00:00:23,880 --> 00:00:27,080',
      content: ['This is the first module of the TSS Academy'],
      idx: 4
    },
  ]

  expect(SrtToVtt.srtToJson(lines)).toEqual(e);
});

test('jsonUnitToVtt', () => {
  const j = {
    timestamp: '00:00:10,800 --> 00:00:13,160',
    content: ['TSS ACADEMY', 'Introduction'],
    idx: 1
  };

  const e = `
00:00:10,800 --> 00:00:13,160


TSS ACADEMY
Introduction`;
  const r = SrtToVtt.jsonUnitToVtt(j)

  expect(r).toEqual(e);
})

test('jsonUnitToVtt', () => {
  const j = [{
    timestamp: '00:00:10,800 --> 00:00:13,160',
    content: ['TSS ACADEMY', 'Introduction'],
    idx: 1
  }];

  const e = `WEBVTT

00:00:10,800 --> 00:00:13,160


TSS ACADEMY
Introduction`;
  const r = SrtToVtt.jsonToVtt(j)

  expect(r).toEqual(e);
});

test('direct from file', () => {
  const srtContent = fs.readFileSync('/Users/johanboissard/Downloads/1000_10 Academy Welcome 200106.srt', 'utf-8');
  const vttContent = fs.readFileSync('/Users/johanboissard/Downloads/1000_10 Academy Welcome 200106.vtt', 'utf-8');

  const j = SrtToVtt.srtToJson(srtContent.split('\r\n'));
  const r = SrtToVtt.jsonToVtt(j);

  const v1 = vttContent.split('\r\n').pop();
  const v2 = r.split('\n').pop(); //.slice(0, 100);

  expect(v1).toEqual(v2);
})