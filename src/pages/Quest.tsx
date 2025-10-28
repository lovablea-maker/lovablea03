import { Compass } from "lucide-react";
import { CourseLayout } from "@/components/CourseLayout";

const Quest = () => {
  return (
    <CourseLayout
      title="一日課 - 問道求索"
      subtitle="初學者透過提問、對話，主動探索智働話之道"
      icon={Compass}
    >
      <div className="space-y-8">
        {/* 啟道之門與知行合一 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">啟道之門</h2>
            <p className="text-muted-foreground leading-relaxed">
              開啟通往協作式 AI 時代的大門
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              從這裡開始你的智働話之旅
            </p>
          </section>

          <section className="p-6 rounded-xl bg-gradient-to-br from-accent/5 to-primary/5 border border-border">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">知行合一</h2>
            <p className="text-muted-foreground leading-relaxed">
              在實踐中領悟智働話的本質
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              一日問道，終身受用
            </p>
          </section>
        </div>

        {/* 一日洞見 */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground text-center">一日洞見，終身受用</h2>
          <p className="text-center text-muted-foreground mb-8">
            我們以一日之課，為你開啟智働話的八個核心覺察：
          </p>

          <div className="space-y-6">
            {/* 前置思維 */}
            <div className="p-6 rounded-xl bg-muted/30 border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">【前置思維】</h3>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-primary">
                  <h4 className="font-semibold text-foreground mb-2">✦ 應用之道｜何處用 AI？</h4>
                  <p className="text-sm text-muted-foreground">辨識工作中 AI 可介入的場景與時機</p>
                </div>
                <div className="pl-4 border-l-2 border-primary">
                  <h4 className="font-semibold text-foreground mb-2">✦ 選擇之智｜何時用 AI？</h4>
                  <p className="text-sm text-muted-foreground">判斷任務性質，決定 AI 協作的必要性</p>
                </div>
                <div className="pl-4 border-l-2 border-primary">
                  <h4 className="font-semibold text-foreground mb-2">✦ 層次之辨｜自動化 vs 智働話？</h4>
                  <p className="text-sm text-muted-foreground">洞察兩者本質差異，選擇適切的協作模式</p>
                </div>
              </div>
            </div>

            {/* 協作能力 */}
            <div className="p-6 rounded-xl bg-muted/30 border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">【協作能力】</h3>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-accent">
                  <h4 className="font-semibold text-foreground mb-2">✦ 整合之藝｜如何與 AI 共事？</h4>
                  <p className="text-sm text-muted-foreground">讓你的工作流程與 AI 能力無縫融合</p>
                </div>
                <div className="pl-4 border-l-2 border-accent">
                  <h4 className="font-semibold text-foreground mb-2">✦ 規劃之術｜如何構思所需？</h4>
                  <p className="text-sm text-muted-foreground">從模糊想法到清晰藍圖的思維路徑</p>
                </div>
                <div className="pl-4 border-l-2 border-accent">
                  <h4 className="font-semibold text-foreground mb-2">✦ 提問之功｜如何問對問題？</h4>
                  <p className="text-sm text-muted-foreground">掌握精準提問的技巧，讓 AI 理解你的真實需求</p>
                </div>
              </div>
            </div>

            {/* 實踐技能 */}
            <div className="p-6 rounded-xl bg-muted/30 border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">【實踐技能】</h3>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-primary">
                  <h4 className="font-semibold text-foreground mb-2">✦ 流程之解｜逆向工程拆解術</h4>
                  <p className="text-sm text-muted-foreground">從終點反推起點，洞察流程背後的設計邏輯</p>
                </div>
                <div className="pl-4 border-l-2 border-primary">
                  <h4 className="font-semibold text-foreground mb-2">✦ 創造之實｜Vibe Coding 建構法</h4>
                  <p className="text-sm text-muted-foreground">用直覺式編碼方式，將想法快速轉化為可用原型</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 三段式學習旅程 */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground text-center">三段式學習旅程</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">第一段｜逆向工程：從結果看本質</h3>
              <p className="text-muted-foreground mb-3">不從技術教起，而從你想要的結果開始</p>
              <p className="text-muted-foreground mb-3">拆解工作流程 → 洞察思維流程 → 反推互動流程</p>
              <p className="text-muted-foreground font-medium">看懂流程，才能設計對話</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-transparent border border-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">第二段｜Vibe Coding：親手打造工具</h3>
              <p className="text-muted-foreground mb-3">不只學理論，更要親自建構</p>
              <p className="text-muted-foreground mb-3">用直覺式編碼方式，打造專屬工具的 UI</p>
              <p className="text-muted-foreground mb-3">規劃 → 設計 → 打磨</p>
              <p className="text-muted-foreground mb-3">讓想像具象化，讓需求成為原型</p>
              <p className="text-muted-foreground font-medium">動手做，才能真懂</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">第三段｜三元整合：掌握 AI 決策核心</h3>
              <p className="text-muted-foreground mb-2">亂數｜掌握決策介面的靈活性</p>
              <p className="text-muted-foreground mb-2">參數｜控制流程的精確度</p>
              <p className="text-muted-foreground mb-3">變數｜識別情境的動態性</p>
              <p className="text-muted-foreground mb-3">三者融會貫通，方能精準駕馭 AI</p>
              <p className="text-muted-foreground font-medium">懂得問，AI 才懂得答</p>
            </div>
          </div>
        </section>

        {/* 學習的核心 */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border border-border">
          <h2 className="text-2xl font-bold mb-4 text-foreground text-center">學習的核心：從規劃到交付</h2>
          <div className="space-y-3 text-center">
            <p className="text-muted-foreground">問對問題 → AI 協助規劃</p>
            <p className="text-muted-foreground">設計對話 → AI 幫助設計</p>
            <p className="text-muted-foreground">掌握三元 → 交付開發</p>
            <p className="text-muted-foreground mt-4">這一日，不只學會「用」AI</p>
            <p className="text-muted-foreground">更學會「與」AI 共創</p>
            <p className="text-foreground font-semibold mt-4">這是入道的起點，也是智働話的起手式 ✨</p>
          </div>
        </section>

        {/* 課程定位 */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground text-center">課程定位</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-muted/50 border border-border text-center">
              <h3 className="text-lg font-semibold mb-3 text-foreground">適合對象</h3>
              <p className="text-muted-foreground">想進入協作式 AI 時代的初學者</p>
            </div>
            <div className="p-6 rounded-xl bg-muted/50 border border-border text-center">
              <h3 className="text-lg font-semibold mb-3 text-foreground">核心價值</h3>
              <p className="text-muted-foreground">從「使用工具」進化到「共創夥伴」</p>
            </div>
            <div className="p-6 rounded-xl bg-muted/50 border border-border text-center">
              <h3 className="text-lg font-semibold mb-3 text-foreground">學習成果</h3>
              <p className="text-muted-foreground">具備智働話思維，掌握 AI 協作起手式</p>
            </div>
          </div>
          <p className="text-center text-foreground font-semibold mt-6 text-lg">一日問道，終身受用</p>
        </section>
      </div>
    </CourseLayout>
  );
};

export default Quest;
