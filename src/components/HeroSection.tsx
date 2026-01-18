import { Heart, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="gradient-teal py-16 px-4 text-white" dir="rtl">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
            <Heart className="h-5 w-5" />
            <span className="font-medium">الإجلاء الإنساني</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            لأهل غزة الصامدين...
            <br />
            لستم وحدكم
          </h1>
          
          <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto">
            في ظل القصف، وتحت الأنقاض، هناك من ما زال يؤمن أن الحياة تستحق فرصة أخرى. جئنا لمد يد العون، ونفتح لكم بابًا نحو الأمان.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/20 rounded-full p-3 mb-3">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">الدعم الإنساني</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                إحنا بنساعد الأفراد والعائلات على الإجلاء الآمن من مناطق الحرب والنزاع، ونضمن الكرامة والحماية طوال الطريق.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/20 rounded-full p-3 mb-3">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">فرص جديدة</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                إحنا بنوفر طرق وفرص للناس يسافروا، ويستقروا بدول آمنة، ويبنوا مستقبل مستقر.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/20 rounded-full p-3 mb-3">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">الاستقرار والراحة</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                إحنا بنساعد الناس اللي تهجروا يوصلوا للرعاية الصحية، والدعم النفسي، والخدمات الأساسية بفترة الانتقال.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-6 text-lg rounded-full"
          >
            سجل الآن للحصول على المساعدة
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
