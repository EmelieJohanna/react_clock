import Clock from "./components/Clock";
import Timer from "./components/Timer";
function App() {
  return (
    <>
      <Clock timeZone="Europe/London" city="London" />
      <Clock timeZone="Asia/Seoul" city="Seoul" />
      <Timer duration={2 * 24 * 60 * 60 * 1000} />
      <Timer duration={1 * 12 * 40 * 1000} />
      <Timer duration={2} />
    </>
  );
}

export default App;
