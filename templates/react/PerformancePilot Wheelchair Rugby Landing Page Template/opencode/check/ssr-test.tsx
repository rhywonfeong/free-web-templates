import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Routes, Route } from "react-router-dom";
import SiteHeader from "./src/components/SiteHeader";
import SiteFooter from "./src/components/SiteFooter";
import Home from "./src/pages/Home";
import Work from "./src/pages/Work";
import Portfolio from "./src/pages/Portfolio";

const routes: Record<string, JSX.Element> = { "/": <Home />, "/work": <Work />, "/portfolio": <Portfolio /> };
for (const [path, el] of Object.entries(routes)) {
  const html = renderToString(
    <StaticRouter location={path}>
      <SiteHeader />
      <main><Routes><Route path={path} element={el} /></Routes></main>
      <SiteFooter />
    </StaticRouter>
  );
  const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1]?.replace(/<[^>]+>/g, "");
  const h1count = (html.match(/<h1/g) || []).length;
  const imgs = (html.match(/<img[^>]*src="([^"]+)"/g) || []).length;
  console.log(path, "| bytes:", html.length, "| h1:", JSON.stringify(h1), "| h1 count:", h1count, "| imgs:", imgs, "| supabase hero:", html.includes("72632bb7"));
}
