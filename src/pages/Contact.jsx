


export default function Contact(){
    return(<>
    <section>
        <div className="mt-18 mb-5 p-5 md:p-10 flex flex-col gap-2 lg:gap-3 ">
          <div className="flex items-center space-x-1 px-2 py-1 shadow  md:text-xs xl:text-sm rounded-3xl">
            <span className="w-2 h-2 rounded-full bg-purple-400"></span>
            <span className="text-purple-400 font-medium">Get In Touch</span>
          </div>
          <div className="space-x-4">
            <span className="text-5xl md:text-4xl lg:text-5xl xl:text-7xl font-bold">
              Contact
            </span>
            <span className="text-5xl md:text-4xl lg:text-5xl xl:text-7xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </div>
          <h3 className="md:w-[46vw] lg:w-[40vw] text-gray-400 md:text-xs lg:text-sm xl:text-base">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </h3>
        </div>
      </section>
    </>)
}