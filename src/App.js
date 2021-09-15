import Shrines from "./Shrines"
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Shrines />
    </QueryClientProvider>
  );
}

export default App;
