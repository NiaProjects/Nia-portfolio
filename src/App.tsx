import useHandleRoutes from "./routes/routes";

function App() {
  const { routes } = useHandleRoutes();
  return <> {routes}</>;
}

export default App;
