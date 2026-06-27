export default function Skills() {
    const technologies=[
    {
        img:"src/assets/HTML.png",
        title:"HTML"
    },
    {
        img:"src/assets/CSS.png",
        title:"CSS"
    },
    {
        img:"src/assets/JS.png",
        title:"JavaScript"
    },
    {
        img:"src/assets/React.png",
        title:"React.js"
    },
    {
        img:"src/assets/Tailwind.png",
        title:"Tailwind CSS"
    },
    {
        img:"src/assets/Git.png",
        title:"Git"
    },
    {
        img:"src/assets/GitHub.png",
        title:"GitHub"
    },
    {
        img:"src/assets/VS.png",
        title:"VS Code"
    }
  ]
  return (
    <>
      <section>
        <div className="mt-18 mb-5 p-5 md:p-10 flex flex-col gap-2 lg:gap-3 ">
          <div className="flex items-center space-x-1 px-2 py-1 shadow  md:text-xs xl:text-sm rounded-3xl">
            <span className="w-2 h-2 rounded-full bg-purple-400"></span>
            <span className="text-purple-400 font-medium">What I Know</span>
          </div>
          <div className="space-x-4">
            <span className="text-5xl md:text-4xl lg:text-5xl xl:text-7xl font-bold">
              My
            </span>
            <span className="text-5xl md:text-4xl lg:text-5xl xl:text-7xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </div>
          <h3 className="md:w-[46vw] lg:w-[40vw] text-gray-400 md:text-xs lg:text-sm xl:text-base">
            Technologies and tools I use to build modern and responsive web
            applications.
          </h3>
        </div>
      </section>
      <section className="mt-10 px-4">
        <div className="flex flex-wrap gap-2 justify-evenly xl:justify-center py-4 ">
            {
            technologies.map((item)=>(
                <div className="flex flex-col gap-2 bg-gray border border-white/10 rounded-sm py-4 w-[20vw] md:w-[11vw] xl:w-[8vw] items-center">
            <img src={item.img} alt={item.title} className="h-[5vh] md:h-[3vh] xl:h-[4vh]" />
            <h1 className="text-xs lg:text-sm font-semibold">{item.title}</h1>
        </div>
            ))
        }
        </div>

      </section>
    </>
  );
}
