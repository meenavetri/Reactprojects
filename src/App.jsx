import menus from './components/tree-view/data'
import Accordian from './components/accordian'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/Load-more-products'
import QRCodeGenertator from './components/QRCodeGenerator'
import RandomColor from './components/randomcolorgenerator'
import TreeView from './components/tree-view'
import Rating from './components/rating'
import LightDarkMode from './components/ThemeChange'

function App() {
  return (
    <>
     <Accordian/>
    <ImageSlider
    url={"https://picsum.photos/v2/list"}
    page={"1"}
    limit={"10"}
    />
    <LoadMoreData/>
    <QRCodeGenertator/>
    <RandomColor/>
    <TreeView menus={menus}/>
    <Rating/>
    <LightDarkMode/>
    </>
    </>
  )
}

export default App
