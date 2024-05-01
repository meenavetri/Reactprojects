
import RandomColor from './components/randomcolorgenerator'
import Accordian from './components/accordian'
import Rating from './components/rating'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/Load-more-products'
import TreeView from './components/tree-view'
import menus from './components/tree-view/data'

function App() {
  return (
    <>
      <Accordian/>
      <RandomColor/>
      <Rating />
      <ImageSlider url={"https://picsum.photos/v2/list"} 
      page={'1'} limit={'10'}/>
      <LoadMoreData/>
      <TreeView menus={menus}/>
      <Rating/>
    <LightDarkMode/>
    </>
  )
}

export default App
