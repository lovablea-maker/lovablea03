import { Users } from "lucide-react";
import { CourseLayout } from "@/components/CourseLayout";

const Advanced = () => {
  return (
    <CourseLayout
      title="高階班 - 互動流程"
      subtitle="掌握高效協作與溝通藝術"
      icon={Users}
    >
      <div className="space-y-8">
        <section>
          <div className="text-center mb-6">
            <p className="text-lg text-muted-foreground italic">如道之行，順應自然</p>
            <p className="text-muted-foreground mt-2">接納不確定性，擁抱隨機探索</p>
            <p className="text-muted-foreground">人機協作共創，達成自適應決策收斂</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">核心概念</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            在不確定性中尋找機會，透過人機協作實現智慧決策
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-3 text-foreground">擁抱不確定</h3>
              <p className="text-sm text-muted-foreground italic mb-2">如月之陰晴，接納變化本質</p>
              <p className="text-sm text-muted-foreground">將隨機性視為探索空間的一部分</p>
            </div>
            <div className="p-5 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-3 text-foreground">人機協作</h3>
              <p className="text-sm text-muted-foreground italic mb-2">似陰陽調和，優勢互補共生</p>
              <p className="text-sm text-muted-foreground">AI 的效率與人類的智慧相結合</p>
            </div>
            <div className="p-5 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-3 text-foreground">系統整合</h3>
              <p className="text-sm text-muted-foreground italic mb-2">若天地相應，全面協調運作</p>
              <p className="text-sm text-muted-foreground">整合參數、變數、亂數的完整方案</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">工具與方法</h2>
          
          <div className="space-y-4">
            <div className="p-5 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-3 text-foreground">Vibe Coding</h3>
              <p className="text-sm text-muted-foreground mb-3">自然語言驅動開發</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>自然語言轉代碼藍圖</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>UI/AI 雙向互動設計</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>即時視覺化反饋</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>降低技術門檻，加速開發</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3 italic">適合快速原型開發與創意實驗</p>
            </div>

            <div className="p-5 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-3 text-foreground">Make Grid</h3>
              <p className="text-sm text-muted-foreground mb-3">自動化全景視覺地圖</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>首次全面掌控您的自動化全景</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>自動生成的視覺化地圖</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>組織所有 Make 自動化與 AI 方案</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>幫助您快速擴展自動化規模</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3 italic">適合管理大規模自動化系統與架構視覺化</p>
            </div>

            <div className="p-5 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-3 text-foreground">Human-in-the-loop</h3>
              <p className="text-sm text-muted-foreground mb-3">人機雙向反饋系統</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>關鍵決策點人工介入</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>實時監控 AI 決策過程</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>異常處理與糾錯機制</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>累積人類智慧形成知識庫</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3 italic">適合高風險或需要倫理判斷的應用</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">人機協作框架</h2>
          <p className="text-muted-foreground mb-4">建立觸發點、回饋回路與異常處理的完整系統</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-3 text-foreground">觸發點設計</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>定義何時需要人工介入</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>設定信心度閾值</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>識別高風險決策點</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>建立分級處理機制</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-3 text-foreground">回饋回路</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>收集人類決策數據</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>分析決策偏好模式</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>優化 AI 建議品質</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>縮短決策時間</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-3 text-foreground">異常處理</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>偵測異常行為模式</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>自動暫停可疑操作</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>人工審核與糾錯</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>系統自我修正</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-3 text-foreground">知識累積</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>記錄人類決策邏輯</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>建立案例知識庫</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>提煉決策規則</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>持續系統進化</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">參數・變數・亂數 完整整合</h2>
          <p className="text-muted-foreground mb-4">從控制到理解，從識別到協作的完整決策系統</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-lg bg-muted/50 border border-border text-center">
              <div className="text-3xl mb-2">●</div>
              <h3 className="font-semibold mb-2 text-foreground">參數層</h3>
              <p className="text-sm text-muted-foreground">穩定的自動化基礎</p>
            </div>
            <div className="p-5 rounded-lg bg-muted/50 border border-border text-center">
              <div className="text-3xl mb-2">◐</div>
              <h3 className="font-semibold mb-2 text-foreground">變數層</h3>
              <p className="text-sm text-muted-foreground">智能的問題診斷</p>
            </div>
            <div className="p-5 rounded-lg bg-muted/50 border border-border text-center">
              <div className="text-3xl mb-2">○</div>
              <h3 className="font-semibold mb-2 text-foreground">亂數層</h3>
              <p className="text-sm text-muted-foreground">創新的探索協作</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">階段三：應用整合</h2>
          <p className="text-lg text-muted-foreground mb-4">Vibe Coding + Agent + Workflow</p>
          
          <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-border mb-6">
            <h3 className="font-semibold text-lg mb-3 text-foreground">突破：做你不敢做的事情</h3>
            <p className="text-muted-foreground">整合所有技術，創建完整可運作的 AI 驅動產品</p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-3 text-foreground">Vibe Coding 深度實作</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>AI 驅動新編碼模式</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>元件化編碼思維</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>快速原型實現管理</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-3 text-foreground">完整系統整合</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>前中後端整合</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>第三方平台 API 整合</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Bridge 中介運作</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-3 text-foreground">GRID 拓撲可視化</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>系統架構全景視覺</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>節點與功能視覺整合</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>可視化監控與管理</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-3 text-foreground">營運彈性設計</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>系統擴展性設計</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>智能監控與自處理能力</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>持續優化機制</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center pt-6 border-t border-border">
          <p className="text-lg text-muted-foreground italic mb-2">接納不確定，協作共創</p>
          <p className="text-muted-foreground">如道之行，順應自然</p>
        </section>
      </div>
    </CourseLayout>
  );
};

export default Advanced;
