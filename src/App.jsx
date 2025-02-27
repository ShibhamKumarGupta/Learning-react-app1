import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import SideBars from "./components/SideBars";
import Pagination from "./components/Pagination";
import "./App.css";

function App() {
  const TopBarData = ["One", "Two", "Three", "Four", "Five"];
  const TopBarTitle = ["Yeti Agency", "Yeti Agency 2.0"];
  const Heading = {
    head: "Our Blog"
  };
  const BlogData = [
    {
      blogtitle: "Awesome blog post title",
      blogdate: "3/6/2015",
      image: "https://dummyimage.com/850x350/000/fff",
      altimage: "Blog Post Image",
      desc: "Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.",
      author: "Author: Mike Mikers",
      comments: "Comments: 3",
    },
    {
      blogtitle: "Awesome blog post title",
      blogdate: "3/6/2015",
      image: "https://dummyimage.com/850x350/000/fff",
      altimage: "Blog Post Image",
      desc: "Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.",
      author: "Author: Mike Mikers",
      comments: "Comments: 3",
    },
  ];
  const Sidebartitle = ["Categories", "Author", "Another"];
  const SidebarData = ["Skyler", "Jesse", "Mike", "Holly"];
  const PageNum = [2, 3, 4, "...", 7, 8, 12, 13, "Next"];

  return (
    <>
      <TopBar topbarProps={TopBarData} topbarProps2={TopBarTitle} />
      <Header headingProps={Heading} />
      <div className="container">
        <div className="row">
          <Blogs blogProps={BlogData} />
          <SideBars barProps1={Sidebartitle} barProps2={SidebarData} />
        </div>
        <Pagination pageProps={PageNum} />
      </div>
    </>
  );
}

export default App;
