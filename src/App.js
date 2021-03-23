import AddToCart from "./code/8.add-to-cart";
import AlphaNumericPass from "./code/4.alpha-numeric-pass";
import CharacterCounter from "./code/2.character-counter";
import Counter from "./code/1.counter";
import { DarkMode } from "./code/12.dark-mode";
import DisableButton from "./code/5.disbale-submit";
import FigmaTool from "./code/7.figma";
import { LikeList } from "./code/13.like-in-list";
import PasswordCheck from "./code/3.password-check";
import ShowPassword from "./code/6.show-password";
import SwitchTab from "./code/9.switch-tabs";
import { ToastHider } from "./code/10.toast";
import { TodoApp } from "./code/11.todo";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />

      <CharacterCounter />
      <PasswordCheck />
      <AlphaNumericPass />
      <DisableButton />
      <ShowPassword />
      <FigmaTool />
      <AddToCart />
      <SwitchTab />
      <ToastHider />
      <TodoApp />
      <DarkMode />
      <LikeList />
    </div>
  );
}
