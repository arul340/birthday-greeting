import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "@/components/layout";
import Home from "@/pages/home";
import Coupons from "@/pages/coupons";
import Timeline from "@/pages/timeline";
import Gallery from "@/pages/gallery";

export const publicRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/coupons" element={<Coupons />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/gallery" element={<Gallery />} />
    </Route>
  )
);
