import {Mail, Phone } from "lucide-react";
import { FaWhatsapp, FaGithub, FaLinkedin, } from "react-icons/fa";


export default function Contact(){
  const options = [
    {
      id: 1,
      icon: Mail,
      title: "Email",
      subtitle: "singhpushkarpss@gmail.com",
      link: "mailto:singhpushkarpss@gmail.com"
    },
    {
      id: 2,
      icon: Phone,
      title: "Phone",
      subtitle: "+91 62397 99932",
      link: "tel:+916239799932"
    },
    {
      id: 3,
      icon: FaWhatsapp,
      title: "WhatsApp",
      subtitle: "+91 62397 99932",
      link: "https:/wa.me/+916239799932",
    },
  ];

    return(<>
    <section>
        <div className="mt-18 p-5 md:p-10 flex flex-col gap-2 lg:gap-3 ">
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

        <div className="p-4 rounded-2xl flex flex-wrap gap-2 flex-col  w-full space-y-2 ">
              {options.map((item) => {
                const Icon = item.icon;

                return (
                  <a href={item.link}>
                    <div
                    key={item.id}
                    className="flex gap-4 w-auto p-4 border border-white/10 rounded-2xl"
                  >
                    <div className="w-12 h-12 rounded-xl bg-violet-500/15 flex items-center justify-center">
                      <Icon size={22} className="text-violet-400" />
                    </div>

                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.subtitle}</p>
                    </div>
                  </div>
                  </a>
                );
              })}
            </div>
      </section>
    </>)
}