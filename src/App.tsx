import Button, { ButtonSize, ButtonType } from "./components/button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0} mode="vertical">
          <MenuItem index={0}>cool link</MenuItem>
          <MenuItem index={1} disabled>cool link 2</MenuItem>
          <MenuItem index={2}>cool link 3</MenuItem>
        </Menu>
        <Button>hello</Button>
        <Button disabled>disabled button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Primary
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          Danger
        </Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com">
          Baidu
        </Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com" disabled>
          Baidu
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
