const Footer = () => {
  return (
    <footer className="gradient-teal py-6 px-4 text-white" dir="rtl">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/90">تم تحديث معلومات الاتصال</p>
          <a href="#" className="text-white hover:underline font-medium">إدارة</a>
        </div>
        <div className="text-center mt-4 pt-4 border-t border-white/20">
          <p className="text-white/80">© Al-Majd Europe 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
