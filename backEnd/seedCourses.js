const Course = require("./models/coursesModel.js");
const Student = require("./models/studentModel.js");
const User = require("./models/userModel.js");

const seedCourses = async () => {
  const existingCourses = await Course.find();
  if (existingCourses.length > 0) {
    console.log("Courses already exist, skipping seeding.");
    return;
  }

  //Only if we want to manipulate or completely change the Course data stored in data base we are going to run the following line (just once)
  //await Course.deleteMany();
  //await User.deleteMany();
  //await Student.deleteMany();

  await Course.insertMany([
    {
      title: "3D Max",
      description:
        "اتودسک تری‌دی‌مکس یکی از قوی‌ترین و پیشرفته‌ترین برنامه‌ها در زمینه‌ی طراحی سه بعدی و انیمیشن‌سازی بشمار می‌رود. این نرم‌افزار به خاطر داشتن ابزارهای کارا و قدرتمند در بسیاری از صنایع به ویژه بازی‌های رایانه‌ای و طراحی و خلق جلوه‌های ویژه در فیلم‌ها بسیار پرکاربرد است. مهندسان می‌توانند به راحتی طراحی‌های خود در محیط اتوکد را وارد این برنامه کرده و نمای سه بعدی طرح خود را ایجاد کنند و با چاپ آن، نمای کلی طرح خود را قبل از اجرا به مشتریان خود ارایه دهند",
    },
    {
      title: "AutoCad",
      description:
        "اتودسک اتوکد نرم‌افزاریست که برای ترسیم نقشه‌های مهندسی و صنعتی بکار می‌رود. مهندسان نقشه‌کشی و عمران این ابزار را بسیار بهتر از افراد معمولی می‌شناسند. کاربران اتوکد امکان استفاده از محیط‌های سه بعدی و دو بعدی را دارند. در همه جای جهان اگر قرار باشد نقشه‌ای کشیده شود، معمولا همه آن را با اتوکد ترسیم خواهند کرد. سهولت کار با ابزار اتوکد و سبک بودن این نرم‌افزار، آن را در میان محبوب‌ترین برنامه‌های نقشه‌کشی در میان مهندسین قرار داده است",
    },
    {
      title: "SketchUp",
      description:
        "نرم‌افزار اسکچ‌آپ یک نرم‌افزار مدل‌سازی پیشرفته‌ی سه بعدی و بهینه‌سازی برای طیف وسیعی از نرم‌افزارهای معماری، عمران، مکانیک و حتی طراحی کاراکترهای بازی‌های کامپیوتری است. این نرم‌افزار مجموعه‌ای از ابزارهای حرفه‌ای و قدرتمند را برای شما آماده کرده تا توسط این ابزار قادر باشید انواع مدل‌های سه بعدی را طراحی کنید. توسط این برنامه شما می‌توانید مدل‌های مورد نظر خود را از ابتدا طراحی کرده و یا با استفاده از طرح‌هایی که به صورت آماده قرار دارند طراحی کنید",
    },
  ]);

  console.log("Courses seeded successfully.");
};

module.exports = seedCourses;
