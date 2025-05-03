import ImageComponent from "./ImageComponent";
import VideoComponent from "./VideoComponent";
import ParagraphsComponent from "./ParagraphsComponent";
import ListsComponent from "./ListsComponent";
import  "../styles/App.css"

function App() {
  return (
    <div className="App">
      <ImageComponent/>
      <VideoComponent/>
      <ParagraphsComponent header='Paragraph One' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam architecto a? Doloremque illo, perspiciatis pariatur excepturi quisquam enim eius, alias corrupti ex rerum dignissimos.' />
      <ParagraphsComponent header='Paragraph Two' text ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam architecto a? Doloremque illo, perspiciatis pariatur excepturi quisquam enim eius.'/>
      <ParagraphsComponent header='Paragraph Three' text ='About ADFGJJHLKKLLLLjddddddddddddddddddddddddddddddddddddddddduuuuuuuuuuuL.'/>
      <ListsComponent/>
    </div>
  );
}

export default App;
