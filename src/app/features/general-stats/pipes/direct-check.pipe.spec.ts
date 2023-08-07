import { DirectCheckPipe } from './direct-check.pipe';

describe('DirectCheckPipe', () => {
  it('create an instance', () => {
    const pipe = new DirectCheckPipe();
    expect(pipe).toBeTruthy();
  });
});
