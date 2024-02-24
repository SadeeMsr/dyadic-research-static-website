import Slider from "./Slider";

const galleryImgs = [
  {
    id: 1,
    title:"Need title here",
    subtitle: "Subtitle",
    imgPath:"/assets/gallery-01.jpg"
  },
  {
    id: 2,
    title:"Need title here",
    subtitle: "Subtitle",
    imgPath:"/assets/gallery-02.jpg"
  },
  {
    id: 3,
    title:"Need title here",
    subtitle: "Subtitle",
    imgPath:"/assets/gallery-03.jpg"
  },
  {
    id: 4,
    title:"Need title here",
    subtitle: "Subtitle",
    imgPath:"/assets/gallery-04.jpg"
  },
  {
    id: 5,
    title:"Need title here",
    subtitle: "Subtitle",
    imgPath:"/assets/gallery-05.jpg"
  },
  {
    id: 6,
    title:"Need title here",
    subtitle: "Subtitle",
    imgPath:"/assets/gallery-06.jpg"
  },
  
]




export default function OurWork() {
  return (
    <div className="h-[50rem] md:px-20 px-8">
        <div className="py-4 border-b border-slate-300 mt-20">
            <h1 className="text-slate-600 text-sm">GALLERY</h1>
        </div>
        <div>
          <h1 className="text-5xl pt-10">Explore Our Gallery</h1>
        </div>
        <div className="mt-10 ">
           <Slider galleryImgs={galleryImgs} />
        </div>
    </div>
  )
}
