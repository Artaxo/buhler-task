import { defer, expand, map, timer } from 'rxjs';

export function createMinuteClock() {
  return defer(() =>
    timer(getDelayToNextMinute()).pipe(
      expand(() => timer(getDelayToNextMinute())),
      map(() => new Date()),
    ),
  );
}

function getDelayToNextMinute(): number {
  const now = new Date();
  return 60_000 - (now.getSeconds() * 1_000 + now.getMilliseconds());
}
