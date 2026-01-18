const AboutSection = () => {
  return (
    <section id="about" className="py-12 px-4 bg-background" dir="rtl">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-primary text-center mb-2">من نحن:</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
        
        <p className="text-foreground leading-relaxed text-center mb-8">
          المجد أوروبا هي منظمة إنسانية تأسست في عام 2010 في ألمانيا. نحن متخصصون في تقديم المساعدات وجهود الإنقاذ للمجتمعات المسلمة في مناطق النزاع والحروب. جذورنا متأصلة في قيم وتراث الإسلام، ويقع مقرنا الرئيسي في القدس الشريف، أولى القبلتين وثالث الحرمين الشريفين. منذ البداية، التزمنا بدعم المجتمعات المسلمة حول العالم، حيث نعمل في عدة دول لتقديم المساعدات والإغاثة لمن هم أكثر تضررًا من ويلات الحرب والمحن. خلال العام الماضي، ركزنا جهودنا بشكل أساسي على دعم أهل غزة، مع التركيز على مساعدة الجرحى والمصابين. يشمل ذلك تسهيل وصول المرضى إلى الرعاية الطبية الحرجة، وتأمين السفر إلى الخارج للعلاج، وضمان مرافقة ذويهم لهم طوال فترة العلاج.
        </p>

        <h2 className="text-2xl font-bold text-primary text-center mb-2">خدماتنا:</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
        
        <p className="text-foreground leading-relaxed text-center mb-8">
          استمارة تسجيل بسيطة وسهلة الاستخدام ومتاحة للجميع، تتيح لك التسجيل في برنامجنا الإنساني – وهي خطواتك الأولى نحو مستقبل أكثر أمانًا لك ولأطفالك.
        </p>

        <h2 className="text-2xl font-bold text-primary text-center mb-2">وجهات السفر:</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
        
        <p className="text-foreground leading-relaxed text-center mb-8">
          تختلف الوجهات بناءً على معايير المتقدم. يقوم فريقنا المختص بتحديد الوجهة الأنسب بعد دراسة الجوانب الإنسانية واللوجستية.
        </p>

        <h2 className="text-2xl font-bold text-primary text-center mb-2">الخصوصية وحماية البيانات:</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
        
        <p className="text-foreground leading-relaxed text-center">
          نلتزم بأعلى معايير الخصوصية وأمن البيانات. يتم حفظ جميع البيانات الشخصية بغرض المراجعة الأولية واستخدامها حصرًا لأغراض إنسانية – ولا تستخدم لأي أغراض تجارية.
        </p>

        <div className="mt-8 text-center">
          <Button 
            variant="default"
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-full"
            onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
          >
            الأسئلة الشائعة
          </Button>
        </div>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";

export default AboutSection;
