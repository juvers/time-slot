import TimeSlot from "./containers/TimeSlot";

import "./App.css";

const fakeCountries = [
  {
    id: "ru",
    title: "6:00am",
    icon: "https://lipis.github.io/flag-icon-css/flags/4x3/ru.svg",
  },
  {
    id: "am",
    title: "7:00am",
    icon: "https://lipis.github.io/flag-icon-css/flags/4x3/am.svg",
  },
  {
    id: "az",
    title: "8:00am",
    icon: "https://lipis.github.io/flag-icon-css/flags/4x3/az.svg",
  },
  {
    id: "ro",
    title: "Румыния",
    icon: "https://lipis.github.io/flag-icon-css/flags/4x3/ro.svg",
  },
  {
    id: "rs",
    title: "Сербия",
    icon: "https://lipis.github.io/flag-icon-css/flags/4x3/rs.svg",
  },
  {
    id: "me",
    title: "Черногория",
    icon: "https://lipis.github.io/flag-icon-css/flags/4x3/me.svg",
  },
  {
    id: "at",
    title: "Австрия",
    icon: "https://lipis.github.io/flag-icon-css/flags/4x3/at.svg",
  },
  {
    id: "de",
    title: "Германия",
    icon: "https://lipis.github.io/flag-icon-css/flags/4x3/de.svg",
  },
  {
    id: "be",
    title: "Бельгия",
    icon: "https://lipis.github.io/flag-icon-css/flags/4x3/be.svg",
  },
];

function App() {
  return (
    <div className="App">
      <TimeSlot
        timeData={fakeCountries}
        onChange={(data) => console.log(data)}
      />
    </div>
  );
}

export default App;
