import React from "react";
import {
  Award,
  Calendar,
  Clock,
  Edit,
  Heart,
  Mail,
  MessageSquare,
  Sparkles,
  Users,
} from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: <Mail className="h-8 w-8 text-violet-500" />,
      title: "Ibyemezo Byiza",
      description:
        "Kora ubutumire bwiza bwa digitale ukoresheje templates zishobora guhindurwa ku birori byose.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-violet-500" />,
      title: "Gahunda y'Ibikorwa",
      description:
        "Tegura ibikorwa byawe na gahunda y'igihe, urutonde rw'ibyo gukora, hamwe n'ibikoresho byo kugena igihe.",
    },
    {
      icon: <Users className="h-8 w-8 text-violet-500" />,
      title: "Igenzura rya RSVP",
      description:
        "Kurikirana ibyifuzo by'abatumirwa, amahitamo y'ibiryo, ndetse n'abakurikira ibikorwa byoroshye.",
    },
    {
      icon: <Edit className="h-8 w-8 text-violet-500" />,
      title: "Igishushanyo cyihariye",
      description:
        "Hindura buri kintu ukoresheje ibikoresho byacu byoroshye byo gushushanya hamwe na templates.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-violet-500" />,
      title: "Itumanaho ry'Abatumirwa",
      description:
        "Ohereza amakuru, kwibutsa, n'ubutumwa ku batumirwa muburyo bwa platform.",
    },
    {
      icon: <Clock className="h-8 w-8 text-violet-500" />,
      title: "Gusangiza Igihe",
      description:
        "Tegura ibikorwa byose hamwe n'amakuru ya gahunda yasangijwe hamwe no kwibutsa byikora.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-violet-500" />,
      title: "Gusangiza Amafoto",
      description:
        "Bika no gusangiza amafoto y'ibikorwa byawe mu ishusho nziza imwe.",
    },
    {
      icon: <Heart className="h-8 w-8 text-violet-500" />,
      title: "Gahunda Yubufatanye",
      description:
        "Kora hamwe n’abafatanyabikorwa na abategura ibikorwa kugira ngo ukore igikorwa cyiza.",
    },
    {
      icon: <Award className="h-8 w-8 text-violet-500" />,
      title: "Urubuga rw'Ibikorwa",
      description:
        "Buri gikorwa kigira urubuga rwayo rwihariye rufite ibisobanuro byose by'ingenzi.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ibikenewe byose ku bikorwa byiza
          </h2>
          <p className="text-lg text-gray-600">
            Uhereye ku butumire bwiza kugeza ku bikoresho byo guhuza gahunda,
            dufite byose ukeneye kugira ngo ukore ibirori byibukirwa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-violet-50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
