import store from "../state";
import getCumulativeDuration from "./getCumulativeDuration";
import millisecondsToTime from "./millisecondsToTime";
import getCurrentDateTime from "./getCurrentDateTime";

const calculateTimeOnPage = (startTime, prefix, prefix2) => {
  const hasStorage = store.getState().hasStorage;
  const identifier = prefix + "DurationCumulative";
  const identifier2 = "set" + prefix2 + "DurationCumulative";
  const identifier3 = "set" + prefix2 + "DurationFormatted";
  const identifier4 = "set" + prefix2 + "LastAccess";

  if (hasStorage) {
    // const durationCumulative = store.getState()[identifier];
    let durationCumulative = sessionStorage.getItem(identifier) || 0;

    const newDurationCumulative = getCumulativeDuration(
      startTime,
      +durationCumulative
    );
    // send to state
    sessionStorage.setItem(identifier, newDurationCumulative);

    // send last access time to state
    const dateString = getCurrentDateTime();
    sessionStorage.setItem(identifier4, dateString);

    // send to memory
    const formattedDuration = millisecondsToTime(newDurationCumulative);
    sessionStorage.setItem(identifier3, formattedDuration);
  } else {
    // no sessionStorage
    const durationCumulative = store.getState()[identifier];
    const newDurationCumulative = getCumulativeDuration(
      startTime,
      durationCumulative
    );
    store.dispatch[identifier2](newDurationCumulative);

    // send last access time to state
    const dateString = getCurrentDateTime();
    store.dispatch[identifier4](dateString);

    const formattedDuration = millisecondsToTime(newDurationCumulative);
    store.dispatch[identifier3](formattedDuration);
  }
};

export default calculateTimeOnPage;
