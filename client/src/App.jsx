import { Button, Container } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Container maxW='620px'>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/:username' element={<UserPage />} />
            <Route path='/:username/post/:postId' element={<PostPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
