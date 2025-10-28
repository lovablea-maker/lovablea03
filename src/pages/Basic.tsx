import { Workflow } from "lucide-react";
import { CourseLayout } from "@/components/CourseLayout";

const Basic = () => {
  return (
    <CourseLayout
      title="基礎班 - 工作流程"
      subtitle="如水之形，隨器而變 - 建立穩定的自動化流程，掌握決策的基石"
      icon={Workflow}
    >
      <div className="space-y-8">
        {/* 主要概念 */}
        <section className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border">
          <p className="text-lg text-muted-foreground mb-2">參數是可控的、可重複的</p>
          <p className="text-foreground font-medium">建立穩定的自動化流程，掌握決策的基石</p>
        </section>

        {/* 核心概念 */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground text-center">核心概念</h2>
          <p className="text-center text-muted-foreground mb-8">
            參數控制是自動化的基礎，透過模組化設計實現可重複的穩定流程
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-muted/30 border border-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">可重複性</h3>
              <p className="text-sm text-muted-foreground mb-2 italic">如同日出日落，建立可預測的執行模式</p>
              <p className="text-muted-foreground">透過參數定義，確保每次執行都能得到一致的結果</p>
            </div>
            
            <div className="p-6 rounded-xl bg-muted/30 border border-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">模組化</h3>
              <p className="text-sm text-muted-foreground mb-2 italic">似竹節分明，清晰的結構便於管理</p>
              <p className="text-muted-foreground">將複雜流程拆解為獨立模組，提升維護效率</p>
            </div>
            
            <div className="p-6 rounded-xl bg-muted/30 border border-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">可視化</h3>
              <p className="text-sm text-muted-foreground mb-2 italic">如山石疊砌，架構一目了然</p>
              <p className="text-muted-foreground">視覺化呈現流程邏輯，降低理解門檻</p>
            </div>
          </div>
        </section>

        {/* 工具與方法 */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground text-center">工具與方法</h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-border">
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Make.com</h3>
              <p className="text-muted-foreground mb-4">視覺化自動化平台</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>拖放式介面設計，降低技術門檻</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>變數模組管理，確保資料一致性</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Router 路由器實現條件分支</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>豐富的第三方服務整合</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4 font-medium">適合建立企業級自動化工作流程</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-transparent border border-border">
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Zapier</h3>
              <p className="text-muted-foreground mb-4">跨平台自動化連接</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span>連接超過 7000 個應用程式</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span>無需編碼即可建立自動化流程</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span>多步驟工作流程設計</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span>即時觸發與排程執行</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4 font-medium">適合跨平台服務整合與日常任務自動化</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-border">
              <h3 className="text-2xl font-semibold mb-3 text-foreground">n8n</h3>
              <p className="text-muted-foreground mb-4">開源工作流程自動化</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>節點式編排，靈活組合邏輯</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>支援自訂節點開發</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>條件分支與迴圈控制</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>完整的錯誤處理機制</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4 font-medium">適合需要深度客製化的自動化場景</p>
            </div>
          </div>
        </section>

        {/* 實際應用場景 */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground text-center">實際應用場景</h2>
          <p className="text-center text-muted-foreground mb-6">
            以房產搜尋為例：參數型需求可透過傳統自動化處理
          </p>
          
          <div className="p-6 rounded-xl bg-muted/30 border border-border">
            <h3 className="text-xl font-semibold mb-4 text-foreground">參數型需求（傳統自動化可處理）</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-background/50 border border-border">
                <p className="font-semibold text-foreground mb-1">3房2廳</p>
                <p className="text-sm text-muted-foreground">有型格</p>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border">
                <p className="font-semibold text-foreground mb-1">1個車位</p>
                <p className="text-sm text-muted-foreground">重位數量</p>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border">
                <p className="font-semibold text-foreground mb-1">40坪以內</p>
                <p className="text-sm text-muted-foreground">坪數範圍</p>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border">
                <p className="font-semibold text-foreground mb-1">預算2000萬</p>
                <p className="text-sm text-muted-foreground">費用上限</p>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-border md:col-span-2">
                <p className="font-semibold text-foreground mb-1">有電梯</p>
                <p className="text-sm text-muted-foreground">設定需求</p>
              </div>
            </div>
            <p className="text-muted-foreground mt-4 text-center">
              這些需求都是明確可定義的參數，可透過自動化工具設定條件進行篩選
            </p>
          </div>
        </section>

        {/* 實踐步驟 */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground text-center">實踐步驟</h2>
          <p className="text-center text-muted-foreground mb-8">從規劃到執行的完整流程</p>
          
          <div className="space-y-4">
            {[
              { num: "01", title: "需求分析", desc: "明確自動化目標，識別重複性任務" },
              { num: "02", title: "流程設計", desc: "繪製流程圖，定義輸入輸出與轉換邏輯" },
              { num: "03", title: "參數定義", desc: "建立變數模組，確保資料結構一致性" },
              { num: "04", title: "節點編排", desc: "組合功能模組，設定條件分支與異常處理" },
              { num: "05", title: "測試優化", desc: "驗證流程穩定性，持續優化效能" }
            ].map((step) => (
              <div key={step.num} className="flex gap-4 p-4 rounded-xl bg-muted/30 border border-border">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {step.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 技術要點 */}
        <section className="p-6 rounded-xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border border-border">
          <h2 className="text-2xl font-bold mb-4 text-foreground text-center">技術要點</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            在自動化平台中，參數控制是對流程節點間資料流與條件執行的管理。
            透過變數模組定義資料一致性，Router 根據變數值決定流程分支，
            形成可重複邏輯的 decision pipeline。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-background/50 border border-border">
              <h4 className="font-semibold text-foreground mb-2">Decision Pipeline</h4>
              <p className="text-sm text-muted-foreground">建立決策管線，根據輸入參數自動選擇執行路徑</p>
            </div>
            <div className="p-4 rounded-lg bg-background/50 border border-border">
              <h4 className="font-semibold text-foreground mb-2">變數模組化</h4>
              <p className="text-sm text-muted-foreground">將資料封裝為可重用模組，提升流程靈活性</p>
            </div>
          </div>
        </section>

        {/* 階段一：自動化流程學習 */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground text-center">階段一：自動化流程學習</h2>
          <p className="text-center text-muted-foreground mb-8">Workflow Automation Learning</p>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">成長：做你沒做過的事情</h3>
              <p className="text-muted-foreground">學習建立自動化工作流程，掌握 VBMA 架構基礎</p>
            </div>

            <div className="p-6 rounded-xl bg-muted/30 border border-border">
              <h3 className="text-xl font-semibold mb-3 text-foreground">核心概念：參數處理</h3>
              <p className="text-muted-foreground">
                學習處理可重複化、可調適定義的條件，掌握固定流程與邏輯串聯的設計，建立可重複執行的標準化流程。
              </p>
            </div>

            <div className="p-6 rounded-xl bg-muted/30 border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">學習重點</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">產品設計與定義</h4>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• SaaS 產品價值定義</li>
                    <li>• 目標用戶核心痛點主張</li>
                    <li>• 產品架構與設計</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">VBMA 整合架構原理分析</h4>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• Vibe Coding：讓電腦懂的編碼方式</li>
                    <li>• Bridge 超鏈習：企業與個人整合的編成</li>
                    <li>• M8D 工作式：無窮遍歷組合自動化</li>
                    <li>• Agent 設計：AI 驅動的智能代理</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">流程設計實作</h4>
                  <ul className="space-y-1 text-muted-foreground ml-4">
                    <li>• 業務流程單鏈建立</li>
                    <li>• 自動化工作流程設計</li>
                    <li>• 流程與回饋性模優化</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 結語 */}
        <section className="text-center p-6 rounded-xl bg-gradient-to-br from-accent/5 to-primary/5 border border-border">
          <p className="text-lg text-foreground font-semibold mb-2">掌握參數，建立秩序</p>
          <p className="text-muted-foreground italic">如水之形，適應萬器</p>
        </section>
      </div>
    </CourseLayout>
  );
};

export default Basic;
