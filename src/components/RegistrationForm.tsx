import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const countries = [
  { code: "GB", name: "بريطانيا", flag: "🇬🇧" },
  { code: "BE", name: "بلجيكا", flag: "🇧🇪" },
  { code: "ZA", name: "جنوب افريقيا", flag: "🇿🇦" },
  { code: "ES", name: "اسبانيا", flag: "🇪🇸" },
  { code: "ID", name: "اندونيسيا", flag: "🇮🇩" },
  { code: "IT", name: "ايطاليا", flag: "🇮🇹" },
  { code: "DE", name: "المانيا", flag: "🇩🇪" },
  { code: "FR", name: "فرنسا", flag: "🇫🇷" },
  { code: "MY", name: "ماليزيا", flag: "🇲🇾" },
  { code: "CA", name: "كندا", flag: "🇨🇦" },
  { code: "CH", name: "سويسرا", flag: "🇨🇭" },
  { code: "NL", name: "هولندا", flag: "🇳🇱" },
  { code: "AU", name: "استراليا", flag: "🇦🇺" },
];

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    idNumber: "",
    birthDate: "",
    phone: "",
    email: "",
    hasPassport: "",
    destination: "",
    previousRegistration: "",
    previousRegistrationTime: "",
    reRegistrationReason: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [notRobot, setNotRobot] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!notRobot) {
      toast.error("يرجى تأكيد أنك لست روبوت");
      return;
    }

    if (!formData.fullName || !formData.gender || !formData.phone) {
      toast.error("يرجى تعبئة جميع الحقول المطلوبة");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("تم إرسال طلبك بنجاح! سيتم التواصل معك قريبًا.");
    setIsSubmitting(false);
  };

  return (
    <section id="register" className="py-12 px-4 bg-background" dir="rtl">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8 text-center">
          <p className="text-destructive font-semibold">
            الخدمة التي نقدمها متاحة فقط لسكان غزة الموجودين داخل قطاع غزة فقط!
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primary text-center mb-2">
          هل تطمح للسفر وبداية حياة جديدة؟ نحن هنا لمساعدتك!
        </h2>

        <div className="bg-card rounded-xl p-6 mt-8 shadow-sm">
          <h3 className="text-xl font-bold text-foreground text-center mb-6">المعلومات الأساسية</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="fullName" className="text-foreground font-medium">الاسم الكامل:</Label>
              <Input
                id="fullName"
                placeholder="اكتب اسمك الرباعي"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="mt-2 bg-input"
              />
            </div>

            <div>
              <Label className="text-foreground font-medium">
                الجنس: <span className="text-destructive">*</span>
              </Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(value) => setFormData({ ...formData, gender: value })}
                className="flex gap-6 mt-2 justify-end"
              >
                <div className="flex items-center gap-2">
                  <Label htmlFor="male" className="cursor-pointer">ذكر</Label>
                  <RadioGroupItem value="male" id="male" />
                </div>
                <div className="flex items-center gap-2">
                  <Label htmlFor="female" className="cursor-pointer">أنثى</Label>
                  <RadioGroupItem value="female" id="female" />
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="idNumber" className="text-foreground font-medium">رقم الهوية:</Label>
              <Input
                id="idNumber"
                placeholder="رقم الهوية"
                value={formData.idNumber}
                onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                className="mt-2 bg-input"
              />
            </div>

            <div>
              <Label htmlFor="birthDate" className="text-foreground font-medium">تاريخ الميلاد:</Label>
              <Input
                id="birthDate"
                type="date"
                placeholder="اختر تاريخ الميلاد"
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                className="mt-2 bg-input"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-foreground font-medium">رقم الهاتف:</Label>
              <Input
                id="phone"
                placeholder="رقم الهاتف للتواصل"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-2 bg-input"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground font-medium">البريد الإلكتروني:</Label>
              <Input
                id="email"
                type="email"
                placeholder="عنوان البريد الإلكتروني"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2 bg-input"
              />
            </div>

            <div>
              <Label className="text-foreground font-medium">هل يوجد جواز سفر؟</Label>
              <Select
                value={formData.hasPassport}
                onValueChange={(value) => setFormData({ ...formData, hasPassport: value })}
              >
                <SelectTrigger className="mt-2 bg-input">
                  <SelectValue placeholder="اختر..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">نعم</SelectItem>
                  <SelectItem value="no">لا</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-foreground font-medium">الوجهة المفضلة للسفر:</Label>
              <Select
                value={formData.destination}
                onValueChange={(value) => setFormData({ ...formData, destination: value })}
              >
                <SelectTrigger className="mt-2 bg-input">
                  <SelectValue placeholder="اختر الوجهة..." />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      <span className="flex items-center gap-2">
                        <span>{country.flag}</span>
                        <span>{country.name}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-foreground font-medium">إرفاق صورة:</Label>
              <div className="mt-2">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                  className="bg-input"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                يرجى إرفاق صورة جواز السفر، أو بطاقة الهوية في حال عدم توفر صورة الجواز.
              </p>
            </div>

            <p className="text-foreground text-center">
              يمكنكم أيضًا إضافة أفراد العائلة ضمن الاستمارة.{" "}
              <a href="#" className="text-primary underline font-medium">اضغط هنا</a>
            </p>

            {/* Previous Registration Section */}
            <div className="border-t border-border pt-6">
              <Label className="text-foreground font-medium">
                هل سبق وقدمت طلب تسجيل عبر موقعنا؟ <span className="text-destructive">*</span>
              </Label>
              <RadioGroup
                value={formData.previousRegistration}
                onValueChange={(value) => setFormData({ ...formData, previousRegistration: value })}
                className="flex gap-6 mt-2 justify-end"
              >
                <div className="flex items-center gap-2">
                  <Label htmlFor="prev-no" className="cursor-pointer">لا</Label>
                  <RadioGroupItem value="no" id="prev-no" />
                </div>
                <div className="flex items-center gap-2">
                  <Label htmlFor="prev-yes" className="cursor-pointer">نعم</Label>
                  <RadioGroupItem value="yes" id="prev-yes" />
                </div>
              </RadioGroup>
            </div>

            {formData.previousRegistration === "yes" && (
              <>
                <div>
                  <Label className="text-foreground font-medium">إذا نعم: متى كان تقريبًا؟</Label>
                  <RadioGroup
                    value={formData.previousRegistrationTime}
                    onValueChange={(value) => setFormData({ ...formData, previousRegistrationTime: value })}
                    className="flex flex-wrap gap-4 mt-2 justify-end"
                  >
                    <div className="flex items-center gap-2">
                      <Label htmlFor="time-week" className="cursor-pointer text-sm">خلال أسبوع</Label>
                      <RadioGroupItem value="week" id="time-week" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Label htmlFor="time-month" className="cursor-pointer text-sm">خلال شهر</Label>
                      <RadioGroupItem value="month" id="time-month" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Label htmlFor="time-long" className="cursor-pointer text-sm">قبل فترة طويلة</Label>
                      <RadioGroupItem value="long" id="time-long" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Label htmlFor="time-unknown" className="cursor-pointer text-sm">لا أتذكر</Label>
                      <RadioGroupItem value="unknown" id="time-unknown" />
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-foreground font-medium">سبب إعادة التسجيل (اختياري):</Label>
                  <RadioGroup
                    value={formData.reRegistrationReason}
                    onValueChange={(value) => setFormData({ ...formData, reRegistrationReason: value })}
                    className="flex flex-wrap gap-4 mt-2 justify-end"
                  >
                    <div className="flex items-center gap-2">
                      <Label htmlFor="reason-update" className="cursor-pointer text-sm">تحديث بياناتي</Label>
                      <RadioGroupItem value="update" id="reason-update" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Label htmlFor="reason-nocontact" className="cursor-pointer text-sm">لم يتم التواصل معي سابقًا</Label>
                      <RadioGroupItem value="nocontact" id="reason-nocontact" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Label htmlFor="reason-phone" className="cursor-pointer text-sm">تعديل رقم الهاتف/الواتساب</Label>
                      <RadioGroupItem value="phone" id="reason-phone" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Label htmlFor="reason-other" className="cursor-pointer text-sm">سبب آخر</Label>
                      <RadioGroupItem value="other" id="reason-other" />
                    </div>
                  </RadioGroup>
                </div>
              </>
            )}

            {/* Not a Robot Checkbox */}
            <div className="flex items-center justify-between bg-card border border-border rounded-lg p-4">
              <a href="#" className="text-sm text-muted-foreground hover:underline">
                الخصوصية – البنود
              </a>
              <div className="flex items-center gap-3">
                <span className="text-foreground font-medium">أنا لست برنامج روبوت</span>
                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="h-8 w-8" />
                <Checkbox
                  id="notRobot"
                  checked={notRobot}
                  onCheckedChange={(checked) => setNotRobot(checked === true)}
                  className="h-6 w-6"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg"
            >
              {isSubmitting ? "جاري الإرسال..." : "إرسال"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
