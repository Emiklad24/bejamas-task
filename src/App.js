import React from "react";
import "./App.css";
import { ReactQueryDevtools } from "react-query/devtools";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Gallery from "./components/gallery/Gallery";
import Pagination from "./components/pagination/Pagination";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./util/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Navbar />
        <Hero />
        <Gallery />
        <Pagination />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
