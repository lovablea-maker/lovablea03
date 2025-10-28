import { Brain } from "lucide-react";
import { CourseLayout } from "@/components/CourseLayout";

const Intermediate = () => {
  return (
    <CourseLayout
      title="中階班 - 思維流程"
      subtitle="提升思維品質與決策能力"
      icon={Brain}
    >
      <div className="space-y-8">
        <section>
          <p className="text-lg text-muted-foreground leading-relaxed italic mb-4">
            如風之意，因勢而導
          </p>
          <p className="text-muted-foreground leading-relaxed">
            變數需要識別、理解與應對，建立智能決策系統，讀懂未知的語言
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">核心概念</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Agent 透過語義理解與推理，在變數不明的情況下建立邏輯決策
          </p>
          
          <div className="space-y-4">
            <div className="p-5 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
              <h3 className="font-semibold mb-2 text-foreground flex items-center gap-2">
                <span className="text-primary">🔍</span> 識別問題
              </h3>
              <p className="text-sm text-muted-foreground italic mb-1">如觀雲知天，洞察問題本質</p>
              <p className="text-sm text-muted-foreground">透過語義分析識別關鍵變數與潛在關聯</p>
            </div>

            <div className="p-5 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
              <h3 className="font-semibold mb-2 text-foreground flex items-center gap-2">
                <span className="text-primary">💭</span> 語義理解
              </h3>
              <p className="text-sm text-muted-foreground italic mb-1">似聽風辨向，解讀深層含義</p>
              <p className="text-sm text-muted-foreground">運用向量檢索理解上下文語境</p>
            </div>

            <div className="p-5 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
              <h3 className="font-semibold mb-2 text-foreground flex items-center gap-2">
                <span className="text-primary">🎯</span> 智能決策
              </h3>
              <p className="text-sm text-muted-foreground italic mb-1">若水知源流，推理最佳路徑</p>
              <p className="text-sm text-muted-foreground">建立思考-行動-觀察的閉環推理</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">工具與方法</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors">
              <h3 className="font-semibold mb-3 text-foreground text-lg">Dify</h3>
              <p className="text-sm text-muted-foreground mb-2">AI 應用開發平台</p>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• 可視化 RAG 管線構建</li>
                <li>• ReAct 思維鏈推理模式</li>
                <li>• 多模型支援與切換</li>
                <li>• 內建提示詞工程工具</li>
              </ul>
              <p className="text-xs text-primary mt-3">適合快速構建智能對話與決策系統</p>
            </div>

            <div className="p-5 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors">
              <h3 className="font-semibold mb-3 text-foreground text-lg">RAG</h3>
              <p className="text-sm text-muted-foreground mb-2">檢索增強生成</p>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• 向量資料庫語義檢索</li>
                <li>• 上下文相關性排序</li>
                <li>• 動態知識庫更新</li>
                <li>• 降低模型幻覺問題</li>
              </ul>
              <p className="text-xs text-primary mt-3">適合需要結合專業知識的問答系統</p>
            </div>

            <div className="p-5 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors">
              <h3 className="font-semibold mb-3 text-foreground text-lg">ReRank</h3>
              <p className="text-sm text-muted-foreground mb-2">重新排序優化</p>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• 語義相關性重新評分</li>
                <li>• 提升檢索精準度</li>
                <li>• Top-K 結果優化</li>
                <li>• 多階段檢索策略</li>
              </ul>
              <p className="text-xs text-primary mt-3">適合高精度要求的資訊檢索場景</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">ReAct 思維模式</h2>
          <p className="text-muted-foreground mb-6">Reasoning + Acting 的閉環推理框架</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-lg bg-muted/50 border-l-4 border-primary">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold text-primary">1</span>
                <h3 className="font-semibold text-foreground">思考 (Thought)</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">分析當前狀態，規劃下一步行動</p>
              <p className="text-xs italic text-muted-foreground bg-muted/30 p-2 rounded">
                「需要查詢最新的產品規格資訊」
              </p>
            </div>

            <div className="p-5 rounded-lg bg-muted/50 border-l-4 border-primary">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold text-primary">2</span>
                <h3 className="font-semibold text-foreground">行動 (Action)</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">執行具體操作，調用工具或檢索資訊</p>
              <p className="text-xs italic text-muted-foreground bg-muted/30 p-2 rounded">
                「查詢產品資料庫，檢索型號 X123」
              </p>
            </div>

            <div className="p-5 rounded-lg bg-muted/50 border-l-4 border-primary">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold text-primary">3</span>
                <h3 className="font-semibold text-foreground">觀察 (Observation)</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">接收行動結果，評估資訊充分性</p>
              <p className="text-xs italic text-muted-foreground bg-muted/30 p-2 rounded">
                「獲得規格：CPU i7, RAM 16GB...」
              </p>
            </div>

            <div className="p-5 rounded-lg bg-muted/50 border-l-4 border-primary">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold text-primary">4</span>
                <h3 className="font-semibold text-foreground">再思考</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">基於觀察結果，決定繼續或結束</p>
              <p className="text-xs italic text-muted-foreground bg-muted/30 p-2 rounded">
                「資訊完整，可以回答用戶問題」
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">實際應用場景</h2>
          <p className="text-muted-foreground mb-4">以房產搜尋為例：變數型需求需要 AI Agent 判斷</p>
          
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-muted/30 border border-border">
              <h4 className="font-semibold text-foreground mb-1">5年內有增值 📈</h4>
              <p className="text-sm text-muted-foreground">需分析發展趨勢、交通建設、人口趨勢</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30 border border-border">
              <h4 className="font-semibold text-foreground mb-1">附近好停車 🚗</h4>
              <p className="text-sm text-muted-foreground">路邊停車？巷道寬？不壅擠？不窄巷？</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30 border border-border">
              <h4 className="font-semibold text-foreground mb-1">採光通風好 ☀️</h4>
              <p className="text-sm text-muted-foreground">需判斷坐向、樓層、建道範圍、格局</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30 border border-border">
              <h4 className="font-semibold text-foreground mb-1">生活機能佳 🏪</h4>
              <p className="text-sm text-muted-foreground">距離超市、餐廳、學校語義粒度</p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4 italic">
            這些需求涉及語義理解與多維度判斷，需要 AI Agent 進行推理與決策
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">技術要點</h2>
          <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30">
            <p className="text-muted-foreground leading-relaxed mb-4">
              變數控制是 Agent 智能行為的基礎。透過初步檢索、Top-K 設定、Reranking形成思考→行動→觀察→再行動的閉環推理，在變數不明時建立邏輯結構的問題診斷層。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 rounded bg-background/50">
                <h4 className="font-semibold text-sm text-foreground mb-1">向量檢索</h4>
                <p className="text-xs text-muted-foreground">語義相似度計算，找出最相關資訊</p>
              </div>
              <div className="p-3 rounded bg-background/50">
                <h4 className="font-semibold text-sm text-foreground mb-1">閉環推理</h4>
                <p className="text-xs text-muted-foreground">持續思考-行動-觀察，直到問題解決</p>
              </div>
              <div className="p-3 rounded bg-background/50">
                <h4 className="font-semibold text-sm text-foreground mb-1">上下文管理</h4>
                <p className="text-xs text-muted-foreground">維護對話歷史，理解完整語境</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">階段二：AI Agent 設計</h2>
          <p className="text-lg font-semibold text-primary mb-4">KM + Agent</p>
          
          <div className="space-y-4 mb-6">
            <div className="p-5 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-2 text-foreground">改變：做你不願意做的事情</h3>
              <p className="text-sm text-muted-foreground">跳脫舒適圈，建構 AI 智能代理與知識管理系統</p>
            </div>

            <div className="p-5 rounded-lg bg-muted/50 border border-border">
              <h3 className="font-semibold mb-2 text-foreground">核心概念：變數判斷</h3>
              <p className="text-sm text-muted-foreground">
                學習設計 AI Agent 來處理變數判斷與邏輯決策的鑑別模型、整合知識管理系統，讓 Agent 具備推理、學習與決策能力。
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-foreground">學習重點</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-5 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
              <h4 className="font-semibold mb-3 text-foreground">知識管理系統 (KM)</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>RAG 技術運用</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>智能搜尋與索引系統</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>數據庫連通與優化</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
              <h4 className="font-semibold mb-3 text-foreground">Agent 智能代理設計</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>AI Agent 架構設計</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>多 Agent 活化機制</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>決策邏輯與行為設計</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
              <h4 className="font-semibold mb-3 text-foreground">資料與權限架構</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>結構化與語意化資料模型</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>角色權限與資安控管</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>企業政策安全設計</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>OpenAI Agent builder (SDK) 整合運用</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <a 
              href="https://make.fan/workshop/%e4%b8%ad%e9%9a%8eworkshop/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
            >
              課程詳細說明
            </a>
            <a 
              href="https://form.jotform.com/251371125587458/prefill/68c8ff7a61663707aec22e2c539c"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-semibold"
            >
              立即報名
            </a>
          </div>
        </section>

        <section className="text-center py-6">
          <p className="text-lg text-muted-foreground italic">識別變數，理解語義</p>
          <p className="text-lg text-muted-foreground italic">如風之意，因勢導航</p>
        </section>
      </div>
    </CourseLayout>
  );
};

export default Intermediate;
