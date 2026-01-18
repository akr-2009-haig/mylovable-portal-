import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AnnouncementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AnnouncementModal = ({ isOpen, onClose }: AnnouncementModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto max-h-[90vh] overflow-y-auto" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-primary text-center flex items-center justify-center gap-2">
            <span>📢</span>
            تنويه هام بخصوص التنسيق ودفع الرسوم
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 text-right">
          <p className="font-semibold text-foreground">أعزاؤنا الكرام،</p>
          
          <p className="text-muted-foreground leading-relaxed">
            لضمان سير إجراءات التنسيق بشكل صحيح وسليم، نرجو العلم بأن التواصل الرسمي لدفع الرسوم سيكون فقط عبر الأرقام التالية:
          </p>

          <div className="bg-card rounded-lg p-4 space-y-4">
            <div className="flex items-center justify-end gap-2">
              <div className="text-right">
                <p className="font-semibold text-foreground">الأستاذ مؤيد:</p>
                <a href="tel:+972555076916" className="text-primary font-bold text-lg hover:underline" dir="ltr">
                  +972555076916
                </a>
              </div>
              <Phone className="h-5 w-5 text-muted-foreground" />
            </div>

            <div className="flex items-center justify-end gap-2">
              <div className="text-right">
                <p className="font-semibold text-foreground">الأستاذ عمر:</p>
                <a href="tel:+972553319414" className="text-primary font-bold text-lg hover:underline" dir="ltr">
                  +972553319414
                </a>
              </div>
              <Phone className="h-5 w-5 text-muted-foreground" />
            </div>

            <div className="flex items-center justify-end gap-2">
              <div className="text-right">
                <p className="font-semibold text-foreground">رقم المؤسسة المعتمد لتأكيد التنسيق واستقبال إشعار الدفع:</p>
                <a href="tel:+972555076916" className="text-primary font-bold text-lg hover:underline block" dir="ltr">
                  +972555076916
                </a>
                <a href="tel:+972553319414" className="text-primary font-bold text-lg hover:underline block" dir="ltr">
                  +972553319414
                </a>
              </div>
              <Phone className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          <p className="text-destructive font-semibold text-center leading-relaxed">
            يرجى عدم التعامل مع أي أرقام أخرى تمامًا، وأي إشعار دفع يجب إرساله حصريًا إلى الرقم المذكور أعلاه لضمان تثبيت تنسيقكم بشكل صحيح.
          </p>

          <div className="border-t border-border pt-4 text-center space-y-1">
            <p className="text-foreground">شكرًا لكم تعاونكم وثقتكم.</p>
            <p className="text-foreground">مع المحبة والتقدير</p>
            <p className="font-semibold text-foreground">مؤسسة المجد للإغاثة الإنسانية</p>
          </div>

          <Button 
            onClick={onClose} 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            إغلاق
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementModal;
