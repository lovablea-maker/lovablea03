import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "zh-TW" | "zh-CN" | "ja" | "ko";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    welcome: "Welcome to Smart4A",
    title: "Smart4A Learning Center",
    subtitle: "Explore our carefully designed courses, from basics to advanced, to comprehensively enhance your skills and thinking",
    startJourney: "Start Learning Journey",
    specialCourses: "Special Courses",
    specialCoursesDesc: "Professional training courses for specific skills",
    workshops: "One-Day Workshops",
    workshopsDesc: "Intensive learning experience, rapidly improve abilities",
    systematic: "Systematic Courses",
    systematicDesc: "Complete learning path from basic to advanced",
    whyChoose: "Why Choose Smart4A?",
    professional: "Professional Teachers",
    professionalDesc: "Industry experts teach in person",
    practical: "Practical Oriented",
    practicalDesc: "Focus on practical application and case analysis",
    flexible: "Flexible Learning",
    flexibleDesc: "Diverse course options for different needs",
    support: "Continuous Support",
    supportDesc: "Post-class tutoring and community exchange",
    logout: "Logout",
    googleLogin: "Google Login",
  },
  "zh-TW": {
    welcome: "歡迎來到 Smart4A",
    title: "Smart4A 學習中心",
    subtitle: "探索我們精心設計的課程，從基礎到高階，全方位提升您的技能與思維",
    startJourney: "開始學習之旅",
    specialCourses: "特殊課程",
    specialCoursesDesc: "針對特定技能的專業培訓課程",
    workshops: "一日工作坊",
    workshopsDesc: "密集式學習體驗，快速提升能力",
    systematic: "系統化課程",
    systematicDesc: "從基礎到高階的完整學習路徑",
    whyChoose: "為什麼選擇 Smart4A？",
    professional: "專業師資",
    professionalDesc: "業界資深專家親自授課",
    practical: "實戰導向",
    practicalDesc: "注重實際應用與案例分析",
    flexible: "彈性學習",
    flexibleDesc: "多元課程選擇，適合不同需求",
    support: "持續支持",
    supportDesc: "課後輔導與社群交流",
    logout: "登出",
    googleLogin: "Google 登入",
  },
  "zh-CN": {
    welcome: "欢迎来到 Smart4A",
    title: "Smart4A 学习中心",
    subtitle: "探索我们精心设计的课程，从基础到高阶，全方位提升您的技能与思维",
    startJourney: "开始学习之旅",
    specialCourses: "特殊课程",
    specialCoursesDesc: "针对特定技能的专业培训课程",
    workshops: "一日工作坊",
    workshopsDesc: "密集式学习体验，快速提升能力",
    systematic: "系统化课程",
    systematicDesc: "从基础到高阶的完整学习路径",
    whyChoose: "为什么选择 Smart4A？",
    professional: "专业师资",
    professionalDesc: "业界资深专家亲自授课",
    practical: "实战导向",
    practicalDesc: "注重实际应用与案例分析",
    flexible: "弹性学习",
    flexibleDesc: "多元课程选择，适合不同需求",
    support: "持续支持",
    supportDesc: "课后辅导与社群交流",
    logout: "登出",
    googleLogin: "Google 登录",
  },
  ja: {
    welcome: "Smart4Aへようこそ",
    title: "Smart4A 学習センター",
    subtitle: "基礎から上級まで、スキルと思考を全面的に向上させる精心設計されたコースを探索",
    startJourney: "学習の旅を始める",
    specialCourses: "特別コース",
    specialCoursesDesc: "特定のスキルに対する専門トレーニングコース",
    workshops: "1日ワークショップ",
    workshopsDesc: "集中的な学習体験、能力を迅速に向上",
    systematic: "体系的コース",
    systematicDesc: "基礎から上級までの完全な学習パス",
    whyChoose: "なぜSmart4Aを選ぶのか？",
    professional: "専門講師",
    professionalDesc: "業界のベテラン専門家が直接指導",
    practical: "実践志向",
    practicalDesc: "実際の応用とケース分析に重点",
    flexible: "柔軟な学習",
    flexibleDesc: "さまざまなニーズに合わせた多様なコース",
    support: "継続的なサポート",
    supportDesc: "授業後の指導とコミュニティ交流",
    logout: "ログアウト",
    googleLogin: "Google ログイン",
  },
  ko: {
    welcome: "Smart4A에 오신 것을 환영합니다",
    title: "Smart4A 학습 센터",
    subtitle: "기초부터 고급까지, 기술과 사고를 전면적으로 향상시키는 정성스럽게 설계된 과정 탐색",
    startJourney: "학습 여행 시작",
    specialCourses: "특별 과정",
    specialCoursesDesc: "특정 기술에 대한 전문 교육 과정",
    workshops: "1일 워크샵",
    workshopsDesc: "집중적인 학습 경험, 빠른 능력 향상",
    systematic: "체계적 과정",
    systematicDesc: "기초부터 고급까지의 완전한 학습 경로",
    whyChoose: "왜 Smart4A를 선택하나요?",
    professional: "전문 강사",
    professionalDesc: "업계 베테랑 전문가가 직접 강의",
    practical: "실전 지향",
    practicalDesc: "실제 응용 및 사례 분석 중점",
    flexible: "유연한 학습",
    flexibleDesc: "다양한 요구에 맞는 다양한 과정",
    support: "지속적인 지원",
    supportDesc: "수업 후 지도 및 커뮤니티 교류",
    logout: "로그아웃",
    googleLogin: "Google 로그인",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("zh-TW");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["zh-TW"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
