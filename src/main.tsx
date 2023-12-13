import { ConfigProvider } from "antd";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./i18n/i18n";
import "./index.css";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#00483d",
        borderRadius: 2,
        // colorBgContainer: "#f6ffed",
      },
    }}
  >
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ConfigProvider>
);
