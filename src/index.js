// @flow

function foo(x: ? number): number {
  if (x) {
    return x;
  }
  return 1;
}

foo(1);